import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SetPasswordPage } from './set-password.page';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('SetPasswordPage', () => {
  let component: SetPasswordPage;
  let fixture: ComponentFixture<SetPasswordPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: { queryParams: ReturnType<typeof of> };
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockActivatedRoute = {
      queryParams: of({ email: 'user@example.com' })
    };

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['forgotPassword']);
    mockOnboardingService.forgotPassword.and.returnValue(
      of('Your password has been reset.')
    );

    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    await TestBed.configureTestingModule({
      declarations: [SetPasswordPage],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: OnboardingService, useValue: mockOnboardingService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SetPasswordPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    sessionStorage.clear();
  });

  describe('component creation and constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set urlEmail from queryParams', fakeAsync(() => {
      tick();
      expect(component.urlEmail).toBe('user@example.com');
    }));

    it('should have initial state', () => {
      expect(component.showWarning).toBe(false);
      expect(component.successPassword).toBe(0);
      expect(component.enableAlert).toBe(false);
      expect(component.content).toBe('');
      expect(component.passwordhide).toBe(true);
      expect(component.confirmpasswordhide).toBe(true);
    });
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(SetPasswordPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });
  });

  describe('forgotPassword', () => {
    it('should set showWarning true when password and confirmPassword do not match', () => {
      component.urlEmail = 'u@x.com';
      component.password = 'pass123';
      component.confirmPassword = 'pass456';
      component.forgotPassword();
      expect(component.showWarning).toBe(true);
      expect(mockOnboardingService.forgotPassword).not.toHaveBeenCalled();
    });

    it('should call forgotPassword when passwords match', fakeAsync(() => {
      component.urlEmail = 'user@example.com';
      component.password = 'password123';
      component.confirmPassword = 'password123';
      component.forgotPassword();
      expect(component.showWarning).toBe(false);
      expect(mockOnboardingService.forgotPassword).toHaveBeenCalledWith({
        Email: 'user@example.com',
        Pwd: 'password123'
      });
      tick();
      expect(component.successPassword).toBe(1);
      expect(sessionStorage.getItem('successPassword')).toBe('1');
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        '/adults/onboarding/login'
      ]);
      expect(component.content).toBe('Password successfully Set');
      expect(component.enableAlert).toBe(true);
    }));

    it('should not set successPassword or navigate when response does not match reset message', fakeAsync(() => {
      mockOnboardingService.forgotPassword.and.returnValue(of('Invalid token'));
      component.urlEmail = 'u@x.com';
      component.password = 'pass123';
      component.confirmPassword = 'pass123';
      component.forgotPassword();
      tick();
      expect(component.successPassword).toBe(0);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
      expect(component.enableAlert).toBe(false);
    }));

    it('should match reset message case-insensitively', fakeAsync(() => {
      mockOnboardingService.forgotPassword.and.returnValue(
        of('YOUR PASSWORD HAS BEEN RESET.')
      );
      component.urlEmail = 'u@x.com';
      component.password = 'pass123';
      component.confirmPassword = 'pass123';
      component.forgotPassword();
      tick();
      expect(component.successPassword).toBe(1);
      expect(mockRouter.navigate).toHaveBeenCalled();
    }));
  });

  describe('getAlertcloseEvent', () => {
    it('should clear content and enableAlert', () => {
      component.content = 'Some message';
      component.enableAlert = true;
      component.getAlertcloseEvent({} as any);
      expect(component.content).toBe('');
      expect(component.enableAlert).toBe(false);
    });
  });

  describe('hideFunction', () => {
    it('should toggle passwordhide when type is password', () => {
      expect(component.passwordhide).toBe(true);
      component.hideFunction('password');
      expect(component.passwordhide).toBe(false);
      component.hideFunction('password');
      expect(component.passwordhide).toBe(true);
    });

    it('should toggle confirmpasswordhide when type is not password', () => {
      expect(component.confirmpasswordhide).toBe(true);
      component.hideFunction('confirm');
      expect(component.confirmpasswordhide).toBe(false);
      component.hideFunction('');
      expect(component.confirmpasswordhide).toBe(true);
    });
  });
});
