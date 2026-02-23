import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SubscriptionPaymentPage } from './subscription-payment.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { ProgramType } from '../../models/program-model';
import { of, Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('SubscriptionPaymentPage', () => {
  let component: SubscriptionPaymentPage;
  let fixture: ComponentFixture<SubscriptionPaymentPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
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
    mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue({
      extras: { state: { quan: 1, plan: 'Monthly', rateId: '2' } }
    });

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'stripe',
      'getGBPcuurency',
      'getCountry',
      'getPricing',
      'getOrderId',
      'callAddraction'
    ]);
    mockOnboardingService.stripe.and.returnValue(of('pi_test_123'));
    mockOnboardingService.getGBPcuurency.and.returnValue(of('99.00'));
    mockOnboardingService.getCountry.and.returnValue(
      of({
        in_eu: false,
        country_code_iso3: 'USA',
        country_name: 'United States',
        country: 'US',
        currency: 'USD'
      })
    );
    mockOnboardingService.getPricing.and.returnValue(of([{ ISOCode: 'USD' }]));
    mockOnboardingService.getOrderId.and.returnValue(of('order_123'));
    mockOnboardingService.callAddraction.and.returnValue(of({}));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue('T');
    spyOn(SharedService, 'setDataInLocalStorage');
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    localStorage.clear();
    localStorage.setItem('totalAmount', '99');
    localStorage.setItem('Currsymbol', '$');
    localStorage.setItem('ISOCode', 'USD');
    localStorage.setItem('userId', JSON.stringify(107));
    localStorage.setItem('couponid', '0');
    localStorage.setItem('AffReferralCode', '');
    localStorage.setItem('discountCode', '');
    (SharedService.getDataFromLocalStorage as jasmine.Spy).and.callFake((key: string) => (key === Constant.Checkout ? 'T' : null));

    (window as any).Stripe = jasmine.createSpy('Stripe').and.returnValue({
      elements: () => ({
        create: () => ({ mount: () => {}, clear: () => {} }),
        paymentRequest: () => ({
          canMakePayment: () => Promise.resolve(null),
          on: () => {}
        })
      })
    });

    const paymentReqBtn = document.createElement('div');
    paymentReqBtn.id = 'payment-request-button';
    document.body.appendChild(paymentReqBtn);
    const submitBtn = document.createElement('button');
    submitBtn.id = 'btnsubmit';
    document.body.appendChild(submitBtn);

    await TestBed.configureTestingModule({
      declarations: [SubscriptionPaymentPage],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: LogEventService, useValue: mockLogEventService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionPaymentPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    const prBtn = document.getElementById('payment-request-button');
    const sbBtn = document.getElementById('btnsubmit');
    prBtn?.remove();
    sbBtn?.remove();
    localStorage.clear();
  });

  describe('Component creation and constructor', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set amount, symbol, isoCode from localStorage', () => {
      expect(component.amount).toBe('99');
      expect(component.symbol).toBe('$');
      expect(component.isoCode).toBe('USD');
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', { value: ProgramType.Teenagers, writable: true, configurable: true });
      fixture = TestBed.createComponent(SubscriptionPaymentPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should call service.stripe with obj and set stripeId and enable on success', fakeAsync(() => {
      tick();
      expect(mockOnboardingService.stripe).toHaveBeenCalled();
      expect(component.stripeId).toBe('pi_test_123');
      expect(component.enable).toBe(true);
    }));

    it('should set stripeId from error message and enable on stripe error', fakeAsync(() => {
      const errPayload = { error: { Message: 'Card declined' } };
      mockOnboardingService.stripe.and.returnValue(
        new Observable(obs => obs.error(errPayload))
      );
      fixture = TestBed.createComponent(SubscriptionPaymentPage);
      component = fixture.componentInstance;
      tick();
      expect(component.stripeId).toBe('Card declined');
      expect(component.enable).toBe(true);
    }));

    it('should build obj with Quantity 1 and MyselfSub when Checkout is T', fakeAsync(() => {
      tick();
      expect(component.obj).toBeDefined();
      expect(component.obj.Quantity).toBe(1);
      expect(component.obj.MyselfSub).toBe('1');
      expect(component.obj.RateID).toBe('2');
      expect(component.obj.PlanId).toBe('1');
    }));

    it('should build obj with quan from state when Checkout is not T', fakeAsync(() => {
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue('F');
      mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue({
        extras: { state: { quan: 3, plan: 'Annual', rateId: '5' } }
      });
      fixture = TestBed.createComponent(SubscriptionPaymentPage);
      component = fixture.componentInstance;
      tick();
      expect(component.obj.Quantity).toBe(3);
      expect(component.obj.PlanId).toBe('2');
    }));

    it('should call setDataInLocalStorage to set Checkout to F', () => {
      expect(SharedService.setDataInLocalStorage).toHaveBeenCalledWith(Constant.Checkout, 'F');
    });
  });

  describe('getCountry', () => {
    it('should set countryCode to EUR when in_eu is true', fakeAsync(() => {
      mockOnboardingService.getCountry.and.returnValue(of({ in_eu: true, country_name: 'Germany', country: 'DE', currency: 'EUR' }));
      fixture = TestBed.createComponent(SubscriptionPaymentPage);
      component = fixture.componentInstance;
      tick();
      expect(component.countryCode).toBe('EUR');
    }));

    it('should set countryCode to country_code_iso3 when not in_eu', fakeAsync(() => {
      tick();
      expect(component.countryCode).toBe('USA');
      expect(component.defaultCountry).toBe('United States');
      expect(component.defaultCountryname).toBe('US');
      expect(component.defaultCurrencyName).toBe('USD');
    }));

    it('should call getPricing after getCountry', fakeAsync(() => {
      tick();
      expect(mockOnboardingService.getPricing).toHaveBeenCalledWith('USA');
    }));
  });

  describe('getPricing', () => {
    it('should set defaultCurrencySymbol from first pricing item', fakeAsync(() => {
      tick();
      expect(component.defaultCurrencySymbol).toBe('USD');
    }));

    it('should set content and enableAlert on getPricing error', fakeAsync(() => {
      const errPayload = { error: { Message: 'Pricing error' } };
      mockOnboardingService.getPricing.and.returnValue(
        new Observable(obs => obs.error(errPayload))
      );
      mockOnboardingService.getCountry.and.returnValue(
        of({ in_eu: false, country_code_iso3: 'XX', country_name: 'X', country: 'X', currency: 'X' })
      );
      fixture = TestBed.createComponent(SubscriptionPaymentPage);
      component = fixture.componentInstance;
      tick();
      expect(component.content).toBe('Pricing error');
      expect(component.enableAlert).toBe(true);
    }));
  });

  describe('getGBPcuurency', () => {
    it('should set amountGBP from service response', fakeAsync(() => {
      mockOnboardingService.getGBPcuurency.and.returnValue(of('75.00'));
      fixture = TestBed.createComponent(SubscriptionPaymentPage);
      component = fixture.componentInstance;
      tick();
      expect(component.amountGBP).toBe('75.00');
    }));
  });

  describe('back', () => {
    it('should navigate to viewcart with program name', () => {
      component.back();
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/viewcart']);
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should clear content and enableAlert', () => {
      component.content = 'Some message';
      component.enableAlert = true;
      component.getAlertcloseEvent('continue');
      expect(component.content).toBe('');
      expect(component.enableAlert).toBe(false);
    });

    it('should navigate to myprogram when content was Payment Successful', () => {
      component.content = 'Payment Successful';
      component.enableAlert = true;
      component.getAlertcloseEvent('continue');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/myprogram']);
    });

    it('should not navigate when content was not Payment Successful', () => {
      component.content = 'Error';
      component.getAlertcloseEvent('continue');
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should clear form elements when present', () => {
      component.cardNumberElement = { clear: jasmine.createSpy('clear') };
      component.cardExpiryElement = { clear: jasmine.createSpy('clear') };
      component.cardCvcElement = { clear: jasmine.createSpy('clear') };
      component.getAlertcloseEvent('continue');
      expect(component.cardNumberElement.clear).toHaveBeenCalled();
      expect(component.cardExpiryElement.clear).toHaveBeenCalled();
      expect(component.cardCvcElement.clear).toHaveBeenCalled();
    });
  });

  describe('handleSuccessfulPayment', () => {
    it('should set localStorage items and content', () => {
      component.amountGBP = '99';
      component.obj = { Quantity: 2 };
      component.defaultCurrencyName = 'USD';
      component.handleSuccessfulPayment();
      expect(localStorage.getItem('stripeamount')).toBe('99');
      expect(localStorage.getItem('stripeqty')).toBe('2');
      expect(localStorage.getItem('stripecountrycode')).toBe('USD');
      expect(localStorage.getItem('personalised')).toBe('F');
      expect(component.content).toBe('Payment Successful');
      expect(component.enableAlert).toBe(true);
    });

    it('should call getOrderId', () => {
      component.amountGBP = '50';
      component.obj = { Quantity: 1 };
      component.defaultCurrencyName = 'GBP';
      spyOn(component, 'getOrderId');
      component.handleSuccessfulPayment();
      expect(component.getOrderId).toHaveBeenCalled();
    });
  });

  describe('getOrderId', () => {
    it('should do nothing when adtraction is not in localStorage', () => {
      localStorage.removeItem('adtraction');
      component.getOrderId();
      expect(mockOnboardingService.getOrderId).not.toHaveBeenCalled();
    });

    it('should call getOrderId and callAddraction when adtraction is set', fakeAsync(() => {
      localStorage.setItem('adtraction', 'at_123');
      localStorage.setItem('userId', JSON.stringify(107));
      component.amountGBP = '99';
      component.defaultCurrencyName = 'USD';
      component.payementSubmitBtnClick = { nativeElement: { click: jasmine.createSpy('click') } };
      component.getOrderId();
      tick(5000);
      expect(mockOnboardingService.getOrderId).toHaveBeenCalledWith(107);
      expect(mockOnboardingService.callAddraction).toHaveBeenCalledWith(
        jasmine.objectContaining({
          OrderValue: '99',
          userId: 107,
          programId: ProgramType.Adults
        })
      );
    }));
  });

  describe('getIsoCode', () => {
    it('should return iso in parentheses when symbol is $', () => {
      component.symbol = '$';
      component.isoCode = 'USD';
      expect(component.getIsoCode()).toBe(' (USD)');
    });

    it('should return empty string when symbol is not $', () => {
      component.symbol = '£';
      component.isoCode = 'GBP';
      expect(component.getIsoCode()).toBe('');
    });
  });
});
