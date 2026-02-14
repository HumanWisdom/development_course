import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from './common.service';
import { OnboardingService } from './onboarding.service';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('CommonService', () => {
  let service: CommonService;
  let httpMock: HttpTestingController;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const mockApiUrl = 'https://test-api.com';

  beforeEach(() => {
    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['emailLogin']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CommonService,
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    service = TestBed.inject(CommonService);
    httpMock = TestBed.inject(HttpTestingController);
    
    // Mock environment API URL
    (service as any).path = mockApiUrl;
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  describe('Service Initialization', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should initialize with default values', () => {
      expect(service.userId).toBe(100);
      expect(service.bookmarks).toEqual([]);
      expect(service.resume).toEqual([]);
      expect(service.searchResult).toEqual([]);
    });

    it('should have correct media types defined', () => {
      expect(service.text).toBe(2);
      expect(service.video).toBe(3);
      expect(service.audio).toBe(4);
      expect(service.reflection).toBe(5);
      expect(service.question).toBe(6);
      expect(service.feedbackSurvey).toBe(7);
    });
  });

  describe('submitProgressText', () => {
    it('should submit text progress', () => {
      const mockData = { userId: 1, screenId: 'S001', progress: 50 };
      const mockResponse = { success: true };

      service.submitProgressText(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/UserProgress`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockData);
      req.flush(mockResponse);
    });
  });

  describe('submitProgressAv', () => {
    it('should submit audio/video progress', () => {
      const mockData = { userId: 1, screenId: 'S001', mediaPercent: 75 };
      const mockResponse = { success: true };

      service.submitProgressAv(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/UserProgressAv`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Journal Methods', () => {
    it('should view journal', () => {
      const userId = '123';
      const mockResponse = { journals: [] };

      service.viewJournal(userId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/viewJournalAndReflections/${userId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should submit journal', () => {
      const mockData = { userId: 1, content: 'My journal entry' };
      const mockResponse = { success: true };

      service.submitJournal(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddJournal`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Reflection Methods', () => {
    it('should add reflection', () => {
      const mockData = { userId: 1, reflection: 'My reflection' };
      const mockResponse = { success: true };

      service.addReflection(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddUserReflection`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should submit progress reflection', () => {
      const mockData = { userId: 1, reflectionId: 5 };
      const mockResponse = { success: true };

      service.submitProgressReflection(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/UserProgressReflection`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Module Management', () => {
    it('should click module and return module data', () => {
      const moduleId = 7;
      const userId = 123;
      const mockResponse = {
        scenarios: [],
        lastVisitedScreen: 's001',
        MediaPercent: '50',
        FreeScrs: []
      };

      service.clickModule(moduleId, userId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/clickModule/${moduleId}/${userId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get module list', () => {
      const mockModules = [
        { ModuleId: 1, ModuleName: 'Stress' },
        { ModuleId: 2, ModuleName: 'Anxiety' }
      ];

      service.getModuleList().subscribe(modules => {
        expect(modules).toEqual(mockModules);
        expect(modules.length).toBe(2);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/modules/9`);
      expect(req.request.method).toBe('GET');
      req.flush(mockModules);
    });

    it('should get modules by id', () => {
      const moduleId = 5;
      const mockResponse = { ModuleId: 5, ModuleName: 'Test Module' };

      service.getModules(moduleId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetModules/${moduleId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('activateModule', () => {
    it('should activate module and setup localStorage', fakeAsync(() => {
      const moduleId = 7;
      const mockResponse = {
        scenarios: [{ id: 1, title: 'Story 1' }],
        lastVisitedScreen: 's001',
        MediaPercent: '50'
      };

      spyOn(service, 'clickModule').and.returnValue(of(mockResponse));
      spyOn(localStorage, 'setItem');

      service.activateModule(moduleId);
      tick();
      flush();

      expect(service.clickModule).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', JSON.stringify(moduleId));
      expect(localStorage.setItem).toHaveBeenCalledWith('wisdomstories', JSON.stringify(mockResponse.scenarios));
      expect(localStorage.setItem).toHaveBeenCalledWith('lastvisited', 'T');
    }));

    it('should handle module with no last visited screen', fakeAsync(() => {
      const moduleId = 7;
      const mockResponse = {
        scenarios: [],
        lastVisitedScreen: '',
        MediaPercent: '0'
      };

      spyOn(service, 'clickModule').and.returnValue(of(mockResponse));
      spyOn(localStorage, 'setItem');

      service.activateModule(moduleId);
      tick();
      flush();

      expect(localStorage.setItem).toHaveBeenCalledWith('lastvisited', 'F');
    }));

    it('should navigate to last visited URL if provided', fakeAsync(() => {
      const moduleId = 7;
      const lastVisitedUrl = '/adults/stress';
      const indexUrl = '/adults/index';
      const mockResponse = {
        scenarios: [],
        lastVisitedScreen: 's001',
        MediaPercent: '50'
      };

      spyOn(service, 'clickModule').and.returnValue(of(mockResponse));

      service.activateModule(moduleId, lastVisitedUrl, indexUrl);
      tick();
      flush();

      expect(mockRouter.navigate).toHaveBeenCalledWith([`${lastVisitedUrl}/ss001`]);
    }));
  });

  describe('Bookmark Methods', () => {
    it('should get bookmarks', () => {
      const userId = '123';
      const mockBookmarks = [
        { ScrNo: 's001' },
        { ScrNo: 's002' }
      ];

      service.getBookmarks(userId).subscribe(bookmarks => {
        expect(bookmarks).toEqual(mockBookmarks);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/UserBookMarks/${userId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockBookmarks);
    });

    it('should get bookmark configuration and update localStorage', fakeAsync(() => {
      const userId = 123;
      const mockBookmarks = [
        { ScrNo: '1' },
        { ScrNo: '2' },
        { ScrNo: '3' }
      ];

      spyOn(service, 'getBookmarks').and.returnValue(of(mockBookmarks));
      spyOn(localStorage, 'setItem');

      service.getBookmarkConfiguration(userId);
      tick();
      flush();

      expect(localStorage.setItem).toHaveBeenCalledWith('bookmarkList', JSON.stringify([1, 2, 3]));
    }));
  });

  describe('Search Methods', () => {
    it('should get search data for site', () => {
      const searchTerm = 'stress';
      const mockResponse = {
        ModuleRes: [],
        SessionRes: [],
        WisdomStoriesRes: []
      };

      service.getSearchDataForSearchSite(searchTerm).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/SiteSearch/${searchTerm}/${SharedService.ProgramId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should get forum search data', () => {
      const searchTerm = 'anxiety';
      const mockResponse = { posts: [] };

      service.getForumSearchDataSite(searchTerm).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetAllPosts/${searchTerm}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('Audio Meditation Methods', () => {
    it('should get audio meditations', () => {
      const mockMeditations = [
        { id: 1, title: 'Calm Meditation' },
        { id: 2, title: 'Sleep Meditation' }
      ];

      service.GetAudioMeditation().subscribe(meditations => {
        expect(meditations).toEqual(mockMeditations);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetAudioMeditationsListing`);
      expect(req.request.method).toBe('GET');
      req.flush(mockMeditations);
    });

    it('should get audio transcript', () => {
      const mockData = { screenId: 's001' };
      const mockResponse = { transcript: 'Sample transcript' };

      service.GetAudioTranscript(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetAudioTranscript`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Daily Practice Methods', () => {
    it('should get daily question', () => {
      const userId = '123';
      const mockResponse = { question: 'What are you grateful for?' };

      service.getDailyQuestion(userId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/userDailyQuestion/${userId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should add daily question response', () => {
      const mockData = { userId: 1, response: 'My answer' };
      const mockResponse = { success: true };

      service.addDailyQuestion(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddUserReflection`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should get daily practise question', () => {
      const mockResponse = { question: 'Today\'s practice' };

      service.getDailypractiseQuestion().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetDailyPractise_Question`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get daily inspiration', () => {
      const mockResponse = { inspiration: 'Be kind to yourself' };

      service.getDailyInspirationQuestion().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetDailyInspiration/${SharedService.ProgramId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should insert daily practice visit log', () => {
      const progId = 9;
      const mockResponse = { success: true };

      service.InsertDailyPracticeVisitLog(progId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddDailyPractiseVisitLogs/${progId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Survey Methods', () => {
    it('should get survey list', () => {
      const type = 1;
      const mockSurveys = [
        { id: 1, question: 'How are you feeling?' }
      ];

      service.getSurveyList(type).subscribe(surveys => {
        expect(surveys).toEqual(mockSurveys);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetSurveyOptions/${type}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockSurveys);
    });

    it('should add survey response', () => {
      const mockData = { surveyId: 1, response: 'Good' };
      const mockResponse = { success: true };

      service.AddSurveyRes(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddSurveyRes`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should skip feedback survey', () => {
      const mockResponse = { success: true };

      service.SkipFeedBkSurvey().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/SkipFeedBkSurvey`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Events Methods', () => {
    it('should get all events', () => {
      const mockEvents = {
        FutureEvents: [{ id: 1, title: 'Webinar' }],
        PastEvents: []
      };

      service.getAllEvents().subscribe(events => {
        expect(events).toEqual(mockEvents);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AllEvents`);
      expect(req.request.method).toBe('GET');
      req.flush(mockEvents);
    });

    it('should get event by id', () => {
      const eventId = 5;
      const mockEvent = { id: 5, title: 'Workshop' };

      service.getEventbyId(eventId).subscribe(event => {
        expect(event).toEqual(mockEvent);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/Events/${eventId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockEvent);
    });

    it('should register for event', () => {
      const mockData = { eventId: 5, userId: 123 };
      const mockResponse = { success: true };

      service.registerevent(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/RegisterEvents`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Microlearning Methods', () => {
    it('should get microlearning list', () => {
      const programId = 9;
      const mockList = [
        { id: 1, title: 'Quick Tip 1' },
        { id: 2, title: 'Quick Tip 2' }
      ];

      service.GetMicrolearningList(programId).subscribe(list => {
        expect(list).toEqual(mockList);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetMicrolearningListing/${programId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockList);
    });

    it('should click microlearning', () => {
      const id = 5;
      const mockResponse = { success: true };

      service.clickMicrolearning(id).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/clickMicrolearning/${id}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should get microlearning screens', () => {
      const id = 5;
      const mockScreens = [{ screenId: 1, content: 'Screen 1' }];

      service.GetMicrolearningScreens(id).subscribe(screens => {
        expect(screens).toEqual(mockScreens);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetMicrolearningScreens/${id}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockScreens);
    });
  });

  describe('Wisdom Shorts Methods', () => {
    it('should get wisdom shorts', () => {
      const mockShorts = [
        { id: 1, title: 'Short Video 1' }
      ];

      service.GetWisdomShorts().subscribe(shorts => {
        expect(shorts).toEqual(mockShorts);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetWisdomShortsListing`);
      expect(req.request.method).toBe('GET');
      req.flush(mockShorts);
    });

    it('should check if shorts is free', () => {
      const shortId = 5;
      const mockResponse = { isFree: true };

      service.CheckShortsIsFree(shortId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/CheckShortsIsFree/${shortId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('Podcasts and Soundscapes', () => {
    it('should get podcast list', () => {
      const mockPodcasts = [
        { id: 1, title: 'Podcast 1' }
      ];

      service.GetPodcastList().subscribe(podcasts => {
        expect(podcasts).toEqual(mockPodcasts);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetPodcastsListing/${SharedService.ProgramId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPodcasts);
    });

    it('should get soundscapes list', () => {
      const mockSoundscapes = [
        { id: 1, title: 'Ocean Waves' }
      ];

      service.getSoundsCapesList().subscribe(soundscapes => {
        expect(soundscapes).toEqual(mockSoundscapes);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetSoundsCapesList/9`);
      expect(req.request.method).toBe('GET');
      req.flush(mockSoundscapes);
    });

    it('should click podcast', () => {
      const podcastId = 5;
      const mockResponse = { success: true };

      service.clickPodcast(podcastId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/clickPodcasts/${podcastId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should click soundscape', () => {
      const soundscapeId = 5;
      const mockResponse = { success: true };

      service.clickSoundscapes(soundscapeId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/clickSoundscapes/${soundscapeId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Tracking Methods', () => {
    it('should click shorts', () => {
      const shortId = 5;
      const mockResponse = { success: true };

      service.clickShorts(shortId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/clickShorts/${shortId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should click events', () => {
      const eventId = 5;
      const mockResponse = { success: true };

      service.clickEvents(eventId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/clickEvents/${eventId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should click meditations', () => {
      const meditationId = 5;
      const mockResponse = { success: true };

      service.clickMeditations(meditationId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/clickAudioMeditations/${meditationId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should click teen talk', () => {
      const teenTalkId = 5;
      const mockResponse = { success: true };

      service.clickTeenTalk(teenTalkId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/clickteentalk/${teenTalkId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Currency and Country Methods', () => {
    it('should get country list', () => {
      const mockCountries = [
        { id: 1, name: 'USA' },
        { id: 2, name: 'UK' }
      ];

      service.GetCountry().subscribe(countries => {
        expect(countries).toEqual(mockCountries);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/Countries`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCountries);
    });

    it('should convert currency', () => {
      const amount = 100;
      const currency = 'USD';
      const mockResponse = { convertedAmount: 85 };

      service.getGBPcuurency(amount, currency).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/ConvertCurrency/${currency}/GBP/${amount}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('User Preference Methods', () => {
    it('should get user preference', () => {
      const mockPreference = '2';

      service.getUserpreference().subscribe(preference => {
        expect(preference).toEqual(mockPreference);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetUserPreference/${SharedService.ProgramId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPreference);
    });

    it('should add user preference', () => {
      const preferenceId = '2';
      const mockResponse = { success: true };

      service.AddUserPreference(preferenceId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddUserPreference/${preferenceId}`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should get personalized list', () => {
      const list = service.getperList();
      expect(list).toBeDefined();
      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBeGreaterThan(0);
    });
  });

  describe('Token Verification', () => {
    it('should verify token', () => {
      const token = 'test-token';
      const mockResponse = { valid: true };

      service.verifytoken(token).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/VerifyAuthToken?AccessToken=${token}&progID=${SharedService.ProgramId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should verify activation key', () => {
      const actKey = 'ACT-123';
      const mockResponse = { valid: true };

      service.verifyactkey(actKey).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/VerifyActKey/${actKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('Guided Questions Methods', () => {
    it('should get guided questions topics', () => {
      const mockTopics = [
        { id: 1, topic: 'Stress Management' }
      ];

      service.GetGuidedQs_Topics().subscribe(topics => {
        expect(topics).toEqual(mockTopics);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetGuidedQs_Topics`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTopics);
    });

    it('should get guided questions by topic id', () => {
      const topicId = 5;
      const mockQuestions = [
        { id: 1, question: 'What causes you stress?' }
      ];

      service.GetGuidedQs_TopicsId(topicId).subscribe(questions => {
        expect(questions).toEqual(mockQuestions);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetGuidedQs_Topics/${topicId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockQuestions);
    });

    it('should get guided questions response', () => {
      const questionId = 5;
      const attempt = 1;
      const mockResponse = { response: 'User answer' };

      service.GetGuidedQs_Response(questionId, attempt).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetGuidedQs_Response/${questionId}/${attempt}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should add guided questions response', () => {
      const mockData = { questionId: 5, response: 'My answer' };
      const mockResponse = { success: true };

      service.AddGuidedQs_Response(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddGuidedQs_Response/`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Home Content Methods', () => {
    it('should get home contents', () => {
      const preferenceId = 2;
      const programId = 9;
      const mockContent = {
        MainHeader: 'Welcome',
        Introduction: { Cards: [] }
      };

      service.GetHomeContents(preferenceId, programId).subscribe(content => {
        expect(content).toEqual(mockContent);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetHomeContents/${preferenceId}/${programId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockContent);
    });

    it('should get intro contents', () => {
      const programId = 9;
      const mockContent = { intro: 'Welcome message' };

      service.GetIntroContents(programId).subscribe(content => {
        expect(content).toEqual(mockContent);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetIntroContents/${programId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockContent);
    });
  });

  describe('Progress Tracking', () => {
    it('should get last visited screen', () => {
      const userId = 123;
      const programId = 9;
      const mockResponse = { lastScreen: 's001' };

      service.GetLastVisitedScreen(userId, programId).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetLastVisitedScreen/${userId}/${programId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get progress and update resume', fakeAsync(() => {
      const programId = '9';
      const mockResponse = [
        { screenId: 's001' },
        { screenId: 's002' }
      ];

      service.userId = 123;
      spyOn(service, 'GetLastVisitedScreen').and.returnValue(of(mockResponse));

      service.getProgress(programId);
      tick();
      flush();

      expect(service.resume).toEqual(mockResponse);
    }));
  });

  describe('Survey Subject Methods', () => {
    it('should update survey data', (done) => {
      const testData = 'test-survey-data';
      
      // Skip initial null value from BehaviorSubject
      let firstEmission = true;
      service.surveySubs.subscribe(data => {
        if (firstEmission) {
          firstEmission = false;
          return;
        }
        expect(data).toBe(testData);
        done();
      });

      service.updateSurveyData(testData);
    });

    it('should update login URL subject', (done) => {
      const testUrl = '/adults/home';
      
      // Skip initial null value from BehaviorSubject
      let firstEmission = true;
      service.loginUrlSubs.subscribe(url => {
        if (firstEmission) {
          firstEmission = false;
          return;
        }
        expect(url).toBe(testUrl);
        done();
      });

      service.loginSubject(testUrl);
    });
  });

  describe('Email Login (Guest)', () => {
    it('should perform email login for guest', fakeAsync(() => {
      const mockLoginResponse = {
        UserId: 563,
        Email: 'guest@humanwisdom.me',
        Name: 'Guest User',
        Subscriber: 0,
        access_token: 'test-token',
        Streak: 0
      };

      mockOnboardingService.emailLogin.and.returnValue(of(mockLoginResponse));
      spyOn(service, 'getBookmarks').and.returnValue(of([]));
      spyOn(service, 'freescreens'); // Mock freescreens to prevent HTTP call
      spyOn(localStorage, 'setItem');
      spyOn(localStorage, 'getItem').and.callFake((key: string) => {
        if (key === 'saveUsername') return 'false';
        if (key === 'guest') return 'F';
        if (key === 'name') return 'Test User';
        return null;
      });

      service.emaillogin();
      tick();
      tick(1000); // Wait for setTimeout(1000) in emaillogin

      expect(mockOnboardingService.emailLogin).toHaveBeenCalledWith('guest@humanwisdom.me', '12345');
      expect(localStorage.setItem).toHaveBeenCalledWith('guest', 'T');
      expect(localStorage.setItem).toHaveBeenCalledWith('userId', JSON.stringify(563));
      expect(service.freescreens).toHaveBeenCalled();
      
      flush(); // Clear any remaining timers
    }));
  });

  describe('Token and Authentication', () => {
    it('should verify token and handle response', fakeAsync(() => {
      const authToken = 'test-token';
      const mockResponse = {
        UserId: 123,
        Email: 'test@example.com',
        Name: 'Test User',
        Subscriber: '1',
        LastVisit: new Date().toISOString()
      };

      spyOn(service, 'verifytoken').and.returnValue(of(mockResponse));
      spyOn(service, 'loginadult');
      spyOn(service, 'getProgress');
      spyOn(service, 'getBookmarks').and.returnValue(of([]));
      const setItemSpy = spyOn(localStorage, 'setItem');
      spyOn(localStorage, 'getItem').and.callFake((key: string) => {
        // Return the name that was just set
        if (key === 'name') return mockResponse.Name;
        return null;
      });

      service.verifyTokenAndHandleResponse(authToken);
      tick();
      flush();

      expect(service.verifytoken).toHaveBeenCalledWith(authToken);
      expect(setItemSpy).toHaveBeenCalledWith('email', mockResponse.Email);
      expect(setItemSpy).toHaveBeenCalledWith('name', mockResponse.Name);
      // UserId is stored as the original value (number) in the actual implementation
      expect(setItemSpy).toHaveBeenCalledWith('userId', jasmine.any(Number));
    }));

    it('should use existing user data if no auth token', fakeAsync(() => {
      spyOn(localStorage, 'getItem').and.callFake((key: string) => {
        if (key === 'isloggedin') return 'T';
        if (key === 'userId') return '123';
        if (key === 'name') return 'John Doe';
        return null;
      });
      spyOn(service, 'getProgress');
      spyOn(service, 'getBookmarks').and.returnValue(of([]));

      service.verifyTokenAndHandleResponse(null);
      tick();
      flush();

      expect(service.getProgress).toHaveBeenCalled();
    }));
  });

  describe('Free Screens', () => {
    it('should get free screens', () => {
      const mockFreeScreens = [
        { ModuleId: 1, FreeScrs: [{ ScrNo: 's001' }] }
      ];

      service.freeScreens().subscribe(screens => {
        expect(screens).toEqual(mockFreeScreens);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AllModulesFreeScrs`);
      expect(req.request.method).toBe('GET');
      req.flush(mockFreeScreens);
    });

    it('should process and store free screens', fakeAsync(() => {
      const mockResponse = [
        { FreeScrs: [{ ScrNo: 's001' }, { ScrNo: 's002' }] },
        { FreeScrs: [{ ScrNo: 's003' }] }
      ];

      spyOn(service, 'freeScreens').and.returnValue(of(mockResponse));
      spyOn(localStorage, 'setItem');

      service.freescreens();
      tick();
      flush();

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'freeScreens',
        JSON.stringify(['s001', 's002', 's003'])
      );
    }));
  });

  describe('Daily Checkins', () => {
    it('should get daily checkins', () => {
      const mockCheckins = [
        { id: 1, date: '2024-01-01', status: 'completed' }
      ];

      service.getDailyCheckins().subscribe(checkins => {
        expect(checkins).toEqual(mockCheckins);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/GetDailyCheckins/`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCheckins);
    });
  });

  describe('Giftery Methods', () => {
    it('should check giftery', () => {
      const mockData = { code: 'GIFT123' };
      const mockResponse = { valid: true };

      service.checkGiftery(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/checkGiftery`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Screen Creation', () => {
    it('should create screen', () => {
      const mockData = { screenId: 's001', content: 'Screen content' };
      const mockResponse = { success: true };

      service.createScreen(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddScreen`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Question Methods', () => {
    it('should submit progress question', () => {
      const mockData = { questionId: 5, answer: 'A' };
      const mockResponse = { success: true };

      service.submitProgressQuestion(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/userProgressQuestion`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should submit daily practise question', () => {
      const mockData = { response: 'My daily practice' };
      const mockResponse = { success: true };

      service.submitDailypractiseQuestion(mockData).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${mockApiUrl}/AddDailyQuestion_Response`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });
  });

  describe('Error Handling', () => {
    it('should handle HTTP error gracefully', () => {
      const errorMessage = 'Server error';

      service.GetAudioMeditation().subscribe(
        () => fail('should have failed'),
        error => {
          expect(error.status).toBe(500);
        }
      );

      const req = httpMock.expectOne(`${mockApiUrl}/GetAudioMeditationsListing`);
      req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
    });

    it('should handle network error', () => {
      service.getModuleList().subscribe(
        () => fail('should have failed'),
        error => {
          // ErrorEvent has type property set to the event type passed to constructor
          expect(error.error.type).toBe('Network error');
        }
      );

      const req = httpMock.expectOne(`${mockApiUrl}/modules/9`);
      req.error(new ErrorEvent('Network error', { message: 'Network failure' }));
    });
  });
});

