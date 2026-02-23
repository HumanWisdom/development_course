import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyCheckinNoteSavePage } from './daily-check-note-save.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { LogEventService } from '../../services/log-event.service';
import { SharedService } from '../../services/shared.service';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('DailyCheckinNoteSavePage', () => {
  let component: DailyCheckinNoteSavePage;
  let fixture: ComponentFixture<DailyCheckinNoteSavePage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
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
    mockCommonService = jasmine.createSpyObj('CommonService', ['submitJournal']);
    mockCommonService.submitJournal.and.returnValue(of(1));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue('{}');
    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/home' as any);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getUrlfromFeatureName').and.callFake((path: string) => `/adults${path}` as any);

    localStorage.clear();
    localStorage.setItem('isloggedin', 'F');
    localStorage.setItem('userId', JSON.stringify(42));

    TestBed.configureTestingModule({
      declarations: [DailyCheckinNoteSavePage],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: CommonService, useValue: mockCommonService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyCheckinNoteSavePage);
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
      fixture = TestBed.createComponent(DailyCheckinNoteSavePage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set isLoggedIn from localStorage', () => {
      localStorage.setItem('isloggedin', 'T');
      fixture = TestBed.createComponent(DailyCheckinNoteSavePage);
      component = fixture.componentInstance;
      expect(component.isLoggedIn).toBe(true);
    });

    it('should set isFirstLogin from SharedService.isRoutedFromLogin', () => {
      SharedService.isRoutedFromLogin = true;
      fixture = TestBed.createComponent(DailyCheckinNoteSavePage);
      component = fixture.componentInstance;
      expect(component.isFirstLogin).toBe(true);
    });

    it('should initialize rowData via initializeDailyCheckinList', () => {
      expect(component.rowData).toEqual({
        RowId: '',
        Expression: '',
        ImgPath: '',
        SearchTerm: '',
        Description: ''
      });
    });

    it('should set minDate to today in YYYY-MM-DD format', () => {
      const t = new Date();
      const expected =
        t.getFullYear() +
        '-' +
        (t.getMonth() + 1 < 10 ? '0' : '') +
        (t.getMonth() + 1) +
        '-' +
        (t.getDate() < 10 ? '0' : '') +
        t.getDate();
      expect(component.minDate).toBe(expected);
    });
  });

  describe('ngOnInit', () => {
    it('should log View_daily_checkin_save', () => {
      component.ngOnInit();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('View_daily_checkin_save');
    });

    it('should set rowData from dailyCheckIn in localStorage', () => {
      const stored = {
        RowId: '1',
        RowID: 1,
        Expression: 'Tired',
        ImgPath: '/img.svg',
        SearchTerm: '',
        Description: 'How are you?'
      };
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(JSON.stringify(stored));
      component.ngOnInit();
      expect(component.rowData).toEqual(stored);
    });

    it('should set rowData to parsed JSON when dailyCheckIn is valid', () => {
      const data = { Expression: 'Overwhelmed', Description: 'Desc' };
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(JSON.stringify(data));
      component.ngOnInit();
      expect(component.rowData).toEqual(data);
    });
  });

  describe('initializeDailyCheckinList', () => {
    it('should return object with RowId, Expression, ImgPath, SearchTerm, Description', () => {
      const result = component.initializeDailyCheckinList();
      expect(result).toEqual({
        RowId: '',
        Expression: '',
        ImgPath: '',
        SearchTerm: '',
        Description: ''
      });
    });
  });

  describe('addZero', () => {
    it('should prefix single digit with 0', () => {
      expect(component.addZero(5)).toBe('05');
      expect(component.addZero(9)).toBe('09');
    });

    it('should not prefix double digit', () => {
      expect(component.addZero(10)).toBe(10);
      expect(component.addZero(12)).toBe(12);
    });
  });

  describe('SaveJournal', () => {
    it('should log click_daily_checkin_save_ with rowData.Expression', () => {
      component.rowData = { Expression: 'Tired', RowID: 1 } as any;
      component.SaveJournal();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_daily_checkin_save_Tired');
    });

    it('when not logged in should set enableAlert to true', () => {
      component.isLoggedIn = false;
      component.SaveJournal();
      expect(component.enableAlert).toBe(true);
      expect(mockCommonService.submitJournal).not.toHaveBeenCalled();
    });

    it('when logged in should call submitJournal with correct payload', () => {
      component.isLoggedIn = true;
      component.checkInDescription = 'My note';
      component.rowData = {
        RowId: '',
        RowID: 10,
        Expression: 'Tired',
        ImgPath: '',
        SearchTerm: '',
        Description: ''
      } as any;
      component.SaveJournal();
      expect(mockCommonService.submitJournal).toHaveBeenCalledWith({
        JournalId: 0,
        JDate: component.minDate,
        Notes: 'My note',
        UserId: 42,
        CheckinID: 10,
        Title: 'Daily check-in'
      });
    });

    it('when submitJournal succeeds should set showSuccessModal to true', () => {
      component.isLoggedIn = true;
      component.checkInDescription = 'Note';
      component.rowData = { RowID: 1 } as any;
      component.SaveJournal();
      expect(component.showSuccessModal).toBe(true);
    });

    it('when submitJournal returns 0 should still show success modal', () => {
      mockCommonService.submitJournal.and.returnValue(of(0));
      component.isLoggedIn = true;
      component.checkInDescription = 'Note';
      component.rowData = { RowID: 1 } as any;
      component.SaveJournal();
      expect(component.showSuccessModal).toBe(true);
    });
  });

  describe('goToHome', () => {
    it('should log click_daily_checkin_Save_home', () => {
      component.goToHome();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_daily_checkin_Save_home');
    });

    it('when isFirstLogin should call continue', () => {
      component.isFirstLogin = true;
      spyOn(component, 'continue');
      component.goToHome();
      expect(component.continue).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalledWith([jasmine.any(String)]);
    });

    it('when not isFirstLogin should navigate to dashboard', () => {
      component.isFirstLogin = false;
      component.goToHome();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });
  });

  describe('continue', () => {
    it('should navigate to programName/my-dashboard', () => {
      component.continue();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults/my-dashboard']);
    });
  });

  describe('goBack', () => {
    it('should log click_daily_checkin_Save_back', () => {
      component.goBack();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_daily_checkin_Save_back');
    });

    it('should call location.back when navigateToBackLink returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to url when navigateToBackLink returns url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/daily-checkin');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/daily-checkin']);
      expect(mockLocation.back).not.toHaveBeenCalled();
    });
  });

  describe('findOutMore', () => {
    it('should navigate to develop-a-calm-mind when Expression is Tired', () => {
      component.rowData = { Expression: 'Tired' } as any;
      component.findOutMore();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith('/pathway/develop-a-calm-mind');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/pathway/develop-a-calm-mind']);
    });

    it('should navigate to feel-better-now/stress when Expression is Overwhelmed', () => {
      component.rowData = { Expression: 'Overwhelmed' } as any;
      component.findOutMore();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith('/feel-better-now/stress');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/feel-better-now/stress']);
    });

    it('should navigate for Embarrassed', () => {
      component.rowData = { Expression: 'Embarrassed' } as any;
      component.findOutMore();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(
        '/audiopage/~podcasts~77.mp3/77/T/Feeling-embarassed'
      );
    });

    it('should navigate for Disappointed', () => {
      component.rowData = { Expression: 'Disappointed' } as any;
      component.findOutMore();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(
        '/audiopage/~podcasts~76.mp3/76/T/Feeling-Disappointed'
      );
    });

    it('should navigate for Guilty', () => {
      component.rowData = { Expression: 'Guilty' } as any;
      component.findOutMore();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(
        '/audiopage/~podcasts~81.mp3/81/T/Feeling-guilty'
      );
    });

    it('should navigate for Unwell', () => {
      component.rowData = { Expression: 'Unwell' } as any;
      component.findOutMore();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(
        '/audiopage/~podcasts~115.mp3/115/T/Feeling-unwell'
      );
    });

    it('should navigate to site-search when SearchTerm is set', () => {
      component.rowData = { Expression: 'Other', SearchTerm: 'anxiety' } as any;
      component.findOutMore();
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith('/site-search/anxiety');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/site-search/anxiety']);
    });

    it('should call goToHome when no Expression match and no SearchTerm', () => {
      component.rowData = { Expression: 'Unknown', SearchTerm: '' } as any;
      spyOn(component, 'goToHome');
      component.findOutMore();
      expect(component.goToHome).toHaveBeenCalled();
    });
  });

  describe('getAlertcloseEvent', () => {
    it('when event is ok should set enableAlert false and navigate to trial', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent('ok');
      expect(component.enableAlert).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        SharedService.getUrlfromFeatureName('/subscription/start-your-free-trial')
      ]);
    });

    it('when event is not ok should only set enableAlert false', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent('cancel');
      expect(component.enableAlert).toBe(false);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });
});
