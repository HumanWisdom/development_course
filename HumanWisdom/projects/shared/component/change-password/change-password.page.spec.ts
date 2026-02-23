import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePasswordPage } from './change-password.page';
import { Router, ActivatedRoute } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChangePasswordPage', () => {
  let component: ChangePasswordPage;
  let fixture: ComponentFixture<ChangePasswordPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockActivatedRoute: any;
  let mockProgramId: any;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['setPassword']);
    mockOnboardingService.setPassword.and.returnValue(of('Your password has been reset.'));

    mockActivatedRoute = { queryParams: of({ email: null }) };

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    await TestBed.configureTestingModule({
      declarations: [ChangePasswordPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: LogEventService, useValue: mockLogEventService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePasswordPage);
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

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ChangePasswordPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });
  });

  describe('forgotPassword', () => {
    it('should show alert when all password fields are empty', () => {
      component.password = '';
      component.confirmPassword = '';
      component.oldpassword = '';

      component.forgotPassword();

      expect(component.content).toBe('Please enter all the password fields');
      expect(component.enableAlert).toBe(true);
      expect(mockOnboardingService.setPassword).not.toHaveBeenCalled();
    });

    it('should show alert when old password is incorrect', () => {
      localStorage.setItem('pswd', 'correctOld');
      component.oldpassword = 'wrongOld';
      component.password = 'newpass1';
      component.confirmPassword = 'newpass1';

      component.forgotPassword();

      expect(component.content).toBe('Old password you have entered is incorrect');
      expect(component.enableAlert).toBe(true);
    });

    it('should show alert when password and confirm password do not match', () => {
      localStorage.setItem('pswd', 'oldpass1');
      component.oldpassword = 'oldpass1';
      component.password = 'newpass1';
      component.confirmPassword = 'different';

      component.forgotPassword();

      expect(component.content).toBe('Confirm & New Password do not match');
      expect(component.enableAlert).toBe(true);
    });

    it('should show alert when password lacks letter or digit', () => {
      localStorage.setItem('pswd', 'oldpass1');
      component.oldpassword = 'oldpass1';
      component.password = '123456';
      component.confirmPassword = '123456';

      component.forgotPassword();

      expect(component.content).toBe('Password must contain one letter and one digit');
      expect(component.enableAlert).toBe(true);
    });

    it('should call setPassword and show success on valid input', () => {
      localStorage.setItem('pswd', 'oldpass1');
      localStorage.setItem('userId', '123');
      component.oldpassword = 'oldpass1';
      component.password = 'newpass1';
      component.confirmPassword = 'newpass1';

      component.forgotPassword();

      expect(mockOnboardingService.setPassword).toHaveBeenCalledWith({
        UserID: 123,
        Pwd: 'newpass1',
        OldPwd: 'oldpass1'
      });
    });

    it('should set successPassword and content on successful reset', () => {
      localStorage.setItem('pswd', 'oldpass1');
      localStorage.setItem('userId', '123');
      component.oldpassword = 'oldpass1';
      component.password = 'newpass1';
      component.confirmPassword = 'newpass1';

      component.forgotPassword();

      expect(localStorage.getItem('pswd')).toBe('newpass1');
      expect(component.successPassword).toBe(1);
      expect(component.content).toBe('Your password has been reset.');
    });
  });

  describe('checkPasswordValidation', () => {
    it('should return false for empty password', () => {
      expect(component.checkPasswordValidation('')).toBe(false);
      expect(component.checkPasswordValidation(null)).toBe(false);
    });

    it('should return false when password has no letter', () => {
      expect(component.checkPasswordValidation('123456')).toBe(false);
    });

    it('should return false when password has no digit', () => {
      expect(component.checkPasswordValidation('abcdef')).toBe(false);
    });

    it('should return true when password has letter and digit', () => {
      expect(component.checkPasswordValidation('pass1')).toBe(true);
      expect(component.checkPasswordValidation('1secret')).toBe(true);
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should clear content and enableAlert', () => {
      component.content = 'Some message';
      component.enableAlert = true;

      component.getAlertcloseEvent({});

      expect(component.content).toBe('');
      expect(component.enableAlert).toBe(false);
    });

    it('should navigate to login when successPassword is 1', () => {
      component.successPassword = 1;
      localStorage.setItem('RoleID', '1');
      localStorage.setItem('emailCode', 'F');

      component.getAlertcloseEvent({});

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
    });
  });

  describe('Logevent', () => {
    it('should navigate to given route', () => {
      component.Logevent('/onboarding/user-profile');

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/user-profile']);
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

    it('should toggle confirmpasswordhide for confirmpassword type', () => {
      component.confirmpasswordhide = true;
      component.hideFunction('confirmpassword');
      expect(component.confirmpasswordhide).toBe(false);
    });

    it('should toggle oldpasswordhide for oldpassword type', () => {
      component.oldpasswordhide = true;
      component.hideFunction('oldpassword');
      expect(component.oldpasswordhide).toBe(false);
    });
  });
});
