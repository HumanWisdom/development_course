import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { QuestionAnswersSelection } from './question-answers-selection.page';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of, Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('QuestionAnswersSelection', () => {
  let component: QuestionAnswersSelection;
  let fixture: ComponentFixture<QuestionAnswersSelection>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let originalProgramId: PropertyDescriptor | undefined;

  const sampleQuestionAns = [
    {
      Que: 'Question 1?',
      OptStr: ['A. Option A', 'B. Option B'],
      Points: [1, 2],
      OptId: [101, 102]
    },
    {
      Que: 'Question 2?',
      OptStr: ['A. Option A', 'B. Option B'],
      Points: [1, 2],
      OptId: [201, 202]
    }
  ];

  const clickModuleResponse = {
    ListOfQueOpts: [
      { Que: 'Q1', OptId: [1], OptStr: ['Opt1'], Points: [5] },
      { Que: 'Q2', OptId: [2], OptStr: ['Opt2'], Points: [3] }
    ]
  };

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'clickModule',
      'submitProgressQuestion',
      'wisdomScore'
    ]);
    mockOnboardingService.clickModule.and.returnValue(of(clickModuleResponse));
    mockOnboardingService.submitProgressQuestion.and.returnValue(
      of({ WisdomSurveyRecomm: [] })
    );
    mockOnboardingService.wisdomScore.and.returnValue(of({}));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('userId', JSON.stringify(42));
    localStorage.setItem('feedbackSurvey', '{}');
    localStorage.setItem(
      'loginResponse',
      JSON.stringify({ hwScore: 0, someOther: 'data' })
    );

    Object.defineProperty(window.history, 'state', {
      value: {},
      configurable: true,
      writable: true
    });

    spyOn(window, 'scrollTo');

    await TestBed.configureTestingModule({
      declarations: [QuestionAnswersSelection],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: LogEventService, useValue: mockLogEventService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionAnswersSelection);
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
      fixture = TestBed.createComponent(QuestionAnswersSelection);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should have initial progress 0 and currentSection 0', () => {
      expect(component.progress).toBe(0);
      expect(component.currentSection).toBe(0);
    });

    it('should have btnDisabled true and prevBtnDisabled false initially', () => {
      expect(component.btnDisabled).toBe(true);
      expect(component.prevBtnDisabled).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should set userId from localStorage', () => {
      localStorage.setItem('userId', JSON.stringify(99));
      fixture = TestBed.createComponent(QuestionAnswersSelection);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.userId).toBe(99);
    });

    it('should set questionAndAns from localStorage when present', () => {
      localStorage.setItem('questionAns', JSON.stringify(sampleQuestionAns));
      fixture = TestBed.createComponent(QuestionAnswersSelection);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.questionAndAns).toEqual(sampleQuestionAns);
    });

    it('should call getQuestions when questionAndAns is empty', () => {
      localStorage.removeItem('questionAns');
      fixture = TestBed.createComponent(QuestionAnswersSelection);
      component = fixture.componentInstance;
      spyOn(component, 'getQuestions');
      component.ngOnInit();
      expect(component.getQuestions).toHaveBeenCalled();
    });

    it('should call getQuestions when questionAndAns is null', () => {
      localStorage.setItem('questionAns', 'null');
      fixture = TestBed.createComponent(QuestionAnswersSelection);
      component = fixture.componentInstance;
      spyOn(component, 'getQuestions');
      component.ngOnInit();
      expect(component.getQuestions).toHaveBeenCalled();
    });

    it('should not call getQuestions when questionAndAns has items', () => {
      localStorage.setItem('questionAns', JSON.stringify(sampleQuestionAns));
      fixture = TestBed.createComponent(QuestionAnswersSelection);
      component = fixture.componentInstance;
      spyOn(component, 'getQuestions');
      component.ngOnInit();
      expect(component.getQuestions).not.toHaveBeenCalled();
    });
  });

  describe('getQuestions', () => {
    it('should set loading false after response and call clickModule', fakeAsync(() => {
      component.questionAndAns = null;
      component.userId = 42;
      component.getQuestions();
      tick();
      expect(mockOnboardingService.clickModule).toHaveBeenCalledWith(50, 42);
      expect(component.loading).toBe(false);
      expect(component.questionAndAns).toBeDefined();
      expect(component.questionAndAns.length).toBe(2);
    }));

    it('should transform ListOfQueOpts into questionAndAns shape', fakeAsync(() => {
      component.questionAndAns = null;
      component.userId = 42;
      component.getQuestions();
      tick();
      expect(component.questionAndAns[0].Que).toBe('Q1');
      expect(component.questionAndAns[0].OptStr).toEqual([['Opt1']]);
      expect(component.questionAndAns[0].Points).toEqual([[5]]);
      expect(component.questionAndAns[0].OptId).toEqual([[1]]);
    }));

    it('should set questionAndAns in localStorage', fakeAsync(() => {
      component.questionAndAns = null;
      component.userId = 42;
      spyOn(localStorage, 'setItem');
      component.getQuestions();
      tick();
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'questionAns',
        jasmine.any(String)
      );
    }));

    it('should set loading false on error', fakeAsync(() => {
      mockOnboardingService.clickModule.and.returnValue(
        new Observable(obs => obs.error('err'))
      );
      component.questionAndAns = null;
      component.userId = 42;
      component.loading = true;
      component.getQuestions();
      tick();
      expect(component.loading).toBe(false);
    }));
  });

  describe('receiveRating', () => {
    it('should set rating1 and s1 for Id 1', () => {
      component.receiveRating(JSON.stringify({ Id: '1', Rating: 3, s: 'opt1' }));
      expect(component.rating1).toBe(3);
      expect(component.s1).toBe('opt1');
    });

    it('should set rating5 and s5 for Id 5', () => {
      component.receiveRating(JSON.stringify({ Id: '5', Rating: 2, s: 'opt5' }));
      expect(component.rating5).toBe(2);
      expect(component.s5).toBe('opt5');
    });

    it('should set rating10 and s10 for Id 10', () => {
      component.receiveRating(
        JSON.stringify({ Id: '10', Rating: 4, s: 'opt10' })
      );
      expect(component.rating10).toBe(4);
      expect(component.s10).toBe('opt10');
    });
  });

  describe('checkOption', () => {
    it('should update selectedObj and set btnDisabled false', fakeAsync(() => {
      spyOn(component, 'receiveRating');
      spyOn(component, 'next');
      component.checkOption(0, 101, 2, 'A. Option A');
      expect(component.selectedObj[0]).toBe('A. Option A');
      expect(component.btnDisabled).toBe(false);
      expect(component.receiveRating).toHaveBeenCalled();
      tick(600);
      expect(component.next).toHaveBeenCalledWith('click_Daily_Practice_Next');
    }));

    it('should call submitProgress when index is 9', fakeAsync(() => {
      component.s1 = component.s2 = component.s3 = component.s4 = component.s5 =
        component.s6 = component.s7 = component.s8 = component.s9 = component.s10 =
          'x';
      spyOn(component, 'receiveRating');
      spyOn(component, 'submitProgress');
      spyOn(component, 'next');
      component.checkOption(9, 901, 1, 'Option');
      tick(600);
      expect(component.submitProgress).toHaveBeenCalled();
      expect(component.next).not.toHaveBeenCalled();
    }));
  });

  describe('receiveBookmark', () => {
    it('should set bookmark to 1 when e is true', () => {
      component.receiveBookmark(true);
      expect(component.bookmark).toBe(1);
      expect(sessionStorage.getItem('bookmark11')).toBe('1');
    });

    it('should set bookmark to 0 when e is false', () => {
      component.receiveBookmark(false);
      expect(component.bookmark).toBe(0);
      expect(sessionStorage.getItem('bookmark11')).toBe('0');
    });
  });

  describe('next', () => {
    it('should increment currentSection and progress', () => {
      component.next('ev');
      expect(component.currentSection).toBe(1);
      expect(component.progress).toBe(10);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should set prevBtnDisabled true when currentSection is 1', () => {
      component.next('ev');
      expect(component.prevBtnDisabled).toBe(true);
    });

    it('should set direction to left when currentSection is not 0', () => {
      component.next('ev');
      expect(component.direction).toBe('left');
    });

    it('should wrap currentSection from 10 to 0', () => {
      component.currentSection = 9;
      component.next('ev');
      expect(component.currentSection).toBe(0);
    });

    it('should set btnDisabled false when currentSection has next answer set', () => {
      component.s2 = 'x';
      component.next('ev');
      expect(component.currentSection).toBe(1);
      expect(component.btnDisabled).toBe(false);
    });
  });

  describe('back', () => {
    it('should decrement currentSection and progress', () => {
      component.currentSection = 2;
      component.progress = 20;
      component.back('ev');
      expect(component.currentSection).toBe(1);
      expect(component.progress).toBe(10);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should set direction to right', () => {
      component.back('ev');
      expect(component.direction).toBe('right');
    });

    it('should wrap currentSection from 0 to 10', () => {
      component.currentSection = 0;
      component.back('ev');
      expect(component.currentSection).toBe(10);
    });

    it('should set prevBtnDisabled false when currentSection goes to 0', () => {
      component.currentSection = 1;
      component.prevBtnDisabled = true;
      component.back('ev');
      expect(component.currentSection).toBe(0);
      expect(component.prevBtnDisabled).toBe(false);
    });
  });

  describe('submitProgress', () => {
    it('should set content and enableAlert when not all answers selected', () => {
      component.submitProgress();
      expect(component.content).toBe('Please complete the survey');
      expect(component.enableAlert).toBe(true);
      expect(mockOnboardingService.submitProgressQuestion).not.toHaveBeenCalled();
    });

    it('should call logEvent and submitProgressQuestion when all answers set', fakeAsync(() => {
      component.s1 = component.s2 = component.s3 = component.s4 = component.s5 =
        component.s6 = component.s7 = component.s8 = component.s9 = component.s10 =
          'opt';
      component.userId = 42;
      component.bookmark = 0;
      component.submitProgress();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith(
        'click_survey_submit'
      );
      expect(mockOnboardingService.submitProgressQuestion).toHaveBeenCalledWith(
        jasmine.objectContaining({
          ModuleId: 50,
          UserId: 42,
          Bookmark: 0,
          OptionIDs: 'opt,opt,opt,opt,opt,opt,opt,opt,opt,opt'
        })
      );
      tick();
      expect(mockOnboardingService.wisdomScore).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/wisdom-survey/wisdom-score'],
        jasmine.any(Object)
      );
    }));

    it('should pass isUseCloseButton from history.state when present', fakeAsync(() => {
      Object.defineProperty(window.history, 'state', {
        value: { isUseCloseButton: true },
        configurable: true
      });
      component.s1 = component.s2 = component.s3 = component.s4 = component.s5 =
        component.s6 = component.s7 = component.s8 = component.s9 = component.s10 =
          'x';
      component.userId = 42;
      component.submitProgress();
      tick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        jasmine.any(Array),
        jasmine.objectContaining({
          state: { isUseCloseButton: true }
        })
      );
    }));
  });

  describe('goBack', () => {
    it('should navigate to wisdom-survey with program name', () => {
      component.goBack();
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        '/adults/wisdom-survey'
      ]);
    });
  });
});
