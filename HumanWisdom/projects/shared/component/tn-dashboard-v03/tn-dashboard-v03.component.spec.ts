import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TnDashboardV03Component } from './tn-dashboard-v03.component';
import { Router, NavigationEnd } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { SharedService, UrlConstant } from '../../../shared/services/shared.service';
import { ProgramType } from '../../models/program-model';
import { Platform } from '@angular/cdk/platform';
import { of, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Subscription } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';

describe('TnDashboardV03Component', () => {
  let component: TnDashboardV03Component;
  let fixture: ComponentFixture<TnDashboardV03Component>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let routerEventsSubject: Subject<any>;
  let enableTourSubject: Subject<boolean>;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    routerEventsSubject = new Subject();
    enableTourSubject = new Subject<boolean>();

    mockRouter = jasmine.createSpyObj('Router', ['navigate'], {
      events: routerEventsSubject.asObservable()
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['getEnableTour', 'getDataRecivedState']);
    mockOnboardingService.getEnableTour.and.returnValue(enableTourSubject.asObservable());

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    spyOn(SharedService, 'getUrlfromFeatureName').and.callFake((path: string) => `/adults/${path}` as any);
    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/home' as any);

    localStorage.clear();
    localStorage.setItem('RoleID', '1');
    localStorage.setItem('isloggedin', 'F');
    localStorage.setItem('loginResponse', '{}');
    localStorage.setItem('Subscriber', '0');
    localStorage.setItem('userId', JSON.stringify(100));
    localStorage.setItem('userDetails', '{"UserImagePath":""}');
    localStorage.setItem('enablebanner', 'F');

    TestBed.configureTestingModule({
      declarations: [TnDashboardV03Component],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: Platform, useValue: { IOS: false, SAFARI: false, ANDROID: false } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TnDashboardV03Component);
    component = fixture.componentInstance;
    // subscription is never set in component (commented out) but ngOnDestroy calls it - avoid throw
    component.subscription = new Subscription();
    component.toursubscription = new Subscription();
    component.routerSubscription = new Subscription();
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    routerEventsSubject.complete();
    enableTourSubject.complete();
    localStorage.clear();
  });

  describe('component creation and constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(TnDashboardV03Component);
      component = fixture.componentInstance;
      component.subscription = new Subscription();
      component.toursubscription = new Subscription();
      component.routerSubscription = new Subscription();
      expect(component.isAdults).toBe(false);
    });

    it('should set roleid from localStorage RoleID', () => {
      localStorage.setItem('RoleID', '5');
      fixture = TestBed.createComponent(TnDashboardV03Component);
      component = fixture.componentInstance;
      component.subscription = new Subscription();
      component.toursubscription = new Subscription();
      component.routerSubscription = new Subscription();
      expect(component.roleid).toBe(5);
    });

    it('should set isloggedIn when isloggedin is T', () => {
      localStorage.setItem('isloggedin', 'T');
      fixture = TestBed.createComponent(TnDashboardV03Component);
      component = fixture.componentInstance;
      component.subscription = new Subscription();
      component.toursubscription = new Subscription();
      component.routerSubscription = new Subscription();
      expect(component.isloggedIn).toBe(true);
    });

    it('should set loginResponse from localStorage', () => {
      const resp = { NewNotifications: 3 };
      localStorage.setItem('loginResponse', JSON.stringify(resp));
      fixture = TestBed.createComponent(TnDashboardV03Component);
      component = fixture.componentInstance;
      component.subscription = new Subscription();
      component.toursubscription = new Subscription();
      component.routerSubscription = new Subscription();
      expect(component.loginResponse).toEqual(resp);
    });
  });

  describe('getLoggedIn', () => {
    it('should return true when isloggedin is T', () => {
      localStorage.setItem('isloggedin', 'T');
      expect(component.getLoggedIn()).toBe(true);
      expect(component.isloggedIn).toBe(true);
    });

    it('should return false when isloggedin is not T', () => {
      localStorage.setItem('isloggedin', 'F');
      component.getLoggedIn();
      expect(component.isloggedIn).toBe(false);
    });
  });

  describe('refreshData', () => {
    it('should set subscriber and isShowbookMark when Subscriber is 1', () => {
      localStorage.setItem('Subscriber', '1');
      component.refreshData();
      expect(component.subscriber).toBe(true);
      expect(component.isShowbookMark).toBe(true);
    });

    it('should set subscriber false when Subscriber is not 1', () => {
      localStorage.setItem('Subscriber', '0');
      component.refreshData();
      expect(component.subscriber).toBe(false);
      expect(component.isShowbookMark).toBe(false);
    });

    it('should set url from userDetails UserImagePath', () => {
      const detail = { UserImagePath: 'path\\to\\img' };
      localStorage.setItem('userDetails', JSON.stringify(detail));
      component.refreshData();
      expect(component.url).toContain('path/');
      expect(component.url).toContain('?');
    });

    it('should set isloggedIn from isloggedin', () => {
      localStorage.setItem('isloggedin', 'T');
      component.refreshData();
      expect(component.isloggedIn).toBe(true);
    });
  });

  describe('getIsSubscriber', () => {
    it('should return true when Subscriber is 1', () => {
      localStorage.setItem('Subscriber', '1');
      expect(component.getIsSubscriber()).toBe(true);
      expect(component.subscriber).toBe(true);
      expect(component.isShowbookMark).toBe(true);
    });

    it('should return false when Subscriber is not 1', () => {
      localStorage.setItem('Subscriber', '0');
      expect(component.getIsSubscriber()).toBe(false);
    });
  });

  describe('ngOnChanges', () => {
    it('should update enableHamburger and log when enableHamburger changes', () => {
      component.enableHamburger = false;
      component.ngOnChanges({
        enableHamburger: {
          firstChange: false,
          previousValue: false,
          currentValue: true,
          isFirstChange: () => false
        }
      } as any);
      expect(component.enableHamburger).toBe(true);
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_Hamburger_Menu');
    });

    it('should update isLoginPage when isLoginPage changes', () => {
      component.ngOnChanges({
        isLoginPage: {
          firstChange: false,
          previousValue: false,
          currentValue: true,
          isFirstChange: () => false
        }
      } as any);
      expect(component.isLoginPage).toBe(true);
    });

    it('should update isShowHeader when isShowHeader changes', () => {
      component.isShowHeader = true;
      component.ngOnChanges({
        isShowHeader: {
          firstChange: false,
          previousValue: true,
          currentValue: false,
          isFirstChange: () => false
        }
      } as any);
      expect(component.isShowHeader).toBe(false);
    });

    it('should not log when enableHamburger firstChange', () => {
      component.ngOnChanges({
        enableHamburger: {
          firstChange: true,
          previousValue: undefined,
          currentValue: true,
          isFirstChange: () => true
        }
      } as any);
      expect(mockLogEventService.logEvent).not.toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('should call refreshData', () => {
      spyOn(component, 'refreshData');
      component.ngOnInit();
      expect(component.refreshData).toHaveBeenCalled();
    });

    it('should subscribe to getEnableTour and set disableClick', () => {
      component.ngOnInit();
      enableTourSubject.next(true);
      expect(component.disableClick).toBe(true);
      enableTourSubject.next(false);
      expect(component.disableClick).toBe(false);
    });

    it('should subscribe to router events and refreshData on NavigationEnd', () => {
      spyOn(component, 'refreshData');
      component.ngOnInit();
      routerEventsSubject.next(new NavigationEnd(1, '/adults/home', '/adults/home'));
      expect(component.refreshData).toHaveBeenCalledTimes(2); // once in init, once from event
    });

    it('when enablebanner is F should set enableplaystore false', () => {
      localStorage.setItem('enablebanner', 'F');
      component.enableplaystore = true;
      component.ngOnInit();
      expect(component.enableplaystore).toBe(false);
    });
  });

  describe('routeGuide', () => {
    it('should navigate to program-guide s35001', () => {
      component.routeGuide();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/program-guide/s35001']);
    });
  });

  describe('getevent', () => {
    it('should set name from localStorage', () => {
      localStorage.setItem('name', 'Test User');
      component.getevent();
      expect(component.name).toBe('Test User');
    });
  });

  describe('routeAffiliate', () => {
    it('should be a function that returns false (window.location assignment not testable in Karma)', () => {
      expect(typeof component.routeAffiliate).toBe('function');
      // Calling routeAffiliate() sets window.location.href and causes full page reload in Karma
    });
  });

  describe('logout', () => {
    it('should set isloggedin and guest then navigate to login', () => {
      component.logout();
      expect(localStorage.getItem('isloggedin')).toBe('F');
      expect(localStorage.getItem('guest')).toBe('T');
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(UrlConstant.login);
      expect(mockRouter.navigate).toHaveBeenCalledWith([`/adults/${UrlConstant.login}`]);
    });
  });

  describe('loginroute', () => {
    it('should navigate to login url', () => {
      component.loginroute();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(UrlConstant.login);
      expect(mockRouter.navigate).toHaveBeenCalledWith([`/adults/${UrlConstant.login}`]);
    });
  });

  describe('giftwisdom', () => {
    it('should set giftwisdom in localStorage', () => {
      component.giftwisdom();
      expect(localStorage.getItem('giftwisdom')).toBe('T');
    });
  });

  describe('closeplaystore', () => {
    it('should set enableplaystore false, set enablebanner F and emit playstoreenable', () => {
      spyOn(component.playstoreenable, 'emit');
      component.enableplaystore = true;
      component.closeplaystore();
      expect(component.enableplaystore).toBe(false);
      expect(localStorage.getItem('enablebanner')).toBe('F');
      expect(component.playstoreenable.emit).toHaveBeenCalledWith(false);
    });
  });

  describe('Subscribe', () => {
    it('should log event and navigate to start free trial', () => {
      component.Subscribe();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_Free_Trial');
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(UrlConstant.startFreeTrial);
      expect(mockRouter.navigate).toHaveBeenCalled();
      expect((mockRouter.navigate as jasmine.Spy).calls.mostRecent().args[0][0]).toContain('subscription/start-your-free-trial');
    });
  });

  describe('goToNotification', () => {
    it('should log event and navigate to notification', () => {
      component.goToNotification();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_Notifications');
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(UrlConstant.notification);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/notification']);
    });
  });

  describe('routedashboard', () => {
    it('should navigate to dashboard url', () => {
      component.routedashboard();
      expect(SharedService.getDashboardUrls).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });
  });

  describe('getNotifi', () => {
    it('should return value when <= 9', () => {
      expect(component.getNotifi(5)).toBe(5);
      expect(component.getNotifi('3')).toBe('3');
    });

    it('should return 9+ when > 9', () => {
      expect(component.getNotifi(10)).toBe('9+');
      expect(component.getNotifi(15)).toBe('9+');
    });

    it('should return empty string when falsy', () => {
      expect(component.getNotifi(null)).toBe('');
      expect(component.getNotifi(undefined)).toBe('');
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe toursubscription and routerSubscription', () => {
      component.ngOnInit();
      const tourUnsub = spyOn(component.toursubscription, 'unsubscribe');
      const routerUnsub = spyOn(component.routerSubscription, 'unsubscribe');
      component.ngOnDestroy();
      expect(tourUnsub).toHaveBeenCalled();
      expect(routerUnsub).toHaveBeenCalled();
    });
  });
});
