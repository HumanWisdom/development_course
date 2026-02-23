import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Platform } from '@angular/cdk/platform';
import { RedeemSubscriptionPage } from './redeem-subscription.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OnboardingService } from '../../../../shared/services/onboarding.service';
import { CommonService } from '../../../../shared/services/common.service';
import { LogEventService } from '../../../../shared/services/log-event.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RedeemSubscriptionPage', () => {
  let component: RedeemSubscriptionPage;
  let fixture: ComponentFixture<RedeemSubscriptionPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'getCountry',
      'getPricing',
      'verifyActivationKey',
      'redeemGiftery'
    ]);
    mockOnboardingService.getCountry.and.returnValue(
      of({ in_eu: false, country_code_iso3: 'USA' })
    );
    mockOnboardingService.getPricing.and.returnValue(of([{ id: 1, name: 'Plan' }]));
    mockOnboardingService.verifyActivationKey.and.returnValue(of(true));
    mockOnboardingService.redeemGiftery.and.returnValue(of(true));

    mockCommonService = jasmine.createSpyObj('CommonService', ['checkGiftery', 'verifyactkey']);
    mockCommonService.checkGiftery.and.returnValue(of('valid-610'));
    mockCommonService.verifyactkey.and.returnValue(of('Year-Adults'));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    localStorage.clear();
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('guest', 'F');
    localStorage.setItem('giftcard', 'F');
    localStorage.setItem('redeemlanding', '');
    localStorage.setItem('first', 'F');
    localStorage.setItem('Subscriber', '0');
    localStorage.setItem('isloggedin', 'F');
    localStorage.setItem('name', 'John Doe');
    localStorage.setItem('email', 'john@test.com');
    localStorage.setItem('loginResponse', '{}');
    localStorage.setItem('saveUsername', 'false');
    localStorage.setItem('userId', JSON.stringify(100));

    TestBed.configureTestingModule({
      declarations: [RedeemSubscriptionPage],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Platform, useValue: { IOS: false, ANDROID: false, SAFARI: false } },
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: CommonService, useValue: mockCommonService },
        { provide: LogEventService, useValue: mockLogEventService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemSubscriptionPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
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
      localStorage.setItem('name', 'Jane');
      localStorage.setItem('email', 'j@t.com');
      fixture = TestBed.createComponent(RedeemSubscriptionPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set enabledGiftCard when giftcard is T', () => {
      localStorage.setItem('giftcard', 'T');
      fixture = TestBed.createComponent(RedeemSubscriptionPage);
      component = fixture.componentInstance;
      expect(component.enabledGiftCard).toBe(true);
    });

    it('should set isFirsttime when first is T or missing', () => {
      localStorage.removeItem('first');
      fixture = TestBed.createComponent(RedeemSubscriptionPage);
      component = fixture.componentInstance;
      expect(component.isFirsttime).toBe(true);
    });

    it('should set isGuestuser when guest is T', () => {
      localStorage.setItem('guest', 'T');
      fixture = TestBed.createComponent(RedeemSubscriptionPage);
      component = fixture.componentInstance;
      expect(component.isGuestuser).toBe(true);
    });

    it('should set isSubscriber when Subscriber is 1', () => {
      localStorage.setItem('Subscriber', '1');
      fixture = TestBed.createComponent(RedeemSubscriptionPage);
      component = fixture.componentInstance;
      expect(component.isSubscriber).toBe(true);
    });

    it('should set isLoggedIn and login when isloggedin is T', () => {
      localStorage.setItem('isloggedin', 'T');
      fixture = TestBed.createComponent(RedeemSubscriptionPage);
      component = fixture.componentInstance;
      expect(component.isLoggedIn).toBe(true);
      expect(component.login).toBe('Logout');
    });

    it('should set modaldata from name and email', () => {
      localStorage.setItem('name', 'First Last');
      localStorage.setItem('email', 'e@mail.com');
      fixture = TestBed.createComponent(RedeemSubscriptionPage);
      component = fixture.componentInstance;
      expect(component.modaldata['firstname']).toBe('First');
      expect(component.modaldata['lastname']).toBe('Last');
      expect(component.modaldata['email']).toBe('e@mail.com');
    });

    it('should set personalised in localStorage', () => {
      expect(localStorage.getItem('personalised')).toBe('T');
    });
  });

  describe('ngOnInit', () => {
    it('should call getCountry', () => {
      spyOn(component, 'getCountry');
      component.ngOnInit();
      expect(component.getCountry).toHaveBeenCalled();
    });

    it('should set userId from localStorage', () => {
      localStorage.setItem('userId', JSON.stringify(999));
      fixture = TestBed.createComponent(RedeemSubscriptionPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.userId).toBe(999);
    });
  });

  describe('getCountry', () => {
    it('should set countryCode from country_code_iso3 when not in_eu', () => {
      component.getCountry();
      expect(mockOnboardingService.getCountry).toHaveBeenCalled();
      expect(component.countryCode).toBe('USA');
      expect(mockOnboardingService.getPricing).toHaveBeenCalledWith('USA');
    });

    it('should set countryCode to EUR when in_eu', () => {
      mockOnboardingService.getCountry.and.returnValue(of({ in_eu: true }));
      component.getCountry();
      expect(component.countryCode).toBe('EUR');
      expect(mockOnboardingService.getPricing).toHaveBeenCalledWith('EUR');
    });

    it('should call getPricing after getCountry', () => {
      component.getCountry();
      expect(mockOnboardingService.getPricing).toHaveBeenCalled();
      expect(component.cardlist as any).toEqual({ id: 1, name: 'Plan' });
    });

    it('should set enableAlert and content on getPricing error', () => {
      mockOnboardingService.getPricing.and.returnValue(
        throwError({ error: { Message: 'Pricing error' } })
      );
      component.getCountry();
      expect(component.enableAlert).toBe(true);
      expect(component.content).toBe('Pricing error');
    });
  });

  describe('getcode', () => {
    it('should set activationCode', () => {
      component.getcode('ABC123');
      expect(component.activationCode).toBe('ABC123');
    });
  });

  describe('verifyactkey', () => {
    it('when not enabledGiftCard should call service.verifyactkey', () => {
      component.enabledGiftCard = false;
      component.activationCode = 'key';
      component.verifyactkey();
      expect(mockCommonService.verifyactkey).toHaveBeenCalledWith('key');
    });

    it('when verifyactkey returns valid response should show second page', () => {
      component.enabledGiftCard = false;
      component.activationCode = 'key';
      component.verifyactkey();
      expect(component.showWarning).toBe(true);
      expect(component.subfirstpage).toBe(false);
      expect(component.subsecondpage).toBe(true);
      expect(component.subthirdpage).toBe(false);
      expect(component.yearormonth).toBe('Year');
      expect(component.programName).toBe('Adults');
    });

    it('when verifyactkey returns already/invalid should show third page with error', () => {
      mockCommonService.verifyactkey.and.returnValue(of('already used'));
      component.enabledGiftCard = false;
      component.activationCode = 'key';
      component.verifyactkey();
      expect(component.redeemErrMsg).toBe('already used');
      expect(component.subthirdpage).toBe(true);
      expect(component.subsecondpage).toBe(false);
    });

    it('when enabledGiftCard should call checkGiftery', () => {
      component.enabledGiftCard = true;
      component.activationCode = 'GIFTCARD';
      component.verifyactkey();
      expect(mockCommonService.checkGiftery).toHaveBeenCalledWith({
        CertificateCode: 'GIFTCARD'
      });
    });

    it('when checkGiftery returns valid-610 should set yearormonth and programName', () => {
      component.enabledGiftCard = true;
      component.activationCode = 'GIFTCARD';
      component.verifyactkey();
      expect(component.productNo).toBe('610');
      expect(component.yearormonth).toBe('Year');
      expect(component.programName).toBe('Adults');
      expect(component.subsecondpage).toBe(true);
    });
  });

  describe('submitcode', () => {
    beforeEach(() => {
      component.showWarning = true;
      component.userId = 100;
      component.countryCode = 'USA';
      component.activationCode = 'KEY';
      component.productNo = '610';
    });

    it('when enabledGiftCard should call redeemGiftery and navigate on success', () => {
      component.enabledGiftCard = true;
      component.submitcode();
      expect(mockOnboardingService.redeemGiftery).toHaveBeenCalledWith({
        CertificateCode: 'KEY',
        Amount: 1,
        Product: '610',
        ISOCode: 'INR'
      });
      expect(localStorage.getItem('Subscriber')).toBe('1');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/redeem-congratulation']);
    });

    it('when not enabledGiftCard should call verifyActivationKey and navigate on success', () => {
      component.enabledGiftCard = false;
      component.submitcode();
      expect(mockOnboardingService.verifyActivationKey).toHaveBeenCalledWith(
        'KEY',
        100,
        'USA'
      );
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/redeem-congratulation']);
    });

    it('should set subthirdpage true on redeemGiftery error', () => {
      mockOnboardingService.redeemGiftery.and.returnValue(
        throwError({ error: { Message: 'fail' } })
      );
      component.enabledGiftCard = true;
      component.submitcode();
      expect(component.subthirdpage).toBe(true);
    });
  });

  describe('already', () => {
    it('should set enabledModal to true', () => {
      component.enabledModal = false;
      component.already();
      expect(component.enabledModal).toBe(true);
    });
  });

  describe('route_adverts_hwp', () => {
    it('should navigate to adverts-hwp', () => {
      component.route_adverts_hwp();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adverts-hwp']);
    });
  });

  describe('Logevent', () => {
    it('when login is Logout should show logout confirm alert', () => {
      component.login = 'Logout';
      component.Logevent();
      expect(component.enablecancel).toBe(true);
      expect(component.content).toBe('Are you sure you want to logout ?');
      expect(component.enableAlert).toBe(true);
    });

    it('when login is Login should navigate to onboarding login', () => {
      component.login = 'Login';
      component.Logevent();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
    });
  });

  describe('navigate', () => {
    it('should navigate and log event', () => {
      component.navigate('/adults/home', 'event_name');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home'], {
        replaceUrl: true,
        skipLocationChange: true
      });
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('event_name');
    });
  });

  describe('getClosemodalEvent', () => {
    it('should set enabledModal and refresh modaldata', () => {
      component.enabledModal = true;
      component.getClosemodalEvent(false);
      expect(component.enabledModal).toBe(false);
      expect(component.modaldata['email']).toBe('john@test.com');
      expect(component.modaldata['firstname']).toBe('John');
    });
  });

  describe('goBack', () => {
    it('should call location.back', () => {
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });
});
