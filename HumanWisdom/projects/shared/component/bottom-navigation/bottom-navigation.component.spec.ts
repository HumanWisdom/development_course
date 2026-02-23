import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomNavigationComponent } from './bottom-navigation.component';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { OwlStore } from '../../stores/owl.store';
import { SharedService, UrlConstant } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BottomNavigationComponent', () => {
  let component: BottomNavigationComponent;
  let fixture: ComponentFixture<BottomNavigationComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockOwlStore: jasmine.SpyObj<OwlStore>;
  let mockProgramId: any;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    localStorage.setItem('isloggedin', 'F');
    localStorage.removeItem('userDetails');

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/home',
      configurable: true
    });

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['getEnableTour'], {
      updateUserDetails: { next: jasmine.createSpy() },
      getUserDetails: of(null)
    });
    mockOnboardingService.getEnableTour.and.returnValue(of(false));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    mockOwlStore = jasmine.createSpyObj('OwlStore', ['reset', 'getIsEnabled', 'getIsInitialized', 'getShouldShow'], {
      shouldShow$: of(false)
    });
    mockOwlStore.reset.and.returnValue(undefined);
    mockOwlStore.getIsEnabled.and.returnValue(false);
    mockOwlStore.getIsInitialized.and.returnValue(false);
    mockOwlStore.getShouldShow.and.returnValue(false);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/home');
    spyOn(SharedService, 'getUrlfromFeatureName').and.callFake((name: string) => `/adults/${name}`);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getUserId').and.returnValue(0);

    await TestBed.configureTestingModule({
      declarations: [BottomNavigationComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: OwlStore, useValue: mockOwlStore }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BottomNavigationComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should call owlStore.reset', () => {
      expect(mockOwlStore.reset).toHaveBeenCalled();
    });
  });

  describe('routeDash', () => {
    it('should log event and navigate to dashboard', () => {
      component.routeDash();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('footer_home');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/home');
    });
  });

  describe('routeJournal', () => {
    it('should log event and navigate to journal', () => {
      component.routeJournal();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('footer_Journal');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
    });
  });

  describe('routeSearch', () => {
    it('should log event and navigate to search', () => {
      component.routeSearch();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('footer_Explore');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/search']);
    });
  });

  describe('routeForum', () => {
    it('should log event and navigate to forum', () => {
      component.routeForum();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('footer_Forum');
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/forum'],
        { state: { programType: component.programType } }
      );
    });
  });

  describe('profileclickevent', () => {
    it('should navigate to login when not logged in', () => {
      localStorage.setItem('isloggedin', 'F');

      component.profileclickevent();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('footer_login');
      expect(localStorage.getItem('btnclick')).toBe('F');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
    });

    it('should navigate to user profile when logged in', () => {
      localStorage.setItem('isloggedin', 'T');

      component.profileclickevent();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('footer_profile');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/user-profile']);
    });
  });

  describe('saveQuestionButton', () => {
    it('should emit saveQuestion', () => {
      let emitted = false;
      component.saveQuestion.subscribe(() => (emitted = true));

      component.saveQuestionButton();

      expect(emitted).toBe(true);
    });
  });

  describe('openChat', () => {
    it('should navigate to adults chat-bot when isAdults', () => {
      component.isAdults = true;

      component.openChat();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/chat-bot']);
    });

    it('should navigate to teenagers chat-bot when not isAdults', () => {
      component.isAdults = false;

      component.openChat();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/chat-bot']);
    });
  });

  describe('resetOwlAnimation', () => {
    it('should call owlStore.reset', () => {
      component.resetOwlAnimation();

      expect(mockOwlStore.reset).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe from toursubscription', () => {
      component.toursubscription = { unsubscribe: jasmine.createSpy('unsubscribe') } as any;

      component.ngOnDestroy();

      expect(component.toursubscription.unsubscribe).toHaveBeenCalled();
    });

    it('should not throw when toursubscription is undefined', () => {
      component.toursubscription = undefined;

      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });

  describe('ngOnChanges', () => {
    it('should set userdetail and url from localStorage when userDetails has UserImagePath', () => {
      const userDetails = { UserImagePath: 'path/to/image.png' };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      component.ngOnChanges({ userdetail: { currentValue: {}, firstChange: true } } as any);
      expect(component.userdetail).toBeDefined();
      expect(component.userdetail.UserImagePath).toBe('path/to/image.png');
      expect(component.url).toContain('path/to/image.png');
      expect(component.url).toMatch(/\?\d+$/);
    });

    it('should not set url when userdetail has empty UserImagePath', () => {
      localStorage.setItem('userDetails', JSON.stringify({ UserImagePath: '' }));
      component.url = '';
      component.ngOnChanges({ userdetail: { currentValue: {}, firstChange: true } } as any);
      expect(component.url).toBe('');
    });

    it('should not throw when no userDetails in localStorage', () => {
      localStorage.removeItem('userDetails');
      expect(() =>
        component.ngOnChanges({ userdetail: { currentValue: null, firstChange: true } } as any)
      ).not.toThrow();
    });
  });

  describe('ngOnInit', () => {
    it('should call updateUserDetails.next', () => {
      component.ngOnInit();
      expect(mockOnboardingService.updateUserDetails.next).toHaveBeenCalledWith(true);
    });

    it('should set isloggedIn, Subscriber and guest when isloggedin is T', () => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
      localStorage.setItem('guest', '0');
      fixture = TestBed.createComponent(BottomNavigationComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isloggedIn).toBe(true);
      expect(component.Subscriber).toBe('1');
      expect(component.guest).toBe('0');
    });

    it('should set disableClick when getEnableTour emits true', () => {
      mockOnboardingService.getEnableTour.and.returnValue(of(true));
      fixture = TestBed.createComponent(BottomNavigationComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.disableClick).toBe(true);
    });

    it('should set search true when router url is search', () => {
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/search',
        configurable: true
      });
      fixture = TestBed.createComponent(BottomNavigationComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.search).toBe(true);
      expect(component.dash).toBe(false);
      expect(component.journal).toBe(false);
      expect(component.fourm).toBe(false);
    });

    it('should set dash true when router url is dashboard or home', () => {
      Object.defineProperty(mockRouter, 'url', { get: () => '/adults/home', configurable: true });
      fixture = TestBed.createComponent(BottomNavigationComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.dash).toBe(true);
      expect(component.journal).toBe(false);
      expect(component.search).toBe(false);
      expect(component.fourm).toBe(false);
    });

    it('should set journal true when router url includes journal', () => {
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/journal',
        configurable: true
      });
      fixture = TestBed.createComponent(BottomNavigationComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.journal).toBe(true);
      expect(component.dash).toBe(false);
    });

    it('should set fourm true when router url includes forum', () => {
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/forum',
        configurable: true
      });
      fixture = TestBed.createComponent(BottomNavigationComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.fourm).toBe(true);
      expect(component.dash).toBe(false);
    });

    it('should set enableprofile true when router url is user-profile', () => {
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/onboarding/user-profile',
        configurable: true
      });
      fixture = TestBed.createComponent(BottomNavigationComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.enableprofile).toBe(true);
      expect(component.dash).toBe(false);
    });
  });

  describe('inputs and defaults', () => {
    it('should have default programType Adults', () => {
      expect(component.programType).toBe(ProgramType.Adults);
    });

    it('should have profile true by default', () => {
      expect(component.profile).toBe(true);
    });
  });
});
