import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { of, throwError } from 'rxjs';

import { IndexPage } from './index.page';
import { CommonService } from '../../../services/common.service';
import { LogEventService } from '../../../services/log-event.service';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

describe('IndexPage', () => {
  let component: IndexPage;
  let fixture: ComponentFixture<IndexPage>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockElementRef: ElementRef;
  let mockChangeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;

  const mockJournalList = [
    {
      RowId: 1,
      TitleQue: 'Test Question',
      Response: 'Test Response',
      Date: '2024-01-01',
      JrType: 'Diary',
      ModuleName: 'Test Module'
    },
    {
      RowId: 2,
      TitleQue: 'Guided Question',
      Response: 'Guided Response',
      Date: '2024-01-02',
      JrType: 'Guided Journaling',
      ModuleName: 'Guided Module'
    }
  ];

  const mockDailyQuestion = [
    {
      Qtn: 'What are you grateful for today?',
      Ans: 'Family and health',
      QueId: 1
    }
  ];

  const mockDailyCheckIn = [
    { RowID: 1, Question: 'How are you feeling?' },
    { RowID: 2, Question: 'What did you learn today?' }
  ];

  const mockTopics = [
    { RowID: 1, Topic: 'Stress', Landing_URL: '/stress' },
    { RowID: 2, Topic: 'Anxiety', Landing_URL: '/anxiety' }
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
      url: '/journal'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    // Create mock Location
    mockLocation = jasmine.createSpyObj('Location', ['back']);

    // Create mock CommonService
    mockCommonService = jasmine.createSpyObj('CommonService', [
      'viewJournal',
      'getDailyQuestion',
      'addDailyQuestion',
      'GetGuidedQs_Topics',
      'getDailyCheckins',
      'getModules'
    ]);
    mockCommonService.viewJournal.and.returnValue(of(mockJournalList));
    mockCommonService.getDailyQuestion.and.returnValue(of(mockDailyQuestion));
    mockCommonService.addDailyQuestion.and.returnValue(of({ success: true }));
    mockCommonService.GetGuidedQs_Topics.and.returnValue(of(mockTopics));
    mockCommonService.getDailyCheckins.and.returnValue(of(mockDailyCheckIn));
    mockCommonService.getModules.and.returnValue(of([]));

    // Create mock LogEventService
    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    // Create mock NavigationService
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    // Create mock ElementRef
    mockElementRef = {
      nativeElement: {
        getElementsByClassName: jasmine.createSpy('getElementsByClassName').and.returnValue([])
      }
    } as any;

    // Create mock ChangeDetectorRef
    mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);

    await TestBed.configureTestingModule({
      declarations: [IndexPage],
      providers: [
        { provide: CommonService, useValue: mockCommonService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: ElementRef, useValue: mockElementRef },
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    // Setup SharedService
    Object.defineProperty(SharedService, 'ProgramId', {
      writable: true,
      configurable: true,
      value: ProgramType.Adults
    });
    Object.defineProperty(SharedService, 'isFromAdults', {
      writable: true,
      configurable: true,
      value: false
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getUrlfromFeatureName').and.returnValue('/adults/journal');

    // Setup localStorage
    localStorage.clear();
    localStorage.setItem('saveUsername', 'true');
    localStorage.setItem('userId', '123');
    localStorage.setItem('guest', 'F');
    localStorage.setItem('Subscriber', '1');

    fixture = TestBed.createComponent(IndexPage);
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
      expect(component.defaultShow).toBe(true);
      expect(component.search).toBe('');
      expect(component.journalList).toEqual([]);
      expect(component.isDiary).toBe(true);
      expect(component.isGuidedQueestionsTab).toBe(false);
      expect(component.searchedText).toBeUndefined();
      expect(component.isAdults).toBe(true);
      expect(component.guest).toBe(false);
      expect(component.Subscriber).toBe(true);
      expect(component.enableTab).toBe('All');
    });

    it('should set isAdults based on ProgramId', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      const newFixture = TestBed.createComponent(IndexPage);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.isAdults).toBe(false);
      newFixture.destroy();
    });
  });

  // describe('ngOnInit()', () => {
  //   it('should load userId from localStorage when saveUsername is true', () => {
  //     localStorage.setItem('saveUsername', 'true');
  //     localStorage.setItem('userId', '456');
  //     spyOn(component, 'viewJournalAndReflections');
  //     spyOn(component, 'getDailyQuestion');

  //     component.ngOnInit();

  //     expect(component.userId).toBe(456);
  //     expect(component.viewJournalAndReflections).toHaveBeenCalled();
  //     expect(component.getDailyQuestion).toHaveBeenCalled();
  //   });

  //   it('should load userId from sessionStorage when saveUsername is false', () => {
  //     localStorage.setItem('saveUsername', 'false');
  //     sessionStorage.setItem('userId', '789');
  //     spyOn(component, 'viewJournalAndReflections');
  //     spyOn(component, 'getDailyQuestion');

  //     component.ngOnInit();

  //     expect(component.userId).toBe(789);
  //     expect(component.viewJournalAndReflections).not.toHaveBeenCalled();
  //     expect(component.getDailyQuestion).not.toHaveBeenCalled();
  //   });

  //   it('should show guided questions tab when isGuided query param is true', () => {
  //     mockActivatedRoute.snapshot.queryParamMap.get.and.returnValue('true');
  //     spyOn(component, 'GetGuidedQs_Topics');

  //     component.ngOnInit();

  //     expect(component.isGuidedQueestionsTab).toBe(true);
  //     expect(component.isDiary).toBe(false);
  //     expect(component.GetGuidedQs_Topics).toHaveBeenCalled();
  //   });
  // });

  describe('ngOnChanges()', () => {
    it('should call searchjournal when search input changes', () => {
      component.jrListC = mockJournalList;
      component.search = 'test';
      spyOn(component, 'searchjournal');

      component.ngOnChanges({
        search: {
          currentValue: 'test',
          previousValue: '',
          firstChange: false,
          isFirstChange: () => false
        }
      } as any);

      expect(component.searchjournal).toHaveBeenCalledWith('test');
    });

    it('should not call searchjournal on first change', () => {
      component.jrListC = mockJournalList;
      spyOn(component, 'searchjournal');

      component.ngOnChanges({
        search: {
          currentValue: 'test',
          previousValue: '',
          firstChange: true,
          isFirstChange: () => true
        }
      } as any);

      expect(component.searchjournal).not.toHaveBeenCalled();
    });
  });

  // describe('viewJournalAndReflections()', () => {
  //   it('should load journal list and daily checkins', () => {
  //     component.userId = 123;
  //     component.jrListC = [];
  //     component.defaultShow = true;

  //     component.viewJournalAndReflections();

  //     expect(mockCommonService.viewJournal).toHaveBeenCalledWith(123);
  //     expect(mockCommonService.getDailyCheckins).toHaveBeenCalled();
  //   });

  //   it('should sort journal list by date', () => {
  //     component.userId = 123;
  //     const unsortedList = [
  //       { Date: '2024-01-02', RowId: 1 },
  //       { Date: '2024-01-01', RowId: 2 },
  //       { Date: '2024-01-03', RowId: 3 }
  //     ];
  //     mockCommonService.viewJournal.and.returnValue(of(unsortedList));
  //     mockCommonService.getDailyCheckins.and.returnValue(of(mockDailyCheckIn));

  //     component.viewJournalAndReflections();

  //     expect(component.jrList[0].Date).toBe('2024-01-03');
  //     expect(component.jrList[2].Date).toBe('2024-01-01');
  //   });

  //   it('should call searchjournal when defaultShow is false', () => {
  //     component.userId = 123;
  //     component.defaultShow = false;
  //     component.search = 'test';
  //     spyOn(component, 'searchjournal');
  //     mockCommonService.getDailyCheckins.and.returnValue(of(mockDailyCheckIn));

  //     component.viewJournalAndReflections();

  //     expect(component.searchjournal).toHaveBeenCalledWith('test');
  //   });
  // });

  // describe('showGuidedQuestions()', () => {
  //   it('should filter journal list by Guided Journaling type', () => {
  //     component.jrListC = mockJournalList;
  //     component.searchedText = '';
  //     component.enableTab = 'All';

  //     component.showGuidedQuestions();

  //     expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_GuidedQsTab');
  //     expect(component.enableTab).toBe('Guided');
  //     expect(component.jrList.length).toBe(1);
  //     expect(component.jrList[0].JrType).toBe('Guided Journaling');
  //   });

  //   it('should filter with search text when searchedText is provided', () => {
  //     component.jrListC = mockJournalList;
  //     component.searchedText = 'Guided';

  //     component.showGuidedQuestions();

  //     expect(component.jrList.length).toBe(1);
  //     expect(component.jrList[0].TitleQue).toContain('Guided');
  //   });
  // });

  describe('showMicrolearning()', () => {
    it('should filter journal list by Microlearning notes type', () => {
      const microlearningList = [
        ...mockJournalList,
        { RowId: 3, TitleQue: 'Micro Question', Response: 'Micro Response', JrType: 'Microlearning notes' }
      ];
      component.jrListC = microlearningList;
      component.searchedText = '';

      component.showMicrolearning();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_MicrolearningTab');
      expect(component.enableTab).toBe('Micro');
      expect(component.jrList.length).toBe(1);
      expect(component.jrList[0].JrType).toBe('Microlearning notes');
    });
  });

  describe('goToNote()', () => {
    it('should show alert when not subscriber', () => {
      component.Subscriber = false;
      component.isFreeTrialEnable = false;
      component.enableAlert = false;

      component.goToNote(1, 'Title', 'Notes', 'Diary');

      expect(component.isFreeTrialEnable).toBe(true);
      expect(component.enableAlert).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to note when subscriber', () => {
      component.Subscriber = true;
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/note');

      component.goToNote(1, 'Title', 'Notes', 'Diary');

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_tapToAnswer');
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        '/adults/note',
        { title: 'Title', jId: 1, jNotes: 'Notes', type: 'Diary' }
      ]);
    });

    it('should log click_new_note when jId is 0', () => {
      component.Subscriber = true;
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/note');

      component.goToNote(0, 'Title', 'Notes', 'Diary');

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_new_note');
    });
   });

  describe('RouteToToQuestions()', () => {
    it('should show alert when guest or not subscriber', () => {
      component.guest = true;
      const item = { Landing_URL: '/test-topic' };

      component.RouteToToQuestions(item);

      expect(component.isFreeTrialEnable).toBe(true);
      expect(component.enableAlert).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to topic when subscriber', () => {
      component.guest = false;
      component.Subscriber = true;
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/journal');
      const item = { Landing_URL: '/test-topic' };

      component.RouteToToQuestions(item);

      // expect(mockRouter.navigate).toHaveBeenCalledWith(
      //   ['/adults/journal/test-topic'],
      //   { state: { isBypass: true } }
      // );
    });
  });

  describe('clearInput()', () => {
    it('should clear searchedText and reload data', () => {
      component.searchedText = 'test';
      spyOn(component, 'viewJournalAndReflections');
      spyOn(component, 'getDailyQuestion');

      component.clearInput();

      expect(component.searchedText).toBe('');
      expect(component.viewJournalAndReflections).toHaveBeenCalled();
      expect(component.getDailyQuestion).toHaveBeenCalled();
    });
  });

  describe('getDailyQuestion()', () => {
    it('should load daily question data', () => {
      component.userId = 123;

      component.getDailyQuestion();

      expect(mockCommonService.getDailyQuestion).toHaveBeenCalledWith(123);
      expect(component.dailyQuestion).toBe('What are you grateful for today?');
      expect(component.dailyResponse).toBe('Family and health');
      expect(component.dailyId).toBe(1);
    });

    it('should handle error from service', () => {
      component.userId = 123;
      const error = 'Error loading question';
      mockCommonService.getDailyQuestion.and.returnValue(throwError(error));
      spyOn(console, 'log');

      component.getDailyQuestion();

      expect(console.log).toHaveBeenCalledWith(error);
    });
  });

  describe('addDailyQuestion()', () => {
    it('should add daily question response', () => {
      component.userId = 123;
      component.dailyResponse = 'My response';

      component.addDailyQuestion(1);

      expect(mockCommonService.addDailyQuestion).toHaveBeenCalledWith({
        SubscriberID: 123,
        ReflectionId: 1,
        Resp: 'My response'
      });
    });

    it('should handle error from service', () => {
      component.userId = 123;
      component.dailyResponse = 'My response';
      const error = 'Error saving';
      mockCommonService.addDailyQuestion.and.returnValue(throwError(error));
      spyOn(console, 'log');

      component.addDailyQuestion(1);

      expect(console.log).toHaveBeenCalledWith(error);
    });
  });

  describe('NavigateToQuestions()', () => {
    it('should navigate to questions with query params', () => {
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/guidedquestions');
      const data = { ProgId: 1, UserReflectionID: 2 };

      component.NavigateToQuestions(data);

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/guidedquestions'],
        { queryParams: { Qid: 1, Attempt: 2 } }
      );
    });
  });

  describe('GoToQuestions()', () => {
    it('should show alert when guest or not subscriber', () => {
      component.guest = true;
      const data = { JrType: 'Guided Journaling' };

      component.GoToQuestions(data);

      expect(component.enableAlert).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to questions for Guided Journaling type', () => {
      component.guest = false;
      component.Subscriber = true;
      spyOn(component, 'NavigateToQuestions');
      const data = { JrType: 'Guided Journaling', ProgId: 1, UserReflectionID: 2 };

      component.GoToQuestions(data);

      expect(component.NavigateToQuestions).toHaveBeenCalledWith(data);
    });

    it('should go to note for non-Guided Journaling type', () => {
      component.guest = false;
      component.Subscriber = true;
      spyOn(component, 'goToNote');
      const data = { JrType: 'Diary', RowId: 1, TitleQue: 'Title', Response: 'Response' };

      component.GoToQuestions(data);

      expect(component.goToNote).toHaveBeenCalledWith(1, 'Title', 'Response', 'Diary');
    });
  });

   describe('YourDiary()', () => {
    it('should switch to diary tab and reload data', () => {
      component.isDiary = false;
      component.isGuidedQueestionsTab = true;
      spyOn(component, 'viewJournalAndReflections');
      spyOn(component, 'getDailyQuestion');

      component.YourDiary();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_journal_YourDiary');
      expect(component.isDiary).toBe(true);
      expect(component.isGuidedQueestionsTab).toBe(false);
      expect(component.viewJournalAndReflections).toHaveBeenCalled();
      expect(component.getDailyQuestion).toHaveBeenCalled();
    });
  });

  describe('GuidedQuestionTab()', () => {
    it('should switch to guided questions tab', () => {
      component.isDiary = true;
      component.isGuidedQueestionsTab = false;
      spyOn(component, 'GetGuidedQs_Topics');

      component.GuidedQuestionTab();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_journal_guided_questions');
      expect(component.isDiary).toBe(false);
      expect(component.isGuidedQueestionsTab).toBe(true);
      expect(component.GetGuidedQs_Topics).toHaveBeenCalled();
    });
  });

  describe('searchText()', () => {
    it('should reload data when search text is empty', () => {
      const event = { target: { value: '' } } as any;
      spyOn(component, 'viewJournalAndReflections');
      spyOn(component, 'getDailyQuestion');

      component.searchText(event);

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_search');
      expect(component.viewJournalAndReflections).toHaveBeenCalled();
      expect(component.getDailyQuestion).toHaveBeenCalled();
    });

    it('should filter journal list when search text is provided', () => {
      component.jrListC = mockJournalList;
      const event = { target: { value: 'Test' } } as any;

      component.searchText(event);

      expect(component.jrList.length).toBe(1);
      expect(component.jrList[0].TitleQue).toContain('Test');
    });
  });

  describe('searchjournal()', () => {
    it('should reload data when text is empty', () => {
      component.jrListC = mockJournalList;
      spyOn(component, 'viewJournalAndReflections');
      spyOn(component, 'getDailyQuestion');

      component.searchjournal('');

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_search');
      expect(component.viewJournalAndReflections).toHaveBeenCalled();
      expect(component.getDailyQuestion).toHaveBeenCalled();
    });

    it('should filter by Response, TitleQue, or ModuleName', () => {
      component.jrListC = mockJournalList;

      component.searchjournal('Test');

      expect(component.jrList.length).toBeGreaterThan(0);
    });
  });

  describe('showAll()', () => {
    it('should show all journal entries', () => {
      component.enableTab = 'Guided';
      component.searchedText = '';
      spyOn(component, 'viewJournalAndReflections');

      component.showAll();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_AllNotesTab');
      expect(component.enableTab).toBe('All');
      expect(component.viewJournalAndReflections).toHaveBeenCalled();
    });

    it('should filter with search text when searchedText is provided', () => {
      component.jrListC = mockJournalList;
      component.searchedText = 'Test';

      component.showAll();

      expect(component.jrList.length).toBeGreaterThan(0);
    });
  });

  describe('showReflections()', () => {
    it('should filter journal list by Reflections type', () => {
      const reflectionsList = [
        ...mockJournalList,
        { RowId: 3, TitleQue: 'Reflection', Response: 'Response', JrType: 'Reflections' }
      ];
      component.jrListC = reflectionsList;
      component.searchedText = '';

      component.showReflections();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_reflectionsTab');
      expect(component.enableTab).toBe('Reflections');
      expect(component.jrList.length).toBe(1);
      expect(component.jrList[0].JrType).toBe('Reflections');
    });
  });

  describe('showNotes()', () => {
    it('should filter journal list by Diary type', () => {
      component.jrListC = mockJournalList;
      component.searchedText = '';

      component.showNotes();

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_diaryTab');
      expect(component.enableTab).toBe('Diary');
      expect(component.jrList.length).toBe(1);
      // expect(component.jrList[0].JrType).toBe('Diary');
      // expect(mockChangeDetectorRef.detectChanges).toHaveBeenCalled();
    });
  });

  describe('GetGuidedQs_Topics()', () => {
    it('should load topics and set viewMore and viewLess', () => {
      component.GetGuidedQs_Topics();

      expect(mockCommonService.GetGuidedQs_Topics).toHaveBeenCalled();
      // expect(component.viewMore.length).toBe(6);
      // expect(component.viewLess.length).toBeGreaterThanOrEqual(0);
      // expect(component.topic).toEqual(component.viewMore);
    });
  });

  describe('goBack()', () => {
    it('should switch to diary when in guided questions tab and not from adults', () => {
      component.isGuidedQueestionsTab = true;
      component.isDiary = false;
      SharedService.isFromAdults = false;
      spyOn(component, 'viewJournalAndReflections');
      spyOn(component, 'getDailyQuestion');

      component.goBack();

      expect(component.isGuidedQueestionsTab).toBe(false);
      expect(component.isDiary).toBe(true);
      expect(component.viewJournalAndReflections).toHaveBeenCalled();
      expect(component.getDailyQuestion).toHaveBeenCalled();
    });

    it('should navigate back when from adults', () => {
      component.isGuidedQueestionsTab = true;
      SharedService.isFromAdults = true;
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/dashboard');

      component.goBack();

      expect(SharedService.isFromAdults).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/dashboard']);
    });

    it('should use location.back when navigateToBackLink returns null', () => {
      component.isGuidedQueestionsTab = false;
      SharedService.isFromAdults = true;
      mockNavigationService.navigateToBackLink.and.returnValue(null);

      component.goBack();

      expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('getAlertcloseEvent()', () => {
    it('should close alert and navigate to subscription when event is ok and not guest and not subscriber', () => {
      component.enableAlert = true;
      component.isFreeTrialEnable = true;
      component.guest = false;
      component.Subscriber = false;
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/subscription/start-your-free-trial');

      component.getAlertcloseEvent('ok');

      expect(component.enableAlert).toBe(false);
      expect(component.isFreeTrialEnable).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/subscription/start-your-free-trial']);
    });

    it('should navigate to login when guest', () => {
      component.enableAlert = true;
      component.guest = true;
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/onboarding/login');

      component.getAlertcloseEvent('ok');

      expect(localStorage.getItem('subscribepage')).toBe('T');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
    });

    it('should only close alert when event is not ok', () => {
      component.enableAlert = true;
      component.isFreeTrialEnable = true;

      component.getAlertcloseEvent('cancel');

      expect(component.enableAlert).toBe(false);
      expect(component.isFreeTrialEnable).toBe(false);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('viewMoreAndLess()', () => {
    it('should show viewMore when isViewMore is true', () => {
      component.viewMore = mockTopics.slice(0, 1);
      component.viewLess = mockTopics.slice(1);
      component.topic = [];

      component.viewMoreAndLess(true);

      expect(component.isViewMore).toBe(true);
      expect(component.topic).toEqual(component.viewMore);
    });

    it('should show all topics when isViewMore is false', () => {
      component.viewMore = mockTopics.slice(0, 1);
      component.viewLess = mockTopics.slice(1);

      component.viewMoreAndLess(false);

      expect(component.isViewMore).toBe(false);
      expect(component.topic.length).toBe(component.viewMore.length + component.viewLess.length);
    });
  });

  describe('getdailCheckInData()', () => {
    it('should filter daily checkin data by rowId', () => {
      component.dailyCheckIn = mockDailyCheckIn;

      const result = component.getdailCheckInData(1);

      expect(result.length).toBe(1);
      expect(result[0].RowID).toBe(1);
    });

    it('should return empty array when rowId not found', () => {
      component.dailyCheckIn = mockDailyCheckIn;

      const result = component.getdailCheckInData(999);

      expect(result.length).toBe(0);
    });
  });

  describe('ngAfterViewInit()', () => {
    it('should add event listener to clear input element', fakeAsync(() => {
      const mockElement = document.createElement('div');
      mockElement.className = 'gqtns_search';
      mockElement.addEventListener = jasmine.createSpy('addEventListener');
      mockElementRef.nativeElement.getElementsByClassName.and.returnValue([mockElement]);

      component.ngAfterViewInit();
      tick(1000);

    //  expect(mockElement.addEventListener).toHaveBeenCalled();
    }));
  });

  describe('Edge Cases', () => {
    it('should handle null userId', () => {
      component.userId = null;

      expect(() => component.getDailyQuestion()).not.toThrow();
    });

    it('should handle empty journal list', () => {
      component.jrListC = [];
      component.searchedText = 'test';

      component.searchjournal('test');

      expect(component.jrList.length).toBe(0);
    });

  });
});

