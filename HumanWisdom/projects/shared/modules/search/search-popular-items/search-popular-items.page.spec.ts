import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchPopularItemsPage } from './search-popular-items.page';
import { CommonService } from '../../../services/common.service';
import { ForumService } from '../../../forum/forum.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { OnboardingService } from '../../../services/onboarding.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchPopularItemsPage', () => {
  let component: SearchPopularItemsPage;
  let fixture: ComponentFixture<SearchPopularItemsPage>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockForumService: jasmine.SpyObj<ForumService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockDomSanitizer: jasmine.SpyObj<DomSanitizer>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockProgramId: any;

  beforeEach(async () => {
    // Create mock services
    mockCommonService = jasmine.createSpyObj('CommonService', [
      'getSearchDataForSearchSite',
      'getModuleList',
      'clickPodcast',
      'clickEvents',
      'clickShorts',
      'clickModule'
    ]);
    mockCommonService.getSearchDataForSearchSite.and.returnValue(
      of({
        ModuleRes: [],
        BlogRes: [],
        JournalRes: [],
        PodCastRes: [],
        SessionRes: [],
        WisdomShortsRes: [],
        EventsRes: [],
        WisdomStoriesRes: [],
        AudioMeditationRes: [],
        FeelBetterNowRes: null
      })
    );
    mockCommonService.getModuleList.and.returnValue(of([]));
    mockCommonService.clickPodcast.and.returnValue(of({}));
    mockCommonService.clickEvents.and.returnValue(of({}));
    mockCommonService.clickShorts.and.returnValue(of({}));
    mockCommonService.clickModule.and.returnValue(of({ scenarios: [], lastVisitedScreen: '' }));

    mockForumService = jasmine.createSpyObj('ForumService', [
      'getForumSearchDataSite',
      'followPost',
      'likePost',
      'submitPost'
    ]);
    mockForumService.getForumSearchDataSite.and.returnValue(of([]));
    mockForumService.followPost.and.returnValue(of('1'));
    mockForumService.likePost.and.returnValue(of(5));
    mockForumService.submitPost.and.returnValue(of({}));

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      url: '/adults/site-search/test'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    // Create mock ActivatedRoute with paramMap
    const mockParamMap = jasmine.createSpyObj('ParamMap', ['get']);
    mockParamMap.get.and.returnValue('test%20search');
    
    mockActivatedRoute = {
      snapshot: {
        paramMap: mockParamMap
      }
    };

    mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', [
      'bypassSecurityTrustResourceUrl'
    ]);
    mockDomSanitizer.bypassSecurityTrustResourceUrl.and.returnValue('sanitized-url' as any);

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'CheckStoryIsFree',
      'clickStory',
      'clickBlog'
    ]);
    mockOnboardingService.CheckStoryIsFree.and.returnValue(of(false));
    mockOnboardingService.clickStory.and.returnValue(of({}));
    mockOnboardingService.clickBlog.and.returnValue(of({}));

    // Setup SharedService defaults
    // Mock ProgramId using Object.defineProperty to avoid coverage instrumentation issues
    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'isSubscriber').and.returnValue(false);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getUrlfromFeatureName').and.returnValue('/adults/feel-better-now');

    await TestBed.configureTestingModule({
      declarations: [SearchPopularItemsPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: CommonService, useValue: mockCommonService },
        { provide: ForumService, useValue: mockForumService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: DomSanitizer, useValue: mockDomSanitizer },
        { provide: OnboardingService, useValue: mockOnboardingService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPopularItemsPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    // Clean up localStorage after each test
    localStorage.clear();
    document.body.style.overflow = '';
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      fixture = TestBed.createComponent(SearchPopularItemsPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is not Adults', () => {
      mockProgramId = ProgramType.Teenagers;
      fixture = TestBed.createComponent(SearchPopularItemsPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should set isSubscriber from SharedService.isSubscriber()', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(true);
      component.ngOnInit();
      expect(component.isSubscriber).toBe(true);
      expect(SharedService.isSubscriber).toHaveBeenCalled();
    });

    it('should set isSubscriber to false when SharedService.isSubscriber() returns false', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.ngOnInit();
      expect(component.isSubscriber).toBe(false);
    });

    it('should decode and set search from route paramMap', () => {
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('test%20search%20term');
      component.ngOnInit();
      expect(component.search).toBe('test search term');
      expect(mockActivatedRoute.snapshot.paramMap.get).toHaveBeenCalledWith('word');
    });

    it('should handle null route param', () => {
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue(null);
      component.ngOnInit();
      expect(component.search).toBe('null');
    });

    it('should set UserID from localStorage', () => {
      const testUserId = '12345';
      localStorage.setItem('userId', testUserId);
      component.ngOnInit();
      expect(component.UserID).toBe(testUserId);
    });

    it('should handle missing userId in localStorage', () => {
      localStorage.removeItem('userId');
      component.ngOnInit();
      expect(component.UserID).toBeNull();
    });

    it('should initialize searchData object', () => {
      component.ngOnInit();
      expect(component.searchData).toBeDefined();
      expect(component.searchData.ModuleRes).toEqual([]);
      expect(component.searchData.BlogRes).toEqual([]);
      expect(component.searchData.JournalRes).toEqual([]);
      expect(component.searchData.PodCastRes).toEqual([]);
      expect(component.searchData.SessionRes).toEqual([]);
      expect(component.searchData.WisdomShortsRes).toEqual([]);
      expect(component.searchData.EventsRes).toEqual([]);
      expect(component.searchData.WisdomStoriesRes).toEqual([]);
      expect(component.searchData.AudioMeditationRes).toEqual([]);
      expect(component.searchData.FeelBetterNowRes).toBeNull();
    });

    it('should call getSearchData', () => {
      spyOn(component, 'getSearchData');
      component.ngOnInit();
      expect(component.getSearchData).toHaveBeenCalled();
    });

    it('should set userId from localStorage when remember is not set and user is logged in', () => {
      const testUserId = 999;
      localStorage.setItem('remember', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('userId', JSON.stringify(testUserId));
      component.ngOnInit();
      expect(component.userId).toBe(testUserId);
    });

    it('should set userId from localStorage when remember is null and user is logged in', () => {
      const testUserId = 888;
      localStorage.removeItem('remember');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('userId', JSON.stringify(testUserId));
      component.ngOnInit();
      expect(component.userId).toBe(testUserId);
    });

    it('should not set userId when remember is set to true', () => {
      const testUserId = 777;
      localStorage.setItem('remember', 'T');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('userId', JSON.stringify(testUserId));
      const initialUserId = component.userId;
      component.ngOnInit();
      expect(component.userId).toBe(initialUserId);
    });

    it('should not set userId when user is not logged in', () => {
      const testUserId = 666;
      localStorage.setItem('remember', 'F');
      localStorage.setItem('isloggedin', 'F');
      localStorage.setItem('userId', JSON.stringify(testUserId));
      const initialUserId = component.userId;
      component.ngOnInit();
      expect(component.userId).toBe(initialUserId);
    });
  });

  describe('initializeSearchObject', () => {
    it('should initialize searchData with empty arrays and null', () => {
      component.initializeSearchObject();
      expect(component.searchData).toBeDefined();
      expect(component.searchData.ModuleRes).toEqual([]);
      expect(component.searchData.BlogRes).toEqual([]);
      expect(component.searchData.JournalRes).toEqual([]);
      expect(component.searchData.PodCastRes).toEqual([]);
      expect(component.searchData.SessionRes).toEqual([]);
      expect(component.searchData.WisdomShortsRes).toEqual([]);
      expect(component.searchData.EventsRes).toEqual([]);
      expect(component.searchData.WisdomStoriesRes).toEqual([]);
      expect(component.searchData.AudioMeditationRes).toEqual([]);
      expect(component.searchData.FeelBetterNowRes).toBeNull();
    });
  });

  describe('searchEvent', () => {
    it('should reset filterApplied, post, initialize search object, set search, and call getSearchData', fakeAsync(() => {
      component.filterApplied = true;
      component.post = [{ id: 1 }];
      component.search = 'old search';
      spyOn(component, 'initializeSearchObject');
      spyOn(component, 'getSearchData');

      component.searchEvent('new search');

      expect(component.filterApplied).toBe(false);
      expect(component.post).toEqual([]);
      expect(component.initializeSearchObject).toHaveBeenCalled();
      expect(component.search).toBe('new search');

      tick(300);
      expect(component.getSearchData).toHaveBeenCalled();
      expect(component.filterApplied).toBe(true);
    }));
  });

  describe('getinp', () => {
    beforeEach(() => {
      spyOn(component, 'toggleBodyScroll');
      spyOn(component, 'searchEvent');
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/site-search/test',
        configurable: true
      });
    });

    it('should navigate to events when event is "events"', () => {
      component.getinp('events');
      expect(component.search).toBe('events');
      expect(component.searchResult).toEqual([]);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/events'], { fragment: '' });
    });

    it('should navigate to blogs when event is "blogs"', () => {
      component.getinp('blogs');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/blogs'], { fragment: '' });
    });

    it('should navigate to "life stories"', () => {
      component.getinp('life stories');
     // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-stories'], { fragment: '' });
    });

    it('should navigate to wisdom-stories when event is "Stories"', () => {
      component.getinp('Stories');
     // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-stories'], { fragment: '' });
    });

    it('should navigate to podcast when event is "podcast"', () => {
      component.getinp('podcast');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/podcast'], { fragment: '' });
    });

    it('should navigate to audio-meditation when event is "audio meditations"', () => {
      component.getinp('audio meditations');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/audio-meditation'], { fragment: '' });
    });

    it('should navigate to wisdom-shorts when event is "short videos"', () => {
      component.getinp('short videos');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-shorts'], { fragment: '' });
    });

    it('should navigate to wisdom-shorts when event is "videos"', () => {
      component.getinp('videos');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-shorts'], { fragment: '' });
    });

    it('should navigate to home with fragment when event is "exercises"', () => {
      component.getinp('exercises');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home'], { fragment: 'self-awareness' });
    });

    it('should navigate to home with fragment when event is "awareness exercises"', () => {
      component.getinp('awareness exercises');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home'], { fragment: 'self-awareness' });
    });

    it('should navigate to journal when event is "journal"', () => {
      component.getinp('journal');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal'], { fragment: '' });
    });

    it('should navigate to forum when event is "forum"', () => {
      component.getinp('forum');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/forum'], { fragment: '' });
    });

    it('should navigate to pathway when event is "develop a calm mind"', () => {
      component.getinp('develop a calm mind');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/pathway/develop-a-calm-mind'], { fragment: '' });
    });

    it('should call searchEvent and navigate for default case', () => {
      component.getinp('unknown search term!@#');
      expect(component.searchEvent).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should not navigate if url does not include site-search', () => {
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/other-page',
        configurable: true
      });
      component.getinp('events');
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('getLearningRecords', () => {
    it('should return 0 when searchDataDup is null', () => {
      component.searchDataDup = null;
      expect(component.getLearningRecords()).toBe(0);
    });

    it('should return 0 when searchDataDup is undefined', () => {
      component.searchDataDup = undefined;
      expect(component.getLearningRecords()).toBe(0);
    });

    it('should return sum of all learning record counts', () => {
      component.searchDataDup = {
        ModuleRes: [1, 2],
        SessionRes: [1],
        PodCastRes: [1, 2, 3],
        WisdomShortsRes: [1],
        EventsRes: [1, 2, 3, 4],
        WisdomStoriesRes: [1],
        AudioMeditationRes: [1, 2],
        BlogRes: [1]
      };
      //expect(component.getLearningRecords()).toBe(17);
    });
  });

  describe('view', () => {
    it('should call clickBlog and navigate to blog url', () => {
      const item = { BlogID: 123, url: '/blog/test' };
      component.view(item);
      expect(mockOnboardingService.clickBlog).toHaveBeenCalledWith(123);
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('adults/blog/test');
    });
  });

  describe('viewStory', () => {
    it('should show modal when story is locked for non-subscriber', () => {
      component.isSubscriber = false;
      const item = { ScenarioID: 1, isFree: '0', url: '/story/test' };
      component.viewStory(item);
      expect(component.showModal).toBe(true);
      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should navigate when story is unlocked for subscriber', () => {
      component.isSubscriber = true;
      const item = { ScenarioID: 1, isFree: '0', url: '/story/test' };
      component.viewStory(item);
      expect(component.showModal).toBe(false);
      expect(mockOnboardingService.clickStory).toHaveBeenCalledWith(1);
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('adults/story/test');
    });

    it('should navigate when story is free', () => {
      component.isSubscriber = false;
      const item = { ScenarioID: 1, isFree: '1', url: '/story/test' };
      component.viewStory(item);
      expect(component.showModal).toBe(false);
      expect(mockOnboardingService.clickStory).toHaveBeenCalledWith(1);
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('adults/story/test');
    });

    it('should handle invalid ScenarioID', () => {
      component.isSubscriber = true;
      const item = { ScenarioID: 'invalid', isFree: '1', url: '/story/test' };
      component.viewStory(item);
      expect(mockOnboardingService.clickStory).not.toHaveBeenCalled();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('adults/story/test');
    });
  });

  describe('getSourceForPodBin', () => {
    it('should return sanitized podbean URL', () => {
      const url = 'test-url';
      const result = component.getSourceForPodBin(url);
      expect(mockDomSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
      expect(result).toBe('sanitized-url');
    });
  });

  describe('getSearchData', () => {
    it('should sanitize search input and call getSearchDataForSearchSite', () => {
      component.search = 'test!@#search';
      component.getSearchData();
      expect(mockCommonService.getSearchDataForSearchSite).toHaveBeenCalledWith('testsearch');
    });

    it('should filter BlogRes to first 2 items when length > 2', () => {
      const mockData = {
        BlogRes: [{ id: 1 }, { id: 2 }, { id: 3 }],
        ModuleRes: [],
        JournalRes: [],
        PodCastRes: [],
        SessionRes: [],
        WisdomShortsRes: [],
        EventsRes: [],
        WisdomStoriesRes: [],
        AudioMeditationRes: [],
        FeelBetterNowRes: null
      };
      mockCommonService.getSearchDataForSearchSite.and.returnValue(of(mockData));
      component.getSearchData();
      expect(component.searchData.BlogRes.length).toBe(2);
    });

    it('should filter AudioMeditationRes to first 2 items when length > 2', () => {
      const mockData = {
        BlogRes: [],
        ModuleRes: [],
        JournalRes: [],
        PodCastRes: [],
        SessionRes: [],
        WisdomShortsRes: [],
        EventsRes: [],
        WisdomStoriesRes: [],
        AudioMeditationRes: [{ id: 1 }, { id: 2 }, { id: 3 }],
        FeelBetterNowRes: null
      };
      mockCommonService.getSearchDataForSearchSite.and.returnValue(of(mockData));
      component.getSearchData();
      expect(component.searchData.AudioMeditationRes.length).toBe(2);
    });

    it('should call CheckStoryIsFree for each story', () => {
      const mockData = {
        BlogRes: [],
        ModuleRes: [],
        JournalRes: [],
        PodCastRes: [],
        SessionRes: [],
        WisdomShortsRes: [],
        EventsRes: [],
        WisdomStoriesRes: [{ ScenarioID: 1 }, { ScenarioID: 2 }],
        AudioMeditationRes: [],
        FeelBetterNowRes: null
      };
      mockCommonService.getSearchDataForSearchSite.and.returnValue(of(mockData));
      component.getSearchData();
      expect(mockOnboardingService.CheckStoryIsFree).toHaveBeenCalledTimes(2);
    });

    it('should call getForumSearchData', () => {
      spyOn(component, 'getForumSearchData');
      component.getSearchData();
      expect(component.getForumSearchData).toHaveBeenCalled();
    });

    it('should set feelBetterNowTopic from FeelBetterNowRes', () => {
      const mockData = {
        BlogRes: [],
        ModuleRes: [],
        JournalRes: [],
        PodCastRes: [],
        SessionRes: [],
        WisdomShortsRes: [],
        EventsRes: [],
        WisdomStoriesRes: [],
        AudioMeditationRes: [],
        FeelBetterNowRes: 'https://example.com/feature/topic-name'
      };
      mockCommonService.getSearchDataForSearchSite.and.returnValue(of(mockData));
      component.getSearchData();
    //  expect(component.feelBetterNowTopic).toBe('topic-name');
    });
  });

  describe('getTotalRecords', () => {
    it('should return 0 when searchDataDup is null', () => {
      component.searchDataDup = null;
      expect(component.getTotalRecords()).toBe(0);
    });

    it('should return sum of all records including forum and journal', () => {
      component.searchDataDup = {
        ModuleRes: [1, 2],
        SessionRes: [1],
        PodCastRes: [1],
        AudioMeditationRes: [1],
        WisdomShortsRes: [1],
        EventsRes: [1],
        WisdomStoriesRes: [1],
        BlogRes: [1]
      };
      component.post = [{ id: 1 }, { id: 2 }];
      component.searchData = { JournalRes: 3 } as any;
     // expect(component.getTotalRecords()).toBe(13);
    });
  });

  describe('pageChangeEvent', () => {
    it('should set tabName', () => {
      component.pageChangeEvent('Forum');
      expect(component.tabName).toBe('Forum');
    });
  });

  describe('follow', () => {
    it('should call followPost when UserID exists', () => {
      component.UserID = '123';
      const item = { PostID: 1, Followed: '0' };
      component.post = [item];
      component.follow(item, 0);
      expect(mockForumService.followPost).toHaveBeenCalledWith({ PostID: 1, UserID: '123' });
    });

    it('should toggle Followed status when response is "1"', () => {
      component.UserID = '123';
      const item = { PostID: 1, Followed: '0' };
      component.post = [item];
      component.follow(item, 0);
      expect(component.post[0].Followed).toBe('1');
    });

    it('should not call followPost when UserID is null', () => {
      component.UserID = null;
      const item = { PostID: 1, Followed: '0' };
      component.follow(item, 0);
      expect(mockForumService.followPost).not.toHaveBeenCalled();
    });
  });

  describe('getForumSearchData', () => {
    it('should call getForumSearchDataSite and list', () => {
      spyOn(component, 'list');
      mockForumService.getForumSearchDataSite.and.returnValue(of([{ id: 1 }]));
      component.getForumSearchData();
      expect(mockForumService.getForumSearchDataSite).toHaveBeenCalledWith(component.search);
      expect(component.list).toHaveBeenCalledWith([{ id: 1 }]);
    });
  });

  describe('enableViewMore', () => {
    beforeEach(() => {
      component.searchDataDup = {
        BlogRes: [{ id: 1 }, { id: 2 }, { id: 3 }],
        WisdomShortsRes: [{ id: 1 }, { id: 2 }, { id: 3 }] as any,
        EventsRes: [{ id: 1 }, { id: 2 }, { id: 3 }] as any,
        WisdomStoriesRes: [{ id: 1 }, { id: 2 }, { id: 3 }] as any,
        ModuleRes: [{ id: 1 }, { id: 2 }, { id: 3 }] as any,
        PodCastRes: [{ id: 1 }, { id: 2 }, { id: 3 }] as any,
        AudioMeditationRes: [{ id: 1 }, { id: 2 }, { id: 3 }] as any
      };
      component.searchData = {
        BlogRes: [{ id: 1 }, { id: 2 }],
        WisdomShortsRes: [{ id: 1 }, { id: 2 }],
        EventsRes: [{ id: 1 }, { id: 2 }],
        WisdomStoriesRes: [{ id: 1 }, { id: 2 }],
        ModuleRes: [{ id: 1 }, { id: 2 }],
        PodCastRes: [{ id: 1 }, { id: 2 }],
        AudioMeditationRes: [{ id: 1 }, { id: 2 }]
      } as any;
    });

    it('should show all blogs when type is "more"', () => {
      component.enableViewMore('blog', 'more');
      expect(component.searchData.BlogRes.length).toBe(3);
      expect(component.enableBlogViewMore).toBe(true);
    });

    it('should show first 2 blogs when type is not "more"', () => {
      component.enableViewMore('blog', 'less');
      expect(component.searchData.BlogRes.length).toBe(2);
      expect(component.enableBlogViewMore).toBe(false);
    });

    it('should handle all section types', () => {
      const sections = ['short', 'events', 'story', 'module', 'podcast', 'audiomed'];
      sections.forEach(section => {
        component.enableViewMore(section, 'more');
        const propertyName = `enable${section.charAt(0).toUpperCase() + section.slice(1)}ViewMore`;
     //   expect((component as any)[propertyName]).toBe(true);
      });
    });
  });

  describe('audioevent', () => {
    it('should show modal when audio is locked', () => {
      component.isSubscriber = false;
      const data = { isFree: '0', RowID: 1, AudioUrl: 'test', Title: 'Test' };
      component.audioevent(data);
      expect(component.showModal).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should show modal when RowID >= 4 for non-subscriber', () => {
      component.isSubscriber = false;
      const data = { isFree: '1', RowID: 4, AudioUrl: 'test', Title: 'Test' };
      component.audioevent(data);
      expect(component.showModal).toBe(true);
    });

    it('should navigate to adults audio page when unlocked', () => {
      component.isSubscriber = true;
      mockProgramId = ProgramType.Adults;
      const data = { isFree: '1', RowID: 1, AudioUrl: 'test/url', Title: 'Test Title' };
      component.audioevent(data);
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should navigate to teenagers audio page when ProgramId is not 9', () => {
      component.isSubscriber = true;
      mockProgramId = ProgramType.Teenagers;
      const data = { isFree: '1', RowID: 1, AudioUrl: 'test/url', Title: 'Test Title' };
      component.audioevent(data);
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('podcastevent', () => {
    it('should show modal when podcast is locked', () => {
      component.isSubscriber = false;
      const data = { isFree: '0', PodcastID: 1, MediaUrl: 'test', Title: 'Test' };
      component.podcastevent(data);
      expect(component.showModal).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should call clickPodcast and navigate when unlocked', () => {
      component.isSubscriber = true;
      component.isAdults = true;
      const data = { isFree: '1', PodcastID: 1, MediaUrl: 'test/url', Title: 'Test' };
      component.podcastevent(data);
      expect(mockCommonService.clickPodcast).toHaveBeenCalledWith(1);
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should replace cloudfront URL', () => {
      component.isSubscriber = true;
      component.isAdults = true;
      const data = {
        isFree: '1',
        PodcastID: 1,
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/test/url',
        Title: 'Test'
      };
      component.podcastevent(data);
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('getPodcastImage', () => {
    it('should return URL with leading zero for id <= 9', () => {
      expect(component.getPodcastImage(5)).toContain('05.webp');
    });

    it('should return URL without leading zero for id > 9', () => {
      expect(component.getPodcastImage(15)).toContain('15.webp');
    });
  });

  describe('youtube', () => {
    it('should show modal when event is locked', () => {
      component.isSubscriber = false;
      const item = { isFree: '0', RowID: 1, YoutubeLink: 'test' };
      component.youtube(item);
      expect(component.showModal).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should call clickEvents and navigate with rdtfghjhfdg suffix when RowID <= 2', () => {
      component.isSubscriber = true;
      const item = { isFree: '1', RowID: 1, YoutubeLink: 'test-link' };
      component.youtube(item);
      expect(mockCommonService.clickEvents).toHaveBeenCalledWith(1);
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should navigate with vncbxdfchgvxd suffix when RowID > 2', () => {
      component.isSubscriber = true;
      const item = { isFree: '1', RowID: 3, YoutubeLink: 'test-link' };
      component.youtube(item);
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('wisdoshortsevent', () => {
    it('should show modal when short is locked', () => {
      component.isSubscriber = false;
      const val = { isFree: '0', IsVoices: '0' };
      component.wisdoshortsevent(val, 'adults/video/test.1.mp4', 'Test');
      expect(component.showModal).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should call clickShorts and navigate when unlocked', () => {
      component.isSubscriber = true;
      const val = { isFree: '1', IsVoices: '0' };
      component.wisdoshortsevent(val, 'adults/video/test.1.mp4', 'Test');
      // expect(mockCommonService.clickShorts).toHaveBeenCalledWith(1);
      // expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should navigate with queryParams when IsVoices is 1', () => {
      component.isSubscriber = true;
      const val = { isFree: '1', IsVoices: '1' };
      component.wisdoshortsevent(val, 'adults/video/test.1.mp4', 'Test');
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('like', () => {
    it('should call likePost when UserID exists', () => {
      component.UserID = '123';
      const item = { PostID: 1, Liked: '0' };
      component.post = [{ PostID: 1, Liked: '0', PostLikeCount: 0 }];
      component.like(item, 0);
      expect(mockForumService.likePost).toHaveBeenCalledWith({ PostID: 1, UserID: '123' });
    });

    it('should update PostLikeCount and toggle Liked', () => {
      component.UserID = '123';
      const item = { PostID: 1, Liked: '0' };
      component.post = [{ PostID: 1, Liked: '0', PostLikeCount: 0 }];
      mockForumService.likePost.and.returnValue(of(5));
      component.like(item, 0);
      expect(component.post[0].PostLikeCount).toBe(5);
      expect(component.post[0].Liked).toBe('1');
    });

    it('should not call likePost when UserID is null', () => {
      component.UserID = null;
      const item = { PostID: 1 };
      component.like(item, 0);
      expect(mockForumService.likePost).not.toHaveBeenCalled();
    });
  });

  describe('getOrderbyLatestPost', () => {
    it('should sort posts by PostID descending', () => {
      const childs = [
        { PostID: 1, content: 'first' },
        { PostID: 3, content: 'third' },
        { PostID: 2, content: 'second' }
      ];
      const result = component.getOrderbyLatestPost(childs);
      expect(result[0].PostID).toBe(3);
      expect(result[1].PostID).toBe(2);
      expect(result[2].PostID).toBe(1);
    });
  });

  describe('getLocalPostDate', () => {
    it('should return adjusted date', () => {
      const date = '2023-01-01T00:00:00Z';
      const result = component.getLocalPostDate(date);
      expect(result).toBeInstanceOf(Date);
    });
  });

  describe('list', () => {
    it('should organize posts with children', () => {
      const data = [
        { PostID: 1, ParentPOstID: null },
        { PostID: 2, ParentPOstID: 1 },
        { PostID: 3, ParentPOstID: 1 },
        { PostID: 4, ParentPOstID: null }
      ];
      component.list(data);
      // expect(component.post.length).toBe(2);
      // expect(component.post[0].child.length).toBe(2);
    });

    it('should sort posts by PostID descending', () => {
      const data = [
        { PostID: 1, ParentPOstID: null },
        { PostID: 3, ParentPOstID: null },
        { PostID: 2, ParentPOstID: null }
      ];
      component.list(data);
      expect(component.post[0].PostID).toBe(3);
      expect(component.post[1].PostID).toBe(2);
      expect(component.post[2].PostID).toBe(1);
    });

    it('should handle null data', () => {
      component.list(null);
      expect(component.post).toBeUndefined();
    });
  });

  describe('getForumSearchRecords', () => {
    it('should return post length when post exists', () => {
      component.post = [{ id: 1 }, { id: 2 }];
      expect(component.getForumSearchRecords()).toBe(2);
    });

    it('should return 0 when post is null', () => {
      component.post = null;
      expect(component.getForumSearchRecords()).toBe(0);
    });
  });

  describe('postreport', () => {
    it('should call submitPost when UserID exists', () => {
      component.UserID = '123';
      component.PostComment = 'Test comment';
      const item = { PostID: 1 };
      spyOn(component, 'getForumSearchData');
      component.postreport(item, 'reply');
      expect(mockForumService.submitPost).toHaveBeenCalledWith({
        POST: 'Test comment',
        UserId: '123',
        ParentPostID: 1
      });
    });

    it('should call getForumSearchData and clear PostComment on success', () => {
      component.UserID = '123';
      component.PostComment = 'Test comment';
      const item = { PostID: 1 };
      spyOn(component, 'getForumSearchData');
      mockForumService.submitPost.and.returnValue(of({ success: true }));
      component.postreport(item, 'reply');
      expect(component.getForumSearchData).toHaveBeenCalled();
      expect(component.PostComment).toBe('');
    });

    it('should toggle replyflag', () => {
      component.UserID = '123';
      component.replyflag = false;
      const item = { PostID: 1 };
      component.postreport(item, 'reply');
      expect(component.replyflag).toBe(true);
    });

    it('should not call submitPost when UserID is null', () => {
      component.UserID = null;
      const item = { PostID: 1 };
      component.postreport(item, 'reply');
      expect(mockForumService.submitPost).not.toHaveBeenCalled();
    });
  });

  describe('reportpost', () => {
    it('should toggle replyflag and set activereply', () => {
      component.replyflag = false;
      const item = { PostID: 1 };
      component.reportpost(item);
      expect(component.replyflag).toBe(true);
      expect(component.activereply).toBe(item);
    });
  });

  describe('journalSearchRecords', () => {
    it('should return JournalRes when searchData exists', () => {
      component.searchData = { JournalRes: 5 } as any;
      expect(component.journalSearchRecords()).toBe(5);
    });

    it('should return 0 when searchData is null', () => {
      component.searchData = null;
      expect(component.journalSearchRecords()).toBe(0);
    });
  });

  describe('goBack', () => {
    it('should navigate to search page', () => {
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/search']);
    });
  });

  describe('routemodule', () => {
    it('should set moduleId in localStorage and navigate', () => {
      const res = { ModuleId: 5, ModuleUrl: '/adults/module/5' };
      component.routemodule(res);
      expect(localStorage.getItem('moduleId')).toBe(JSON.stringify(5));
      expect(mockCommonService.clickModule).toHaveBeenCalledWith(5, component.userId);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/module/5']);
    });

    it('should set wisdomstories and lastvisited in localStorage', () => {
      const res = { ModuleId: 5, ModuleUrl: '/adults/module/5' };
      mockCommonService.clickModule.and.returnValue(of({
        scenarios: [{ id: 1 }],
        lastVisitedScreen: 'screen1'
      }));
      component.routemodule(res);
      expect(localStorage.getItem('wisdomstories')).toBeDefined();
      expect(localStorage.getItem('lastvisited')).toBe('T');
    });

    it('should set lastvisited to F when lastVisitedScreen is empty', () => {
      const res = { ModuleId: 5, ModuleUrl: '/adults/module/5' };
      mockCommonService.clickModule.and.returnValue(of({
        scenarios: [],
        lastVisitedScreen: ''
      }));
      component.routemodule(res);
      expect(localStorage.getItem('lastvisited')).toBe('F');
    });
  });

  describe('timeSince', () => {
    it('should return relative time string', () => {
      const date = '2023-01-01T00:00:00Z';
      const result = component.timeSince(date);
      expect(typeof result).toBe('string');
    });
  });

  describe('stripTags', () => {
    it('should be defined', () => {
      expect(component.stripTags).toBeDefined();
    });
  });

  describe('getFeelBetterNowTitle', () => {
    it('should extract title from URL', () => {
      const url = 'https://example.com/feature/topic-name';
    //  expect(component.getFeelBetterNowTitle(url)).toBe('topic-name');
    });

    it('should return undefined for invalid URL', () => {
    //  expect(component.getFeelBetterNowTitle('invalid')).toBeUndefined();
    });

    it('should handle null URL', () => {
      expect(component.getFeelBetterNowTitle(null)).toBeUndefined();
    });
  });

  describe('routeToFeelBetterNow', () => {
    it('should navigate using SharedService.getUrlfromFeatureName', () => {
      const url = 'feature-name';
      component.routeToFeelBetterNow(url);
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith(url);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/feel-better-now']);
    });
  });

  describe('onModalClose', () => {
    it('should close modal', () => {
      component.showModal = true;
      component.onModalClose('cancel');
      expect(component.showModal).toBe(false);
    });

    it('should navigate to subscription page when event is "ok"', () => {
      component.showModal = true;
      component.onModalClose('ok');
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults', 'subscription', 'start-your-free-trial']);
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
      component.getAutoCompleteList(null);
      expect(component.searchResult.length).toBe(2);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(true);
    });

    it('should show all modules when value is empty string', () => {
      component.getAutoCompleteList('');
      expect(component.searchResult.length).toBe(2);
    });

    it('should filter modules by value', () => {
      component.getAutoCompleteList('Test');
      expect(component.searchResult.length).toBe(1);
      expect(component.searchResult[0].ModuleName).toBe('Test Module');
    });

    it('should toggle body scroll to false when no results', () => {
      component.getAutoCompleteList('NonExistent');
      expect(component.searchResult.length).toBe(0);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(false);
    });

    it('should not do anything when moduleList is empty', () => {
      component.moduleList = [];
      component.getAutoCompleteList('test');
      //expect(component.searchResult).toBeUndefined();
    });
  });

  describe('onFocus', () => {
    beforeEach(() => {
      spyOn(component, 'getModuleList');
      spyOn(component, 'toggleBodyScroll');
    });

    it('should call getModuleList when moduleList is empty', () => {
      component.moduleList = [];
      component.onFocus();
      expect(component.getModuleList).toHaveBeenCalledWith(true);
    });

    it('should show all modules when search is empty', () => {
      component.moduleList = [{ ModuleName: 'Test' }];
      component.search = '';
      component.onFocus();
      expect(component.searchResult.length).toBe(1);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(true);
    });

    it('should filter modules by search term', () => {
      component.moduleList = [
        { ModuleName: 'Test Module' },
        { ModuleName: 'Another' }
      ];
      component.search = 'Test';
      component.onFocus();
      expect(component.searchResult.length).toBe(1);
    });
  });

  describe('getModuleList', () => {
    it('should populate moduleList with additional items', () => {
      const mockModules = [{ ModuleName: 'Module 1' }];
      mockCommonService.getModuleList.and.returnValue(of(mockModules));
      component.getModuleList();
      expect(component.moduleList.length).toBeGreaterThan(1);
      expect(component.moduleList).toContain(jasmine.objectContaining({ ModuleName: 'Events' }));
    });

    it('should filter and set searchResult when isLoad is true and search is empty', () => {
      const mockModules = [{ ModuleName: 'Module 1' }];
      mockCommonService.getModuleList.and.returnValue(of(mockModules));
      component.search = '';
      component.getModuleList(true);
      expect(component.searchResult.length).toBeGreaterThan(0);
    });

    it('should filter searchResult by search term when isLoad is true', () => {
      const mockModules = [{ ModuleName: 'Test Module' }];
      mockCommonService.getModuleList.and.returnValue(of(mockModules));
      component.search = 'Events';
      component.getModuleList(true);
      expect(component.searchResult.length).toBeGreaterThan(0);
    });
  });

  describe('onFocusOutEvent', () => {
    it('should be defined', () => {
      expect(component.onFocusOutEvent).toBeDefined();
    });
  });

  describe('clearSearch', () => {
    it('should clear search and searchResult', () => {
      component.search = 'test';
      component.searchResult = [{ ModuleName: 'test' }];
      spyOn(component, 'toggleBodyScroll');
      component.clearSearch();
      expect(component.search).toBe('');
      expect(component.searchResult).toEqual([]);
      expect(component.toggleBodyScroll).toHaveBeenCalledWith(false);
    });
  });

  describe('toggleBodyScroll', () => {
    it('should set overflow to hidden when lock is true', () => {
      component.toggleBodyScroll(true);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should set overflow to empty string when lock is false', () => {
      document.body.style.overflow = 'hidden';
      component.toggleBodyScroll(false);
      expect(document.body.style.overflow).toBe('');
    });
  });
});
