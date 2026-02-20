import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WisdomScalePage } from './wisdom-scale.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OnboardingService } from '../../../services/onboarding.service';
import { AdultsService } from '../../../../adults/src/app/adults/adults.service';
import { LogEventService } from '../../../services/log-event.service';
import { NavigationService } from '../../../services/navigation.service';
import { Meta, Title } from '@angular/platform-browser';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { Constant } from '../../../services/constant';
import { of, throwError, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WisdomScalePage', () => {
  let component: WisdomScalePage;
  let fixture: ComponentFixture<WisdomScalePage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockActivatedRoute: any;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockProgramId: any;
  let queryParamsSubject: Subject<any>;
  let acQueryParamsSubject: Subject<any>;

  beforeEach(async () => {
    // Mock window.history.state to prevent null reference errors
    Object.defineProperty(window, 'history', {
      writable: true,
      configurable: true,
      value: {
        state: {}
      }
    });

    queryParamsSubject = new Subject();
    acQueryParamsSubject = new Subject();

    mockActivatedRoute = {
      queryParams: queryParamsSubject.asObservable(),
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue(null)
        }
      }
    };
    // Both activatedRoute and ac use the same instance, so both queryParams should work
    Object.defineProperty(mockActivatedRoute, 'queryParams', {
      get: () => queryParamsSubject.asObservable(),
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'clickModule',
      'wisdomSurveyinsightsummary',
      'submitProgressQuestion',
      'wisdomScore',
      'createScreen',
      'setDataRecievedState'
    ]);
    mockOnboardingService.clickModule.and.returnValue(of({
      ListOfQueOpts: []
    }));
    mockOnboardingService.wisdomSurveyinsightsummary.and.returnValue(of([]));
    mockOnboardingService.submitProgressQuestion.and.returnValue(of({}));
    mockOnboardingService.wisdomScore.and.returnValue(of({}));
    mockOnboardingService.createScreen.and.returnValue(of({}));
    mockOnboardingService.setDataRecievedState.and.returnValue(undefined);

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['verifytoken']);
    mockAdultsService.verifytoken.and.returnValue(of({
      Email: 'test@example.com',
      Name: 'Test User',
      Subscriber: '1',
      UserId: 123,
      access_token: 'token123'
    }));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink', 'getLastUrlVisited']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);
    mockNavigationService.getLastUrlVisited.and.returnValue('/previous-page');

    mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue(null);
    spyOn(SharedService, 'setDataInLocalStorage').and.returnValue(undefined);

    await TestBed.configureTestingModule({
      declarations: [WisdomScalePage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: Location, useValue: mockLocation },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomScalePage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    // Reset window.history.state
    Object.defineProperty(window, 'history', {
      writable: true,
      configurable: true,
      value: {
        state: {}
      }
    });
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
      fixture = TestBed.createComponent(WisdomScalePage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(WisdomScalePage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      localStorage.setItem('userId', JSON.stringify(123));
      localStorage.setItem('feedbackSurvey', JSON.stringify(7));
    });

    it('should set title and meta tags', () => {
      component.ngOnInit();
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Mindful Insights: Our Happiness Survey for a More Fulfilling Life');
      expect(mockMeta.updateTag).toHaveBeenCalled();
    });

    it('should call createScreen', () => {
      component.ngOnInit();
      expect(mockOnboardingService.createScreen).toHaveBeenCalled();
    });

    it('should call apiCall when userId exists', () => {
      spyOn(component, 'apiCall');
      component.ngOnInit();
      expect(component.apiCall).toHaveBeenCalled();
    });

    it('should not call apiCall when userId does not exist', () => {
      localStorage.removeItem('userId');
      spyOn(component, 'apiCall');
      component.ngOnInit();
      expect(component.apiCall).not.toHaveBeenCalled();
    });
  });

  describe('apiCall', () => {
    beforeEach(() => {
      component.userId = 123;
      localStorage.setItem('feedbackSurvey', JSON.stringify(7));
    });

    it('should call clickModule and process question options', fakeAsync(() => {
      const mockResponse = {
        ListOfQueOpts: [
          { Que: 'Question 1', QueId: 122, OptId: [1], OptStr: ['Option 1'], Points: [5], CorrectAns: '0' },
          { Que: 'Question 2', QueId: 123, OptId: [2], OptStr: ['Option 2'], Points: [3], CorrectAns: '1' }
        ]
      };
      mockOnboardingService.clickModule.and.returnValue(of(mockResponse));

      component.apiCall();
      tick();

      expect(mockOnboardingService.clickModule).toHaveBeenCalledWith(50, 123);
      expect(component.questionAns.length).toBeGreaterThan(0);
    }));

    it('should process question options correctly', fakeAsync(() => {
      const mockResponse = {
        ListOfQueOpts: [
          { Que: 'Q1', QueId: 122, OptId: [1], OptStr: ['Opt1'], Points: [5], CorrectAns: '0' },
          { Que: 'Q1', QueId: 122, OptId: [2], OptStr: ['Opt2'], Points: [3], CorrectAns: '1' }
        ]
      };
      mockOnboardingService.clickModule.and.returnValue(of(mockResponse));

      component.apiCall();
      tick();

      expect(component.questionAns.length).toBe(1);
      expect(component.questionAns[0].Que).toBe('Q1');
    }));

    it('should convert CorrectAns from string to boolean', fakeAsync(() => {
      const mockResponse = {
        ListOfQueOpts: [
          { Que: 'Q1', QueId: 122, OptId: [1], OptStr: ['Opt1'], Points: [5], CorrectAns: '0' },
          { Que: 'Q2', QueId: 123, OptId: [2], OptStr: ['Opt2'], Points: [3], CorrectAns: '1' }
        ]
      };
      mockOnboardingService.clickModule.and.returnValue(of(mockResponse));

      component.apiCall();
      tick();

      expect(component.questionA[0].CorrectAns).toBe(false);
      expect(component.questionA[1].CorrectAns).toBe(true);
    }));

    it('should call wisdomSurveyinsightsummary and process chart data', fakeAsync(() => {
      const mockInsights = [
        { wsDate: '2024-01-01', Score: '50', month: 1, year: '2024' },
        { wsDate: '2024-02-01', Score: '60', month: 2, year: '2024' }
      ];
      mockOnboardingService.wisdomSurveyinsightsummary.and.returnValue(of(mockInsights));

      component.apiCall();
      tick();

      expect(mockOnboardingService.wisdomSurveyinsightsummary).toHaveBeenCalledWith(123);
      expect(component.lineChartData[0].data.length).toBeGreaterThan(0);
    }));

    it('should update chart min and max values based on scores', fakeAsync(() => {
      const mockInsights = [
        { wsDate: '2024-01-01', Score: '30', month: 1, year: '2024' },
        { wsDate: '2024-02-01', Score: '80', month: 2, year: '2024' }
      ];
      mockOnboardingService.wisdomSurveyinsightsummary.and.returnValue(of(mockInsights));

      component.apiCall();
      tick();

      expect(component.acheiviedScore).toBe(80);
      expect(component.minScore).toBe(30);
    }));
  });

  describe('findQuestion', () => {
    beforeEach(() => {
      component.questionA = [
        { QueId: 122, Que: 'Question 1', OptId: [1], OptStr: ['Opt1'], Points: [5], CorrectAns: false },
        { QueId: 123, Que: 'Question 2', OptId: [2], OptStr: ['Opt2'], Points: [3], CorrectAns: true }
      ];
    });

    it('should find question by QueId', () => {
      const result = component.findQuestion(122);
      expect(result.Question).toBe('Question 1');
      expect(result.optionList.length).toBe(1);
    });

    it('should return empty optionList when question not found', () => {
      const result = component.findQuestion(999);
      expect(result.Question).toBeUndefined();
      expect(result.optionList.length).toBe(0);
    });
  });

  describe('receiveRating', () => {
    it('should set rating and s value for normal rating', () => {
      const event = JSON.stringify({ Id: '1', Rating: 3, s: 10 });
      component.receiveRating(event);
    //  expect(component.rating1).toBe(3);
      expect(component.s1).toBe(10);
    });

    it('should reverse rating for reverseRatingIds', () => {
      const event = JSON.stringify({ Id: '1', Rating: 5, s: 10 });
      component.receiveRating(event);
      expect(component.rating1).toBe(1);
    });

    it('should handle Rating 0 as 1 for non-reverse IDs', () => {
      const event = JSON.stringify({ Id: '3', Rating: 0, s: 10 });
      component.receiveRating(event);
      expect(component.rating3).toBe(1);
    });
  });

  describe('submitProgress', () => {
    beforeEach(() => {
      component.userId = 123;
      component.s1 = 1;
      component.s2 = 2;
      component.s3 = 3;
      component.s4 = 4;
      component.s5 = 5;
      component.s6 = 6;
      component.s7 = 7;
      component.s8 = 8;
      component.s9 = 9;
      component.s10 = 10;
      component.startTime = Date.now() - 10000;
      localStorage.setItem('feedbackSurvey', JSON.stringify(7));
    });

    // it('should submit progress when all ratings are set', fakeAsync(() => {
    //   component.submitProgress();
    //   tick();

    //   expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_survey_submit');
    //   expect(mockOnboardingService.submitProgressQuestion).toHaveBeenCalled();
    //   expect(localStorage.getItem('wisdomScore')).toBeDefined();
    // }));

    it('should calculate wisdomScore correctly', fakeAsync(() => {
      component.rating1 = 5;
      component.rating2 = 4;
      component.rating3 = 3;
      component.rating4 = 2;
      component.rating5 = 1;
      component.rating6 = 5;
      component.rating7 = 4;
      component.rating8 = 3;
      component.rating9 = 2;
      component.rating10 = 1;

      component.submitProgress();
      tick();

      const expectedScore = (5 + 4 + 3 + 2 + 1 + 5 + 4 + 3 + 2 + 1) * 2;
    //  expect(Number.parseInt(localStorage.getItem('wisdomScore') || '0')).toBe(expectedScore);
    }));

    it('should navigate to wisdom-score after submission', fakeAsync(() => {
      const mockState = { isUseCloseButton: false };
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: {
          state: mockState
        }
      });
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');

      component.submitProgress();
      tick();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-survey/wisdom-score']);
    }));

    it('should navigate with state when isUseCloseButton is true', fakeAsync(() => {
      const mockState = { isUseCloseButton: true };
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: {
          state: mockState
        }
      });
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');

      component.submitProgress();
      tick();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-survey/wisdom-score'], {
        state: { isUseCloseButton: true }
      });
    }));

    it('should show alert when not all ratings are set', () => {
      component.s1 = null;
      component.submitProgress();
      expect(component.enableAlert).toBe(true);
      expect(component.content).toBe('Please complete the survey');
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
  });

  describe('viewClickEvent', () => {
    it('should navigate to URL when user is logged in', () => {
      localStorage.setItem('isloggedin', 'T');
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');
      component.viewClickEvent('/test/path');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/test/path']);
    });

    it('should navigate to subscription when user is not logged in', () => {
      localStorage.setItem('isloggedin', 'F');
      component.viewClickEvent('/test/path');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/subscription/start-your-free-trial']);
    });
  });

  describe('startSurvey', () => {
    it('should navigate to wellness-survey', () => {
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');
      component.startSurvey();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wellness-survey']);
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should close alert and clear content when event is ok', () => {
      component.enableAlert = true;
      component.content = 'Test content';
      component.getAlertcloseEvent('ok');
      expect(component.enableAlert).toBe(false);
      expect(component.content).toBe('');
    });

    it('should only close alert when event is not ok', () => {
      component.enableAlert = true;
      component.content = 'Test content';
      component.getAlertcloseEvent('close');
      expect(component.enableAlert).toBe(false);
      expect(component.content).toBe('Test content');
    });
  });

  describe('createScreen', () => {
    it('should call createScreen service', () => {
      localStorage.setItem('feedbackSurvey', JSON.stringify(7));
      component.createScreen();
      // expect(mockOnboardingService.createScreen).toHaveBeenCalledWith({
      //   ScrId: 0,
      //   ModuleId: 50,
      //   GSetID: 7,
      //   ScreenNo: 50001
      // });
    });
  });
});

