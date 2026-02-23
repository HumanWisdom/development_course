import './intro-carousel.page.spec-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroCarouselPage } from './intro-carousel.page';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { LogEventService } from '../../services/log-event.service';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

describe('IntroCarouselPage', () => {
  let component: IntroCarouselPage;
  let fixture: ComponentFixture<IntroCarouselPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockProgramId: number;
  let mock$: jasmine.Spy;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['verifytoken']);
    mockAdultsService.verifytoken.and.returnValue(of(null));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['verifyGoogle', 'verifyFb', 'getuser']);
    mockOnboardingService.verifyGoogle.and.returnValue(of(null));
    mockOnboardingService.verifyFb.and.returnValue(of(null));
    mockOnboardingService.getuser.and.returnValue(of([]));

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    Object.defineProperty(SharedService, 'isIos', {
      get: () => false,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'isAdultProgram').and.returnValue(true);

    mock$ = jasmine.createSpy('$').and.returnValue({ bcSwipe: jasmine.createSpy('bcSwipe') });
    (window as any).$ = mock$;

    await TestBed.configureTestingModule({
      declarations: [IntroCarouselPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: OnboardingService, useValue: mockOnboardingService },
        UntypedFormBuilder,
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    sessionStorage.setItem('successPassword', JSON.stringify(null));

    fixture = TestBed.createComponent(IntroCarouselPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
    sessionStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(IntroCarouselPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(IntroCarouselPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });

    it('should initialize with currentSection 0', () => {
      expect(component.currentSection).toBe(0);
    });

    it('should initialize with carouselId 1', () => {
      expect(component.carouselId).toBe(1);
    });
  });

  describe('skip', () => {
    it('should navigate to adults login when isAdults', () => {
      component.isAdults = true;
      component.skip();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
      expect(localStorage.getItem('personalised')).toBe('F');
      expect(localStorage.getItem('fromlandingpage')).toBe('F');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_skip_onboarding 1');
    });

    it('should navigate to teenagers login when not isAdults', () => {
      component.isAdults = false;
      component.skip();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/onboarding/login']);
    });
  });

  describe('onLoad', () => {
    it('should set loading to true', () => {
      component.loading = false;
      component.onLoad();
      expect(component.loading).toBe(true);
    });
  });

  describe('next', () => {
    it('should increment currentSection and set direction to left', () => {
      component.currentSection = 0;
      component.next();
      expect(component.currentSection).toBe(1);
      expect(component.direction).toBe('left');
    });

    it('should wrap currentSection to 0 when at section 2', () => {
      component.currentSection = 1;
      component.next();
      expect(component.currentSection).toBe(0);
      expect(component.direction).toBe('left');
    });
  });

  describe('back', () => {
    it('should set direction to right and decrement currentSection', () => {
      component.currentSection = 1;
      component.back();
      expect(component.direction).toBe('right');
      expect(component.currentSection).toBe(0);
    });

    it('should wrap to section 1 when at section 0', () => {
      component.currentSection = 0;
      component.back();
      expect(component.currentSection).toBe(1);
    });
  });

  describe('LogEvent', () => {
    it('should call logEvent with event name', () => {
      component.LogEvent('click_play_video');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_play_video');
    });
  });

  describe('Logevent', () => {
    it('should update currentSection for click_next_onboarding and navigate when route provided', () => {
      component.currentSection = 0;
      component.Logevent('/adults/home', '', 'click_next_onboarding');
      expect(component.currentSection).toBe(1);
      expect(component.direction).toBe('left');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_next_onboarding 1');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });

    it('should update currentSection for click_prev_onboarding', () => {
      component.currentSection = 1;
      component.Logevent('', '', 'click_prev_onboarding');
      expect(component.currentSection).toBe(0);
      expect(component.direction).toBe('right');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_prev_onboarding 0');
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate with params when provided', () => {
      component.Logevent('/adults/module', '123', 'click_next_onboarding');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/module', '123']);
    });
  });

  describe('login', () => {
    it('should navigate to adults login when isAdults', () => {
      component.isAdults = true;
      component.login();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
      expect(localStorage.getItem('personalised')).toBe('F');
      expect(localStorage.getItem('fromlandingpage')).toBe('F');
    });

    it('should navigate to teenagers login when not isAdults', () => {
      component.isAdults = false;
      component.login();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/onboarding/login']);
    });
  });

  describe('routedashboard', () => {
    it('should log event and navigate to adults dashboard when isAdults', () => {
      component.isAdults = true;
      component.routedashboard();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('Guest_Login');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('should navigate to teenagers dashboard when not isAdults', () => {
      component.isAdults = false;
      component.routedashboard();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/teenager-dashboard']);
    });
  });

  describe('googleLogin', () => {
    it('should log google_login when reqtype is login', () => {
      spyOn<any>(component, 'handleGoogleSignIn');
      component.googleLogin('login');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('google_login');
      expect(component['handleGoogleSignIn']).toHaveBeenCalled();
    });

    it('should log google_signup when reqtype is signup', () => {
      spyOn<any>(component, 'handleGoogleSignIn');
      component.googleLogin('signup');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('google_signup');
    });
  });

  describe('fbLogin', () => {
    it('should log facebook_login when reqtype is login', () => {
      spyOn<any>(component, 'handleFacebookLogin');
      component.fbLogin('login');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('facebook_login');
      expect(component['handleFacebookLogin']).toHaveBeenCalled();
    });

    it('should log facebook_signup when reqtype is signup', () => {
      spyOn<any>(component, 'handleFacebookLogin');
      component.fbLogin('signup');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('facebook_signup');
    });
  });

  describe('signInWithApple', () => {
    it('should log apple_login and open window', () => {
      spyOn(window, 'open');
      component.signInWithApple('login');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('apple_login');
      expect(localStorage.getItem('appleLogin')).toBe('T');
      expect(window.open).toHaveBeenCalled();
    });

    it('should log apple_signup when reqtype is signup', () => {
      spyOn(window, 'open');
      component.signInWithApple('signup');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('apple_signup');
    });
  });

  describe('routetoUrl', () => {
    it('should open url in new window with program prefix', () => {
      spyOn(window, 'open');
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');
      component.routetoUrl('/help-support/terms');
      expect(window.open).toHaveBeenCalledWith('/adults/help-support/terms', '_blank');
    });
  });
});
