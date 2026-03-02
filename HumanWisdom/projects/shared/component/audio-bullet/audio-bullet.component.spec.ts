import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { AudioBulletComponent } from './audio-bullet.component';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { SharedService } from '../../services/shared.service'; // Adjust path if needed
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';

describe('AudioBulletComponent', () => {
    let component: AudioBulletComponent;
    let fixture: ComponentFixture<AudioBulletComponent>;
    let mockRouter: any;
    let mockActivatedRoute: any;
    let mockCaptureService: any;
    let mockAdultsService: any;

    beforeEach(async () => {
        mockRouter = {
            url: '/adults/some-path/s123',
            navigate: jasmine.createSpy('navigate')
        };

        mockActivatedRoute = {
            queryParams: of({ t: 'some-token' })
        };

        mockCaptureService = jasmine.createSpyObj('NgxCaptureService', ['getImage']);
        mockAdultsService = jasmine.createSpyObj('AdultsService', ['submitProgressText']);

        // Mock static method SharedService.isAdultProgram
        // Assuming SharedService is a class with static method
        spyOn(SharedService, 'isAdultProgram').and.returnValue(true);

        await TestBed.configureTestingModule({
            declarations: [AudioBulletComponent],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: NgxCaptureService, useValue: mockCaptureService },
                { provide: AdultsService, useValue: mockAdultsService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        // Setup localStorage mock data needed for component initialization
        // Property initializers run before ngOnInit
        const loginResponse = { Subscriber: 0 };
        const mediaPercent = 50;
        const freeScreens = [10, 11, 12];

        spyOn(localStorage, 'getItem').and.callFake((key) => {
            if (key === 'loginResponse') return JSON.stringify(loginResponse);
            if (key === 'mediaPercent') return JSON.stringify(mediaPercent);
            if (key === 'freeScreens') return JSON.stringify(freeScreens);
            return null;
        });

        fixture = TestBed.createComponent(AudioBulletComponent);
        component = fixture.componentInstance;
        // Don't call fixture.detectChanges() automatically here if we want to test ngOnInit separately
        // But since property initializers run on constructor, we are mostly safe.
        // However, ngOnInit runs on detectChanges.
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('should initialize correct values and start interval for non-subscriber on non-free screen', fakeAsync(() => {
            // Setup for non-access
            component.scrId = '123'; // Logic in ngOnInit re-parses router url usually
            // But let's verify logic inside ngOnInit

            fixture.detectChanges(); // Calls ngOnInit

            expect(component.isAdults).toBeTrue();
            expect(component.mediaPercent).toBe(50);
            expect(component.freeScreens).toEqual([10, 11, 12]);
            expect(component.scrId).toBe('123'); // from mockRouter url '/adults/some-path/s123' -> 123

            // Since loginResponse.Subscriber is 0 and s123 is not in freeScreens, interval should start
            expect(component.interval).toBeDefined();

            // Clear interval to avoid lingering
            clearInterval(component.interval);
        }));

        it('should NOT start interval for subscriber', () => {
            // Re-mock localStorage for this test specifically?
            // Property initializers ran in beforeEach.
            // We need to re-create component to test different loginResponse
            (localStorage.getItem as jasmine.Spy).and.callFake((key) => {
                if (key === 'loginResponse') return JSON.stringify({ Subscriber: 1 });
                if (key === 'mediaPercent') return JSON.stringify(50);
                if (key === 'freeScreens') return JSON.stringify([10]);
                return null;
            });

            fixture = TestBed.createComponent(AudioBulletComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();

            expect(component.interval).toBeUndefined();
        });

        it('should NOT start interval for free screen', () => {
            // Change router url to a free screen
            mockRouter.url = '/adults/some-path/s10';

            fixture = TestBed.createComponent(AudioBulletComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();

            expect(component.scrId).toBe('10');
            expect(component.interval).toBeUndefined();
        });
    });

    describe('setAudioControlsBackground', () => {
        it('should append style to document head', () => {
            spyOn(document, 'createElement').and.callThrough();
            spyOn(document.head, 'appendChild').and.callThrough();

            component.setAudioControlsBackground();

            expect(document.createElement).toHaveBeenCalledWith('style');
            expect(document.head.appendChild).toHaveBeenCalled();
        });
    });

    describe('getTime', () => {
        it('should emit current time', () => {
            spyOn(component.sendAvDuration, 'emit');
            component.audio = {
                audio: {
                    nativeElement: { currentTime: 10.5 }
                }
            };

            component.getTime();

            expect(component.sendAvDuration.emit).toHaveBeenCalledWith(10.5 as any);
        });
    });

    describe('checkPauseTime', () => {
        let mockAudioElement: any;

        beforeEach(() => {
            mockAudioElement = {
                duration: 100,
                currentTime: 0,
                pause: jasmine.createSpy('pause')
            };
            spyOn(document, 'getElementById').and.returnValue(mockAudioElement);
            component.mediaPercent = 50; // 50% of 100 = 50s
        });

        it('should NOT limit if current time is less than pause time', () => {
            mockAudioElement.currentTime = 10;
            component.checkPauseTime();
            expect(component.reachedLimit).toBeFalse();
            expect(mockAudioElement.pause).not.toHaveBeenCalled();
        });

        it('should limit if current time is greater than pause time', () => {
            mockAudioElement.currentTime = 51;
            component.checkPauseTime();
            expect(component.reachedLimit).toBeTrue();
            expect(mockAudioElement.pause).toHaveBeenCalled();
            expect(component.enableAlert).toBeTrue();
        });
    });

    describe('ngOnDestroy', () => {
        it('should clear interval', () => {
            component.interval = setInterval(() => { }, 1000);
            spyOn(window, 'clearInterval').and.callThrough();
            component.ngOnDestroy();
            expect(window.clearInterval).toHaveBeenCalledWith(component.interval);
        });
    });

    describe('ngAfterViewInit', () => {
        it('should attach onplaying handler', () => {
            const mockNativeElement = {
                onplaying: undefined,
                pause: jasmine.createSpy('pause')
            };
            component.audio = { nativeElement: mockNativeElement };

            component.ngAfterViewInit();
            expect(mockNativeElement.onplaying).toBeDefined();

            // Trigger onplaying
            component.reachedLimit = true;
            if (typeof mockNativeElement.onplaying === 'function') {
                (mockNativeElement.onplaying as Function)({});
            }

            expect(mockNativeElement.pause).toHaveBeenCalled();
            expect(component.enableAlert).toBeTrue();
        });
    });

    describe('getAlertcloseEvent', () => {
        it('should set enableAlert to false', () => {
            component.enableAlert = true;
            component.getAlertcloseEvent(null);
            expect(component.enableAlert).toBeFalse();
        });
    });

});
