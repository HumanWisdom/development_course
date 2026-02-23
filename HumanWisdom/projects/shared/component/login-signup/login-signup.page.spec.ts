import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { LoginSignupPage } from './login-signup.page';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { CommonService } from '../../services/common.service';
import { HomeStateService } from '../../services/home-state.service';
import { ProgramType } from '../../models/program-model';
import { Constant } from '../../services/constant';

describe('LoginSignupPage', () => {
  let component: LoginSignupPage;
  let fixture: ComponentFixture<LoginSignupPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockHomeStateService: jasmine.SpyObj<HomeStateService>;
  let queryParamsSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    queryParamsSubject = new BehaviorSubject({ email: null, pwd: null, key: null });
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'addUser',
      'emailLogin',
      'verifyGoogle',
      'verifyFb',
      'verifyCode',
      'verifyCaptcha',
      'verifyUser',
      'freeScreens',
      'getuser'
    ]);
    mockOnboardingService.addUser.and.returnValue(of(1));
    mockOnboardingService.emailLogin.and.returnValue(of({
      UserId: 123,
      Name: 'Test',
      access_token: 'tok',
      Subscriber: 1,
      RoleID: 1,
      SubscriberType: 'Annual',
      IsPartner: '0',
      PartnerOption: '',
      NoOfVisits: 5
    }));
    mockOnboardingService.verifyUser.and.returnValue(of(null));
    mockOnboardingService.freeScreens.and.returnValue(of([]));
    mockOnboardingService.getuser.and.returnValue(of([{ SurveyDone: '1' }]));
    mockOnboardingService.verifyCaptcha.and.returnValue(of(true));
    (mockOnboardingService as any).navigateToUpgradeToPremium = false;

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    mockLogEventService.logEvent.and.stub();

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['getLastUrlVisited']);
    mockNavigationService.getLastUrlVisited.and.returnValue(null);

    mockCommonService = jasmine.createSpyObj('CommonService', ['updateSurveyData']);
    mockHomeStateService = jasmine.createSpyObj('HomeStateService', ['resetState']);

    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults' as any);
    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/adult-dashboard' as any);
    spyOn(SharedService, 'isSubscriber').and.returnValue(false);
    (SharedService as any).UrlToRedirect = null;

    sessionStorage.clear();
    localStorage.clear();
    sessionStorage.setItem('successPassword', 'null');
    localStorage.setItem('isloggedin', 'F');
    (window as any).Moengage = {
      add_unique_user_id: jasmine.createSpy().and.returnValue(Promise.resolve()),
      add_email: jasmine.createSpy(),
      add_first_name: jasmine.createSpy()
    };

    await TestBed.configureTestingModule({
      imports: [LoginSignupPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: { queryParams: queryParamsSubject.asObservable() } },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: CommonService, useValue: mockCommonService },
        { provide: HomeStateService, useValue: mockHomeStateService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSignupPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isSignUp to false when lastUrl includes forgotpassword', () => {
      mockNavigationService.getLastUrlVisited.and.returnValue('/adults/forgotpassword');
      component.ngOnInit();
      expect(component.isSignUp).toBe(false);
    });
  });

  describe('validators', () => {
    it('forbiddenNameValidator should return error for admin', () => {
      const result = component.forbiddenNameValidator({ value: 'admin', pristine: false } as any);
      expect(result).toEqual({ forbiddenName: { value: 'admin' } });
    });

    it('forbiddenNameValidator should return null for non-admin', () => {
      const result = component.forbiddenNameValidator({ value: 'john', pristine: false } as any);
      expect(result).toBeNull();
    });

    it('passwordStrengthValidator should return error when password lacks letter', () => {
      const result = component.passwordStrengthValidator({ value: '123456' } as any);
      expect(result).toEqual({ passwordStrength: true });
    });

    it('passwordStrengthValidator should return error when password lacks digit', () => {
      const result = component.passwordStrengthValidator({ value: 'abcdef' } as any);
      expect(result).toEqual({ passwordStrength: true });
    });

    it('passwordStrengthValidator should return null for valid password', () => {
      const result = component.passwordStrengthValidator({ value: 'pass123' } as any);
      expect(result).toBeNull();
    });

    it('addZero should prefix single digit with 0', () => {
      expect(component.addZero(5)).toBe('05');
      expect(component.addZero(9)).toBe('09');
    });

    it('addZero should not modify double digit', () => {
      expect(component.addZero(10)).toBe(10);
      expect(component.addZero(12)).toBe(12);
    });
  });

  describe('navigation', () => {
    it('routeForgotPassword should navigate to adults forgot password', () => {
      component.isAdults = true;
      component.routeForgotPassword();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/forgotpassword']);
    });

    it('routeForgotPassword should navigate to teenagers forgot password', () => {
      component.isAdults = false;
      component.routeForgotPassword();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/onboarding/forgotpassword']);
    });

    it('routedashboard should log event and navigate to dashboard', () => {
      component.routedashboard();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('Guest_Login');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/adult-dashboard');
    });

    it('navigate should call router.navigate', () => {
      component.navigate('/adults/home');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });
  });

  describe('sharedForum', () => {
    it('should set agree to true', () => {
      component.sharedForum(true);
      expect(component.agree).toBe(true);
    });

    it('should set agree to false', () => {
      component.sharedForum(false);
      expect(component.agree).toBe(false);
    });
  });

  describe('getsignuptab / getLoginTab', () => {
    it('getsignuptab should set isSignUp to true', () => {
      component.isSignUp = false;
      component.getsignuptab();
      expect(component.isSignUp).toBe(true);
    });

    it('getLoginTab should set isSignUp to false', () => {
      component.isSignUp = true;
      component.getLoginTab();
      expect(component.isSignUp).toBe(false);
    });
  });

  describe('hideFunction', () => {
    it('should toggle passwordhide for password type', () => {
      component.passwordhide = true;
      component.hideFunction('password');
      expect(component.passwordhide).toBe(false);
      component.hideFunction('password');
      expect(component.passwordhide).toBe(true);
    });

    it('should toggle confirmpasswordhide for confirm type', () => {
      component.confirmpasswordhide = true;
      component.hideFunction('confirm');
      expect(component.confirmpasswordhide).toBe(false);
    });
  });

  describe('signup', () => {
    it('should call addUser and show success on response > 0', () => {
      component.registrationForm.patchValue({
        fullname: 'John Doe',
        email: 'john@example.com',
        ogpassword: 'pass123',
        confirmPassword: 'pass123'
      });
      component.signup();
      expect(mockOnboardingService.addUser).toHaveBeenCalledWith(
        jasmine.objectContaining({
          FName: 'John',
          Lname: 'Doe',
          Email: 'john@example.com',
          Pwd: 'pass123'
        })
      );
    });

    it('should handle addUser error and show message', () => {
      mockOnboardingService.addUser.and.returnValue(throwError({ error: { Message: 'Email already exists' } }));
      component.registrationForm.patchValue({
        fullname: 'John Doe',
        email: 'john@example.com',
        ogpassword: 'pass123',
        confirmPassword: 'pass123'
      });
      component.signup();
      expect(component.enableAlert).toBe(true);
      expect(component.content).toBe('Email already exists');
    });
  });

  describe('emailLogin', () => {
    it('should call emailLogin and setUpLoginConfiguration on success', () => {
      component.email = 'test@test.com';
      component.password = 'pass123';
      component.emailLogin();
      expect(mockOnboardingService.emailLogin).toHaveBeenCalledWith('test@test.com', 'pass123');
    });
  });

  describe('setUpLoginConfiguration', () => {
    it('should show alert when UserId is 0', () => {
      component.setUpLoginConfiguration({
        UserId: 0,
        Name: '',
        access_token: '',
        Subscriber: 0
      });
      expect(component.showAlert).toBe(true);
      expect(component.content).toContain('wrong credentials');
      expect(component.enableAlert).toBe(true);
    });

    it('should show alert when UserId is -1', () => {
      component.setUpLoginConfiguration({
        UserId: -1,
        Name: '',
        access_token: '',
        Subscriber: 0
      });
      expect(component.showAlert).toBe(true);
      expect(component.content).toContain('Email was Not Verified');
    });

    it('should navigate when UrlToRedirect is set', fakeAsync(() => {
      (SharedService as any).UrlToRedirect = '/adults/some-page';
      mockOnboardingService.getuser.and.returnValue(of([{ SurveyDone: '1' }]));
      component.setUpLoginConfiguration({
        UserId: 123,
        Name: 'Test',
        access_token: 'tok',
        Subscriber: 1,
        RoleID: 1,
        SubscriberType: 'Annual',
        IsPartner: '0',
        PartnerOption: '',
        NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/some-page']);
      expect((SharedService as any).UrlToRedirect).toBeNull();
    }));
  });

  describe('googleLogin / fbLogin', () => {
    it('googleLogin should log google_signup for signup', () => {
      component.googleLogin('signup');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('google_signup');
    });

    it('googleLogin should log google_login for login', () => {
      component.googleLogin('login');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('google_login');
    });

    it('fbLogin should log facebook_signup for signup', () => {
      component.fbLogin('signup');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('facebook_signup');
    });

    it('fbLogin should log facebook_login for login', () => {
      component.fbLogin('login');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('facebook_login');
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should call emailLogin when content is AccountCreated', () => {
      component.content = Constant.AccountCreated;
      component.email = 'test@test.com';
      component.password = 'pass123';
      spyOn(component, 'emailLogin');
      component.getAlertcloseEvent(null);
      expect(component.emailLogin).toHaveBeenCalled();
      expect(component.content).toBe('');
      expect(component.enableAlert).toBe(false);
    });

    it('should clear content and enableAlert when content is not AccountCreated', () => {
      component.content = 'Other message';
      component.enableAlert = true;
      component.getAlertcloseEvent(null);
      expect(component.content).toBe('');
      expect(component.enableAlert).toBe(false);
    });
  });

  describe('routetoUrl', () => {
    it('should open url in new window', () => {
      spyOn(window, 'open');
      component.routetoUrl('/help');
      expect(window.open).toHaveBeenCalledWith('/adults/help', '_blank');
    });
  });

  describe('getrenew', () => {
    it('should set isloggedin and navigate to add-to-cart', fakeAsync(() => {
      component.closemodal = { nativeElement: { click: jasmine.createSpy('click') } } as any;
      component.getrenew();
      expect(localStorage.getItem('isloggedin')).toBe('T');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/add-to-cart']);
    }));
  });

  describe('additional coverage', () => {
    it('verifyCode success', fakeAsync(() => {
      component.verificationCode = '1234';
      component.registrationForm.patchValue({ email: 'a@b.com', ogpassword: 'pass123' });
      component.closeotpmodal = { nativeElement: { click: jasmine.createSpy() } } as any;
      component.closemodal = { nativeElement: { click: jasmine.createSpy() } } as any;
      mockOnboardingService.verifyCode.and.returnValue(of(true));
      component.verifyCode();
      tick(1500);
      expect(component.codeVerified).toBe(true);
      expect(component.isSignUp).toBe(false);
    }));

    it('PasswordValidator returns null when pristine', () => {
      const ctrl = { get: (k: string) => ({ value: 'a', pristine: true }) };
      expect(component.PasswordValidator(ctrl as any)).toBeNull();
    });

    it('PasswordValidator returns misMatch when passwords differ', () => {
      const ctrl = { get: (k: string) => k === 'ogpassword' ? { value: 'pass1', pristine: false } : { value: 'pass2', pristine: false } };
      expect(component.PasswordValidator(ctrl as any)).toEqual({ misMatch: true });
    });

    it('signup with single word fullname sets Lname empty', () => {
      component.registrationForm.patchValue({ fullname: 'John', email: 'j@j.com', ogpassword: 'pass123', confirmPassword: 'pass123' });
      component.signup();
      expect(mockOnboardingService.addUser).toHaveBeenCalledWith(jasmine.objectContaining({ FName: 'John', Lname: '' }));
    });

    it('setUpLoginConfiguration option T navigates to personalised', fakeAsync(() => {
      localStorage.setItem('introoption', 'T');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/intro/personalised-for-you']);
    }));

    it('setUpLoginConfiguration acceptCookie navigates to change-password when roleid 8', fakeAsync(() => {
      localStorage.setItem('activeCode', 'T');
      localStorage.setItem('subscribepage', 'T');
      localStorage.setItem('emailCode', 'T');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 8, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/change-password']);
    }));

    it('setUpLoginConfiguration giftwisdom navigates to add-to-cart', fakeAsync(() => {
      localStorage.setItem('activeCode', 'T');
      localStorage.setItem('subscribepage', 'T');
      localStorage.setItem('giftwisdom', 'T');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/add-to-cart']);
    }));

    it('setUpLoginConfiguration Subscriber 0 navigates to add-to-cart', fakeAsync(() => {
      localStorage.setItem('activeCode', 'T');
      localStorage.setItem('subscribepage', 'T');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 0, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/add-to-cart']);
    }));

    it('setUpLoginConfiguration Subscriber 1 navigates to viewcart', fakeAsync(() => {
      localStorage.setItem('activeCode', 'T');
      localStorage.setItem('subscribepage', 'T');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/viewcart']);
    }));

    it('setUpLoginConfiguration NoOfVisits 1 Adults navigates to change-topic', fakeAsync(() => {
      Object.defineProperty(SharedService, 'ProgramId', { get: () => ProgramType.Adults, configurable: true });
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 1
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/change-topic'], jasmine.any(Object));
    }));

    it('setUpLoginConfiguration NoOfVisits 1 Teenagers navigates to change-topic', fakeAsync(() => {
      Object.defineProperty(SharedService, 'ProgramId', { get: () => ProgramType.Teenagers, configurable: true });
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 1
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/change-topic'], jasmine.any(Object));
    }));

    it('setUpLoginConfiguration NoOfVisits > 1 navigates to repeat-user', fakeAsync(() => {
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults/repeat-user']);
    }));

    it('setUpLoginConfiguration navigateToUpgradeToPremium IsPartner ReceiveIncome', fakeAsync(() => {
      (mockOnboardingService as any).navigateToUpgradeToPremium = true;
      localStorage.setItem('IsPartner', '1');
      localStorage.setItem('PartnerOption', 'ReceiveIncome');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '1', PartnerOption: 'ReceiveIncome', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/partnership-report/income-activity']);
    }));

    it('setUpLoginConfiguration navigateToUpgradeToPremium IsPartner tree', fakeAsync(() => {
      (mockOnboardingService as any).navigateToUpgradeToPremium = true;
      localStorage.setItem('IsPartner', '1');
      localStorage.setItem('PartnerOption', 'Tree');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '1', PartnerOption: 'Tree', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/partnership-report/tree-plantation-report']);
    }));

    it('setUpLoginConfiguration navigateToUpgradeToPremium partnership-app', fakeAsync(() => {
      (mockOnboardingService as any).navigateToUpgradeToPremium = true;
      localStorage.setItem('IsPartner', '0');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults/partnership-app']);
    }));

    it('setUpLoginConfiguration pers persub navigates to payment', fakeAsync(() => {
      localStorage.setItem('personalised', 'T');
      localStorage.setItem('personalised subscription', 'plan1');
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/payment'], jasmine.objectContaining({ state: jasmine.any(Object) }));
    }));

    it('setUpLoginConfiguration UrlToRedirect subscription isSubscriber adults', fakeAsync(() => {
      (SharedService as any).UrlToRedirect = '/adults/subscription/try-free-and-subscribe';
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(true);
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults/adult-dashboard']);
    }));

    it('setUpLoginConfiguration UrlToRedirect subscription isSubscriber teenagers', fakeAsync(() => {
      (SharedService as any).UrlToRedirect = '/teenagers/subscription/try-free-and-subscribe';
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(true);
      Object.defineProperty(SharedService, 'ProgramId', { get: () => ProgramType.Teenagers, configurable: true });
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'T', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5
      } as any);
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/teenager-dashboard']);
    }));

    it('setUpLoginConfiguration saveUsername true uses localStorage', fakeAsync(() => {
      component.saveUsername = true;
      component.email = 'e@e.com';
      component.setUpLoginConfiguration({
        UserId: 123, Name: 'Test', access_token: 't', Subscriber: 1, RoleID: 1, SubscriberType: 'A', IsPartner: '0', PartnerOption: '', NoOfVisits: 5, Email: 'e@e.com'
      } as any);
      tick();
      expect(localStorage.getItem('userEmail')).toBeTruthy();
    }));

    it('handleCredentialResponse runs in zone', () => {
      spyOn(component['zone'], 'run').and.callFake((fn: any) => fn());
      spyOn(component as any, 'handleCredential');
      component.handleCredentialResponse({ credential: 'tok' });
      expect(component['zone'].run).toHaveBeenCalled();
      expect((component as any).handleCredential).toHaveBeenCalledWith({ credential: 'tok' });
    });

    it('signInWithApple logs and opens url', () => {
      spyOn(window, 'open');
      component.signInWithApple('signup');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('apple_signup');
      expect(window.open).toHaveBeenCalled();
    });

    it('handleAppleLoginResponse navigates when token exists', () => {
      localStorage.setItem('token', 'abc');
      component.handleAppleLoginResponse();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('resolved sets isValidCaptach', () => {
      mockOnboardingService.verifyCaptcha.and.returnValue(of({ valid: true }));
      component.resolved('captcha-token');
      expect(component.isValidCaptach).toBe(true);
    });

    it('onKeyPress hides password-reveal when element exists', () => {
      const host = fixture.debugElement.nativeElement;
      const div = document.createElement('div');
      div.id = 'password-reveal';
      host.appendChild(div);
      component.onKeyPress(null);
      expect(div.style.display).toBe('none');
      host.removeChild(div);
    });

    it('getfreeuser calls freescreens', () => {
      component.getfreeuser();
      expect(mockOnboardingService.freeScreens).toHaveBeenCalled();
    });

    it('emailLogin calls verifyUser when urlEmail set', () => {
      component.urlEmail = 'url@email.com';
      component.email = 'e@e.com';
      component.password = 'p';
      component.emailLogin();
      expect(mockOnboardingService.verifyUser).toHaveBeenCalledWith('url@email.com');
    });

    it('getters return form controls', () => {
      fixture.detectChanges();
      expect(component.fullname).toBeDefined();
      expect(component.emailvalid).toBeDefined();
      expect(component.passwordvalid).toBeDefined();
      expect(component.confirmpasswordvalid).toBeDefined();
    });

    it('ngOnInit clears forceGoogleReinit containers', () => {
      sessionStorage.setItem('forceGoogleReinit', 'true');
      const div1 = document.createElement('div');
      div1.id = 'googleBtnSignup';
      document.body.appendChild(div1);
      const div2 = document.createElement('div');
      div2.id = 'googleBtnLogin';
      document.body.appendChild(div2);
      component.ngOnInit();
      expect(div1.innerHTML).toBe('');
      expect(div2.innerHTML).toBe('');
      document.body.removeChild(div1);
      document.body.removeChild(div2);
    });
  });
});
