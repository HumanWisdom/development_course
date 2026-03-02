import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewcartPage } from './viewcart.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { ForumService } from '../../forum/forum.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('ViewcartPage', () => {
  let component: ViewcartPage;
  let fixture: ComponentFixture<ViewcartPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockForumService: jasmine.SpyObj<ForumService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let originalProgramId: PropertyDescriptor | undefined;

  const mockCartList = [
    { CartId: 1, Symbol: '₹', Amt: '500', Plan: 'Monthly', Program: 'Adults', LearnerEmail: '', LearnerMsg: '', ProgID: 9, ISOCode: 'INR' }
  ];

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'viewCart',
      'addItem',
      'deleteItem',
      'editactiveCart',
      'couponValidation'
    ]);
    mockOnboardingService.viewCart.and.returnValue(of(mockCartList));
    mockOnboardingService.addItem.and.returnValue(of(1));
    mockOnboardingService.deleteItem.and.returnValue(of({}));
    mockOnboardingService.editactiveCart.and.returnValue(of({}));
    mockOnboardingService.couponValidation.and.returnValue(of([]));

    mockForumService = jasmine.createSpyObj('ForumService', [], {
      toastrService: { success: jasmine.createSpy('success') }
    });
    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('isloggedin', 'T');
    localStorage.setItem('email', 'user@test.com');
    localStorage.setItem('saveUsername', 'false');
    localStorage.setItem('userId', JSON.stringify(100));
    sessionStorage.setItem('userId', JSON.stringify(100));
    localStorage.setItem('Subscriber', '0');
    localStorage.setItem('personalised', 'F');
    localStorage.setItem('upgradeToPremium', 'F');
    localStorage.setItem('callAddtraction', 'N');
    localStorage.setItem('userEmail', '[]');
    localStorage.setItem('couponid', '0');

    TestBed.configureTestingModule({
      declarations: [ViewcartPage],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: ForumService, useValue: mockForumService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewcartPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
    sessionStorage.clear();
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
      fixture = TestBed.createComponent(ViewcartPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set enableLoginSubscriber when email is guest@humanwisdom.me', () => {
      localStorage.setItem('email', 'guest@humanwisdom.me');
      fixture = TestBed.createComponent(ViewcartPage);
      component = fixture.componentInstance;
      expect(component.enableLoginSubscriber).toBe(true);
    });

    it('should set activeCode F when email is not guest', () => {
      expect(localStorage.getItem('activeCode')).toBe('F');
    });

    it('should set enablepopup and isSubscribe from Subscriber', () => {
      localStorage.setItem('Subscriber', '1');
      fixture = TestBed.createComponent(ViewcartPage);
      component = fixture.componentInstance;
      expect(component.enablepopup).toBe(true);
      expect(component.isSubscribe).toBe(true);
    });

    it('should navigate to login when not logged in', () => {
      localStorage.setItem('isloggedin', 'F');
      localStorage.setItem('saveUsername', 'false');
      localStorage.setItem('email', 'user@test.com');
      fixture = TestBed.createComponent(ViewcartPage);
      component = fixture.componentInstance;
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/onboarding/login'],
        { replaceUrl: true, skipLocationChange: true }
      );
    });
  });

  describe('ngOnInit', () => {
    it('should set callAddtraction to N', () => {
      component.ngOnInit();
      expect(localStorage.getItem('callAddtraction')).toBe('N');
    });

    it('should set userId from sessionStorage when saveUsername is false', () => {
      sessionStorage.setItem('userId', JSON.stringify(99));
      component.ngOnInit();
      expect(component.userId).toBe(99);
    });

    it('when personalised is T should call personalisedaddcart', () => {
      localStorage.setItem('personalised', 'T');
      localStorage.setItem('cartlist', JSON.stringify({ RateID: 1 }));
      localStorage.setItem('personalised subscription', 'Monthly');
      fixture = TestBed.createComponent(ViewcartPage);
      component = fixture.componentInstance;
      spyOn(component, 'personalisedaddcart');
      component.ngOnInit();
      expect(component.personalisedaddcart).toHaveBeenCalled();
    });

    it('when upgradeToPremium is T should call upgradeToPremium', () => {
      localStorage.setItem('upgradeToPremium', 'T');
      localStorage.setItem('cartlist', JSON.stringify({ RateID: 1 }));
      localStorage.setItem('partnership-app', 'Monthly');
      fixture = TestBed.createComponent(ViewcartPage);
      component = fixture.componentInstance;
      spyOn(component, 'upgradeToPremium');
      component.ngOnInit();
      expect(component.upgradeToPremium).toHaveBeenCalled();
    });

    it('otherwise should call viewCart', () => {
      spyOn(component, 'viewCart');
      component.ngOnInit();
      expect(component.viewCart).toHaveBeenCalled();
    });

    it('should set personalised and upgradeToPremium to F after init', () => {
      component.ngOnInit();
      expect(localStorage.getItem('personalised')).toBe('F');
      expect(localStorage.getItem('upgradeToPremium')).toBe('F');
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should set enableAlert to false', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent({});
      expect(component.enableAlert).toBe(false);
    });
  });

  describe('viewCart', () => {
    it('should call service viewCart with userId and set cartList and symbol', () => {
      component.userId = 100;
      component.viewCart();
      expect(mockOnboardingService.viewCart).toHaveBeenCalledWith({ Id: 100 });
      expect(component.cartList).toEqual(mockCartList);
      expect(component.symbol).toBe('₹');
      expect(localStorage.getItem('Currsymbol')).toBe('₹');
    });

    it('should call totalPrice after success', () => {
      spyOn(component, 'totalPrice');
      component.userId = 100;
      component.viewCart();
      expect(component.totalPrice).toHaveBeenCalled();
    });
  });

  describe('editCard', () => {
    it('should set enableedit, activeCard, activeId and learner fields', () => {
      const card = { CartId: 5, LearnerEmail: 'a@b.com', LearnerMsg: 'Hi' };
      component.editCard(card);
      expect(component.enableedit).toBe(true);
      expect(component.activeCard).toBe(card);
      expect(component.activeId).toBe(5);
      expect(component.enableemail).toBe(true);
      expect(component.myself).toBe(0);
      expect(component.enableMySelf).toBe(false);
      expect(component.enableDecide).toBe(false);
      expect(component.learnermail).toBe('a@b.com');
      expect(component.learnermsg).toBe('Hi');
    });
  });

  describe('emailinput and msginput', () => {
    it('emailinput should set learnermail from event target value', () => {
      component.emailinput({ target: { value: 'new@mail.com' } });
      expect(component.learnermail).toBe('new@mail.com');
    });
    it('msginput should set learnermsg from event target value', () => {
      component.msginput({ target: { value: 'message' } });
      expect(component.learnermsg).toBe('message');
    });
  });

  describe('totalPrice', () => {
    it('should sum Amt and set totalCartValue and totalAmount', () => {
      component.cartList = [
        { Amt: '100' } as any,
        { Amt: '200' } as any
      ];
      component.totalPrice();
      expect(component.totalCartValue).toBe(300);
      expect(component.totalCartAmount).toBe(300);
      expect(component.totalCartValueDiscount).toBe(300);
      expect(localStorage.getItem('totalAmount')).toBe('300');
    });

    it('when couponCodeApplied should subtract discount', () => {
      component.cartList = [{ Amt: '100' }] as any[];
      component.couponCodeApplied = true;
      component.discount = 20;
      component.totalPrice();
      expect(component.totalCartValueDiscount).toBe(80);
    });
  });

  describe('removeFromCart', () => {
    it('should call deleteItem, splice item and totalPrice', () => {
      component.cartList = [
        { CartId: 1 } as any,
        { CartId: 2 } as any
      ];
      component.removeFromCart(1);
      expect(mockOnboardingService.deleteItem).toHaveBeenCalledWith({ Id: 1 });
      expect(component.cartList.length).toBe(1);
      expect(component.cartList[0].CartId).toBe(2);
    });

    it('when cart empty after remove should navigate to add-to-cart', () => {
      component.cartList = [{ CartId: 1 }] as any[];
      component.removeFromCart(1);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/add-to-cart']);
    });
  });

  describe('getAnnualVal', () => {
    it('should return annual value divided by 12', () => {
      expect(component.getAnnualVal(1200)).toBe(100);
      expect(component.getAnnualVal(360)).toBe(30);
    });
  });

  describe('couponValidation', () => {
    it('when valid coupon should set couponCodeApplied and discount', () => {
      component.cartList = [{ Plan: 'Annual' }] as any[];
      component.couponCode = 'SAVE20';
      component.totalCartValue = 100;
      mockOnboardingService.couponValidation.and.returnValue(
        of([{ Discount: 20, CouponID: 1, Percentage: 20, IsAnnual: '0' }])
      );
      component.couponValidation();
      expect(component.couponCodeApplied).toBe(true);
      expect(component.discount).toBe(20);
      expect(component.errMsg).toBe('Coupon applied successfully');
      expect(component.enableAlert).toBe(true);
      expect(localStorage.getItem('couponid')).toBe('1');
      expect(localStorage.getItem('discountCode')).toBe('SAVE20');
    });

    it('when invalid should set errMsg and enableAlert', () => {
      component.cartList = [];
      component.couponCode = 'BAD';
      component.totalCartValue = 100;
      mockOnboardingService.couponValidation.and.returnValue(of([]));
      component.couponValidation();
      expect(component.couponCodeApplied).toBe(false);
      expect(component.errMsg).toBe('Please enter a valid coupon code.');
      expect(component.enableAlert).toBe(true);
    });
  });

  describe('couponCheck', () => {
    it('when monthly plan and IsAnnual 1 should return false and set errMsg', () => {
      component.cartList = [{ Plan: 'Monthly', LearnerEmail: ['x@y.com'] }] as any[];
      const result = component.couponCheck([{ IsAnnual: '1' }]);
      expect(result).toBe(false);
      expect(component.errMsg).toContain('annual');
      expect(component.enableAlert).toBe(true);
    });

    it('otherwise should return true', () => {
      component.cartList = [{ Plan: 'Annual' }] as any[];
      const result = component.couponCheck([{ IsAnnual: '0' }]);
      expect(result).toBe(true);
    });
  });

  describe('getKey', () => {
    it('should log event and navigate to payment with state', () => {
      component.cartList = [{ Plan: 'Monthly' }] as any[];
      component.getKey();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_proceed_to_pay');
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/onboarding/payment'],
        { state: { quan: '1', plan: 'Monthly' } }
      );
    });
  });

  describe('radioevent, laterradioevent, someoneradioevent', () => {
    it('radioevent checked should set myself 1 and enableemail false', () => {
      component.radioevent({ target: { checked: true } });
      expect(component.myself).toBe(1);
      expect(component.enableemail).toBe(false);
    });
    it('radioevent unchecked should set myself 0', () => {
      component.radioevent({ target: { checked: false } });
      expect(component.myself).toBe(0);
    });
    it('laterradioevent checked should set myself 0 and enableemail false', () => {
      component.laterradioevent({ target: { checked: true } });
      expect(component.myself).toBe(0);
      expect(component.enableemail).toBe(false);
    });
    it('someoneradioevent checked should set myself 0 and enableemail true', () => {
      component.someoneradioevent({ target: { checked: true } });
      expect(component.myself).toBe(0);
      expect(component.enableemail).toBe(true);
    });
  });

  describe('ProceedWithMonthly and Cancel', () => {
    it('ProceedWithMonthly should set isMonthlySelectedForPayment and isModalPopup', () => {
      component.ProceedWithMonthly();
      expect(localStorage.getItem('isMonthlySelectedForPayment')).toBe('T');
      expect(component.isModalPopup).toBe(true);
    });
    it('Cancel should clear isMonthlySelectedForPayment and close modal', () => {
      component.Cancel();
      expect(localStorage.getItem('isMonthlySelectedForPayment')).toBe('F');
      expect(component.isModalPopup).toBe(false);
    });
  });

  describe('remove', () => {
    it('should set isActivationFlow and navigate to add-to-cart', () => {
      component.remove();
      expect(mockOnboardingService.isActivationFlow).toBe(true);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/add-to-cart']);
    });
  });

  describe('ValidateEmail', () => {
    it('should return false for valid email', () => {
      component.learnermail = 'user@example.com';
      expect(component.ValidateEmail()).toBe(false);
    });
    it('should return true for invalid email', () => {
      component.learnermail = 'invalid';
      expect(component.ValidateEmail()).toBe(true);
    });
  });

  describe('calculate', () => {
    it('should return sum of Amt in cartList', () => {
      component.cartList = [{ Amt: '10' }, { Amt: '20' }] as any[];
      expect(component.calculate()).toBe(30);
    });
  });

  describe('closeApplycoupon', () => {
    it('should reset coupon state and call totalPrice', () => {
      component.couponCodeApplied = true;
      component.discount = 10;
      component.couponCode = 'CODE';
      spyOn(component, 'totalPrice');
      component.closeApplycoupon();
      expect(component.couponCodeApplied).toBe(false);
      expect(component.discount).toBe(0);
      expect(component.couponCode).toBe('');
      expect(component.totalPrice).toHaveBeenCalled();
    });
  });

  describe('enableEmailboxEvent', () => {
    it('should set correct flag for Adults Annual', () => {
      component.enableEmailboxEvent(true, 'Adults', 'Annual');
      expect(component.learnermail).toBe('');
      expect(component.aaenableEmailbox).toBe(true);
    });
    it('should set correct flag for Adults Monthly', () => {
      component.enableEmailboxEvent(true, 'Adults', 'Monthly');
      expect(component.aenableMonthEmailbox).toBe(true);
    });
    it('should set correct flag for Teenagers Annual', () => {
      component.enableEmailboxEvent(true, 'Teenagers', 'Annual');
      expect(component.teenageraenableEmailbox).toBe(true);
    });
    it('should set correct flag for Teenagers Monthly', () => {
      component.enableEmailboxEvent(true, 'Teenagers', 'Monthly');
      expect(component.teenagerenableMonthEmailbox).toBe(true);
    });
  });

  describe('back', () => {
    it('should navigate to add-to-cart', () => {
      component.back();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/add-to-cart']);
    });
  });
});
