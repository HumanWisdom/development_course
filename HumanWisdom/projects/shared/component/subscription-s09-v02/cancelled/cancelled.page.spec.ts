import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelledPage } from './cancelled.page';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Constant } from '../../../services/constant';
import { ProgramType } from '../../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CancelledPage', () => {
  let component: CancelledPage;
  let fixture: ComponentFixture<CancelledPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockProgramId: any;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue(null);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'setDataInLocalStorage');

    await TestBed.configureTestingModule({
      declarations: [CancelledPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelledPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(CancelledPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should load trialData from localStorage when ManageSubscriptionData exists', () => {
      const mockData = { BoughtName: '2024-01-01', ExpDate: '2024-02-01' };
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(JSON.stringify(mockData));

      component.ngOnInit();

      expect(component.trialData).toEqual(mockData);
    });

    it('should not set trialData when ManageSubscriptionData is null', () => {
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(null);

      component.ngOnInit();

      expect(component.trialData).toBeUndefined();
    });
  });

  describe('NewSubscription', () => {
    it('should set isFromCancelled in localStorage and navigate to subscription page', () => {
      component.NewSubscription();

      expect(SharedService.setDataInLocalStorage).toHaveBeenCalledWith(Constant.isFromCancelled, 'T');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/subscription/try-free-and-subscribe']);
    });
  });

  describe('dashboard', () => {
    it('should navigate to adults home when isAdults is true', () => {
      component.isAdults = true;

      component.dashboard();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });

    it('should navigate to teenagers home when isAdults is false', () => {
      component.isAdults = false;

      component.dashboard();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/home']);
    });
  });
});
