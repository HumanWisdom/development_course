import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelSubscriptionReasonPage } from './cancel-subscription-reason.page';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OnboardingService } from '../../../services/onboarding.service';
import { SharedService } from '../../../services/shared.service';
import { Constant } from '../../../services/constant';
import { ProgramType } from '../../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CancelSubscriptionReasonPage', () => {
  let component: CancelSubscriptionReasonPage;
  let fixture: ComponentFixture<CancelSubscriptionReasonPage>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockProgramId: any;
  let mockModalElement: { style: { display: string } };

  beforeEach(async () => {
    mockModalElement = { style: { display: '' } };
    spyOn(document, 'getElementById').and.returnValue(mockModalElement as any);

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['getCancelReason', 'cancelSubscription']);
    mockOnboardingService.getCancelReason.and.returnValue(of([]));
    mockOnboardingService.cancelSubscription.and.returnValue(of({ success: true }));

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue(null);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    await TestBed.configureTestingModule({
      declarations: [CancelSubscriptionReasonPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelSubscriptionReasonPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getReason', () => {
      component.ngOnInit();
      expect(mockOnboardingService.getCancelReason).toHaveBeenCalled();
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(CancelSubscriptionReasonPage);
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
      fixture = TestBed.createComponent(CancelSubscriptionReasonPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });
  });

  describe('getReason', () => {
    it('should populate reasonList from API response', () => {
      const mockReasons = [
        { ReasonId: 1, Reason: 'Too expensive' },
        { ReasonId: 2, Reason: 'Not using enough' }
      ];
      mockOnboardingService.getCancelReason.and.returnValue(of(mockReasons));

      component.getReason();

      expect(component.reasonList).toEqual(mockReasons);
    });
  });

  describe('cancelSubscription', () => {
    it('should not call API when ActivationKey is not in localStorage', () => {
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(null);

      component.cancelSubscription();

      expect(mockOnboardingService.cancelSubscription).not.toHaveBeenCalled();
    });

    it('should call cancelSubscription and navigate when ActivationKey exists', () => {
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue('test-activation-key');
      const dispatchSpy = spyOn(window, 'dispatchEvent');

      component.cancelSubscription();

      expect(dispatchSpy).toHaveBeenCalledWith(jasmine.any(CustomEvent));
      expect(mockOnboardingService.cancelSubscription).toHaveBeenCalledWith('test-activation-key', 1);
    });

    it('should navigate to cancelled page on successful cancel', () => {
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue('test-key');
      spyOn(window, 'dispatchEvent');

      component.cancelSubscription();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/myprogram/cancelled']);
    });
  });

  describe('back', () => {
    it('should call location.back', () => {
      component.back();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('closePopUp', () => {
    it('should hide modal by setting display to none', () => {
      component.closePopUp();
      expect(document.getElementById).toHaveBeenCalledWith('cancel_subscription_add_info');
      expect(mockModalElement.style.display).toBe('none');
    });
  });

  describe('OpenPopup', () => {
    it('should show modal by setting display to block', () => {
      component.OpenPopup();
      expect(document.getElementById).toHaveBeenCalledWith('cancel_subscription_add_info');
      expect(mockModalElement.style.display).toBe('block');
    });
  });
});
