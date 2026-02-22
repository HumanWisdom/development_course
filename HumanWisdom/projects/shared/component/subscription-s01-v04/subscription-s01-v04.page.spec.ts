import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
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
import { of } from 'rxjs';
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

  beforeEach(async () => {
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
    mockForumService = jasmine.createSpyObj('ForumService', [], {
      toastrService: { success: jasmine.createSpy('success') }
    });
    Object.defineProperty(mockForumService, 'toastrService', {
      get: () => ({ success: jasmine.createSpy('success') }),
      configurable: true
    });

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
        { provide: Platform, useValue: { IOS: false, SAFARI: false } },
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
  });
});
