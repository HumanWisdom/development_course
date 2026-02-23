import './daily-practice.page.spec-setup';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DailyPracticePage } from './daily-practice.page';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { LogEventService } from '../../../shared/services/log-event.service';
import { CommonService } from '../../../shared/services/common.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../../shared/services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DailyPracticePage', () => {
  let component: DailyPracticePage;
  let fixture: ComponentFixture<DailyPracticePage>;
  let mockRoute: { snapshot: { paramMap: { get: jasmine.Spy } } };
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockPlatform: jasmine.SpyObj<Platform>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let originalProgramId: PropertyDescriptor | undefined;

  const mockRouterUrl = '/adults/daily-practice/0';

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRoute = {
      snapshot: { paramMap: { get: jasmine.createSpy('get').and.returnValue('0') } }
    };

    mockRouter = jasmine.createSpyObj('Router', ['navigate'], { url: mockRouterUrl });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', { get: () => mockRouterUrl, configurable: true });

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockPlatform = jasmine.createSpyObj('Platform', [], { IOS: false });

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    mockCommonService = jasmine.createSpyObj('CommonService', [
      'getDailypractiseQuestion',
      'getDailypractiseQuestionbreath',
      'getDailyInspirationQuestion',
      'getDailypractiseQuestionins',
      'getDailypractiseQuestionmeditation',
      'getDailypractiseQuestiontoday',
      'submitDailypractiseQuestion'
    ]);
    mockCommonService.getDailypractiseQuestion.and.returnValue(of('ref123: What did you learn today?'));
    mockCommonService.getDailypractiseQuestionbreath.and.returnValue(of('Breath Title;https://example.com/breath.mp4'));
    mockCommonService.getDailyInspirationQuestion.and.returnValue(of('Inspiration: Title;https://example.com/insp.mp4;module-name;5'));
    mockCommonService.getDailypractiseQuestionins.and.returnValue(of('Author Name;Quote text here'));
    mockCommonService.getDailypractiseQuestionmeditation.and.returnValue(of('Meditation Title;https://example.com/meditation.mp3'));
    mockCommonService.getDailypractiseQuestiontoday.and.returnValue(of('Try this today challenge'));
    mockCommonService.submitDailypractiseQuestion.and.returnValue(of({ success: true }));

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'initializeIosCheck').and.returnValue(false);
    SharedService.AdultsBaseUrl = 'https://adults.happierme.app/';
    SharedService.TeenagerBaseUrl = 'https://teenagers.happierme.app/';

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      const store: { [key: string]: string } = {
        mediaAudio: JSON.stringify('https://example.com/audio.mp3'),
        guest: 'F',
        Subscriber: '1',
        userId: '107',
        isloggedin: 'T'
      };
      return store[key] ?? null;
    });
    spyOn(localStorage, 'setItem');

    (window as any).$ = jasmine.createSpy('$').and.returnValue({ bcSwipe: jasmine.createSpy('bcSwipe') });

    await TestBed.configureTestingModule({
      declarations: [DailyPracticePage],
      imports: [FormsModule, NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: Platform, useValue: mockPlatform },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: CommonService, useValue: mockCommonService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyPracticePage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
  });

  describe('Component creation and constructor', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set guest from localStorage', () => {
      (localStorage.getItem as jasmine.Spy).and.callFake((key: string) => {
        if (key === 'guest') return 'T';
        if (key === 'mediaAudio') return JSON.stringify('https://example.com/audio.mp3');
        return null;
      });
      fixture = TestBed.createComponent(DailyPracticePage);
      component = fixture.componentInstance;
      expect(component.guest).toBe(true);
    });

    it('should set guest to false when localStorage guest is F', () => {
      expect(component.guest).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', { value: ProgramType.Teenagers, writable: true, configurable: true });
      fixture = TestBed.createComponent(DailyPracticePage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });

    it('should set isIOS from SharedService.initializeIosCheck', () => {
      (SharedService.initializeIosCheck as jasmine.Spy).and.returnValue(true);
      fixture = TestBed.createComponent(DailyPracticePage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isIOS).toBe(true);
    });

    it('should set dailyid and currentSection from route param', () => {
      mockRoute.snapshot.paramMap.get.and.returnValue('2');
      fixture = TestBed.createComponent(DailyPracticePage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.dailyid).toBe('2');
      expect(component.currentSection).toBe(2);
    });

    it('should set address from router.url', () => {
      component.ngOnInit();
      expect(component.address).toBe(mockRouterUrl);
    });

    it('should set placeholder to "Login to use this feature" when guest or not logged in', () => {
      (localStorage.getItem as jasmine.Spy).and.callFake((k: string) => (k === 'guest' ? 'T' : (k === 'isloggedin' ? 'F' : null)));
      fixture = TestBed.createComponent(DailyPracticePage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.placeholder).toBe('Login to use this feature');
    });

    it('should call getdailyques and getdailyquestion', () => {
      component.ngOnInit();
      expect(mockCommonService.getDailypractiseQuestion).toHaveBeenCalled();
      expect(mockCommonService.getDailypractiseQuestionbreath).toHaveBeenCalled();
      expect(mockCommonService.getDailyInspirationQuestion).toHaveBeenCalled();
      expect(mockCommonService.getDailypractiseQuestionins).toHaveBeenCalled();
      expect(mockCommonService.getDailypractiseQuestionmeditation).toHaveBeenCalled();
      expect(mockCommonService.getDailypractiseQuestiontoday).toHaveBeenCalled();
    });
  });

  describe('getdailyques', () => {
    it('should set dailyqus and dailyqusrefid from getDailypractiseQuestion response', fakeAsync(() => {
      mockCommonService.getDailypractiseQuestion.and.returnValue(of('ref456: How are you feeling?'));
      component.getdailyques();
      tick();
      expect(component.dailyqus).toBe(' How are you feeling?');
      expect(component.dailyqusrefid).toBe('ref456');
    }));
  });

  describe('getdailyquestion', () => {
    it('should set dailybreathTitle and videoLink from breath response', fakeAsync(() => {
      component.getdailyquestion();
      tick();
      expect(component.dailybreathTitle).toBe('Breath Title');
      expect(component.videoLink).toBe('https://example.com/breath.mp4');
      expect(component.enableVideo).toBe(true);
    }));

    it('should set dailyInspirationTitle and DailyInspirationLink from inspiration response', fakeAsync(() => {
      component.getdailyquestion();
      tick();
      expect(component.dailyInspirationTitle).toBeDefined();
      expect(component.DailyInspirationLink).toBeDefined();
      expect(component.dailyInsModule).toBeDefined();
    }));

    it('should set isVoices to true when inspiration response part is 6', fakeAsync(() => {
      mockCommonService.getDailyInspirationQuestion.and.returnValue(of('Title;https://example.com/vid.mp4;module;6'));
      fixture = TestBed.createComponent(DailyPracticePage);
      component = fixture.componentInstance;
      component.getdailyquestion();
      tick(100);
      expect(component.isVoices).toBe(true);
    }));

    it('should set dailyinsAuthor and dailyinstext from ins response', fakeAsync(() => {
      component.getdailyquestion();
      tick(100);
      expect(component.dailyinsAuthor).toBe('Author Name');
      expect(component.dailyinstext).toBe('Quote text here');
    }));

    it('should set audioTitle and audioLink from meditation response', fakeAsync(() => {
      component.getdailyquestion();
      tick(100);
      expect(component.audioTitle).toBe('Meditation Title');
      expect(component.audioLink).toBe('https://example.com/meditation.mp3');
    }));

    it('should set trythistoday from today response', fakeAsync(() => {
      component.getdailyquestion();
      tick(100);
      expect(component.trythistoday).toBe('Try this today challenge');
    }));
  });

  describe('subdailyques', () => {
    it('should log event click_add_answer_here', () => {
      component.subdailyques();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_add_answer_here');
    });

    it('should set enableAlert and content when not logged in', () => {
      component.isloggedIn = false;
      component.subdailyques();
      expect(component.content).toBe('Subscribe to activate your online journal');
      expect(component.enableAlert).toBe(true);
      expect(mockCommonService.submitDailypractiseQuestion).not.toHaveBeenCalled();
    });

    it('should call submitDailypractiseQuestion when logged in', fakeAsync(() => {
      component.isloggedIn = true;
      component.userId = '107';
      component.dailyqusrefid = 'ref1';
      component.questext = 'My answer';
      component.subdailyques();
      tick();
      expect(mockCommonService.submitDailypractiseQuestion).toHaveBeenCalledWith({
        ReflectionId: 'ref1',
        SubscriberId: '107',
        Resp: 'My answer'
      });
    }));

    it('should set success content and clear questext on successful submit', fakeAsync(() => {
      component.isloggedIn = true;
      component.userId = '107';
      component.dailyqusrefid = 'ref1';
      component.questext = 'My answer';
      component.subdailyques();
      tick();
      expect(component.content).toBe('Successfully added to journal');
      expect(component.enableAlert).toBe(true);
      expect(component.questext).toBe('');
    }));
  });

  describe('Logevent', () => {
    it('should call logEventService.logEvent with event name', () => {
      component.Logevent('test_event');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('test_event');
    });
  });

  describe('routeModule', () => {
    it('should navigate to dailyInsModule with program name', () => {
      component.dailyInsModule = 'stress';
      component.routeModule();
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/stress']);
    });
  });

  describe('routeToUrl', () => {
    it('should navigate to given link with program name', () => {
      component.routeToUrl('breathing');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/breathing']);
    });
  });

  describe('next', () => {
    it('should increment currentSection and set direction to left', fakeAsync(() => {
      component.currentSection = 1;
      component.dailyid = '1';
      component.next('click_Daily_Practice_Next');
      expect(component.currentSection).toBe(2);
      expect(component.direction).toBe('left');
      expect(component.dailyid).toBe('2');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_Daily_Practice_Next');
      tick(600);
      expect(component.enableVideo).toBe(true);
    }));

    it('should wrap currentSection to 0 when reaching 6', () => {
      component.currentSection = 5;
      component.dailyid = '5';
      component.next('evt');
      expect(component.currentSection).toBe(0);
      expect(component.dailyid).toBe('0');
    });
  });

  describe('back', () => {
    it('should decrement currentSection and set direction to right', fakeAsync(() => {
      component.currentSection = 2;
      component.dailyid = '2';
      component.back('click_Previous');
      expect(component.currentSection).toBe(1);
      expect(component.direction).toBe('right');
      expect(component.dailyid).toBe('1');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_Previous');
      tick(600);
      expect(component.enableVideo).toBe(true);
    }));

    it('should wrap currentSection to 5 when at 0', () => {
      component.currentSection = 0;
      component.dailyid = '0';
      component.back('evt');
      expect(component.currentSection).toBe(5);
      expect(component.dailyid).toBe('5');
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should reset enableAlert, questext and content', () => {
      component.enableAlert = true;
      component.questext = 'text';
      component.content = 'msg';
      component.getAlertcloseEvent();
      expect(component.enableAlert).toBe(false);
      expect(component.questext).toBe('');
      expect(component.content).toBe('');
    });
  });

  describe('routetovoices', () => {
    it('should navigate to wisdom-shorts with pref=voices', () => {
      component.routetovoices();
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/wisdom-shorts'],
        { queryParams: { pref: 'voices' } }
      );
    });
  });

  describe('routeToDashboard', () => {
    it('should call location.back when navigateToBackLink returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      component.routeToDashboard();
      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to back link when navigateToBackLink returns url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/home');
      component.routeToDashboard();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
      expect(mockLocation.back).not.toHaveBeenCalled();
    });
  });

  describe('share', () => {
    it('should set path and call ngNavigatorShareService.share', () => {
      component.address = '/adults/daily-practice/0';
      component.share();
      expect(component.path).toBe('https://adults.happierme.app//adults/daily-practice/0');
      expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith({
        title: 'HappierMe Program',
        text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
        url: component.path
      });
    });
  });

  describe('shareUrl', () => {
    it('should set path from AdultsBaseUrl when ProgramId is Adults', () => {
      component.address = '/adults/daily-practice';
      component.shareUrl(ProgramType.Adults);
      expect(component.path).toBe('https://adults.happierme.app//adults/daily-practice');
    });

    it('should set path from TeenagerBaseUrl when ProgramId is Teenagers', () => {
      component.address = '/teenagers/daily-practice';
      component.shareUrl(ProgramType.Teenagers);
      expect(component.path).toBe('https://teenagers.happierme.app//teenagers/daily-practice');
    });

    it('should default to AdultsBaseUrl for unknown program type', () => {
      component.address = '/adults/daily-practice';
      component.shareUrl(999 as any);
      expect(component.path).toBe('https://adults.happierme.app//adults/daily-practice');
    });
  });

  describe('setAudioControlsBackground', () => {
    it('should append style element to document head for adults', () => {
      component.isAdults = true;
      component.setAudioControlsBackground();
      const styles = Array.from(document.head.querySelectorAll('style'));
      const adultsStyle = styles.find((s) => s.textContent && s.textContent.includes('rgb(18, 15, 64)'));
      expect(adultsStyle).toBeTruthy();
    });

    it('should use teen background when not adults', () => {
      component.isAdults = false;
      component.setAudioControlsBackground();
      const styles = Array.from(document.head.querySelectorAll('style'));
      const teenStyle = styles.find((s) => s.textContent && s.textContent.includes('#0C2B5F'));
      expect(teenStyle).toBeTruthy();
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('should capitalize first character', () => {
      expect(component.capitalizeFirstLetter('hello')).toBe('Hello');
    });

    it('should leave already capitalized unchanged', () => {
      expect(component.capitalizeFirstLetter('Hello')).toBe('Hello');
    });

    it('should handle single character', () => {
      expect(component.capitalizeFirstLetter('a')).toBe('A');
    });
  });
});
