import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Meta, Title } from '@angular/platform-browser';
import { of, throwError, Subject, BehaviorSubject } from 'rxjs';
import { ForumLandingPage } from './forum-landing.page';
import { ForumService } from '../forum.service';
import { OnboardingService } from '../../services/onboarding.service';
import { LogEventService } from '../../services/log-event.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../../shared/services/navigation.service';
import { ModalService } from '../../services/modal.service';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../../shared/services/constant';
import { ProgramType } from '../../models/program-model';

describe('ForumLandingPage', () => {
  let component: ForumLandingPage;
  let fixture: ComponentFixture<ForumLandingPage>;
  let mockForumService: jasmine.SpyObj<ForumService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockPlatform: jasmine.SpyObj<Platform>;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockModalService: jasmine.SpyObj<ModalService>;
  let routerEventsSubject: Subject<any>;
  let postdataSource: BehaviorSubject<any>;

  const mockPosts = [
    {
      PostID: '123',
      POST: 'Test Post 1',
      PostDate: '2024-01-01',
      PostLikeCount: '10',
      Liked: '0',
      Followed: '1',
      UserId: '107',
      TagIds: '1',
      ParentPOstID: '0'
    },
    {
      PostID: '456',
      POST: 'Test Post 2',
      PostDate: '2024-01-02',
      PostLikeCount: '5',
      Liked: '1',
      Followed: '0',
      UserId: '108',
      TagIds: '2',
      ParentPOstID: '0'
    }
  ];

  const mockTagList = [
    { value: 1, label: 'Mental Health' },
    { value: 2, label: 'Relationships' },
    { value: 3, label: 'Work' },
    { value: 4, label: 'Nuggets of Inspiration' },
    { value: 5, label: 'Ask a coach' },
    { value: 6, label: 'School' }
  ];

  beforeEach(waitForAsync(() => {
    // Create router events subject
    routerEventsSubject = new Subject<any>();
    postdataSource = new BehaviorSubject<any>(null);

    // Create spy objects
    mockForumService = jasmine.createSpyObj('ForumService', [
      'GetTagList',
      'getposts',
      'likePost',
      'followPost',
      'deletePost',
      'submitPost',
      'reportPost',
      'UpdatePost',
      'getForumRecords',
      'FormatForumPostData'
    ], {
      postdataSource: postdataSource,
      postdatavalue: postdataSource.asObservable()
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      events: routerEventsSubject.asObservable(),
      url: '/forum/forum-landing'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue({
      extras: { state: { programType: ProgramType.Adults } }
    });

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockPlatform = jasmine.createSpyObj('Platform', ['isBrowser'], { isBrowser: true });
    mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);
    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['getScenarios']);
    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['goBack']);
    mockModalService = jasmine.createSpyObj('ModalService', ['openModal', 'closeModal']);

    // Setup default return values
    mockForumService.GetTagList.and.returnValue(mockTagList);
    mockForumService.getposts.and.returnValue(of(mockPosts));
    mockForumService.likePost.and.returnValue(of('11'));
    mockForumService.followPost.and.returnValue(of('1'));
    mockForumService.deletePost.and.returnValue(of('1'));
    mockForumService.submitPost.and.returnValue(of({ PostID: '789' }));
    mockForumService.reportPost.and.returnValue(of({ success: true }));
    mockForumService.UpdatePost.and.returnValue(of({ success: true }));
    mockForumService.getForumRecords.and.returnValue(of(mockPosts));
    mockForumService.FormatForumPostData.and.returnValue(mockPosts);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());
    mockNavigationService.goBack.and.returnValue('/previous-page');

    // Mock SharedService static methods
    spyOn(SharedService, 'setDataInLocalStorage');
    spyOn(SharedService, 'getUrlfromFeatureName').and.returnValue('/forum/forum-thread');
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'DisabledComment').and.returnValue(false);
    
    // Mock ProgramId
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      const storage: { [key: string]: string } = {
        'userId': '107',
        'shareToken': 'test-token',
        'isloggedin': 'T',
        'name': 'Test User',
        'Subscriber': '1'
      };
      return storage[key] || null;
    });
    spyOn(localStorage, 'setItem');

    TestBed.configureTestingModule({
      declarations: [ForumLandingPage],
      providers: [
        { provide: ForumService, useValue: mockForumService },
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: Platform, useValue: mockPlatform },
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: ModalService, useValue: mockModalService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumLandingPage);
    component = fixture.componentInstance;
    
    // Mock ViewChild elements
    component.closeCategory = {
      nativeElement: {
        click: jasmine.createSpy('click')
      }
    } as any;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with default values', fakeAsync(() => {
      // Mock getForumRecords to return empty array for this test
      // Also mock FormatForumPostData to return empty array
      mockForumService.getForumRecords.and.returnValue(of([]));
      mockForumService.FormatForumPostData.and.returnValue([]);
      component.posts = [];
      component.defaultShow = true; // Ensure getLazyLoadedRecords is called
      component.ngOnInit();
      tick(); // Allow async operations to complete
      expect(component.UserID).toBe('107');
      expect(component.posts).toEqual([]);
      expect(component.selectIndex).toBe(0);
      expect(component.selectthread).toBe(0);
      expect(component.buttonText).toBe('All threads');
      expect(component.isAdults).toBe(true);
      expect(component.isLoggedIn).toBe(true);
      expect(component.isloggedIn).toBe(true);
    }));

    it('should load category list from service', () => {
      expect(component.categoryList).toEqual(mockTagList);
      expect(mockForumService.GetTagList).toHaveBeenCalled();
    });

    it('should set isAdults based on SharedService.ProgramId', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is not Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      fixture = TestBed.createComponent(ForumLandingPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit()', () => {
    it('should set page title and meta tags', () => {
      component.ngOnInit();
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Online Community for Wisdom Exchange');
      expect(mockMeta.updateTag).toHaveBeenCalledTimes(3);
    });

    it('should set userName from localStorage', () => {
      component.ngOnInit();
      expect(component.userName).toBe('Test User');
    });

    it('should set selectthread to first threadlist value', () => {
      component.ngOnInit();
      expect(component.selectthread).toBe(0);
    });

    it('should call getLazyLoadedRecords when defaultShow is true', () => {
      component.defaultShow = true;
      spyOn(component, 'getLazyLoadedRecords');
      component.ngOnInit();
      expect(component.getLazyLoadedRecords).toHaveBeenCalled();
    });

    it('should call getForumSearchData when defaultShow is false', () => {
      component.defaultShow = false;
      spyOn(component, 'getForumSearchData');
      component.ngOnInit();
      expect(component.getForumSearchData).toHaveBeenCalled();
    });

    it('should set isSubscribe from localStorage', () => {
      component.ngOnInit();
      expect(component.isSubscribe).toBe(true);
    });

    it('should set isSubscribe to false when Subscriber is not 1', () => {
      (localStorage.getItem as jasmine.Spy).and.returnValue('0');
      component.ngOnInit();
      expect(component.isSubscribe).toBe(false);
    });
  });

  describe('like()', () => {
    it('should like post when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.UserID = '107';
      component.posts = [{ ...mockPosts[0] }];
      const item = mockPosts[0];
      const index = 0;

      component.like(item, index);
      tick();

      expect(mockForumService.likePost).toHaveBeenCalledWith({
        PostID: '123',
        UserID: '107'
      });
      expect(component.posts[index].PostLikeCount).toBe('11');
      expect(component.posts[index].Liked).toBe('1');
    }));

    it('should unlike post when already liked', fakeAsync(() => {
      component.isLoggedIn = true;
      component.posts = [{ ...mockPosts[0], Liked: '1' }];
      const item = { ...mockPosts[0], Liked: '1' };
      const index = 0;

      component.like(item, index);
      tick();

      expect(component.posts[index].Liked).toBe('0');
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;
      const item = mockPosts[0];
      const index = 0;

      component.like(item, index);

      expect(component.enableAlert).toBe(true);
      expect(mockForumService.likePost).not.toHaveBeenCalled();
    });
  });

  describe('reportpost()', () => {
    it('should toggle replyflag when logged in', () => {
      component.isLoggedIn = true;
      component.replyflag = false;
      component.actionType = '';
      const item = mockPosts[0];

      component.reportpost(item, 'report');

      expect(component.replyflag).toBe(true);
      expect(component.actionType).toBe('report');
      expect(component.activereply).toBe(item);
    });

    it('should not toggle replyflag when actionType matches', fakeAsync(() => {
      component.isLoggedIn = true;
      component.replyflag = true;
      component.actionType = 'report';
      const item = mockPosts[0];
      // Mock getForumRecords to return empty array to avoid side effects
      mockForumService.getForumRecords.and.returnValue(of([]));
      mockForumService.FormatForumPostData.and.returnValue([]);

      component.reportpost(item, 'report');
      tick(150); // Allow setTimeout in getAllRecords to complete

      expect(component.replyflag).toBe(false);
     // expect(component.closeCategory.nativeElement.click).toHaveBeenCalled();
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;
      const item = mockPosts[0];

      component.reportpost(item, 'report');

      expect(component.enableAlert).toBe(true);
    });
  });

  describe('getForumSearchData()', () => {
    it('should fetch and format forum search data', fakeAsync(() => {
      component.search = 'test search';
      component.getForumSearchData();
      tick();

      expect(mockForumService.getposts).toHaveBeenCalledWith(0, 'test search', null);
      expect(mockForumService.FormatForumPostData).toHaveBeenCalled();
      expect(component.posts).toEqual(mockPosts);
    }));
  });

  describe('list()', () => {
    it('should organize posts with children', () => {
      const data = [
        { PostID: 1, ParentPOstID: '0' },
        { PostID: 2, ParentPOstID: '1' },
        { PostID: 3, ParentPOstID: '0' }
      ];

      component.list(data);

      expect(component.posts.length).toBe(2);
      // Find the post with PostID 1 and check its children
      const postWithChildren = component.posts.find(p => p.PostID === 1);
      expect(postWithChildren).toBeDefined();
      expect(postWithChildren.child.length).toBe(1);
    });

    it('should sort posts by PostID descending', () => {
      const data = [
        { PostID: 1, ParentPOstID: '0' },
        { PostID: 3, ParentPOstID: '0' },
        { PostID: 2, ParentPOstID: '0' }
      ];

      component.list(data);

      expect(component.posts[0].PostID).toBe(3);
      expect(component.posts[1].PostID).toBe(2);
      expect(component.posts[2].PostID).toBe(1);
    });
  });

  describe('DeletePost()', () => {
    it('should delete post and remove from array', fakeAsync(() => {
      component.posts = [{ ...mockPosts[0] }, { ...mockPosts[1] }];
      const item = { ...mockPosts[0], isDeleting: false };
      const index = 0;

      component.DeletePost(item, index);
      tick();

      expect(mockForumService.deletePost).toHaveBeenCalledWith('123');
      expect(component.posts.length).toBe(1);
      expect(component.openDropdownIndex).toBe(null);
    }));

    it('should find index when not provided', fakeAsync(() => {
      component.posts = [{ ...mockPosts[0] }, { ...mockPosts[1] }];
      const item = { ...mockPosts[0], isDeleting: false };

      component.DeletePost(item);
      tick();

      expect(component.posts.length).toBe(1);
    }));

    it('should set isDeleting to false on error', fakeAsync(() => {
      mockForumService.deletePost.and.returnValue(throwError(() => new Error('Error')));
      const item = { ...mockPosts[0], isDeleting: false };

      component.DeletePost(item, 0);
      tick();

      expect(item.isDeleting).toBe(false);
    }));
  });

  describe('commentPost()', () => {
    it('should toggle replyflag and set activeCommentPost', () => {
      component.replyflag = false;
      const item = mockPosts[0];

      component.commentPost(item);

      expect(component.replyflag).toBe(true);
      expect(component.activeCommentPost).toBe(item);
    });
  });

  describe('postreport()', () => {
    it('should report post when actionType is report', fakeAsync(() => {
      component.isLoggedIn = true;
      component.UserID = '107';
      component.actionType = 'report';
      component.commenttext = 'Report comment';
      component.replyflag = true;
      const item = mockPosts[0];
      spyOn(component, 'getAllposts');
      spyOn(component, 'openPostedSuccessfullyModal');

      component.postreport(item, 'report');
      tick();

      expect(mockForumService.reportPost).toHaveBeenCalledWith({
        PostID: '123',
        UserID: '107',
        Comment: 'Report comment'
      });
      expect(component.replyflag).toBe(false);
      expect(component.actionType).toBe('');
      expect(component.submissionState).toBe('success');
      expect(component.modalText).toBe('submitted successfully.');
      expect(component.isProcessing).toBe(false);
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
    }));

    it('should submit comment when actionType is not report', fakeAsync(() => {
      component.isLoggedIn = true;
      component.UserID = '107';
      component.actionType = 'comment';
      component.PostComment = 'Test comment';
      component.replyflag = true;
      const item = mockPosts[0];
      spyOn(component, 'getAllposts');
      spyOn(component, 'openPostedSuccessfullyModal');

      component.postreport(item, 'comment');
      tick();

      expect(mockForumService.submitPost).toHaveBeenCalledWith({
        POST: 'Test comment',
        UserId: '107',
        ParentPostID: '123'
      });
      expect(component.PostComment).toBe('');
      expect(component.replyflag).toBe(false);
      expect(component.submissionState).toBe('success');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
    }));

    it('should handle error when reporting fails', fakeAsync(() => {
      mockForumService.reportPost.and.returnValue(throwError(() => new Error('Error')));
      component.isLoggedIn = true;
      component.actionType = 'report';
      const item = mockPosts[0];
      spyOn(component, 'openPostedSuccessfullyModal');

      component.postreport(item, 'report');
      tick();

      expect(component.submissionState).toBe('error');
      expect(component.modalText).toBe('Something went wrong. Please try again.');
      expect(component.isProcessing).toBe(false);
    }));
  });

  describe('follow()', () => {
    it('should follow post when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.UserID = '107';
      component.posts = [{ ...mockPosts[0], Followed: '0' }];
      const item = { ...mockPosts[0], Followed: '0' };
      const index = 0;

      component.follow(item, index);
      tick();

      expect(mockForumService.followPost).toHaveBeenCalledWith({
        PostID: '123',
        UserID: '107'
      });
      expect(component.posts[index].Followed).toBe('1');
    }));

    it('should unfollow post when already following', fakeAsync(() => {
      component.isLoggedIn = true;
      component.posts = [{ ...mockPosts[0], Followed: '1' }];
      const item = { ...mockPosts[0], Followed: '1' };
      const index = 0;

      component.follow(item, index);
      tick();

      expect(component.posts[index].Followed).toBe('0');
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;
      const item = mockPosts[0];
      const index = 0;

      component.follow(item, index);

      expect(component.enableAlert).toBe(true);
      expect(mockForumService.followPost).not.toHaveBeenCalled();
    });
  });

  describe('postnavigate()', () => {
    it('should navigate to forum thread page', () => {
      const item = mockPosts[0];
      spyOn(postdataSource, 'next');
      component.postnavigate(item);

      expect(postdataSource.next).toHaveBeenCalledWith(item);
      expect(mockRouter.navigateByUrl).toHaveBeenCalled();
    });
  });

  describe('onFocusOutEvent()', () => {
    it('should log search event', () => {
      component.onFocusOutEvent();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('Search');
    });

    it('should get all records when searchInput is empty', () => {
      component.searchInput = '';
      spyOn(component, 'getAllRecords');
      component.onFocusOutEvent();
      expect(component.getAllRecords).toHaveBeenCalled();
    });

    it('should search posts when searchInput has value', fakeAsync(() => {
      component.searchInput = 'test';
      component.onFocusOutEvent();
      tick();

      expect(mockForumService.getposts).toHaveBeenCalledWith(0, 'test', null);
      expect(mockForumService.FormatForumPostData).toHaveBeenCalled();
    }));
  });

  describe('shareOnThread()', () => {
    it('should share thread using navigator share', fakeAsync(() => {
      const item = mockPosts[0];
      component.shareOnThread(item);
      tick();

      expect(component.path).toContain('forum/forum-thread/123');
      expect(mockNgNavigatorShareService.share).toHaveBeenCalled();
    }));
  });

  describe('gotToProfile()', () => {
    it('should navigate to user profile', () => {
      const item = mockPosts[0];
      component.gotToProfile(item);

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_UserProfile');
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('getAllposts()', () => {
    it('should fetch and format all posts', fakeAsync(() => {
      component.selectthread = 0;
      component.UserID = '107';
      component.getAllposts(0);
      tick();

      expect(mockForumService.getposts).toHaveBeenCalledWith(0, null, '107');
      expect(mockForumService.FormatForumPostData).toHaveBeenCalled();
      expect(component.posts).toEqual(mockPosts);
    }));
  });

  describe('getAllRecords()', () => {
    it('should reset and load records', fakeAsync(() => {
      component.startRecord = 10;
      component.endRecord = 30;
      component.buttonText = 'Test';
      component.searchInput = 'test';
      component.posts = [{ ...mockPosts[0] }];
      spyOn(component, 'getLazyLoadedRecords');
      spyOn(component, 'closeCategoryModal');

      component.getAllRecords();
      tick(100);

      expect(component.startRecord).toBe(1);
      expect(component.endRecord).toBe(20);
      expect(component.buttonText).toBe('All threads');
      expect(component.searchInput).toBe('');
      expect(component.posts).toEqual([]);
      expect(component.getLazyLoadedRecords).toHaveBeenCalled();
      expect(component.closeCategoryModal).toHaveBeenCalled();
    }));
  });

  describe('getLazyLoadedRecords()', () => {
    it('should load records and append to posts', fakeAsync(() => {
      component.startRecord = 1;
      component.endRecord = 20;
      component.posts = [];
      component.isLoading = false;
      // Reset the spy to ensure clean state
      mockForumService.getForumRecords.calls.reset();
      // Use a Subject to control when the observable emits
      const recordsSubject = new Subject<any>();
      mockForumService.getForumRecords.and.returnValue(recordsSubject.asObservable());

      component.getLazyLoadedRecords();
      // isLoading should be true when posts.length is 0 (set synchronously before subscription callback)
      expect(component.isLoading).toBe(true);
      expect(mockForumService.getForumRecords).toHaveBeenCalledWith(1, 20);
      
      // Emit the data
      recordsSubject.next(mockPosts);
      tick(); // Allow async operation to complete
      
      expect(component.posts.length).toBeGreaterThan(0);
      expect(component.isLoading).toBe(false);
    }));

    it('should append to existing posts', fakeAsync(() => {
      component.posts = [{ ...mockPosts[0] }];
      component.isLoading = false;
      component.getLazyLoadedRecords();
      tick();

      expect(component.posts.length).toBe(3);
    }));

    it('should not set isLoading when posts exist', fakeAsync(() => {
      component.posts = [{ ...mockPosts[0] }];
      component.isLoading = false;

      component.getLazyLoadedRecords();
      tick();

      expect(component.isLoading).toBe(false);
      expect(component.posts.length).toBeGreaterThan(1);
    }));
  });

  describe('DisabledComment()', () => {
    it('should call SharedService.DisabledComment', () => {
      const item = mockPosts[0];
      component.DisabledComment(item);
      expect(SharedService.DisabledComment).toHaveBeenCalledWith(item);
    });
  });

  describe('filterBasedOnTags()', () => {
    it('should filter posts by tag and update button text', fakeAsync(() => {
      component.categoryList = mockTagList;
      component.buttonText = 'All threads';
      component.UserID = '107';
      const filteredData = [{ ...mockPosts[0], TagIds: '1' }];
      mockForumService.getposts.and.returnValue(of([...mockPosts, { ...mockPosts[1], TagIds: '2' }]));
      spyOn(component, 'closeCategoryModal');

      component.filterBasedOnTags(1, 'Mental Health');
      tick(100);

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_AllThread');
      expect(component.buttonText).toBe('Mental Health');
      expect(mockForumService.getposts).toHaveBeenCalledWith(0, null, '107');
      expect(component.closeCategoryModal).toHaveBeenCalled();
    }));
  });

  describe('onChange()', () => {
    it('should update selectIndex and selectthread', fakeAsync(() => {
      component.selectIndex = 0;
      component.selectthread = 0;
      component.buttonText = 'All threads';
      component.closeCategory = { nativeElement: { click: jasmine.createSpy('click') } } as any;
      spyOn(component, 'getAllposts');
      spyOn(component, 'closeCategoryModal');

      component.onChange(1);
      tick(100);

      expect(component.selectIndex).toBe(1);
      expect(component.selectthread).toBe(1);
      // Get the expected label from component's threadlist to match exact character encoding
      const expectedLabel = component.threadlist.find(t => t.value === 1)?.label;
      expect(component.buttonText).toBe(expectedLabel);
      expect(component.getAllposts).toHaveBeenCalledWith(1);
      expect(component.closeCategoryModal).toHaveBeenCalled();
    }));

    it('should set default buttonText when thread not found', fakeAsync(() => {
      component.closeCategory = { nativeElement: { click: jasmine.createSpy('click') } } as any;
      component.onChange(99);
      tick(100);

      expect(component.buttonText).toBe('All threads');
    }));
  });

  describe('share()', () => {
    it('should share with urlT when available', fakeAsync(() => {
      component.urlT = 'url-token';
      component.address = '/forum/forum-landing';
      component.share();
      tick();

      expect(component.path).toContain('url-token');
      expect(mockNgNavigatorShareService.share).toHaveBeenCalled();
    }));

    it('should share with token when urlT is not available', fakeAsync(() => {
      component.urlT = null;
      component.token = 'test-token';
      component.address = '/forum/forum-landing';
      component.share();
      tick();

      expect(component.path).toContain('test-token');
      expect(mockNgNavigatorShareService.share).toHaveBeenCalled();
    }));
  });

  describe('onEnterKey()', () => {
    it('should prevent default and call onFocusOutEvent', () => {
      const event = jasmine.createSpyObj('Event', ['preventDefault']);
      spyOn(component, 'onFocusOutEvent');

      component.onEnterKey(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.onFocusOutEvent).toHaveBeenCalled();
    });
  });

  describe('shareLandingPage()', () => {
    it('should share landing page', fakeAsync(() => {
      component.urlT = 'url-token';
      component.address = '/forum/forum-landing';
      component.token = 'test-token';
      component.shareLandingPage();
      tick();

      expect(component.path).toContain('url-token');
      expect(mockNgNavigatorShareService.share).toHaveBeenCalled();
    }));
  });

  describe('clearSearch()', () => {
    it('should clear search and get all posts', () => {
      component.searchInput = 'test';
      spyOn(component, 'getAllposts');

      component.clearSearch();

      expect(component.searchInput).toBe('');
      expect(component.getAllposts).toHaveBeenCalledWith(0);
    });
  });

  describe('getOrderbyLatestPost()', () => {
    it('should sort children by PostID descending', () => {
      const childs = [
        { PostID: '1' },
        { PostID: '3' },
        { PostID: '2' }
      ];

      const result = component.getOrderbyLatestPost(childs);

      expect(result[0].PostID).toBe('3');
      expect(result[1].PostID).toBe('2');
      expect(result[2].PostID).toBe('1');
    });
  });

  describe('goBack()', () => {
    it('should navigate using navigationService when url is available', () => {
      mockNavigationService.goBack.and.returnValue('/previous-page');
      component.goBack();

      expect(mockNavigationService.goBack).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/previous-page']);
    });

    it('should use location.back when navigationService returns null', () => {
      mockNavigationService.goBack.and.returnValue(null);
      component.goBack();

      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('getclcickevent()', () => {
    it('should open signup login modal when event is enablepopup', () => {
      spyOn(component, 'openSignuploginModal');
      component.getclcickevent('enablepopup');
      expect(component.openSignuploginModal).toHaveBeenCalled();
    });
  });

  describe('loginpage()', () => {
    it('should close popup and navigate to login', () => {
      component.closepopup = { nativeElement: { click: jasmine.createSpy('click') } } as any;
      component.loginpage();

      expect(component.closepopup.nativeElement.click).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('getAlertcloseEvent()', () => {
    it('should close alert on cancel', () => {
      component.enableAlert = true;
      component.isFreeTrialEnable = true;
      component.getAlertcloseEvent('cancel');

      expect(component.enableAlert).toBe(false);
      expect(component.isFreeTrialEnable).toBe(false);
    });

    it('should close alert and navigate to login on ok', () => {
      component.enableAlert = true;
      spyOn(component, 'loginpage');
      component.getAlertcloseEvent('ok');

      expect(component.enableAlert).toBe(false);
      expect(component.loginpage).toHaveBeenCalled();
    });
  });

  describe('closeCategoryModal()', () => {
    it('should click closeCategory element', () => {
      component.closeCategory = { nativeElement: { click: jasmine.createSpy('click') } } as any;
      component.closeCategoryModal();

      expect(component.closeCategory.nativeElement.click).toHaveBeenCalled();
    });
  });

  describe('startNewThread()', () => {
    it('should navigate to start new thread when subscribed', () => {
      component.isSubscribe = true;
      component.startNewThread(1);

      expect(localStorage.setItem).toHaveBeenCalledWith('tagId', jasmine.any(Number));
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should log click_AskExpert when tagId is 5', () => {
      component.isSubscribe = true;
      component.startNewThread(5);

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_AskExpert');
    });

    it('should log click_NewThread when tagId is not 5', () => {
      component.isSubscribe = true;
      component.startNewThread(1);

      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_NewThread');
    });

    it('should enable alert when not subscribed or not logged in', () => {
      component.isSubscribe = false;
      component.isLoggedIn = false;
      component.enableAlert = false;
      component.isFreeTrialEnable = false;

      component.startNewThread(1);

      expect(component.enableAlert).toBe(true);
      expect(component.isFreeTrialEnable).toBe(true);
    });
  });

  describe('onScroll()', () => {
    it('should load more records when scrolled to bottom', () => {
      component.searchInput = '';
      component.buttonText = 'All threads';
      component.startRecord = 1;
      component.endRecord = 20;
      component.isLoading = false;
      spyOn(component, 'getLazyLoadedRecords');
      spyOn(component as any, 'isScrolledToBottom').and.returnValue(true);

      component.onScroll({} as Event);

      expect(component.isLoading).toBe(true);
      expect(component.startRecord).toBe(21);
      expect(component.endRecord).toBe(41);
      expect(component.getLazyLoadedRecords).toHaveBeenCalled();
    });

    it('should not load when searchInput has value', () => {
      component.searchInput = 'test';
      component.buttonText = 'All threads';
      spyOn(component, 'getLazyLoadedRecords');

      component.onScroll({} as Event);

      expect(component.getLazyLoadedRecords).not.toHaveBeenCalled();
    });

    it('should not load when buttonText is not "All threads"', () => {
      component.searchInput = '';
      component.buttonText = 'My threads';
      spyOn(component, 'getLazyLoadedRecords');

      component.onScroll({} as Event);

      expect(component.getLazyLoadedRecords).not.toHaveBeenCalled();
    });
  });

  describe('onDocumentClick()', () => {
    it('should close dropdown when clicking outside', () => {
      component.openDropdownIndex = 1;
      const target = document.createElement('div');
      const event = { target } as any;

      component.onDocumentClick(event);

      expect(component.openDropdownIndex).toBe(null);
    });

    it('should not close dropdown when clicking inside', () => {
      component.openDropdownIndex = 1;
      const dropdown = document.createElement('div');
      dropdown.className = 'dropdown';
      const target = document.createElement('div');
      dropdown.appendChild(target);
      const event = { target } as any;
      
      spyOn(target, 'closest').and.returnValue(dropdown);

      component.onDocumentClick(event);

      expect(component.openDropdownIndex).toBe(1);
    });
  });

  describe('Edit Post Methods', () => {
    describe('openEditPostModal()', () => {
      it('should open edit post modal', () => {
        const item = { PostID: '123', POST: 'Test Post', TagIds: '1' };
        const event = {} as Event;

        component.openEditPostModal(item, 0, event);

        expect(component.editingItem).toBe(item);
        expect(component.editingPostIndex).toBe(0);
        expect(component.editingPostText).toBe('Test Post');
        expect(mockModalService.openModal).toHaveBeenCalledWith('edit_post', event);
      });
    });

    describe('closeEditPostModal()', () => {
      it('should close modal and reset editing properties', () => {
        component.editingItem = { PostID: '123' };
        component.editingPostIndex = 0;
        component.editingPostText = 'Test';

        component.closeEditPostModal();

        expect(mockModalService.closeModal).toHaveBeenCalledWith('edit_post');
        expect(component.editingItem).toBe(null);
        expect(component.editingPostIndex).toBe(null);
        expect(component.editingPostText).toBe('');
      });
    });

    describe('saveEditedPost()', () => {
      it('should update post when editingItem exists', fakeAsync(() => {
        component.editingItem = { PostID: '123', UserId: '107', TagIds: '1' };
        component.editingPostIndex = 0;
        component.editingPostText = 'Updated Post';
        component.posts = [{ PostID: '123', POST: 'Old Post', isEditPost: true }];

        component.saveEditedPost();
        tick();

        expect(mockForumService.UpdatePost).toHaveBeenCalled();
        expect(component.posts[0].POST).toBe('Updated Post');
        expect(component.posts[0].isEditPost).toBe(false);
      }));

      it('should not update when editingItem is null', () => {
        component.editingItem = null;
        component.saveEditedPost();

        expect(mockForumService.UpdatePost).not.toHaveBeenCalled();
      });
    });

    describe('editPost()', () => {
      it('should update post', fakeAsync(() => {
        const modelData = { PostID: '123', POST: 'Test', UserId: '107', TagIds: '1' };
        component.posts = [{ ...modelData, isEditPost: true }];

        component.editPost(modelData, 0);
        tick();

        expect(mockForumService.UpdatePost).toHaveBeenCalled();
        expect(component.posts[0].Post).toBe('Test');
        expect(component.posts[0].isEditPost).toBe(false);
      }));
    });

    describe('callEditPost()', () => {
      it('should call openEditPostModal', () => {
        const item = { PostID: '123' };
        spyOn(component, 'openEditPostModal');

        component.callEditPost(item, 0);

        expect(component.openEditPostModal).toHaveBeenCalledWith(item, 0);
      });
    });

    describe('onEditClick()', () => {
      it('should open edit modal and close dropdown', () => {
        const event = jasmine.createSpyObj('Event', ['stopPropagation', 'preventDefault']);
        const item = { PostID: '123' };
        component.openDropdownIndex = 1;
        spyOn(component, 'openEditPostModal');

        component.onEditClick(event, item, 0);

        expect(event.stopPropagation).toHaveBeenCalled();
        expect(event.preventDefault).toHaveBeenCalled();
        expect(component.openEditPostModal).toHaveBeenCalledWith(item, 0, event);
        expect(component.openDropdownIndex).toBe(null);
      });
    });

    describe('onDeleteClick()', () => {
      it('should call DeletePost', () => {
        const event = jasmine.createSpyObj('Event', ['stopPropagation', 'preventDefault']);
        const item = { PostID: '123' };
        spyOn(component, 'DeletePost');

        component.onDeleteClick(event, item);

        expect(event.stopPropagation).toHaveBeenCalled();
        expect(event.preventDefault).toHaveBeenCalled();
        expect(component.DeletePost).toHaveBeenCalledWith(item);
      });
    });

    describe('toggleDropdown()', () => {
      it('should toggle dropdown index', () => {
        component.openDropdownIndex = null;
        component.toggleDropdown(1);
        expect(component.openDropdownIndex).toBe(1);

        component.toggleDropdown(1);
        expect(component.openDropdownIndex).toBe(null);
      });

      it('should stop event propagation when event is provided', () => {
        const event = jasmine.createSpyObj('Event', ['stopPropagation', 'preventDefault']);
        component.toggleDropdown(1, event);

        expect(event.stopPropagation).toHaveBeenCalled();
        expect(event.preventDefault).toHaveBeenCalled();
      });
    });
  });

  describe('Modal Service Methods', () => {
    it('should open signup login modal', () => {
      const event = {} as Event;
      component.openSignuploginModal(event);
      expect(mockModalService.openModal).toHaveBeenCalledWith('signuplogin', event);
    });

    it('should close signup login modal', () => {
      component.closeSignuploginModal();
      expect(mockModalService.closeModal).toHaveBeenCalledWith('signuplogin');
    });

    it('should open choose category modal', () => {
      component.openChooseCategoryModal();
      expect(mockModalService.openModal).toHaveBeenCalledWith('choose_category', undefined);
    });

    it('should close choose category modal', () => {
      component.closeChooseCategoryModal();
      expect(mockModalService.closeModal).toHaveBeenCalledWith('choose_category');
    });

    it('should open posted successfully modal', () => {
      component.openPostedSuccessfullyModal();
      expect(mockModalService.openModal).toHaveBeenCalledWith('posted_successfully', undefined);
    });

    it('should close posted successfully modal', () => {
      component.closePostedSuccessfullyModal();
      expect(mockModalService.closeModal).toHaveBeenCalledWith('posted_successfully');
    });
  });

  describe('getTagClass()', () => {
    it('should return correct class for various tags', () => {
      expect(component.getTagClass('manage your mental health')).toBe('tag-mental-health');
      expect(component.getTagClass('relationships')).toBe('tag-relationships');
      expect(component.getTagClass('work & leadership')).toBe('tag-work-leadership');
      expect(component.getTagClass('be happier')).toBe('tag-be-happier');
      expect(component.getTagClass('habits & addiction')).toBe('tag-habits-addiction');
      expect(component.getTagClass('deal with loss')).toBe('tag-dealing-loss');
      expect(component.getTagClass('meditation')).toBe('tag-meditation');
      expect(component.getTagClass('manage your emotions')).toBe('tag-managing-emotions');
      expect(component.getTagClass('nuggets of inspiration')).toBe('tag-nuggets-inspiration');
      expect(component.getTagClass('ask our expert coaches')).toBe('tag-ask-coach');
      expect(component.getTagClass('other')).toBe('tag-other');
    });

    it('should return empty string for unknown tag', () => {
      expect(component.getTagClass('unknown tag')).toBe('');
    });

    it('should handle empty string', () => {
      expect(component.getTagClass('')).toBe('');
    });
  });
});

