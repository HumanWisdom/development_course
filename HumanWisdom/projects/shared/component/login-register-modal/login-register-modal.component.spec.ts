import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginRegisterModalComponent } from './login-register-modal.component';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { Platform } from '@angular/cdk/platform';
import { ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

class MockAdultsService {
  resendotp = jasmine.createSpy('resendotp').and.returnValue(of({}));
  freeScreens = jasmine.createSpy('freeScreens').and.returnValue(of([]));
}

describe('LoginRegisterModalComponent', () => {
  let component: LoginRegisterModalComponent;
  let fixture: ComponentFixture<LoginRegisterModalComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockAdultsService: MockAdultsService;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], { url: '/adults/home' });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'addUser', 'verifyCode', 'emailLogin', 'verifyGoogle', 'verifyFb', 'getuser'
    ]);
    mockOnboardingService.addUser.and.returnValue(of(1));
    mockOnboardingService.getuser.and.returnValue(of([{}]));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    mockAdultsService = new MockAdultsService();

    localStorage.clear();
    localStorage.setItem('loginResponse', '{}');
    localStorage.setItem('saveUsername', 'false');
    localStorage.setItem('name', 'Test User');
    localStorage.setItem('email', 'test@test.com');
    localStorage.setItem('guest', 'F');
    localStorage.setItem('first', 'F');
    localStorage.setItem('Subscriber', '0');
    localStorage.setItem('isloggedin', 'F');
    localStorage.setItem('userId', JSON.stringify(100));

    spyOn((LoginRegisterModalComponent.prototype as any), 'loadGoogleSignInScript').and.returnValue(Promise.resolve());
    spyOn((LoginRegisterModalComponent.prototype as any), 'renderGoogleButtonsWhenReady');
    spyOn((LoginRegisterModalComponent.prototype as any), 'loadFacebookSDK');

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LoginRegisterModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Platform, useValue: { IOS: false, ANDROID: false } },
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: AdultsService, useValue: mockAdultsService },
        UntypedFormBuilder
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterModalComponent);
    component = fixture.componentInstance;
    component.activemodal = { nativeElement: { contains: () => true } } as any;
    component.actclosemodal = { nativeElement: { click: jasmine.createSpy('click') } } as any;
    component.redeemsubscription = { nativeElement: { click: jasmine.createSpy('click') } } as any;
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

  it('should set isAdults to true when ProgramId is Adults', () => {
    expect(component.isAdults).toBe(true);
  });

  it('should have registrationForm with required controls', () => {
    expect(component.registrationForm.get('fname')).toBeTruthy();
    expect(component.registrationForm.get('lname')).toBeTruthy();
    expect(component.registrationForm.get('email')).toBeTruthy();
    expect(component.registrationForm.get('password')).toBeTruthy();
    expect(component.registrationForm.get('confirmPassword')).toBeTruthy();
  });

  it('should have fname, lname, emailvalid, passwordvalid, confirmpasswordvalid getters', () => {
    expect(component.fname).toBe(component.registrationForm.get('fname'));
    expect(component.lname).toBe(component.registrationForm.get('lname'));
    expect(component.emailvalid).toBe(component.registrationForm.get('email'));
    expect(component.passwordvalid).toBe(component.registrationForm.get('password'));
    expect(component.confirmpasswordvalid).toBe(component.registrationForm.get('confirmPassword'));
  });

  it('getAlertcloseEvent should clear content, enableAlert, enablecancel', () => {
    component.content = 'error';
    component.enableAlert = true;
    component.enablecancel = true;
    component.alertenabled = true;
    component.getAlertcloseEvent({});
    expect(component.content).toBe('');
    expect(component.enableAlert).toBe(false);
    expect(component.enablecancel).toBe(false);
  });

  it('closeModalevent should set enabledModal false and emit closeModal false', () => {
    spyOn(component.closeModal, 'emit');
    component.enabledModal = true;
    component.closeModalevent();
    expect(component.enabledModal).toBe(false);
    expect(component.closeModal.emit).toHaveBeenCalledWith(false);
  });

  it('hideFunction password should toggle passwordhide', () => {
    expect(component.passwordhide).toBe(true);
    component.hideFunction('password');
    expect(component.passwordhide).toBe(false);
    component.hideFunction('password');
    expect(component.passwordhide).toBe(true);
  });

  it('hideFunction confirm should toggle confirmpasswordhide', () => {
    expect(component.confirmpasswordhide).toBe(true);
    component.hideFunction('confirm');
    expect(component.confirmpasswordhide).toBe(false);
    component.hideFunction('confirm');
    expect(component.confirmpasswordhide).toBe(true);
  });

  it('loginGoogle with signup should log google_signup', () => {
    component.loginGoogle('signup');
    expect(mockLogEventService.logEvent).toHaveBeenCalledWith('google_signup');
  });

  it('loginGoogle without signup should log google_login', () => {
    component.loginGoogle();
    expect(mockLogEventService.logEvent).toHaveBeenCalledWith('google_login');
  });

  it('fbLogin signup should log facebook_signup', () => {
    component.fbLogin('signup');
    expect(mockLogEventService.logEvent).toHaveBeenCalledWith('facebook_signup');
  });

  it('fbLogin login should log facebook_login', () => {
    component.fbLogin('login');
    expect(mockLogEventService.logEvent).toHaveBeenCalledWith('facebook_login');
  });

  it('should have isAdvertpage input default false', () => {
    expect(component.isAdvertpage).toBe(false);
  });

  it('PasswordValidator should set misMatch when password and confirmPassword differ', () => {
    component.registrationForm.get('password').setValue('pass123');
    component.registrationForm.get('confirmPassword').setValue('other');
    component.registrationForm.get('password').markAsDirty();
    component.registrationForm.get('confirmPassword').markAsDirty();
    const errors = component.PasswordValidator(component.registrationForm);
    expect(errors).toEqual({ misMatch: true });
  });

  it('PasswordValidator should return null when password and confirmPassword match', () => {
    component.registrationForm.get('password').setValue('pass123');
    component.registrationForm.get('confirmPassword').setValue('pass123');
    component.registrationForm.get('password').markAsDirty();
    component.registrationForm.get('confirmPassword').markAsDirty();
    const errors = component.PasswordValidator(component.registrationForm);
    expect(errors).toBeNull();
  });
});
