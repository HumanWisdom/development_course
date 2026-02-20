import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WellnessSurveyIntroPage } from './wellness-survey-intro.page';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { Constant } from '../../services/constant';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WellnessSurveyIntroPage', () => {
  let component: WellnessSurveyIntroPage;
  let fixture: ComponentFixture<WellnessSurveyIntroPage>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockProgramId: any;

  beforeEach(async () => {
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [WellnessSurveyIntroPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: Router, useValue: mockRouter },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WellnessSurveyIntroPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
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
      fixture = TestBed.createComponent(WellnessSurveyIntroPage);
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
      fixture = TestBed.createComponent(WellnessSurveyIntroPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });
  });

  describe('startSurvey', () => {
    it('should navigate to wellness-survey route', () => {
      component.startSurvey();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wellness-survey']);
    });
  });

  describe('goBack', () => {
    it('should navigate to back link when available', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/back-url');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/back-url']);
    });

    it('should navigate to NaviagtedFrom when back link is null and NaviagtedFrom exists', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue('/previous-page');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/previous-page']);
    });

    it('should call location.back when no back link and no NaviagtedFrom', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });

    it('should call location.back when NaviagtedFrom is null string', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue('null');
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });
});

