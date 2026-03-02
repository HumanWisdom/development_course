import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetPasswordPage } from './forget-password.page';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService, UrlConstant } from '../../services/shared.service';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { of, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ForgetPasswordPage', () => {
  let component: ForgetPasswordPage;
  let fixture: ComponentFixture<ForgetPasswordPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLocation: jasmine.SpyObj<Location>;
  let queryParamsSubject: Subject<any>;
  let mockActivatedRoute: { queryParams: any };
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: 9,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['sendPasswordLink']);
    mockOnboardingService.sendPasswordLink.and.returnValue(of({}));

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    queryParamsSubject = new Subject();
    mockActivatedRoute = { queryParams: queryParamsSubject.asObservable() };

    spyOn(SharedService, 'getUrlfromFeatureName').and.returnValue(null);

    TestBed.configureTestingModule({
      declarations: [ForgetPasswordPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: Location, useValue: mockLocation },
        { provide: NavigationService, useValue: jasmine.createSpyObj('NavigationService', ['navigateToBackLink']) }
      ]
    });

    fixture = TestBed.createComponent(ForgetPasswordPage);
    component = fixture.componentInstance;
    queryParamsSubject.next({});
    fixture.detectChanges();
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
  });

  describe('component creation and constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set urlKey from queryParams', () => {
      fixture = TestBed.createComponent(ForgetPasswordPage);
      component = fixture.componentInstance;
      queryParamsSubject.next({ key: 'abc123' });
      fixture.detectChanges();
      expect(component.urlKey).toBe('abc123');
    });
  });

  describe('ngOnInit', () => {
    it('should set isAdults true when ProgramId is 9', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults false when ProgramId is not 9', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: 10,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(ForgetPasswordPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component.isAdults).toBe(false);
    });
  });

  describe('recoverPassword', () => {
    it('should call sendPasswordLink with email', () => {
      component.email = 'user@example.com';
      component.recoverPassword();
      expect(mockOnboardingService.sendPasswordLink).toHaveBeenCalledWith('user@example.com');
    });

    it('on complete should set content and enableAlert', () => {
      component.email = 'user@example.com';
      component.recoverPassword();
      expect(component.content).toBe('A recovery link has been sent to you');
      expect(component.enableAlert).toBe(true);
    });
  });

  describe('emailKeyup', () => {
    it('should set email from value', () => {
      component.emailKeyup('test@test.com');
      expect(component.email).toBe('test@test.com');
    });
  });

  describe('ValidateEmail', () => {
    it('should return true for valid email', () => {
      component.email = 'user@example.com';
      expect(component.ValidateEmail()).toBe(true);
    });

    it('should return false for invalid email', () => {
      component.email = 'invalid';
      expect(component.ValidateEmail()).toBe(false);
    });

    it('should return false for empty email', () => {
      component.email = '';
      expect(component.ValidateEmail()).toBeFalsy();
    });

    it('should return true for email with dots in local part', () => {
      component.email = 'user.name@example.co.uk';
      expect(component.ValidateEmail()).toBe(true);
    });
  });

  describe('loginpage', () => {
    it('should navigate to onboarding login', () => {
      component.loginpage();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/login']);
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should clear content and set enableAlert false', () => {
      component.content = 'Message';
      component.enableAlert = true;
      component.getAlertcloseEvent({});
      expect(component.content).toBe('');
      expect(component.enableAlert).toBe(false);
    });
  });

  describe('back', () => {
    it('when getUrlfromFeatureName returns url should navigate to it', () => {
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/onboarding/login');
      component.back();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(UrlConstant.login);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/login']);
    });

    it('when getUrlfromFeatureName returns null should call location.back', () => {
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue(null);
      component.back();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });
});
