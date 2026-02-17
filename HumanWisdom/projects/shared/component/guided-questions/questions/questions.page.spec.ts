import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { QuestionsPage } from './questions.page';
import { CommonService } from '../../../services/common.service';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

describe('QuestionsPage', () => {
  let component: QuestionsPage;
  let fixture: ComponentFixture<QuestionsPage>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;

  const mockQuestionsData = [
    {
      QuestionNo: '1',
      Question: 'What causes you stress?',
      Response: '',
      hint: 'Think about recent events',
      TopicId: 1,
      QuestionId: 1,
      AttemptNo: 0,
      ResponseID: null
    },
    {
      QuestionNo: '2',
      Question: 'How do you handle stress?',
      Response: 'I exercise',
      hint: 'Consider your coping mechanisms',
      TopicId: 1,
      QuestionId: 2,
      AttemptNo: 0,
      ResponseID: 123
    }
  ];

  beforeEach(async () => {
    // Create mock ActivatedRoute
    mockActivatedRoute = {
      snapshot: {
        queryParamMap: {
          get: jasmine.createSpy('get')
        }
      }
    };
    mockActivatedRoute.snapshot.queryParamMap.get.and.returnValue(null);

    // Create mock Router
    mockRouter = jasmine.createSpyObj('Router', ['navigate'], {
      url: '/guidedquestions/questions'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    // Create mock CommonService
    mockCommonService = jasmine.createSpyObj('CommonService', [
      'GetGuidedQs_Response',
      'AddGuidedQs_Response'
    ]);
    mockCommonService.GetGuidedQs_Response.and.returnValue(of(mockQuestionsData));
    mockCommonService.AddGuidedQs_Response.and.returnValue(of({ success: true }));

    // Create mock NavigationService
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [QuestionsPage],
      providers: [
        { provide: CommonService, useValue: mockCommonService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: NavigationService, useValue: mockNavigationService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    // Setup SharedService
    Object.defineProperty(SharedService, 'ProgramId', {
      writable: true,
      configurable: true,
      value: ProgramType.Adults
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getUrlfromFeatureName').and.returnValue('/adults/journal');

    // Setup localStorage
    localStorage.clear();
    localStorage.setItem('userId', '123');

    fixture = TestBed.createComponent(QuestionsPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    localStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have default property values', () => {
      expect(component.data).toEqual([{
        QuestionNo: '',
        Question: '',
        Response: '',
        hint: ''
      }]);
      expect(component.counter).toBe(1);
      expect(component.title).toBe('');
      expect(component.currentSlide).toBe(0);
      expect(component.numSlides).toBe(0);
      expect(component.length).toBe(0);
      expect(component.isChanged).toBe(false);
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      const newFixture = TestBed.createComponent(QuestionsPage);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.isAdults).toBe(true);
      newFixture.destroy();
    });

    it('should set isAdults to false when ProgramId is not Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      const newFixture = TestBed.createComponent(QuestionsPage);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.isAdults).toBe(false);
      newFixture.destroy();
    });

    it('should initialize userId from localStorage', () => {
      localStorage.setItem('userId', '456');
      
      const newFixture = TestBed.createComponent(QuestionsPage);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.userId).toBe(456);
      newFixture.destroy();
    });
  });

  describe('ngOnInit()', () => {
    it('should load questions data from service', () => {
      mockActivatedRoute.snapshot.queryParamMap.get.and.callFake((param: string) => {
        if (param === 'Qid') return '1';
        if (param === 'Attempt') return '0';
        return null;
      });

      component.ngOnInit();

      expect(mockCommonService.GetGuidedQs_Response).toHaveBeenCalledWith(1, 0);
      expect(component.data).toEqual(mockQuestionsData);
      expect(component.numSlides).toBe(2);
    });

    it('should set title based on maintitile subscription', () => {
      mockActivatedRoute.snapshot.queryParamMap.get.and.returnValue(null);
      mockCommonService.GetGuidedQs_Response.and.returnValue(of(mockQuestionsData));

      component.ngOnInit();
      component.maintitile.next(2);

      expect(component.title).toBe('2/2');
    });

    it('should handle null response from service', () => {
      mockActivatedRoute.snapshot.queryParamMap.get.and.returnValue(null);
      mockCommonService.GetGuidedQs_Response.and.returnValue(of(null));

      component.ngOnInit();

      expect(component.data).toEqual([{
        QuestionNo: '',
        Question: '',
        Response: '',
        hint: ''
      }]);
    });
  });

  describe('SaveAnswers()', () => {
    it('should save answer with ResponseID when ResponseID exists', () => {
      const response = {
        TopicId: 1,
        ResponseID: 123,
        AttemptNo: 1,
        QuestionId: 1,
        Response: 'Test answer'
      };

      component.userId = 123;
      component.SaveAnswers(response);

      expect(mockCommonService.AddGuidedQs_Response).toHaveBeenCalledWith({
        TopicID: 1,
        ResponseID: 123,
        AttemptNo: 1,
        QuestionID: 1,
        UserID: 123,
        Response: 'Test answer',
        savetoJournal: '0'
      });
    });

    it('should save answer without ResponseID when ResponseID is null', () => {
      const response = {
        TopicId: 1,
        ResponseID: null,
        AttemptNo: 1,
        QuestionId: 1,
        Response: 'New answer'
      };

      component.userId = 123;
      component.SaveAnswers(response);

      expect(mockCommonService.AddGuidedQs_Response).toHaveBeenCalledWith({
        TopicID: 1,
        AttemptNo: 1,
        QuestionID: 1,
        UserID: 123,
        Response: 'New answer',
        savetoJournal: '0'
      });
    });

    it('should handle service response', () => {
      const response = {
        TopicId: 1,
        ResponseID: null,
        AttemptNo: 1,
        QuestionId: 1,
        Response: 'Test'
      };

      component.SaveAnswers(response);

      expect(mockCommonService.AddGuidedQs_Response).toHaveBeenCalled();
    });
  });

  describe('goback()', () => {
    it('should navigate to journal when back link is search', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/search');
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/journal');

      component.goback();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/journal'],
        { queryParams: { isGuided: true } }
      );
    });

    it('should not navigate when back link is not search', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/dashboard');

      component.goback();

      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('Backward()', () => {
    it('should call goback when navigationService returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      spyOn(component, 'goback');
      spyOn(window, 'scrollTo');

      component.Backward();

      expect(component.goback).toHaveBeenCalled();
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should navigate to back link when available', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/dashboard');
      spyOn(window, 'scrollTo');

      component.Backward();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/dashboard']);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
  });

  describe('getClass()', () => {
    it('should return active class when questionNo matches counter', () => {
      component.counter = 1;
      component.isChanged = false;

      const result = component.getClass('1');

      expect(result).toBe('active');
      expect(component.isChanged).toBe(true);
    });

    it('should return undefined when questionNo does not match counter', () => {
      component.counter = 1;

      const result = component.getClass('2');

      expect(result).toBeUndefined();
    });
  });

  describe('forward()', () => {
    it('should increment counter and update maintitile', () => {
      component.data = mockQuestionsData;
      component.counter = 1;
      component.isChanged = true;
      spyOn(window, 'scrollTo');

      component.forward();

      expect(component.counter).toBe(2);
      expect(component.isChanged).toBe(false);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should reset counter to 1 when counter exceeds data length', () => {
      component.data = mockQuestionsData;
      component.counter = 2;
      spyOn(window, 'scrollTo');

      component.forward();

      expect(component.counter).toBe(1);
    });

    it('should update maintitile with new counter value', () => {
      component.data = mockQuestionsData;
      component.counter = 1;
      spyOn(component.maintitile, 'next');
      spyOn(window, 'scrollTo');

      component.forward();

      expect(component.maintitile.next).toHaveBeenCalledWith(2);
    });
  });

  describe('back()', () => {
    it('should decrement counter and update maintitile', () => {
      component.data = mockQuestionsData;
      component.counter = 2;
      component.isChanged = true;

      component.back();

      expect(component.counter).toBe(1);
      expect(component.isChanged).toBe(false);
    });

    it('should set counter to data length when counter is less than 1', () => {
      component.data = mockQuestionsData;
      component.counter = 1;

      component.back();

      expect(component.counter).toBe(2);
    });

    it('should update maintitile with new counter value', () => {
      component.data = mockQuestionsData;
      component.counter = 2;
      spyOn(component.maintitile, 'next');

      component.back();

      expect(component.maintitile.next).toHaveBeenCalledWith(1);
    });
  });

  describe('modulo()', () => {
    it('should return positive modulo result', () => {
      expect(component.modulo(5, 3)).toBe(2);
      expect(component.modulo(10, 4)).toBe(2);
    });

    it('should handle negative numbers correctly', () => {
      expect(component.modulo(-1, 3)).toBe(2);
      expect(component.modulo(-5, 4)).toBe(3);
    });

    it('should return 0 when number is divisible by mod', () => {
      expect(component.modulo(6, 3)).toBe(0);
      expect(component.modulo(8, 4)).toBe(0);
    });
  });

  describe('changeSlide()', () => {
    it('should update maintitile with slide number', () => {
      spyOn(component.maintitile, 'next');

      component.changeSlide(3);

      expect(component.maintitile.next).toHaveBeenCalledWith(3);
    });
  });

  describe('SaveBtn()', () => {
    it('should save last question with savetoJournal = 1 when ResponseID exists', () => {
      component.data = mockQuestionsData;
      component.numSlides = 2;
      component.userId = 123;
      mockCommonService.AddGuidedQs_Response.and.returnValue(of({ success: true }));
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/guidedquestions/saved');

      component.SaveBtn();

      expect(mockCommonService.AddGuidedQs_Response).toHaveBeenCalledWith({
        TopicID: 1,
        ResponseID: 123,
        AttemptNo: 0,
        QuestionID: 2,
        UserID: 123,
        Response: 'I exercise',
        savetoJournal: '1'
      });
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/guidedquestions/saved']);
    });

    it('should save last question without ResponseID when ResponseID is null', () => {
      const dataWithoutResponseId = [
        {
          QuestionNo: '1',
          Question: 'Test question',
          Response: 'Test answer',
          TopicId: 1,
          QuestionId: 1,
          AttemptNo: 0,
          ResponseID: null
        }
      ];
      component.data = dataWithoutResponseId;
      component.numSlides = 1;
      component.userId = 123;
      mockCommonService.AddGuidedQs_Response.and.returnValue(of({ success: true }));
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/guidedquestions/saved');

      component.SaveBtn();

      expect(mockCommonService.AddGuidedQs_Response).toHaveBeenCalledWith({
        TopicID: 1,
        AttemptNo: 0,
        QuestionID: 1,
        UserID: 123,
        Response: 'Test answer',
        savetoJournal: '1'
      });
    });

    it('should handle error from service', () => {
      component.data = mockQuestionsData;
      component.numSlides = 2;
      component.userId = 123;
      const error = { Message: 'Error saving' };
      mockCommonService.AddGuidedQs_Response.and.returnValue(throwError(error));
      spyOn(console, 'log');

      component.SaveBtn();

      expect(console.log).toHaveBeenCalledWith('Error saving');
    });
  });

  describe('SubmitButton()', () => {
    it('should navigate to journal with isGuided query param', () => {
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/journal');

      component.SubmitButton();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/journal'],
        { queryParams: { isGuided: true } }
      );
    });
  });
});

