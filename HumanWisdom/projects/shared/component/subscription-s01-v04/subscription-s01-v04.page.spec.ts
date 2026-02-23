import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { SubscriptionS01V04Page } from './subscription-s01-v04.page';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { Location } from '@angular/common';
import { LogEventService } from '../../services/log-event.service';
import { ForumService } from '../../forum/forum.service';
import { SharedService } from '../../services/shared.service';
import { CommonService } from '../../services/common.service';
import { ProgramType } from '../../models/program-model';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef } from '@angular/core';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('SubscriptionS01V04Page', () => {
  let component: SubscriptionS01V04Page;
  let fixture: ComponentFixture<SubscriptionS01V04Page>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockForumService: jasmine.SpyObj<ForumService>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockProgramId: number;
  let mockPlatform: { IOS: boolean; SAFARI: boolean };
  let toastrSuccessSpy: jasmine.Spy;

  beforeEach(async () => {
    mockPlatform = { IOS: false, SAFARI: false };
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'viewCart', 'getCountry', 'getPricing', 'addItem', 'deleteItem', 'verifyActivationKey', 'getCurrencies'
    ]);
    mockOnboardingService.viewCart.and.returnValue(of([]));
    mockOnboardingService.getCountry.and.returnValue(of({ in_eu: false, country_code_iso3: 'USA', country_name: 'United States' }));
    mockOnboardingService.getPricing.and.returnValue(of([
      { Program: 'Adults', RateID: '2', CurSymbol: '$', Annual: '120', Monthly: '15', ISOCode: 'USD', ActiveProgram: '1' },
      { Program: 'Teenagers', RateID: '6', CurSymbol: '$', Annual: '120', Monthly: '15', ISOCode: 'USD', ActiveProgram: '1' }
    ]));
    mockOnboardingService.addItem.and.returnValue(of(1));
    mockOnboardingService.deleteItem.and.returnValue(of(true));
    mockOnboardingService.verifyActivationKey.and.returnValue(of(null));
    mockOnboardingService.getCurrencies.and.returnValue(of([]));
    mockOnboardingService.isActivationFlow = false;
    mockOnboardingService.isAdvert_hwp = false;

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    toastrSuccessSpy = jasmine.createSpy('success');
    mockForumService = {
      toastrService: { success: toastrSuccessSpy }
    } as any;

    mockCommonService = jasmine.createSpyObj('CommonService', ['verifyactkey']);
    mockCommonService.verifyactkey.and.returnValue(of('Year'));

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/home' as any);
    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue(null);
    spyOn(SharedService, 'isAndroid').and.returnValue(false);

    (window as any).$ = jasmine.createSpy('$').and.returnValue({ prop: jasmine.createSpy('prop') });

    await TestBed.configureTestingModule({
      declarations: [SubscriptionS01V04Page],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: ForumService, useValue: mockForumService },
        { provide: CommonService, useValue: mockCommonService },
        { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) },
        { provide: Platform, useFactory: () => mockPlatform },
        ChangeDetectorRef
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('isloggedin', 'T');
    localStorage.setItem('subscribepage', 'F');
    localStorage.setItem('email', 'test@test.com');
    localStorage.setItem('name', 'John Doe');
    localStorage.setItem('saveUsername', JSON.stringify(false));
    sessionStorage.setItem('userId', JSON.stringify('user123'));

    fixture = TestBed.createComponent(SubscriptionS01V04Page);
    component = fixture.componentInstance;
  });

  afterEach(() => {
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
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should set enableGift when giftwisdom is F', () => {
      localStorage.setItem('giftwisdom', 'F');
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.enableGift).toBe(true);
    });

    it('should set enablepopup and isSubscribe from Subscriber', () => {
      localStorage.setItem('Subscriber', JSON.stringify(1));
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.enablepopup).toBe(true);
      expect(component.isSubscribe).toBe(true);
    });

    it('should call getCountry and viewCart', () => {
      component.ngOnInit();
      expect(mockOnboardingService.getCountry).toHaveBeenCalled();
      expect(mockOnboardingService.viewCart).toHaveBeenCalled();
    });
  });

  describe('EnableAddMemForm', () => {
    it('should set enableAddMemForm to true', () => {
      component.enableAddMemForm = false;
      component.EnableAddMemForm();
      expect(component.enableAddMemForm).toBe(true);
    });
  });

  describe('clickFreeTrial', () => {
    it('should navigate to free trial', () => {
      component.clickFreeTrial();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults/subscription/start-your-free-trial']);
    });
  });

  describe('proceedcart', () => {
    it('should log event and navigate to viewcart', () => {
      component.proceedcart();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_view_cart');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/viewcart']);
    });
  });

  describe('getActivationCode', () => {
    it('should set activeCode and navigate to login', () => {
      component.getActivationCode();
      expect(localStorage.getItem('activeCode')).toBe('T');
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('already', () => {
    it('should navigate to dashboard when value is home', () => {
      component.closemodal = { nativeElement: { click: jasmine.createSpy('click') } } as any;
      component.already('home');
      expect(component.closemodal.nativeElement.click).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });

    it('should navigate to login when value is not home', () => {
      component.closemodal = { nativeElement: { click: jasmine.createSpy('click') } } as any;
      component.already('login');
      expect(mockRouter.navigate).toHaveBeenCalledWith([`/${SharedService.getprogramName()}/onboarding/login`], jasmine.any(Object));
    });
  });

  describe('uselater', () => {
    it('should clear activationCode and enableActivate after timeout', fakeAsync(() => {
      component.activationCode = 'CODE123';
      component.enableActivate = true;
      component.uselater();
      tick(1000);
      expect(component.activationCode).toBe('');
      expect(component.enableActivate).toBe(false);
    }));
  });

  describe('getcode', () => {
    it('should set activationCode', () => {
      component.getcode('ABC123');
      expect(component.activationCode).toBe('ABC123');
    });
  });

  describe('enablelastpage', () => {
    it('should set fourthpage to true', () => {
      component.enablelastpage();
      expect(component.fourthpage).toBe(true);
    });
  });

  describe('radioevent', () => {
    it('should set myself to 1 and enableemail to false when checked', () => {
      component.radioevent({ target: { checked: true } });
      expect(component.myself).toBe(1);
      expect(component.enableemail).toBe(false);
    });

    it('should set myself to 0 when unchecked', () => {
      component.radioevent({ target: { checked: false } });
      expect(component.myself).toBe(0);
    });
  });

  describe('laterradioevent', () => {
    it('should set myself and enableemail to 0 when checked', () => {
      component.laterradioevent({ target: { checked: true } });
      expect(component.myself).toBe(0);
      expect(component.enableemail).toBe(false);
    });
  });

  describe('someoneradioevent', () => {
    it('should set enableemail to true when checked', () => {
      component.someoneradioevent({ target: { checked: true } });
      expect(component.myself).toBe(0);
      expect(component.enableemail).toBe(true);
    });
  });

  describe('emailinput', () => {
    it('should set learnermail from event', () => {
      component.emailinput({ target: { value: 'friend@test.com' } });
      expect(component.learnermail).toBe('friend@test.com');
    });
  });

  describe('msginput', () => {
    it('should set learnermsg from event', () => {
      component.msginput({ target: { value: 'Happy birthday!' } });
      expect(component.learnermsg).toBe('Happy birthday!');
    });
  });

  describe('selectProgram', () => {
    it('should parse and set selectedProgram, selectedMonth, selectedPrice', () => {
      component.selectProgram('100,Annual,Adults');
      expect(component.selectedProgram).toBe('Adults');
      expect(component.selectedMonth).toBe('Annual');
      expect(component.selectedPrice).toBe('100');
    });
  });

  describe('ValidateEmail', () => {
    it('should return true for invalid email', () => {
      component.learnermail = 'invalid';
      expect(component.ValidateEmail()).toBe(true);
    });

    it('should return false for valid email', () => {
      component.learnermail = 'valid@example.com';
      expect(component.ValidateEmail()).toBe(false);
    });
  });

  describe('getAnnualVal', () => {
    it('should return annual value divided by 12', () => {
      expect(component.getAnnualVal(120)).toBe(10);
    });
  });

  describe('totalPrice', () => {
    it('should sum cart item amounts', () => {
      component.cartitemList = [{ Amt: '10' }, { Amt: '20' }] as any;
      component.totalPrice();
      expect(component.totalCartValue).toBe(30);
    });

    it('should set totalCartValue to 0 for empty cart', () => {
      component.cartitemList = [];
      component.totalPrice();
      expect(component.totalCartValue).toBe(0);
    });
  });

  describe('getValue', () => {
    it('should return count for matching program and plan', () => {
      component.cartitemList = [
        { Program: 'Adults', Plan: 'Annual' },
        { Program: 'Adults', Plan: 'Annual' },
        { Program: 'Teenagers', Plan: 'Monthly' }
      ] as any;
      const result = component.getValue('qty', 'Annual', 'Adults');
      expect(result).toBe(2);
    });

    it('should return 0 when no matches', () => {
      component.cartitemList = [] as any;
      const result = component.getValue('qty', 'Annual', 'Adults');
      expect(result).toBe(0);
    });
  });

  describe('goBack', () => {
    it('should navigate to dashboard', () => {
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });
  });

  describe('ActivationFlow', () => {
    it('should log event and toggle isActivateModal', () => {
      component.isActivateModal = false;
      component.ActivationFlow();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_already_have_subscription_code');
      expect(component.isActivateModal).toBe(true);
    });
  });

  describe('removeFromCart', () => {
    it('should call deleteItem and viewCart on success', () => {
      spyOn(component, 'viewCart');
      component.removeFromCart('123');
      expect(mockOnboardingService.deleteItem).toHaveBeenCalledWith({ Id: 123 });
      expect(component.viewCart).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('should save cartList to sessionStorage', () => {
      component.cartList = [{ id: 1 }] as any;
      component.ngOnDestroy();
      expect(sessionStorage.getItem('cartList')).toBe(JSON.stringify([{ id: 1 }]));
    });

    it('should set giftwisdom to F when giftwisdom is T', () => {
      localStorage.setItem('giftwisdom', 'T');
      component.ngOnDestroy();
      expect(localStorage.getItem('giftwisdom')).toBe('F');
    });
  });

  describe('Constructor', () => {
    it('should navigate to login when isloggedin is not T', () => {
      localStorage.setItem('isloggedin', 'F');
      localStorage.setItem('subscribepage', 'F');
      localStorage.setItem('email', 'test@test.com');
      localStorage.setItem('name', 'John Doe');
      localStorage.setItem('saveUsername', JSON.stringify(false));
      sessionStorage.setItem('userId', JSON.stringify('user123'));
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login'], jasmine.any(Object));
    });

    it('should navigate to login when subscribepage is T', () => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('subscribepage', 'T');
      localStorage.setItem('email', 'test@test.com');
      localStorage.setItem('name', 'John Doe');
      localStorage.setItem('saveUsername', JSON.stringify(false));
      sessionStorage.setItem('userId', JSON.stringify('user123'));
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login'], jasmine.any(Object));
    });

    it('should set enableLoginSubscriber when email is guest@humanwisdom.me', () => {
      localStorage.setItem('email', 'guest@humanwisdom.me');
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(component.enableLoginSubscriber).toBe(true);
    });

    it('should set activeCode F when email is not guest', () => {
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(localStorage.getItem('activeCode')).toBe('F');
    });

    it('should handle name with single word', () => {
      localStorage.setItem('name', 'John');
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(component.modaldata['lastname']).toBe('');
    });

    it('should call ActivationFlow when isActivationFlow is true', fakeAsync(() => {
      mockOnboardingService.isActivationFlow = true;
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(component.isActivateModal).toBe(false);
      tick(300);
      expect(component.isActivateModal).toBe(true);
    }));

    it('should handle BuyAgain data from localStorage', fakeAsync(() => {
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(JSON.stringify({
        PlanID: '2', RateID: '2', ConsumerEmail: 'buy@test.com'
      }));
      mockOnboardingService.getCountry.and.returnValue(of({ in_eu: false, country_code_iso3: 'USA', country_name: 'US' }));
      mockOnboardingService.getPricing.and.returnValue(of([
        { Program: 'Adults', RateID: '2', CurSymbol: '$', Annual: '120', Monthly: '15', ISOCode: 'USD', ActiveProgram: '1' },
        { Program: 'Teenagers', RateID: '6', CurSymbol: '$', Annual: '120', Monthly: '15', ISOCode: 'USD', ActiveProgram: '1' }
      ]));
      mockOnboardingService.viewCart.and.returnValue(of([]));
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      component.cartListResult = [{ planId: 0, RateId: '' }] as any;
      component.ngOnInit();
      tick(8000);
      expect(mockOnboardingService.addItem).toHaveBeenCalled();
      discardPeriodicTasks();
    }));
  });

  describe('ngOnInit additional', () => {
    it('should use localStorage userId when saveUsername is true', () => {
      localStorage.setItem('saveUsername', JSON.stringify(true));
      localStorage.setItem('userId', JSON.stringify('localuser'));
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.userId).toBe('localuser');
    });

    it('should set isSubscribe false when Subscriber is 0', () => {
      localStorage.setItem('Subscriber', JSON.stringify(0));
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isSubscribe).toBe(false);
    });
  });

  describe('enableEmailboxEvent', () => {
    beforeEach(() => {
      component.cartList = [
        { Program: 'Adults', ProgID: 9, Annual: 120, Monthly: 15, planId: 2, selectedSubscription: 'Annual', price: 120 } as any,
        { Program: 'Teenagers', ProgID: 11, Annual: 100, Monthly: 12, planId: 2, selectedSubscription: 'Annual', price: 100 } as any
      ];
    });

    it('should update Adults Annual when enable true', () => {
      component.enableEmailboxEvent(true, 'Annual', 'Adults');
      expect(component.aaenableEmailbox).toBe(true);
      expect(component.aenableMonthEmailbox).toBe(false);
      expect(component.teenageraenableEmailbox).toBe(false);
      expect(component.teenagerenableMonthEmailbox).toBe(false);
      expect(component.learnermail).toBe('');
    });

    it('should update Adults Monthly when enable true', () => {
      component.enableEmailboxEvent(true, 'Monthly', 'Adults');
      expect(component.aaenableEmailbox).toBe(false);
      expect(component.aenableMonthEmailbox).toBe(true);
    });

    it('should update Teenagers Annual when enable true', () => {
      component.enableEmailboxEvent(true, 'Annual', 'Teenagers');
      expect(component.teenageraenableEmailbox).toBe(true);
      expect(component.teenagerenableMonthEmailbox).toBe(false);
    });

    it('should update Adults Annual when enable false', () => {
      component.enableEmailboxEvent(false, 'Annual', 'Adults');
      expect(component.aaenableEmailbox).toBe(false);
    });

    it('should update Adults Monthly when enable false', () => {
      component.enableEmailboxEvent(false, 'Monthly', 'Adults');
      expect(component.aenableMonthEmailbox).toBe(false);
    });

    it('should update Teenagers when enable false', () => {
      component.enableEmailboxEvent(false, 'Annual', 'Teenagers');
      expect(component.teenageraenableEmailbox).toBe(false);
      component.enableEmailboxEvent(false, 'Monthly', 'Teenagers');
      expect(component.teenagerenableMonthEmailbox).toBe(false);
    });
  });

  describe('viewCart', () => {
    it('should handle viewCart error', () => {
      mockOnboardingService.viewCart.and.returnValue(throwError(() => new Error('err')));
      component.ngOnInit();
      expect(component.cartitemList).toEqual([]);
    });
  });

  describe('getCountry', () => {
    it('should set countryCode EUR when in_eu', () => {
      mockOnboardingService.getCountry.and.returnValue(of({ in_eu: true, country_name: 'Germany' }));
      component.ngOnInit();
      expect(component.countryCode).toBe('EUR');
    });

    it('should handle getCountry error', () => {
      mockOnboardingService.getCountry.and.returnValue(throwError(() => new Error('err')));
      component.ngOnInit();
    });
  });

  describe('verifyactkey', () => {
    it('should set secondpage and yearormonth when res is truthy', () => {
      mockCommonService.verifyactkey.and.returnValue(of('Year'));
      component.activationCode = 'CODE';
      component.verifyactkey();
      expect(component.showWarning).toBe(true);
      expect(component.yearormonth).toBe('Year');
      expect(component.secondpage).toBe(true);
      expect(component.thirdpage).toBe(false);
      expect(component.firstpage).toBe(false);
    });

    it('should set thirdpage when res is falsy', () => {
      mockCommonService.verifyactkey.and.returnValue(of(null));
      component.activationCode = 'CODE';
      component.verifyactkey();
      expect(component.thirdpage).toBe(true);
      expect(component.secondpage).toBe(false);
    });

    it('should handle verifyactkey error', () => {
      mockCommonService.verifyactkey.and.returnValue(throwError(() => new Error('err')));
      component.activationCode = 'CODE';
      component.verifyactkey();
      expect(component.thirdpage).toBe(true);
    });
  });

  describe('Confirm', () => {
    it('should call submitcode', () => {
      spyOn(component, 'submitcode');
      component.Confirm();
      expect(component.submitcode).toHaveBeenCalled();
    });
  });

  describe('submitcode', () => {
    it('should handle MySelf True and deleteItem success with Year and isActivationFlow', () => {
      component.cartitemList = [{ MySelf: 'True', CartId: '123' }] as any;
      component.activationCode = 'CODE';
      component.userId = 'user1';
      component.countryCode = 'USD';
      component.yearormonth = 'Year';
      mockOnboardingService.isActivationFlow = true;
      mockOnboardingService.verifyActivationKey.and.returnValue(of({}));
      mockOnboardingService.deleteItem.and.returnValue(of(true));
      component.submitcode();
      expect(mockOnboardingService.verifyActivationKey).toHaveBeenCalledWith('CODE', 'user1', 'USD');
      expect(mockOnboardingService.deleteItem).toHaveBeenCalledWith({ Id: 123 });
      expect(component.fourthpage).toBe(true);
    });

    it('should handle MySelf True and deleteItem returns false', () => {
      component.cartitemList = [{ MySelf: 'True', CartId: '123' }] as any;
      component.userId = 'user1';
      component.countryCode = 'USD';
      mockOnboardingService.verifyActivationKey.and.returnValue(of({}));
      mockOnboardingService.deleteItem.and.returnValue(of(false));
      component.submitcode();
      expect(component.fourthpage).toBe(true);
      expect(component.secondpage).toBe(false);
      expect(component.thirdpage).toBe(false);
    });

    it('should handle deleteItem error', () => {
      component.cartitemList = [{ MySelf: 'True', CartId: '123' }] as any;
      component.userId = 'user1';
      component.countryCode = 'USD';
      mockOnboardingService.verifyActivationKey.and.returnValue(of({}));
      mockOnboardingService.deleteItem.and.returnValue(throwError(() => new Error('err')));
      component.submitcode();
      expect(mockOnboardingService.deleteItem).toHaveBeenCalled();
      expect(component.fourthpage).toBe(true);
    });

    it('should navigate to hwp-premium-congratulations when yearormonth is Year and isActivationFlow', () => {
      component.cartitemList = [{ MySelf: 'True', CartId: '123' }] as any;
      component.userId = 'user1';
      component.countryCode = 'USD';
      component.yearormonth = 'Year';
      mockOnboardingService.isActivationFlow = true;
      mockOnboardingService.verifyActivationKey.and.returnValue(of({}));
      mockOnboardingService.deleteItem.and.returnValue(of(true));
      component.submitcode();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/hwp-premium-congratulations']);
    });
  });

  describe('getCurrencies', () => {
    it('should set defaultCurrency when country found', () => {
      component.defaultCountry = 'United States';
      mockOnboardingService.getCurrencies.and.returnValue(of([
        { CountryId: 1, Country: 'United States', Currency: 'USD', CurSymbol: '$' }
      ]));
      mockOnboardingService.getPricing.and.returnValue(of([
        { Program: 'Adults', RateID: '2', CurSymbol: '$', Annual: '120', Monthly: '15', ISOCode: 'USD', ActiveProgram: '1' },
        { Program: 'Teenagers', RateID: '6', CurSymbol: '$', Annual: '120', Monthly: '15', ISOCode: 'USD', ActiveProgram: '1' }
      ]));
      component.getCurrencies();
      expect(component.defaultCurrency).toBe('USD');
      expect(component.selectedCountryId).toBe(1);
    });

    it('should handle country not found', () => {
      component.defaultCountry = 'Unknown';
      mockOnboardingService.getCurrencies.and.returnValue(of([
        { CountryId: 1, Country: 'United States', Currency: 'USD', CurSymbol: '$' }
      ]));
      component.getCurrencies();
    });
  });

  describe('selectCountry', () => {
    it('should set selectedCountryId and call getPricing', () => {
      spyOn(component, 'getPricing');
      component.selectCountry(5);
      expect(component.selectedCountryId).toBe(5);
      expect(component.getPricing).toHaveBeenCalled();
    });
  });

  describe('loggedUser', () => {
    it('should navigate to login when userId is falsy', () => {
      component.userId = null;
      component.loggedUser();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
    });
  });

  describe('getPricing and getAmount', () => {
    it('should populate cartList and call getAmount', () => {
      component.countryCode = 'USD';
      component.ngOnInit();
      expect(component.cartList.length).toBe(4);
      expect(component.enableData).toBe(true);
    });

    it('should handle getPricing error', () => {
      const alertSpy = spyOn(globalThis, 'alert');
      mockOnboardingService.getPricing.and.returnValue(throwError({ error: { Message: 'err' } }));
      component.countryCode = 'USD';
      component.getPricing();
      expect(alertSpy).toHaveBeenCalledWith('err');
    });

    it('should handle cartitemList with Adults and Teenagers in getAmount', () => {
      component.cartList = [
        { Program: 'Adults', qty: 0 } as any,
        { Program: 'Teenagers', qty: 0 } as any,
        {} as any,
        {} as any
      ];
      component.cartitemList = [
        { Program: 'Adults', Plan: 'Annual', Amt: '10' } as any,
        { Program: 'Teenagers', Plan: 'Monthly', Amt: '5' } as any
      ];
      component.getAmount();
      expect(component.enableData).toBe(true);
      expect(component.cartList[0].qty).toBe(1);
      expect(component.cartList[1].qty).toBe(1);
    });

    it('should handle empty cartitemList in getAmount', () => {
      component.cartList = [
        { Program: 'Adults', Annual: '120', qty: 0 } as any,
        {} as any, {} as any, {} as any
      ];
      component.cartitemList = [];
      component.getAmount();
      expect(component.cartList[0].price).toBe('120');
    });
  });

  describe('addToCartForm', () => {
    beforeEach(() => {
      component.cartList = [
        { Program: 'Adults', RateId: '2', planId: 2 } as any,
        {} as any, {} as any, {} as any
      ];
      component.selectedProgram = 'Adults';
      component.selectedMonth = 'Annual';
      component.learnermail = 'valid@test.com';
    });

    it('should show toast when ValidateEmail returns true', () => {
      component.learnermail = 'invalid';
      component.addToCartForm();
      expect(toastrSuccessSpy).toHaveBeenCalledWith('', 'Email address is invalid');
    });

    it('should not add when selectedProgram is empty', () => {
      component.selectedProgram = '';
      component.addToCartForm();
      expect(mockOnboardingService.addItem).not.toHaveBeenCalled();
    });

    it('should call addItem and viewCart on success', () => {
      component.addToCartForm();
      expect(mockOnboardingService.addItem).toHaveBeenCalled();
      expect(component.myself).toBe(0);
      expect(component.learnermail).toBe('');
      expect(component.enableAddMemForm).toBe(false);
    });

    it('should handle addItem error', () => {
      mockOnboardingService.addItem.and.returnValue(throwError({ error: { Message: 'API Error' } }));
      component.addToCartForm();
      expect(toastrSuccessSpy).toHaveBeenCalledWith('', 'API Error');
    });

    it('should set planId 1 for Monthly', () => {
      component.selectedMonth = 'Monthly';
      component.addToCartForm();
      expect(mockOnboardingService.addItem).toHaveBeenCalledWith(jasmine.objectContaining({ PlanId: 1 }));
    });
  });

  describe('addToCart', () => {
    beforeEach(() => {
      component.ngOnInit();
      component.learnermail = 'valid@test.com';
    });

    it('should show toast when ValidateEmail returns true', () => {
      component.learnermail = 'invalid';
      component.addToCart('Adults', 'Annual');
      expect(toastrSuccessSpy).toHaveBeenCalledWith('', 'Email address is invalid');
    });

    it('should add to cart and update Adults Annual', () => {
      component.addToCart('Adults', 'Annual');
      expect(mockOnboardingService.addItem).toHaveBeenCalled();
      expect(component.showCart).toBe(true);
      expect(component.planWarning).toBe(false);
    });

    it('should add to cart for Teenagers Monthly', () => {
      component.addToCart('Teenagers', 'Monthly');
      expect(mockOnboardingService.addItem).toHaveBeenCalled();
      expect(component.teenageraenableEmailbox).toBe(false);
      expect(component.teenagerenableMonthEmailbox).toBe(false);
    });

    it('should handle addItem error', () => {
      mockOnboardingService.addItem.and.returnValue(throwError({ error: { Message: 'Err' } }));
      component.addToCart('Adults', 'Annual');
      expect(toastrSuccessSpy).toHaveBeenCalledWith('', 'Err');
    });
  });

  describe('checkPopup', () => {
    it('should call checkPopup', () => {
      component.checkPopup({ later: 0 });
      component.checkPopup({ later: 1 });
    });
  });

  describe('ValidateEmail edge', () => {
    it('should return true for empty learnermail', () => {
      component.learnermail = '';
      expect(component.ValidateEmail()).toBe(true);
    });
  });

  describe('getValue', () => {
    it('should return empty string when res is not qty', () => {
      expect(component.getValue('other', 'Annual', 'Adults')).toBe('');
    });
  });

  describe('Cancel', () => {
    it('should call proceedcart when isActivationFlow and not isAdvert_hwp', () => {
      mockOnboardingService.isActivationFlow = true;
      mockOnboardingService.isAdvert_hwp = false;
      spyOn(component, 'proceedcart');
      component.Cancel();
      expect(component.proceedcart).toHaveBeenCalled();
      expect(localStorage.getItem('isMonthlySelectedForPayment')).toBe('F');
    });

    it('should navigate to adverts when isAdvert_hwp', () => {
      mockOnboardingService.isActivationFlow = false;
      mockOnboardingService.isAdvert_hwp = true;
      component.Cancel();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adverts-hwp-app']);
      expect(mockOnboardingService.isAdvert_hwp).toBe(false);
    });

    it('should reset flags when not activation flow', () => {
      component.isModalPopup = true;
      mockOnboardingService.isActivationFlow = false;
      mockOnboardingService.isAdvert_hwp = false;
      component.Cancel();
      expect(component.isModalPopup).toBe(false);
    });
  });

  describe('AddCarBeforePopuP', () => {
    it('should log event and set enableemail after timeout', fakeAsync(() => {
      component.isSubscribe = false;
      component.enableMySelf = false;
      component.AddCarBeforePopuP();
      tick(100);
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_addtocart');
      expect(component.myself).toBe(0);
      expect(component.enableemail).toBe(true);
    }));

    it('should set enableMySelf false when isSubscribe', fakeAsync(() => {
      component.isSubscribe = true;
      component.AddCarBeforePopuP();
      tick(100);
      expect(component.enableMySelf).toBe(false);
    }));
  });

  describe('ActivationFlow toggle', () => {
    it('should set isActivateModal false when true', () => {
      component.isActivateModal = true;
      component.ActivationFlow();
      expect(component.isActivateModal).toBe(false);
    });
  });

  describe('iOS', () => {
    it('should return true for iPad in userAgentData', () => {
      Object.defineProperty(navigator, 'userAgentData', {
        value: { platform: 'iPad' },
        configurable: true
      });
      expect(component.iOS()).toBe(true);
    });

    it('should return false for non-iOS', () => {
      Object.defineProperty(navigator, 'userAgentData', {
        value: { platform: 'Windows' },
        configurable: true
      });
      Object.defineProperty(navigator, 'platform', {
        value: 'Win32',
        configurable: true
      });
      const result = component.iOS();
      expect(result).toBe(false);
    });
  });

  describe('isAndroidDevice', () => {
    it('should set isAndroid true when SharedService.isAndroid returns true', () => {
      (SharedService.isAndroid as jasmine.Spy).and.returnValue(true);
      fixture = TestBed.createComponent(SubscriptionS01V04Page);
      component = fixture.componentInstance;
      expect(component.isAndroid).toBe(true);
    });
  });
});
