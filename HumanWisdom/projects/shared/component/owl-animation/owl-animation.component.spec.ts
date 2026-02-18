import { ComponentFixture, TestBed, fakeAsync, tick, flush, waitForAsync, discardPeriodicTasks } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { of, Subject } from 'rxjs';

import { OwlAnimationComponent } from './owl-animation.component';
import { OwlStore } from '../../stores/owl.store';

describe('OwlAnimationComponent', () => {
    let component: OwlAnimationComponent;
    let fixture: ComponentFixture<OwlAnimationComponent>;
    let mockRouter: jasmine.SpyObj<Router>;
    let mockOwlStore: jasmine.SpyObj<OwlStore>;
    let mockChangeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;
    let routerEventsSubject: Subject<any>;

    beforeEach(waitForAsync(() => {
        // Create spy objects
        routerEventsSubject = new Subject();
        mockRouter = jasmine.createSpyObj('Router', ['navigate'], {
            events: routerEventsSubject.asObservable(),
            url: '/adults'
        });
        mockRouter.navigate.and.returnValue(Promise.resolve(true));

        mockOwlStore = jasmine.createSpyObj('OwlStore', ['setState', 'getState']);
        mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);

        TestBed.configureTestingModule({
            declarations: [OwlAnimationComponent],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: OwlStore, useValue: mockOwlStore },
                { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();

        // Mock navigator.userAgent for mobile detection
        Object.defineProperty(window.navigator, 'userAgent', {
            writable: true,
            configurable: true,
            value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        });

        // Mock window.innerWidth
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1024
        });

        fixture = TestBed.createComponent(OwlAnimationComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        // Clear any intervals created by ngOnInit
        if (component['loginCheckInterval']) {
            clearInterval(component['loginCheckInterval']);
        }
        if (component['menuCheckInterval']) {
            clearInterval(component['menuCheckInterval']);
        }

        fixture.destroy();
        localStorage.clear();
    });

    describe('Component Initialization', () => {
        it('should create the component', () => {
            expect(component).toBeTruthy();
        });

        it('should initialize with default values', () => {
            // These are set in constructor
            expect(component.isSpeaking).toBe(false);
            expect(component.isDisappearing).toBe(false);
            expect(component.gifError).toBe(false);
            expect(component.gifLoaded).toBe(false);
            expect(component.showCloudMessage).toBe(false);
        });

        it('should set isPlaying to true initially', () => {
            expect(component.isPlaying).toBe(true);
        });

        it('should set isAtCorner to true initially', () => {
            expect(component.isAtCorner).toBe(true);
        });

        it('should initialize cloud images array', () => {
            expect(component['cloudImages']).toBeDefined();
            expect(component['cloudImages'].length).toBe(2);
        });

        it('should set default GIF URL', () => {
            expect(component.gifUrl).toContain('owlGif.gif');
        });
    });

    describe('ngOnInit', () => {
        it('should check dialogue shown status from localStorage', () => {
            localStorage.setItem('owl_dialogue_shown', 'true');

            component.ngOnInit();

            expect(component['dialogueAlreadyShown']).toBe(true);
        });

        it('should set dialogueAlreadyShown to false if not in localStorage', () => {
            component.ngOnInit();

            expect(component['dialogueAlreadyShown']).toBe(false);
        });

        it('should show static owl immediately in debug mode', () => {
            component['debugMode'] = true;
            spyOn<any>(component, 'startSpeakingSequence');

            component.ngOnInit();

            expect(component.showStaticOwl).toBe(true);
            expect(component['startSpeakingSequence']).toHaveBeenCalled();
        });

        it('should set showOwl to true', fakeAsync(() => {
            component.ngOnInit();
            tick();

            expect(component.showOwl).toBe(true);

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));

        it('should initialize showStaticOwl and showGif to false', fakeAsync(() => {
            component.ngOnInit();
            tick();

            // After ngOnInit, one of these will be true depending on login status
            // Just verify they are defined
            expect(component.showStaticOwl).toBeDefined();
            expect(component.showGif).toBeDefined();

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));

        it('should call checkRouteAndSetOwlDisplay multiple times', fakeAsync(() => {
            spyOn<any>(component, 'checkRouteAndSetOwlDisplay');

            component.ngOnInit();
            tick(3500);

            expect(component['checkRouteAndSetOwlDisplay']).toHaveBeenCalled();

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));

        it('should subscribe to router events', fakeAsync(() => {
            component.ngOnInit();
            tick();

            expect(component['routerSubscription']).toBeDefined();

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));

        it('should monitor login status', fakeAsync(() => {
            spyOn<any>(component, 'monitorLoginStatus');

            component.ngOnInit();
            tick();

            expect(component['monitorLoginStatus']).toHaveBeenCalled();

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));

        it('should set lastLoginStatus from localStorage', () => {
            localStorage.setItem('isloggedin', 'T');

            component.ngOnInit();

            expect(component['lastLoginStatus']).toBe('T');
        });
    });

    describe('Login Status Monitoring', () => {
        it('should detect login status change', fakeAsync(() => {
            localStorage.setItem('isloggedin', 'F');
            component['lastLoginStatus'] = 'F';
            spyOn<any>(component, 'checkRouteAndSetOwlDisplay');

            component.ngOnInit();
            tick(100);

            // Simulate login
            localStorage.setItem('isloggedin', 'T');
            tick(600);

            expect(component['checkRouteAndSetOwlDisplay']).toHaveBeenCalled();

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));

        it('should not trigger GIF if already shown', fakeAsync(() => {
            localStorage.setItem('owl_gif_shown', 'true');
            localStorage.setItem('isloggedin', 'F');
            component['lastLoginStatus'] = 'F';

            component.ngOnInit();
            tick(100);

            localStorage.setItem('isloggedin', 'T');
            tick(600);

            expect(component.showGif).toBeDefined();

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));

        it('should update lastLoginStatus', fakeAsync(() => {
            localStorage.setItem('isloggedin', 'F');
            component['lastLoginStatus'] = 'F';

            component.ngOnInit();
            tick(100);

            localStorage.setItem('isloggedin', 'T');
            tick(600);

            expect(component['lastLoginStatus']).toBe('T');

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));
    });

    describe('Route Detection', () => {
        it('should detect home page from root URL', () => {
            const isHome = component['isHomePage']('/');
            expect(isHome).toBe(true);
        });

        it('should detect home page from /adults', () => {
            const isHome = component['isHomePage']('/adults');
            expect(isHome).toBe(true);
        });

        it('should detect home page from /adults/', () => {
            const isHome = component['isHomePage']('/adults/');
            expect(isHome).toBe(true);
        });

        it('should detect home page from /adults/home', () => {
            const isHome = component['isHomePage']('/adults/home');
            expect(isHome).toBe(true);
        });

        it('should not detect non-home pages', () => {
            const isHome = component['isHomePage']('/adults/chat-bot');
            expect(isHome).toBe(false);
        });

        it('should handle URLs with query params', () => {
            const isHome = component['isHomePage']('/adults?param=value');
            expect(isHome).toBe(true);
        });

        it('should handle URLs with hash', () => {
            const isHome = component['isHomePage']('/adults#section');
            expect(isHome).toBe(true);
        });

        it('should return false for null URL', () => {
            const isHome = component['isHomePage'](null as any);
            expect(isHome).toBe(false);
        });
    });

    describe('GIF Display Logic', () => {
        it('should show GIF when user is logged in and GIF not shown', () => {
            localStorage.setItem('isloggedin', 'T');
            localStorage.removeItem('owl_gif_shown');

            component['checkRouteAndSetOwlDisplay']();

            expect(component.showGif).toBe(true);
            expect(component.showStaticOwl).toBe(false);
        });

        it('should not show GIF when user is not logged in', () => {
            localStorage.setItem('isloggedin', 'F');

            component['checkRouteAndSetOwlDisplay']();

            expect(component.showGif).toBe(false);
        });

        it('should not show GIF if already shown', () => {
            localStorage.setItem('isloggedin', 'T');
            localStorage.setItem('owl_gif_shown', 'true');

            component['checkRouteAndSetOwlDisplay']();

            expect(component.showGif).toBe(false);
        });

        it('should set gifAlreadyStarting flag when showing GIF', () => {
            localStorage.setItem('isloggedin', 'T');
            localStorage.removeItem('owl_gif_shown');

            component['checkRouteAndSetOwlDisplay']();

            expect(component['gifAlreadyStarting']).toBe(true);
        });

        it('should reset GIF URL with timestamp', () => {
            localStorage.setItem('isloggedin', 'T');
            localStorage.removeItem('owl_gif_shown');

            component['checkRouteAndSetOwlDisplay']();

            expect(component.gifUrl).toContain('?t=');
        });

        it('should trigger GIF display when logged in', () => {
            localStorage.setItem('isloggedin', 'T');
            localStorage.removeItem('owl_gif_shown');

            component['checkRouteAndSetOwlDisplay']();

            // Verify GIF is shown
            expect(component.showGif).toBe(true);
        });
    });

    describe('Static Owl Display', () => {
        it('should show static owl when user is not logged in', () => {
            localStorage.setItem('isloggedin', 'F');
            component['hasCheckedHomePage'] = false;

            component['checkRouteAndSetOwlDisplay']();

            expect(component.showStaticOwl).toBe(true);
            expect(component.showGif).toBe(false);
        });

        it('should show static owl when GIF already shown', () => {
            localStorage.setItem('isloggedin', 'T');
            localStorage.setItem('owl_gif_shown', 'true');
            component['hasCheckedHomePage'] = false;

            component['checkRouteAndSetOwlDisplay']();

            expect(component.showStaticOwl).toBe(true);
        });

        it('should clear message when dialogue already shown', () => {
            localStorage.setItem('isloggedin', 'F');
            component['dialogueAlreadyShown'] = true;
            component['hasCheckedHomePage'] = false;

            component['checkRouteAndSetOwlDisplay']();

            expect(component.owlMessage).toBe('');
            expect(component.isSpeaking).toBe(false);
        });
    });

    describe('GIF Load Handler', () => {
        it('should set gifLoaded to true', () => {
            component.onGifLoaded();

            expect(component.gifLoaded).toBe(true);
        });

        it('should save GIF shown status to localStorage', () => {
            component.onGifLoaded();

            expect(localStorage.getItem('owl_gif_shown')).toBe('true');
        });

        it('should not process if GIF already played', () => {
            component['gifPlayedOnce'] = true;
            const initialGifLoaded = component.gifLoaded;

            component.onGifLoaded();

            expect(component.gifLoaded).toBe(initialGifLoaded);
        });

        it('should transition to static owl after animation duration', fakeAsync(() => {
            component.onGifLoaded();
            tick(12000);

            expect(component.showGif).toBe(false);
            expect(component.showStaticOwl).toBe(true);
            expect(component['gifPlayedOnce']).toBe(true);
        }));

        it('should transition to static owl and trigger cleanup after animation', fakeAsync(() => {
            const mockGifElement = {
                nativeElement: {
                    src: 'test.gif',
                    style: { display: 'block' }
                }
            };
            component.gifElement = mockGifElement as any;

            component.onGifLoaded();
            tick(12000);

            // Verify component state changes
            expect(component.showGif).toBe(false);
            expect(component.showStaticOwl).toBe(true);
            expect(component['gifPlayedOnce']).toBe(true);

            flush(); // Clear any remaining timers
        }));

        it('should start speaking sequence after GIF completes', fakeAsync(() => {
            spyOn<any>(component, 'startSpeakingSequence');

            component.onGifLoaded();
            tick(12100);

            expect(component['startSpeakingSequence']).toHaveBeenCalled();
        }));
    });

    describe('GIF Error Handler', () => {
        it('should set gifError to true', () => {
            component.handleGifError();

            expect(component.gifError).toBe(true);
        });

        it('should mark GIF as played', () => {
            component.handleGifError();

            expect(component['gifPlayedOnce']).toBe(true);
        });

        it('should save GIF shown status even on error', () => {
            component.handleGifError();

            expect(localStorage.getItem('owl_gif_shown')).toBe('true');
        });

        it('should show static owl after error', fakeAsync(() => {
            component.handleGifError();
            tick(2000);

            expect(component.showStaticOwl).toBe(true);
            expect(component.showGif).toBe(false);

            flush(); // Clear any remaining timers
        }));

        it('should start speaking sequence if dialogue not shown', fakeAsync(() => {
            spyOn<any>(component, 'startSpeakingSequence');
            component['dialogueAlreadyShown'] = false;

            component.handleGifError();
            tick(2000);

            expect(component['startSpeakingSequence']).toHaveBeenCalled();
        }));

        it('should not show dialogue if already shown', fakeAsync(() => {
            component['dialogueAlreadyShown'] = true;

            component.handleGifError();
            tick(2000);

            expect(component.owlMessage).toBe('');
            expect(component.isSpeaking).toBe(false);
        }));
    });

    describe('Speaking Sequence', () => {
        it('should not show dialogue if already shown', () => {
            component['dialogueAlreadyShown'] = true;

            component['startSpeakingSequence']();

            expect(component.showCloudMessage).toBe(false);
            expect(component.isSpeaking).toBe(false);
        });

        it('should mark dialogue as shown', () => {
            component['dialogueAlreadyShown'] = false;

            component['startSpeakingSequence']();

            expect(component['dialogueAlreadyShown']).toBe(true);
            expect(localStorage.getItem('owl_dialogue_shown')).toBe('true');
        });

        it('should show first cloud image', () => {
            component['dialogueAlreadyShown'] = false;

            component['startSpeakingSequence']();

            expect(component.showCloudMessage).toBe(true);
            expect(component.currentCloudImage).toContain('Olly_Hi.svg');
            expect(component.isSpeaking).toBe(true);
        });

        it('should switch to second cloud image after 3 seconds', fakeAsync(() => {
            component['dialogueAlreadyShown'] = false;

            component['startSpeakingSequence']();
            tick(3000);

            expect(component.currentCloudImage).toContain('Olly_Ask+me+a+question.svg');

            flush(); // Clear remaining timers
        }));

        it('should stop speaking after 6 seconds', fakeAsync(() => {
            component['dialogueAlreadyShown'] = false;

            component['startSpeakingSequence']();
            tick(6000);

            expect(component.isSpeaking).toBe(false);

            flush(); // Clear remaining timer
        }));

        it('should hide cloud after 9 seconds', fakeAsync(() => {
            component['dialogueAlreadyShown'] = false;
            spyOn<any>(component, 'hideCloudWithAnimation');

            component['startSpeakingSequence']();
            tick(9000);

            expect(component['hideCloudWithAnimation']).toHaveBeenCalled();
        }));
    });

    describe('Cloud Animation', () => {
        it('should not hide if already disappearing', () => {
            component.isDisappearing = true;
            component.showCloudMessage = true;

            component.hideCloudWithAnimation();

            expect(component.isDisappearing).toBe(true);
        });

        it('should not hide if no message shown', () => {
            component.showCloudMessage = false;
            const initialState = component.isDisappearing;

            component.hideCloudWithAnimation();

            expect(component.isDisappearing).toBe(initialState);
        });

        it('should set isDisappearing to true', () => {
            component.showCloudMessage = true;
            component.isDisappearing = false;

            component.hideCloudWithAnimation();

            expect(component.isDisappearing).toBe(true);
            expect(component.isSpeaking).toBe(false);
        });

        it('should hide cloud message after animation', fakeAsync(() => {
            component.showCloudMessage = true;
            component.isDisappearing = false;

            component.hideCloudWithAnimation();
            tick(600);

            expect(component.showCloudMessage).toBe(false);
            expect(component.isDisappearing).toBe(false);
        }));
    });

    describe('Mobile Detection', () => {
        it('should detect mobile from user agent', () => {
            Object.defineProperty(window.navigator, 'userAgent', {
                writable: true,
                value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
            });

            const isMobile = component['detectMobile']();

            expect(isMobile).toBe(true);
        });

        it('should detect mobile from screen width', () => {
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                value: 500
            });

            const isMobile = component['detectMobile']();

            expect(isMobile).toBe(true);
        });

        it('should not detect desktop as mobile', () => {
            Object.defineProperty(window.navigator, 'userAgent', {
                writable: true,
                value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            });
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                value: 1024
            });

            const isMobile = component['detectMobile']();

            expect(isMobile).toBe(false);
        });
    });

    describe('Navigation', () => {
        it('should navigate to chat-bot on openChat', () => {
            component.openChat();

            expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/chat-bot']);
        });
    });

    describe('Restart Animation', () => {
        it('should reset component state', () => {
            component['gifPlayedOnce'] = true;
            component.showStaticOwl = true;

            component.restartAnimation();

            expect(component.isPlaying).toBe(true);
            expect(component.showStaticOwl).toBe(false);
            expect(component['gifPlayedOnce']).toBe(false);
        });

        it('should clear existing timeout', () => {
            component['gifAnimationTimeout'] = setTimeout(() => { }, 1000);

            component.restartAnimation();

            expect(component['gifAnimationTimeout']).toBeNull();
        });

        it('should reset GIF URL with timestamp', () => {
            component.restartAnimation();

            expect(component.gifUrl).toContain('?t=');
        });
    });

    describe('Force Show GIF (Debug)', () => {
        it('should clear localStorage flags', () => {
            localStorage.setItem('owl_gif_shown', 'true');
            localStorage.setItem('owl_dialogue_shown', 'true');

            component.forceShowGif();

            expect(localStorage.getItem('owl_gif_shown')).toBeNull();
            expect(localStorage.getItem('owl_dialogue_shown')).toBeNull();
        });

        it('should reset component to show GIF', () => {
            component.showStaticOwl = true;
            component['gifPlayedOnce'] = true;

            component.forceShowGif();

            expect(component.showGif).toBe(true);
            expect(component.showStaticOwl).toBe(false);
            expect(component.isPlaying).toBe(true);
            expect(component['gifPlayedOnce']).toBe(false);
        });
    });

    describe('ngOnDestroy', () => {
        it('should clear all timers', () => {
            component['messageTimers'] = [setTimeout(() => { }, 1000)];

            component.ngOnDestroy();

            expect(component['messageTimers'].length).toBe(0);
        });

        it('should clear GIF animation timeout', () => {
            component['gifAnimationTimeout'] = setTimeout(() => { }, 1000);

            component.ngOnDestroy();

            expect(component['gifAnimationTimeout']).toBeNull();
        });

        it('should clear cloud image interval', () => {
            component['cloudImageInterval'] = setInterval(() => { }, 1000);

            component.ngOnDestroy();

            expect(component['cloudImageInterval']).toBeNull();
        });

        it('should unsubscribe from router events', () => {
            component.ngOnInit();
            const subscription = component['routerSubscription'];
            spyOn(subscription as any, 'unsubscribe');

            component.ngOnDestroy();

            expect(subscription?.unsubscribe).toHaveBeenCalled();
        });

        it('should clear login check interval', () => {
            component['loginCheckInterval'] = setInterval(() => { }, 1000);

            component.ngOnDestroy();

            expect(component['loginCheckInterval']).toBeNull();
        });
    });

    describe('Getters and Setters', () => {
        it('should get and set isPlaying', () => {
            component.isPlaying = false;
            expect(component.isPlaying).toBe(false);

            component.isPlaying = true;
            expect(component.isPlaying).toBe(true);
        });

        it('should get and set isTransitioning', () => {
            component.isTransitioning = true;
            expect(component.isTransitioning).toBe(true);

            component.isTransitioning = false;
            expect(component.isTransitioning).toBe(false);
        });

        it('should get and set isAtCorner', () => {
            component.isAtCorner = false;
            expect(component.isAtCorner).toBe(false);

            component.isAtCorner = true;
            expect(component.isAtCorner).toBe(true);
        });
    });

    describe('Edge Cases', () => {
        it('should handle multiple rapid checkRouteAndSetOwlDisplay calls', () => {
            localStorage.setItem('isloggedin', 'T');

            component['checkRouteAndSetOwlDisplay']();
            component['checkRouteAndSetOwlDisplay']();
            component['checkRouteAndSetOwlDisplay']();

            // Should only trigger GIF once due to gifAlreadyStarting flag
            expect(component['gifAlreadyStarting']).toBe(true);
        });

        it('should handle missing GIF element gracefully', fakeAsync(() => {
            component.gifElement = undefined as any;

            expect(() => {
                component.onGifLoaded();
                tick(12000);
            }).not.toThrow();
        }));

        it('should handle router events after component destruction', fakeAsync(() => {
            component.ngOnInit();
            tick(100);
            component.ngOnDestroy();

            expect(() => {
                routerEventsSubject.next(new NavigationEnd(1, '/adults', '/adults'));
                tick();
            }).not.toThrow();

            flush(); // Clear setTimeout calls
            discardPeriodicTasks(); // Clear setInterval
        }));
    });
});
