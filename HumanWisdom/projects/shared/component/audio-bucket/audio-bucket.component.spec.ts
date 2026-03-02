import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AudioBucketComponent } from './audio-bucket.component';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { NgxCaptureService } from 'ngx-capture';

describe('AudioBucketComponent', () => {
    let component: AudioBucketComponent;
    let fixture: ComponentFixture<AudioBucketComponent>;
    let mockRouter: jasmine.SpyObj<Router>;
    let mockActivatedRoute: any;
    let mockAdultsService: jasmine.SpyObj<AdultsService>;
    let mockCaptureService: jasmine.SpyObj<NgxCaptureService>;

    // Mock data
    const mockLoginResponse = {
        UserId: 'user123',
        Subscriber: 1,
        Email: 'test@example.com'
    };

    const mockNonSubscriberResponse = {
        UserId: 'user456',
        Subscriber: 0,
        Email: 'nonsubscriber@example.com'
    };

    const mockFreeScreens = [101, 102, 103];
    const mockMediaPercent = 50;

    beforeEach(async () => {
        // Create spy objects
        mockRouter = jasmine.createSpyObj('Router', ['navigate'], { url: '/adults/path/s12345' });
        mockActivatedRoute = {
            queryParams: of({ t: '100' })
        };
        mockAdultsService = jasmine.createSpyObj('AdultsService', ['getScreenData']);
        mockCaptureService = jasmine.createSpyObj('NgxCaptureService', ['getImage']);

        await TestBed.configureTestingModule({
            declarations: [AudioBucketComponent],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: AdultsService, useValue: mockAdultsService },
                { provide: NgxCaptureService, useValue: mockCaptureService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        // Clear localStorage before each test
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
        if (fixture) {
            fixture.destroy();
        }
    });

    describe('Component Initialization', () => {
        beforeEach(() => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));
        });

        it('should create the component', () => {
            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            expect(component).toBeTruthy();
        });

        it('should have default property values', () => {
            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            expect(component.yellow).toBe('#FFC455');
            expect(component.reachedLimit).toBe(false);
            expect(component.enableAlert).toBe(false);
        });

        it('should initialize with query parameter t', () => {
            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            expect(component.t).toBe('100');
        });

        it('should load loginResponse from localStorage', () => {
            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            expect(component.loginResponse).toEqual(mockLoginResponse);
        });

        it('should load freeScreens from localStorage', () => {
            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            expect(component.freeScreens).toEqual(mockFreeScreens);
        });

        it('should load mediaPercent from localStorage', () => {
            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            expect(component.mediaPercent).toBe(mockMediaPercent);
        });
    });

    describe('Input Properties', () => {
        beforeEach(() => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
        });

        it('should accept bg input', () => {
            component.bg = 'blue-gradient';

            expect(component.bg).toBe('blue-gradient');
        });

        it('should accept title input', () => {
            component.title = 'Meditation Audio';

            expect(component.title).toBe('Meditation Audio');
        });

        it('should accept audioLink input', () => {
            const audioUrl = 'https://example.com/audio.mp3';
            component.audioLink = audioUrl;

            expect(component.audioLink).toBe(audioUrl);
        });
    });

    describe('ngOnInit()', () => {
        it('should extract screen ID from router URL', () => {
            Object.defineProperty(mockRouter, 'url', { value: '/adults/path/s12345', configurable: true });
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
            spyOn(console, 'log');

            component.ngOnInit();

            expect(component.scrId).toBe('12345');
            expect(console.log).toHaveBeenCalledWith('str', '12345', 'id', '12345');
        });

        it('should not set interval for subscribers', () => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            component.ngOnInit();

            expect(component.interval).toBeUndefined();
        });

        it('should not set interval for free screens even if non-subscriber', () => {
            Object.defineProperty(mockRouter, 'url', { value: '/adults/path/s101', configurable: true });
            localStorage.setItem('loginResponse', JSON.stringify(mockNonSubscriberResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            component.ngOnInit();

            expect(component.interval).toBeUndefined();
        });

        it('should set interval for non-subscribers on paid screens', fakeAsync(() => {
            Object.defineProperty(mockRouter, 'url', { value: '/adults/path/s999', configurable: true });
            localStorage.setItem('loginResponse', JSON.stringify(mockNonSubscriberResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
            spyOn(component, 'checkPauseTime');

            component.ngOnInit();
            tick(1000);

            expect(component.interval).toBeDefined();
            expect(component.checkPauseTime).toHaveBeenCalled();

            clearInterval(component.interval);
        }));
    });

    describe('getTime()', () => {
        beforeEach(() => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
        });

        it('should emit current audio time', () => {
            const mockAudioElement = {
                nativeElement: {
                    currentTime: 45.5
                }
            };
            component.audio = { audio: mockAudioElement } as any;
            spyOn(component.sendAvDuration, 'emit');

            component.getTime();

            expect(component.sendAvDuration.emit).toHaveBeenCalledWith(45.5 as any);
        });

        it('should parse audio time as number', () => {
            const mockAudioElement = {
                nativeElement: {
                    currentTime: '30.25'
                }
            };
            component.audio = { audio: mockAudioElement } as any;
            spyOn(component.sendAvDuration, 'emit');

            component.getTime();

            expect(component.sendAvDuration.emit).toHaveBeenCalledWith(30.25 as any);
        });
    });

    describe('checkPauseTime()', () => {
        beforeEach(() => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
        });

        it('should calculate pause time based on mediaPercent', () => {
            const mockAudioElement = document.createElement('audio');
            mockAudioElement.id = 'aud1';
            Object.defineProperty(mockAudioElement, 'duration', { value: 100, writable: true });
            Object.defineProperty(mockAudioElement, 'currentTime', { value: 30, writable: true });
            spyOn(document, 'getElementById').and.returnValue(mockAudioElement);

            component.checkPauseTime();

            expect(component.pauseTime).toBe(50); // 50% of 100 seconds
        });

        it('should pause audio when limit is reached', () => {
            const mockAudioElement = document.createElement('audio');
            mockAudioElement.id = 'aud1';
            Object.defineProperty(mockAudioElement, 'duration', { value: 100, writable: true });
            Object.defineProperty(mockAudioElement, 'currentTime', { value: 60, writable: true });
            spyOn(mockAudioElement, 'pause');
            spyOn(document, 'getElementById').and.returnValue(mockAudioElement);

            component.checkPauseTime();

            expect(component.reachedLimit).toBe(true);
            expect(mockAudioElement.pause).toHaveBeenCalled();
            expect(component.enableAlert).toBe(true);
        });

        it('should not pause audio when within limit', () => {
            const mockAudioElement = document.createElement('audio');
            mockAudioElement.id = 'aud1';
            Object.defineProperty(mockAudioElement, 'duration', { value: 100, writable: true });
            Object.defineProperty(mockAudioElement, 'currentTime', { value: 40, writable: true });
            spyOn(mockAudioElement, 'pause');
            spyOn(document, 'getElementById').and.returnValue(mockAudioElement);

            component.checkPauseTime();

            expect(component.reachedLimit).toBe(false);
            expect(mockAudioElement.pause).not.toHaveBeenCalled();
            expect(component.enableAlert).toBe(false);
        });

        it('should handle edge case when currentTime equals pauseTime', () => {
            const mockAudioElement = document.createElement('audio');
            mockAudioElement.id = 'aud1';
            Object.defineProperty(mockAudioElement, 'duration', { value: 100, writable: true });
            Object.defineProperty(mockAudioElement, 'currentTime', { value: 50, writable: true });
            spyOn(mockAudioElement, 'pause');
            spyOn(document, 'getElementById').and.returnValue(mockAudioElement);

            component.checkPauseTime();

            expect(component.reachedLimit).toBe(false);
            expect(mockAudioElement.pause).not.toHaveBeenCalled();
        });
    });

    describe('ngOnDestroy()', () => {
        beforeEach(() => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
        });

        it('should clear interval on destroy', () => {
            component.interval = setInterval(() => { }, 1000);
            spyOn(window, 'clearInterval');

            component.ngOnDestroy();

            expect(clearInterval).toHaveBeenCalledWith(component.interval);
        });

        it('should handle destroy when interval is not set', () => {
            component.interval = undefined;

            expect(() => component.ngOnDestroy()).not.toThrow();
        });

        it('should handle destroy when interval is null', () => {
            component.interval = null;

            expect(() => component.ngOnDestroy()).not.toThrow();
        });
    });

    describe('ngAfterViewInit()', () => {
        beforeEach(() => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
        });

        it('should set up onplaying event handler', () => {
            const mockAudioElement = {
                nativeElement: {
                    onplaying: null,
                    pause: jasmine.createSpy('pause')
                }
            };
            component.audio = mockAudioElement as any;

            component.ngAfterViewInit();

            expect(component.audio.nativeElement.onplaying).toBeDefined();
        });

        it('should pause audio and show alert when limit reached on play', () => {
            const mockAudioElement = {
                nativeElement: {
                    onplaying: null,
                    pause: jasmine.createSpy('pause')
                }
            };
            component.audio = mockAudioElement as any;
            component.reachedLimit = true;

            component.ngAfterViewInit();
            component.audio.nativeElement.onplaying({});

            expect(component.audio.nativeElement.pause).toHaveBeenCalled();
            expect(component.enableAlert).toBe(true);
        });

        it('should allow audio to play when limit not reached', () => {
            const mockAudioElement = {
                nativeElement: {
                    onplaying: null,
                    pause: jasmine.createSpy('pause')
                }
            };
            component.audio = mockAudioElement as any;
            component.reachedLimit = false;

            component.ngAfterViewInit();
            component.audio.nativeElement.onplaying({});

            expect(component.audio.nativeElement.pause).not.toHaveBeenCalled();
            expect(component.enableAlert).toBe(false);
        });
    });

    describe('getAlertcloseEvent()', () => {
        beforeEach(() => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
        });

        it('should close alert modal', () => {
            component.enableAlert = true;

            component.getAlertcloseEvent('close');

            expect(component.enableAlert).toBe(false);
        });

        it('should handle any event parameter', () => {
            component.enableAlert = true;

            component.getAlertcloseEvent('ok');

            expect(component.enableAlert).toBe(false);
        });

        it('should handle null event', () => {
            component.enableAlert = true;

            component.getAlertcloseEvent(null);

            expect(component.enableAlert).toBe(false);
        });
    });

    describe('Integration Tests', () => {
        it('should complete workflow for non-subscriber reaching limit', fakeAsync(() => {
            Object.defineProperty(mockRouter, 'url', { value: '/adults/path/s999', configurable: true });
            localStorage.setItem('loginResponse', JSON.stringify(mockNonSubscriberResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            const mockAudioElement = document.createElement('audio');
            mockAudioElement.id = 'aud1';
            Object.defineProperty(mockAudioElement, 'duration', { value: 100, writable: true });
            Object.defineProperty(mockAudioElement, 'currentTime', { value: 60, writable: true });
            spyOn(mockAudioElement, 'pause');
            spyOn(document, 'getElementById').and.returnValue(mockAudioElement);

            component.ngOnInit();
            tick(1000);

            expect(component.reachedLimit).toBe(true);
            expect(component.enableAlert).toBe(true);
            expect(mockAudioElement.pause).toHaveBeenCalled();

            clearInterval(component.interval);
        }));

        it('should allow subscriber to play full audio', () => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            component.ngOnInit();

            expect(component.interval).toBeUndefined();
        });
    });

    describe('Edge Cases', () => {
        it('should handle missing localStorage data', () => {
            localStorage.clear();

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            // Component creation succeeds, but ngOnInit will fail
            expect(component.loginResponse).toBeNull();
            expect(component.freeScreens).toBeNull();
            expect(component.mediaPercent).toBeNull();

            // ngOnInit will throw when accessing loginResponse.Subscriber
            expect(() => component.ngOnInit()).toThrow();
        });

        it('should handle malformed URL', () => {
            Object.defineProperty(mockRouter, 'url', { value: 'invalidurl', configurable: true });
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            expect(() => component.ngOnInit()).not.toThrow();
        });

        it('should handle zero mediaPercent', () => {
            localStorage.setItem('loginResponse', JSON.stringify(mockNonSubscriberResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(0));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            const mockAudioElement = document.createElement('audio');
            mockAudioElement.id = 'aud1';
            Object.defineProperty(mockAudioElement, 'duration', { value: 100, writable: true });
            Object.defineProperty(mockAudioElement, 'currentTime', { value: 1, writable: true });
            spyOn(document, 'getElementById').and.returnValue(mockAudioElement);

            component.checkPauseTime();

            expect(component.pauseTime).toBe(0);
        });

        it('should handle 100 mediaPercent', () => {
            localStorage.setItem('loginResponse', JSON.stringify(mockNonSubscriberResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(100));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            const mockAudioElement = document.createElement('audio');
            mockAudioElement.id = 'aud1';
            Object.defineProperty(mockAudioElement, 'duration', { value: 100, writable: true });
            Object.defineProperty(mockAudioElement, 'currentTime', { value: 50, writable: true });
            spyOn(document, 'getElementById').and.returnValue(mockAudioElement);

            component.checkPauseTime();

            expect(component.pauseTime).toBe(100);
            expect(component.reachedLimit).toBe(false);
        });

        it('should handle missing audio element in DOM', () => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;

            spyOn(document, 'getElementById').and.returnValue(null);

            expect(() => component.checkPauseTime()).toThrow();
        });
    });

    describe('Output Events', () => {
        beforeEach(() => {
            localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
            localStorage.setItem('freeScreens', JSON.stringify(mockFreeScreens));
            localStorage.setItem('mediaPercent', JSON.stringify(mockMediaPercent));

            fixture = TestBed.createComponent(AudioBucketComponent);
            component = fixture.componentInstance;
        });

        it('should have sendAvDuration output', () => {
            expect(component.sendAvDuration).toBeDefined();
        });

        it('should emit audio duration when requested', () => {
            const mockAudioElement = {
                nativeElement: {
                    currentTime: 25.75
                }
            };
            component.audio = { audio: mockAudioElement } as any;
            spyOn(component.sendAvDuration, 'emit');

            component.getTime();

            expect(component.sendAvDuration.emit).toHaveBeenCalledWith(25.75 as any);
        });
    });
});
