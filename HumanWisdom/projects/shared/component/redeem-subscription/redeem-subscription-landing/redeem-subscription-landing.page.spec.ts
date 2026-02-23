import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedeemSubscriptionLandingPage } from './redeem-subscription-landing.page';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RedeemSubscriptionLandingPage', () => {
  let component: RedeemSubscriptionLandingPage;
  let fixture: ComponentFixture<RedeemSubscriptionLandingPage>;
  let mockRouter: jasmine.SpyObj<Router>;
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
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    localStorage.clear();
    localStorage.setItem('Subscriber', '0');
    localStorage.setItem('isloggedin', 'F');

    TestBed.configureTestingModule({
      declarations: [RedeemSubscriptionLandingPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemSubscriptionLandingPage);
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
      fixture = TestBed.createComponent(RedeemSubscriptionLandingPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should call getUserDetail', () => {
      spyOn(component, 'getUserDetail');
      component.ngOnInit();
      expect(component.getUserDetail).toHaveBeenCalled();
    });
  });

  describe('route', () => {
    it('should set redeemlanding and navigate to redeem-subscription when type is redeem', () => {
      component.route('redeem');
      expect(localStorage.getItem('redeemlanding')).toBe('T');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/redeem-subscription']);
    });

    it('should set enabledModal true when type is login', () => {
      component.route('login');
      expect(component.enabledModal).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('when type is dash and teenagers should navigate to teenager-dashboard', () => {
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('teenagers');
      component.route('dash');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/teenager-dashboard']);
    });

    it('when type is dash and adults should navigate to adult-dashboard', () => {
      component.route('dash');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });
  });

  describe('getClosemodalEvent', () => {
    it('should call getUserDetail and set enabledModal false', () => {
      spyOn(component, 'getUserDetail');
      component.enabledModal = true;
      component.getClosemodalEvent();
      expect(component.getUserDetail).toHaveBeenCalled();
      expect(component.enabledModal).toBe(false);
    });
  });

  describe('getUserDetail', () => {
    it('should set isSubscriber true when Subscriber is 1', () => {
      localStorage.setItem('Subscriber', '1');
      component.getUserDetail();
      expect(component.isSubscriber).toBe(true);
    });

    it('should set isLoggedIn and email when isloggedin is T', () => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('email', 'user@test.com');
      component.getUserDetail();
      expect(component.isLoggedIn).toBe(true);
      expect(component.email).toBe('user@test.com');
    });
  });

  describe('getGiftCard', () => {
    it('when logged in should return message containing Gift Card and subscribe', () => {
      component.isLoggedIn = true;
      expect(component.getGiftCard()).toContain('Gift Card');
      expect(component.getGiftCard()).toContain('subscribe');
    });

    it('when not logged in should mention registering', () => {
      component.isLoggedIn = false;
      expect(component.getGiftCard()).toContain('Begin by registering');
    });
  });
});
