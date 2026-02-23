import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedeemCongratulationPage } from './redeem-congratulation.page';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { ProgramType } from '../../../../shared/models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RedeemCongratulationPage', () => {
  let component: RedeemCongratulationPage;
  let fixture: ComponentFixture<RedeemCongratulationPage>;
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
    localStorage.setItem('yearormonth', 'Year-Adults');

    TestBed.configureTestingModule({
      declarations: [RedeemCongratulationPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemCongratulationPage);
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
      localStorage.setItem('yearormonth', 'Month-Teenagers');
      fixture = TestBed.createComponent(RedeemCongratulationPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set yearormonth and programName from localStorage', () => {
      expect(component.yearormonth).toBe('Year');
      expect(component.programName).toBe('Adults');
    });
  });

  describe('route', () => {
    it('when event is dash should navigate to home', () => {
      component.route('dash');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });

    it('when event is not dash should navigate to onboarding myprogram', () => {
      component.route('other');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/myprogram']);
    });
  });
});
