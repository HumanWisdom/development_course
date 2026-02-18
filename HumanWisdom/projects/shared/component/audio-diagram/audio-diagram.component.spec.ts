import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AudioDiagramComponent } from './audio-diagram.component';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-audio-player',
    template: '<audio #audio></audio>'
})
class MockAudioPlayerComponent {
    @ViewChild('audio') audio: ElementRef;
}

describe('AudioDiagramComponent', () => {
    let component: AudioDiagramComponent;
    let fixture: ComponentFixture<AudioDiagramComponent>;
    let mockRouter: any;
    let mockActivatedRoute: any;
    let mockAdultsService: any;
    let mockCaptureService: any;

    beforeEach(async () => {
        mockRouter = {
            url: '/adults/some-path/s123',
            navigate: jasmine.createSpy('navigate')
        };
        mockActivatedRoute = {
            queryParams: of({ t: 'some-token' })
        };
        mockAdultsService = jasmine.createSpyObj('AdultsService', ['submitProgressText']);
        mockCaptureService = jasmine.createSpyObj('NgxCaptureService', ['getImage']);

        // Mock localStorage - Initializers run before ngOnInit
        const loginResponse = { Subscriber: 0 };
        const mediaPercent = 50;
        const freeScreens = [10, 11, 12];

        spyOn(localStorage, 'getItem').and.callFake((key) => {
            if (key === 'loginResponse') return JSON.stringify(loginResponse);
            if (key === 'mediaPercent') return JSON.stringify(mediaPercent);
            if (key === 'freeScreens') return JSON.stringify(freeScreens);
            return null;
        });

        await TestBed.configureTestingModule({
            declarations: [AudioDiagramComponent, MockAudioPlayerComponent],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: AdultsService, useValue: mockAdultsService },
                { provide: NgxCaptureService, useValue: mockCaptureService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AudioDiagramComponent);
        component = fixture.componentInstance;

        // Mock audio ViewChild (AudioPlayerComponent instance)
        const mockAudioElement = {
            duration: 100,
            currentTime: 0,
            pause: jasmine.createSpy('pause'),
            onplaying: null
        };

        // this.audio is the component instance, which has an 'audio' property (ElementRef)
        component.audio = {
            audio: { nativeElement: mockAudioElement }
        };
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should initialize inputs', () => {
        component.title = 'Test Title';
        component.imageLink = 'http://test.com/img.jpg';
        component.audioLink = 'http://test.com/audio.mp3';
        component.bg = 'red';

        expect(component.title).toBe('Test Title');
        expect(component.imageLink).toBe('http://test.com/img.jpg');
        expect(component.audioLink).toBe('http://test.com/audio.mp3');
        expect(component.bg).toBe('red');
    });

    describe('ngOnInit', () => {
        it('should setup interval for non-subscriber on paid screen', fakeAsync(() => {
            // s123 is paid (not in [10, 11, 12])
            fixture.detectChanges();

            expect(component.scrId).toBe('123');
            expect(component.interval).toBeDefined();

            clearInterval(component.interval);
        }));

        it('should NOT setup interval for free screen', () => {
            mockRouter.url = '/adults/some-path/s10';
            fixture = TestBed.createComponent(AudioDiagramComponent);
            component = fixture.componentInstance;

            // Mock audio here too
            component.audio = {
                audio: {
                    nativeElement: {
                        duration: 100,
                        currentTime: 0,
                        pause: jasmine.createSpy('pause'),
                        onplaying: null
                    }
                }
            };

            fixture.detectChanges();

            expect(component.scrId).toBe('10');
            expect(component.interval).toBeUndefined();
        });
    });

    describe('Functionality', () => {
        let mockAudioElement: any;

        beforeEach(() => {
            // First detectChanges to initialize component and resolve ViewChild
            fixture.detectChanges();

            // Retrieve the real element created by Angular for the mock component
            mockAudioElement = component.audio.audio.nativeElement;

            // Setup spies and properties on the real element
            // Since we can't easily write to read-only properties like duration/currentTime in some envs,
            // we define them as writable properties or just rely on them being writable on the mock audio tag in JSDOM-like env.
            // If strict, we might need Object.defineProperty.
            Object.defineProperty(mockAudioElement, 'duration', { value: 100, writable: true });
            Object.defineProperty(mockAudioElement, 'currentTime', { value: 0, writable: true });

            spyOn(mockAudioElement, 'pause');
        });

        it('checkPauseTime should pause if limit reached', () => {
            mockAudioElement.currentTime = 51; // 50% of 100 is 50

            component.checkPauseTime();

            expect(component.reachedLimit).toBeTrue();
            expect(mockAudioElement.pause).toHaveBeenCalled();
            expect(component.enableAlert).toBeTrue();
        });

        it('checkPauseTime should NOT pause if limit NOT reached', () => {
            mockAudioElement.currentTime = 40;

            component.checkPauseTime();

            expect(component.reachedLimit).toBeFalse();
            expect(mockAudioElement.pause).not.toHaveBeenCalled();
        });

        it('getTime should emit current time', () => {
            spyOn(component.sendAvDuration, 'emit');
            mockAudioElement.currentTime = 30.5;

            component.getTime();

            // Component uses JSON.parse for emission, so it's a number
            expect(component.sendAvDuration.emit).toHaveBeenCalledWith(30.5 as any);
        });

        it('ngAfterViewInit should attach onplaying handler which adheres to limits', () => {
            // ngAfterViewInit already ran in beforeEach via detectChanges
            expect(mockAudioElement.onplaying).toBeDefined();

            // Simulate playback when limit reached
            component.reachedLimit = true;
            if (typeof mockAudioElement.onplaying === 'function') {
                (mockAudioElement.onplaying as Function)({});
            }

            expect(mockAudioElement.pause).toHaveBeenCalled();
            expect(component.enableAlert).toBeTrue();
        });

        it('getAlertcloseEvent should close alert', () => {
            component.enableAlert = true;
            component.getAlertcloseEvent(null);
            expect(component.enableAlert).toBeFalse();
        });

        it('ngOnDestroy should clear interval', () => {
            component.interval = setInterval(() => { }, 1000);
            spyOn(window, 'clearInterval').and.callThrough();
            component.ngOnDestroy();
            expect(window.clearInterval).toHaveBeenCalledWith(component.interval);
        });

    });
});
