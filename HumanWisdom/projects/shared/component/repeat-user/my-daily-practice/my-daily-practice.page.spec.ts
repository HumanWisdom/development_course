import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDailyPracticePage } from './my-daily-practice.page';
import { CommonService } from '../../../services/common.service';
import { LogEventService } from '../../../services/log-event.service';
import { Router } from '@angular/router';
import { AdultsService } from '../../../../adults/src/app/adults/adults.service';
import { TeenagersService } from '../../../../teenagers/src/app/teenagers/teenagers.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MyDailyPracticePage - ngOnInit', () => {
  let component: MyDailyPracticePage;
  let fixture: ComponentFixture<MyDailyPracticePage>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockTeenagersService: jasmine.SpyObj<TeenagersService>;
  let mockProgramId: any;

  beforeEach(async () => {
    // Create mock services
    mockCommonService = jasmine.createSpyObj('CommonService', [
      'getDailypractiseQuestion',
      'getDailypractiseQuestionbreath',
      'getDailyInspirationQuestion',
      'getDailypractiseQuestionins',
      'getDailypractiseQuestionmeditation',
      'getDailypractiseQuestiontoday',
      'submitDailypractiseQuestion',
      'getModuleList'
    ]);
    mockCommonService.getDailypractiseQuestion.and.returnValue(of('1:Test Question'));
    mockCommonService.getDailypractiseQuestionbreath.and.returnValue(of('Breathing Title;video-link;5'));
    mockCommonService.getDailyInspirationQuestion.and.returnValue(of('Title;/path/to/video.109.mp4;Image;6;10'));
    mockCommonService.getDailypractiseQuestionins.and.returnValue(of('Author;Inspiration Text'));
    mockCommonService.getDailypractiseQuestionmeditation.and.returnValue(of('Audio Title;audio-link;15'));
    mockCommonService.getDailypractiseQuestiontoday.and.returnValue(of('Try this today'));
    mockCommonService.submitDailypractiseQuestion.and.returnValue(of({ success: true }));
    mockCommonService.getModuleList.and.returnValue(of([]));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['GetLastVisitedScreen', 'setmoduleID']);
    mockAdultsService.GetLastVisitedScreen.and.returnValue(of([]));
    mockAdultsService.setmoduleID.and.returnValue(undefined);

    mockTeenagersService = jasmine.createSpyObj('TeenagersService', ['GetLastVisitedScreen', 'setmoduleID']);
    mockTeenagersService.GetLastVisitedScreen.and.returnValue(of([]));
    mockTeenagersService.setmoduleID.and.returnValue(undefined);

    // Setup SharedService defaults
    mockProgramId = ProgramType.Teenagers;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getUserName').and.returnValue('Test User');
    spyOn(SharedService, 'getUserId').and.returnValue(123);
    spyOn(SharedService, 'getprogramName').and.returnValue('teenagers');
    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/teenagers/home');
    Object.defineProperty(SharedService, 'isRoutedFromLogin', {
      writable: true,
      configurable: true,
      value: false
    });

    await TestBed.configureTestingModule({
      declarations: [MyDailyPracticePage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: CommonService, useValue: mockCommonService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: TeenagersService, useValue: mockTeenagersService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyDailyPracticePage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    // Clean up localStorage and sessionStorage after each test
    localStorage.clear();
    sessionStorage.clear();
    document.body.style.overflow = '';
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set guest from localStorage in constructor', () => {
      localStorage.setItem('guest', 'T');
      fixture = TestBed.createComponent(MyDailyPracticePage);
      component = fixture.componentInstance;
      expect(component.guest).toBe(true);
    });

    it('should set guest to false when localStorage guest is not T', () => {
      localStorage.setItem('guest', 'F');
      fixture = TestBed.createComponent(MyDailyPracticePage);
      component = fixture.componentInstance;
      expect(component.guest).toBe(false);
    });

    it('should set isFirstLogin from SharedService.isRoutedFromLogin', () => {
      Object.defineProperty(SharedService, 'isRoutedFromLogin', {
        writable: true,
        configurable: true,
        value: true
      });
      fixture = TestBed.createComponent(MyDailyPracticePage);
      component = fixture.componentInstance;
      expect(component.isFirstLogin).toBe(true);
    });
  });

  describe('ngOnInit', () => {
    it('should set userName from SharedService.getUserName', () => {
      // Arrange
      (SharedService.getUserName as jasmine.Spy).and.returnValue('John Doe');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.userName).toBe('John');
      expect(SharedService.getUserName).toHaveBeenCalled();
    });

    it('should use FnName from localStorage when getUserName returns null', () => {
      // Arrange
      (SharedService.getUserName as jasmine.Spy).and.returnValue('null');
      localStorage.setItem('FnName', 'FallbackName');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.userName).toBe('FallbackName');
    });

    it('should use FnName from localStorage when getUserName returns undefined', () => {
      // Arrange
      (SharedService.getUserName as jasmine.Spy).and.returnValue('undefined');
      localStorage.setItem('FnName', 'FallbackName');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.userName).toBe('FallbackName');
    });

    it('should use FnName from localStorage when getUserName returns empty string', () => {
      // Arrange
      (SharedService.getUserName as jasmine.Spy).and.returnValue('');
      localStorage.setItem('FnName', 'FallbackName');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.userName).toBe('FallbackName');
    });

    it('should handle error when getUserName throws and use userName from localStorage', () => {
      // Arrange
      (SharedService.getUserName as jasmine.Spy).and.throwError('Error');
      localStorage.setItem('userName', 'LocalStorage User');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.userName).toBe('LocalStorage');
    });

    it('should remove quotes from userName', () => {
      // Arrange
      (SharedService.getUserName as jasmine.Spy).and.returnValue('"Quoted Name"');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.userName).toBe('Quoted');
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      // Arrange
      mockProgramId = ProgramType.Adults;

      // Act
      component.ngOnInit();

      // Assert
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      // Arrange
      mockProgramId = ProgramType.Teenagers;

      // Act
      component.ngOnInit();

      // Assert
      expect(component.isAdults).toBe(false);
    });

    it('should call getdailyquestion', () => {
      // Arrange
      spyOn(component, 'getdailyquestion');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.getdailyquestion).toHaveBeenCalled();
    });

    it('should call getdailyques', () => {
      // Arrange
      spyOn(component, 'getdailyques');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.getdailyques).toHaveBeenCalled();
    });

    it('should set placeholder to login message when guest is true', () => {
      // Arrange
      component.guest = true;
      component.isloggedIn = false;

      // Act
      component.ngOnInit();

      // Assert
      expect(component.placeholder).toBe('Login to use this feature');
    });

    it('should set placeholder to login message when not logged in', () => {
      // Arrange
      component.guest = false;
      component.isloggedIn = false;

      // Act
      component.ngOnInit();

      // Assert
      expect(component.placeholder).toBe('Login to use this feature');
    });

    it('should keep default placeholder when logged in and not guest', () => {
      // Arrange
      component.guest = false;
      component.isloggedIn = true;
      const defaultPlaceholder = component.placeholder;

      // Act
      component.ngOnInit();

      // Assert
      expect(component.placeholder).toBe(defaultPlaceholder);
    });

    it('should load loginResponse from localStorage', () => {
      // Arrange
      const mockLoginResponse = { Streak: 5, UserId: 123 };
      localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));

      // Act
      component.ngOnInit();

      // Assert
      expect(component.loginResponse).toEqual(mockLoginResponse);
      expect(component.streak).toBe(5);
    });

    it('should load loginResponse from sessionStorage when not in localStorage', () => {
      // Arrange
      const mockLoginResponse = { Streak: 3, UserId: 456 };
      sessionStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));

      // Act
      component.ngOnInit();

      // Assert
      expect(component.loginResponse).toEqual(mockLoginResponse);
      expect(component.streak).toBe(3);
    });

    it('should set streak to 0 when loginResponse has no Streak', () => {
      // Arrange
      const mockLoginResponse = { UserId: 123 };
      localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));

      // Act
      component.ngOnInit();

      // Assert
      expect(component.streak).toBe(0);
    });

    it('should set streak to 0 when loginResponse is null', () => {
      // Arrange
      localStorage.removeItem('loginResponse');
      sessionStorage.removeItem('loginResponse');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.streak).toBe(0);
    });

    it('should call getLastvisitedScr', () => {
      // Arrange
      spyOn(component as any, 'getLastvisitedScr');

      // Act
      component.ngOnInit();

      // Assert
      expect((component as any).getLastvisitedScr).toHaveBeenCalled();
    });

    it('should set journalHits from localStorage', () => {
      // Arrange
      localStorage.setItem('journalHits', '5');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.journalHits).toBe(5);
    });

    it('should set journalHits to 0 when not in localStorage', () => {
      // Arrange
      localStorage.removeItem('journalHits');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.journalHits).toBe(0);
    });

    it('should execute all ngOnInit operations in correct order', () => {
      // Arrange
      (SharedService.getUserName as jasmine.Spy).and.returnValue('Test User');
      localStorage.setItem('loginResponse', JSON.stringify({ Streak: 7 }));
      localStorage.setItem('journalHits', '3');
      spyOn(component, 'getdailyquestion');
      spyOn(component, 'getdailyques');
      spyOn(component as any, 'getLastvisitedScr');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.userName).toBe('Test');
      expect(component.isAdults).toBe(false);
      expect(component.getdailyquestion).toHaveBeenCalled();
      expect(component.getdailyques).toHaveBeenCalled();
      expect(component.streak).toBe(7);
      expect(component.journalHits).toBe(3);
      expect((component as any).getLastvisitedScr).toHaveBeenCalled();
    });
  });

  describe('getLastvisitedScr', () => {
    it('should call AdultsService.GetLastVisitedScreen when ProgramId is Adults', () => {
      // Arrange
      mockProgramId = ProgramType.Adults;
      const mockResponse = [{ ModuleId: 1, ModuleUrl: '/test' }];
      mockAdultsService.GetLastVisitedScreen.and.returnValue(of(mockResponse));

      // Act
      (component as any).getLastvisitedScr();

      // Assert
      expect(mockAdultsService.GetLastVisitedScreen).toHaveBeenCalledWith(123);
      expect(component.resumeLastvisited).toEqual(mockResponse);
    });

    it('should call TeenagersService.GetLastVisitedScreen when ProgramId is Teenagers', () => {
      // Arrange
      mockProgramId = ProgramType.Teenagers;
      const mockResponse = [{ ModuleId: 2, ModuleUrl: '/teen-test' }];
      mockTeenagersService.GetLastVisitedScreen.and.returnValue(of(mockResponse));

      // Act
      (component as any).getLastvisitedScr();

      // Assert
      expect(mockTeenagersService.GetLastVisitedScreen).toHaveBeenCalledWith(123);
      expect(component.resumeLastvisited).toEqual(mockResponse);
    });

    it('should set isSubscriber to true when Subscriber is 1', () => {
      // Arrange
      localStorage.setItem('Subscriber', '1');

      // Act
      (component as any).getLastvisitedScr();

      // Assert
      expect(component.isSubscriber).toBe(true);
    });

    it('should set isSubscriber to false when Subscriber is not 1', () => {
      // Arrange
      localStorage.setItem('Subscriber', '0');

      // Act
      (component as any).getLastvisitedScr();

      // Assert
      expect(component.isSubscriber).toBe(false);
    });

    it('should handle null response from GetLastVisitedScreen', () => {
      // Arrange
      mockAdultsService.GetLastVisitedScreen.and.returnValue(of(null));

      // Act
      (component as any).getLastvisitedScr();

      // Assert
      expect(component.resumeLastvisited).toEqual([]);
    });
  });

  describe('getdailyquestion', () => {
    it('should parse breathing question response correctly', () => {
      // Arrange
      mockCommonService.getDailypractiseQuestionbreath.and.returnValue(of('Breath Title;video-url;10'));

      // Act
      component.getdailyquestion();

      // Assert
      expect(component.dailybreathTitle).toBe('Breath Title');
      expect(component.videoLink).toBe('video-url');
      expect(component.breatheTime).toBe('10');
      expect(component.enableVideo).toBe(true);
    });

    it('should parse daily inspiration response correctly', () => {
      // Arrange
      mockCommonService.getDailyInspirationQuestion.and.returnValue(of('Inspiration Title;/path/to/video.109.mp4;image;6;20'));

      // Act
      component.getdailyquestion();

      // Assert
      expect(component.dailyInspirationTitle).toBe('Inspiration Title');
      expect(component.DailyInspirationLink).toBe('/path/to/video.109.mp4');
      expect(component.DailyInspirationImage).toBe('image');
      expect(component.DailyInspirationTime).toBe('20');
      expect(component.isVoices).toBe(true);
      expect(component.enableVideo).toBe(true);
      expect(component.DailyInspirationImg).toContain('wisdom_shorts_109.webp');
    });

    it('should set isVoices to false when third parameter is not 6', () => {
      // Arrange
      mockCommonService.getDailyInspirationQuestion.and.returnValue(of('Title;/path/to/video.109.mp4;Image;5;10'));

      // Act
      component.getdailyquestion();

      // Assert
      expect(component.isVoices).toBeFalsy();
    });

    it('should parse inspiration text response correctly', () => {
      // Arrange
      mockCommonService.getDailypractiseQuestionins.and.returnValue(of('Author Name;Inspiration Text Content'));

      // Act
      component.getdailyquestion();

      // Assert
      expect(component.dailyinsAuthor).toBe('Author Name');
      expect(component.dailyinstext).toBe('Inspiration Text Content');
    });

    it('should parse meditation response correctly', () => {
      // Arrange
      mockCommonService.getDailypractiseQuestionmeditation.and.returnValue(of('Meditation Title;audio-url;30'));

      // Act
      component.getdailyquestion();

      // Assert
      expect(component.audioTitle).toBe('Meditation Title');
      expect(component.audioLink).toBe('audio-url');
      expect(component.audioTime).toBe('30');
    });

    it('should parse try this today response correctly', () => {
      // Arrange
      mockCommonService.getDailypractiseQuestiontoday.and.returnValue(of('Try this today text'));

      // Act
      component.getdailyquestion();

      // Assert
      expect(component.trythistoday).toBe('Try this today text');
    });

    it('should handle null responses gracefully', () => {
      // Arrange
      mockCommonService.getDailypractiseQuestionbreath.and.returnValue(of(null));
      mockCommonService.getDailyInspirationQuestion.and.returnValue(of(null));
      mockCommonService.getDailypractiseQuestionins.and.returnValue(of(null));
      mockCommonService.getDailypractiseQuestionmeditation.and.returnValue(of(null));
      mockCommonService.getDailypractiseQuestiontoday.and.returnValue(of(null));

      // Act & Assert - should not throw
      expect(() => component.getdailyquestion()).not.toThrow();
    });

    it('should handle DailyInspirationLink with different number formats', () => {
      // Arrange
      mockCommonService.getDailyInspirationQuestion.and.returnValue(of('Title;/path/to/video.205.mp4;Image;6;10'));

      // Act
      component.getdailyquestion();

      // Assert
      expect(component.DailyInspirationImg).toContain('wisdom_shorts_205.webp');
    });
  });

  describe('getdailyques', () => {
    it('should parse daily question response correctly', () => {
      // Arrange
      mockCommonService.getDailypractiseQuestion.and.returnValue(of('123:What is your question?'));

      // Act
      component.getdailyques();

      // Assert
      expect(component.dailyqusrefid).toBe('123');
      expect(component.dailyqus).toBe('What is your question?');
    });

    it('should handle null response', () => {
      // Arrange
      mockCommonService.getDailypractiseQuestion.and.returnValue(of(null));

      // Act & Assert - should not throw
      expect(() => component.getdailyques()).not.toThrow();
    });
  });

  describe('subdailyques', () => {
    it('should log click_add_to_journal event', () => {
      // Arrange
      component.isloggedIn = true;
      component.isSubscriber = true;
      component.dailyqusrefid = '123';
      component.questext = 'Test answer';

      // Act
      component.subdailyques();

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_add_to_journal');
    });

    it('should show alert when user is not logged in', () => {
      // Arrange
      component.isloggedIn = false;
      component.dailyqusrefid = '123';
      component.questext = 'Test answer';

      // Act
      component.subdailyques();

      // Assert
      expect(component.enableAlert).toBe(true);
      expect(component.content).toBe('Subscribe to activate your online journal');
      expect(mockCommonService.submitDailypractiseQuestion).not.toHaveBeenCalled();
    });

    it('should navigate to subscription when non-subscriber hits limit', () => {
      // Arrange
      component.isloggedIn = true;
      component.isSubscriber = false;
      component.journalHits = 2;
      component.dailyqusrefid = '123';
      component.questext = 'Test answer';

      // Act
      component.subdailyques();

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['teenagers', 'subscription', 'start-your-free-trial']);
      expect(mockCommonService.submitDailypractiseQuestion).not.toHaveBeenCalled();
    });

    it('should increment journalHits for non-subscriber', () => {
      // Arrange
      component.isloggedIn = true;
      component.isSubscriber = false;
      component.journalHits = 1;
      component.dailyqusrefid = '123';
      component.questext = 'Test answer';
      mockCommonService.submitDailypractiseQuestion.and.returnValue(of({ success: true }));

      // Act
      component.subdailyques();

      // Assert
      expect(component.journalHits).toBe(2);
      expect(localStorage.getItem('journalHits')).toBe('2');
    });

    it('should submit question for subscriber', () => {
      // Arrange
      component.isloggedIn = true;
      component.isSubscriber = true;
      component.dailyqusrefid = '123';
      component.questext = 'Test answer';
      mockCommonService.submitDailypractiseQuestion.and.returnValue(of({ success: true }));

      // Act
      component.subdailyques();

      // Assert
      expect(mockCommonService.submitDailypractiseQuestion).toHaveBeenCalledWith({
        ReflectionId: '123',
        SubscriberId: localStorage.getItem('userID'),
        Resp: 'Test answer'
      });
    });

    it('should show success message and clear questext on successful submission', () => {
      // Arrange
      component.isloggedIn = true;
      component.isSubscriber = true;
      component.dailyqusrefid = '123';
      component.questext = 'Test answer';
      mockCommonService.submitDailypractiseQuestion.and.returnValue(of({ success: true }));

      // Act
      component.subdailyques();

      // Assert
      expect(component.content).toBe('Successfully added to journal');
      expect(component.enableAlert).toBe(true);
      expect(component.questext).toBe('');
    });

    it('should not increment journalHits for subscriber', () => {
      // Arrange
      component.isloggedIn = true;
      component.isSubscriber = true;
      component.journalHits = 0;
      component.dailyqusrefid = '123';
      component.questext = 'Test answer';
      mockCommonService.submitDailypractiseQuestion.and.returnValue(of({ success: true }));

      // Act
      component.subdailyques();

      // Assert
      expect(component.journalHits).toBe(0);
    });
  });

  describe('disableJournalBtn', () => {
    it('should return true when guest is true', () => {
      // Arrange
      component.guest = true;
      component.isloggedIn = true;
      component.questext = 'Answer';
      component.isSubscriber = true;

      // Act
      const result = component.disableJournalBtn;

      // Assert
      expect(result).toBe(true);
    });

    it('should return true when not logged in', () => {
      // Arrange
      component.guest = false;
      component.isloggedIn = false;
      component.questext = 'Answer';
      component.isSubscriber = true;

      // Act
      const result = component.disableJournalBtn;

      // Assert
      expect(result).toBe(true);
    });

    it('should return true when questext is empty', () => {
      // Arrange
      component.guest = false;
      component.isloggedIn = true;
      component.questext = '';
      component.isSubscriber = true;

      // Act
      const result = component.disableJournalBtn;

      // Assert
      expect(result).toBe(true);
    });

    it('should return true when non-subscriber hits limit', () => {
      // Arrange
      component.guest = false;
      component.isloggedIn = true;
      component.questext = 'Answer';
      component.isSubscriber = false;
      component.journalHits = 2;

      // Act
      const result = component.disableJournalBtn;

      // Assert
      expect(result).toBe(true);
    });

    it('should return false when all conditions are met for subscriber', () => {
      // Arrange
      component.guest = false;
      component.isloggedIn = true;
      component.questext = 'Answer';
      component.isSubscriber = true;

      // Act
      const result = component.disableJournalBtn;

      // Assert
      expect(result).toBe(false);
    });

    it('should return false when all conditions are met for non-subscriber below limit', () => {
      // Arrange
      component.guest = false;
      component.isloggedIn = true;
      component.questext = 'Answer';
      component.isSubscriber = false;
      component.journalHits = 1;

      // Act
      const result = component.disableJournalBtn;

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('routeDailyPractice', () => {
    it('should log click_daily_inspiration when id is 0', () => {
      // Arrange
      component.isSubscriber = true;

      // Act
      component.routeDailyPractice(0);

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_daily_inspiration');
    });

    it('should log click_breathing_exercise when id is 1', () => {
      // Arrange
      component.isSubscriber = true;

      // Act
      component.routeDailyPractice(1);

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_breathing_exercise');
    });

    it('should log click_daily_meditation when id is 4', () => {
      // Arrange
      component.isSubscriber = true;

      // Act
      component.routeDailyPractice(4);

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_daily_meditation');
    });

    it('should navigate directly when subscriber', () => {
      // Arrange
      component.isSubscriber = true;

      // Act
      component.routeDailyPractice(1);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['teenagers', 'daily-practise', 1]);
    });

    it('should navigate to subscription when non-subscriber hits limit', () => {
      // Arrange
      component.isSubscriber = false;
      localStorage.setItem('dly_prac_1', '2');

      // Act
      component.routeDailyPractice(1);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['teenagers', 'subscription', 'start-your-free-trial']);
    });

    it('should increment hits and navigate when non-subscriber below limit', () => {
      // Arrange
      component.isSubscriber = false;
      localStorage.setItem('dly_prac_1', '1');

      // Act
      component.routeDailyPractice(1);

      // Assert
      expect(localStorage.getItem('dly_prac_1')).toBe('2');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['teenagers', 'daily-practise', 1]);
    });

    it('should set hits to 1 when starting from 0', () => {
      // Arrange
      component.isSubscriber = false;
      localStorage.removeItem('dly_prac_2');

      // Act
      component.routeDailyPractice(2);

      // Assert
      expect(localStorage.getItem('dly_prac_2')).toBe('1');
    });
  });

  describe('routeToDailyCheckIn', () => {
    it('should log click_daily_checkin event', () => {
      // Act
      component.routeToDailyCheckIn();

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_daily_checkin');
    });

    it('should navigate to daily-checkin', () => {
      // Act
      component.routeToDailyCheckIn();

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['teenagers/daily-checkin']);
    });
  });

  describe('routeToDashboard', () => {
    it('should log click_proceed_to_home event', () => {
      // Act
      component.routeToDashboard();

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_proceed_to_home');
    });

    it('should navigate to dashboard URL', () => {
      // Act
      component.routeToDashboard();

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/home']);
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should close alert and clear questext and content', () => {
      // Arrange
      component.enableAlert = true;
      component.questext = 'Some text';
      component.content = 'Some content';

      // Act
      component.getAlertcloseEvent();

      // Assert
      expect(component.enableAlert).toBe(false);
      expect(component.questext).toBe('');
      expect(component.content).toBe('');
    });
  });

  describe('onFocus', () => {
    beforeEach(() => {
      spyOn(component, 'getModuleList');
      spyOn(component, 'toggleBodyScroll');
    });

    it('should call getModuleList when moduleList is empty', () => {
      // Arrange
      component.moduleList = [];

      // Act
      component.onFocus();

      // Assert
      expect(component.getModuleList).toHaveBeenCalledWith(true);
    });

    it('should show all modules when searchinp is empty', () => {
      // Arrange
      component.moduleList = [{ ModuleName: 'Test' }];
      component.searchinp = '';

      // Act
      component.onFocus();

      // Assert
      expect(component.searchResult.length).toBe(1);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(true);
    });

    it('should filter modules by searchinp', () => {
      // Arrange
      component.moduleList = [
        { ModuleName: 'Test Module' },
        { ModuleName: 'Another' }
      ];
      component.searchinp = 'Test';

      // Act
      component.onFocus();

      // Assert
      expect(component.searchResult.length).toBe(1);
      expect(component.searchResult[0].ModuleName).toBe('Test Module');
    });
  });

  describe('clearSearch', () => {
    it('should clear searchinp and searchResult', () => {
      // Arrange
      component.searchinp = 'test';
      component.searchResult = [{ ModuleName: 'test' }];
      spyOn(component, 'toggleBodyScroll');

      // Act
      component.clearSearch();

      // Assert
      expect(component.searchinp).toBe('');
      expect(component.searchResult).toEqual([]);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(false);
    });
  });

  describe('toggleBodyScroll', () => {
    it('should set overflow to hidden when lock is true', () => {
      // Act
      component.toggleBodyScroll(true);

      // Assert
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should set overflow to empty when lock is false', () => {
      // Arrange
      document.body.style.overflow = 'hidden';

      // Act
      component.toggleBodyScroll(false);

      // Assert
      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('getModuleList', () => {
    it('should populate moduleList with additional items', () => {
      // Arrange
      const mockModules = [{ ModuleName: 'Module 1' }];
      mockCommonService.getModuleList.and.returnValue(of(mockModules));

      // Act
      component.getModuleList();

      // Assert
      expect(component.moduleList.length).toBeGreaterThan(1);
      expect(component.moduleList).toContain(jasmine.objectContaining({ ModuleName: 'Events' }));
    });

    it('should filter and set searchResult when isLoad is true and searchinp is empty', () => {
      // Arrange
      const mockModules = [{ ModuleName: 'Module 1' }];
      mockCommonService.getModuleList.and.returnValue(of(mockModules));
      component.searchinp = '';

      // Act
      component.getModuleList(true);

      // Assert
      expect(component.searchResult.length).toBeGreaterThan(0);
    });
  });

  describe('getAutoCompleteList', () => {
    beforeEach(() => {
      component.moduleList = [
        { ModuleName: 'Test Module' },
        { ModuleName: 'Another Module' }
      ];
      spyOn(component, 'toggleBodyScroll');
    });

    it('should show all modules when value is null', () => {
      // Act
      component.getAutoCompleteList(null);

      // Assert
      expect(component.searchResult.length).toBe(2);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(true);
    });

    it('should filter modules by value', () => {
      // Act
      component.getAutoCompleteList('Test');

      // Assert
      expect(component.searchResult.length).toBe(1);
      expect(component.searchResult[0].ModuleName).toBe('Test Module');
    });

    it('should not do anything when moduleList is empty', () => {
      // Arrange
      component.moduleList = [];

      // Act
      component.getAutoCompleteList('test');

      // Assert
    //  expect(component.searchResult).toBeUndefined();
    });
  });

  describe('getinp', () => {
    it('should navigate to site-search for adults when searchTerm is provided', () => {
      // Arrange
      component.isAdults = true;
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');

      // Act
      component.getinp('test search');

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/site-search/test search']);
    });

    it('should not navigate for adults when searchTerm is empty', () => {
      // Arrange
      component.isAdults = true;
      mockRouter.navigate.calls.reset();

      // Act
      component.getinp('');

      // Assert
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to events for teenagers', () => {
      // Arrange
      component.isAdults = false;

      // Act
      component.getinp('events');

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('search_events');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/events']);
    });

    it('should navigate to blogs for teenagers', () => {
      // Arrange
      component.isAdults = false;

      // Act
      component.getinp('blogs');

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/blogs']);
    });
  });

  describe('searchEvent', () => {
    it('should log click_search event', () => {
      // Arrange
      spyOn(component, 'getinp');

      // Act
      component.searchEvent('test');

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_search');
    });

    it('should set searchinp and clear searchResult', () => {
      // Arrange
      component.searchResult = [{ ModuleName: 'test' }];
      spyOn(component, 'getinp');
      spyOn(component, 'toggleBodyScroll');

      // Act
      component.searchEvent('new search');

      // Assert
      expect(component.searchinp).toBe('new search');
      expect(component.searchResult).toEqual([]);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(false);
      expect(component.getinp).toHaveBeenCalledWith('new search');
    });
  });

  describe('routeResume', () => {
    it('should log click_continue_where_left event', () => {
      // Act
      component.routeResume();

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_continue_where_left');
    });

    it('should set pageaction to next in localStorage', () => {
      // Act
      component.routeResume();

      // Assert
      expect(localStorage.getItem('pageaction')).toBe('next');
    });

    it('should call setmoduleID when enableLastVisited is true and resumeLastvisited has items', () => {
      // Arrange
      component.resumeLastvisited = [{ ModuleId: 5, ModuleUrl: '/test-url' }];
      mockProgramId = ProgramType.Adults;

      // Act
      component.routeResume({}, true);

      // Assert
      expect(mockAdultsService.setmoduleID).toHaveBeenCalledWith('5', '/test-url', '/test-url');
    });

    it('should use fallback values when resumeLastvisited is empty', () => {
      // Arrange
      component.resumeLastvisited = [];
      mockProgramId = ProgramType.Adults;

      // Act
      component.routeResume({}, true);

      // Assert
      expect(mockAdultsService.setmoduleID).toHaveBeenCalledWith('23', '/adults/happiness/', '/adults/happiness/');
    });

    it('should use TeenagersService when ProgramId is Teenagers', () => {
      // Arrange
      component.resumeLastvisited = [{ ModuleId: 3, ModuleUrl: '/teen-url' }];
      mockProgramId = ProgramType.Teenagers;

      // Act
      component.routeResume({}, true);

      // Assert
      expect(mockTeenagersService.setmoduleID).toHaveBeenCalledWith('3', '/teen-url', '/teen-url');
    });
  });

  describe('survey', () => {
    it('should log click_take_survey event', () => {
      // Act
      component.survey();

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_take_survey');
    });

    it('should navigate to wisdom-survey for adults', () => {
      // Arrange
      component.isAdults = true;

      // Act
      component.survey();

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-survey'], { state: { isUseCloseButton: true } });
    });

    it('should navigate to wisdom-survey for teenagers', () => {
      // Arrange
      component.isAdults = false;

      // Act
      component.survey();

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/wisdom-survey'], { state: { isUseCloseButton: true } });
    });
  });
});

