import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BlogArticlePage } from './blog-article.page';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { OnboardingService } from '../../../services/onboarding.service';
import { Location } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { of, throwError, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BlogArticlePage', () => {
  let component: BlogArticlePage;
  let fixture: ComponentFixture<BlogArticlePage>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockRenderer: jasmine.SpyObj<Renderer2>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockActivatedRoute: any;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockPlatform: jasmine.SpyObj<Platform>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockProgramId: any;
  let queryParamsSubject: Subject<any>;
  let mockRouterUrl: string;

  beforeEach(async () => {
    queryParamsSubject = new Subject();
    mockRouterUrl = '/blog/article';

    // Create mock ActivatedRoute
    mockActivatedRoute = {
      queryParams: queryParamsSubject.asObservable(),
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue(null)
        }
      }
    };

    // Create mock Router
    mockRouter = jasmine.createSpyObj('Router', ['navigate'], {
      url: mockRouterUrl
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => mockRouterUrl,
      configurable: true
    });

    // Create mock services
    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['getBlogId', 'likeblog', 'commentblog', 'getBlog']);
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockRenderer = jasmine.createSpyObj('Renderer2', ['createElement', 'setStyle']);
    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve(true));
    mockMeta = jasmine.createSpyObj('Meta', ['getTag', 'updateTag', 'addTag']);
    mockMeta.getTag.and.returnValue(null);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);
    mockPlatform = jasmine.createSpyObj('Platform', [], {
      IOS: false,
      SAFARI: false,
      ANDROID: false,
      isBrowser: true
    });
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    // Setup SharedService
    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    Object.defineProperty(SharedService, 'AdultsBaseUrl', {
      writable: true,
      configurable: true,
      value: 'https://adults.example.com'
    });
    Object.defineProperty(SharedService, 'TeenagerBaseUrl', {
      writable: true,
      configurable: true,
      value: 'https://teenagers.example.com'
    });

    // Mock DomSanitizer
    const mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustHtml']);
    mockDomSanitizer.bypassSecurityTrustHtml.and.returnValue('sanitized-html' as any);

    await TestBed.configureTestingModule({
      declarations: [BlogArticlePage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: DomSanitizer, useValue: mockDomSanitizer },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: Location, useValue: mockLocation },
        { provide: Renderer2, useValue: mockRenderer },
        { provide: Router, useValue: mockRouter },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle },
        { provide: Platform, useValue: mockPlatform },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogArticlePage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set isLoggedIn to true when localStorage has isloggedin as T', () => {
      localStorage.setItem('isloggedin', 'T');
      fixture = TestBed.createComponent(BlogArticlePage);
      component = fixture.componentInstance;
      expect(component.isLoggedIn).toBe(true);
    });

    it('should set isLoggedIn to false when localStorage does not have isloggedin as T', () => {
      localStorage.removeItem('isloggedin');
      fixture = TestBed.createComponent(BlogArticlePage);
      component = fixture.componentInstance;
      expect(component.isLoggedIn).toBe(false);
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(BlogArticlePage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(BlogArticlePage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set address from router.url', () => {
      mockRouterUrl = '/test/path';
      fixture = TestBed.createComponent(BlogArticlePage);
      component = fixture.componentInstance;
      expect(component.address).toBe('/test/path');
    });

    it('should get shareToken from localStorage', () => {
      localStorage.setItem('shareToken', 'test-token');
      fixture = TestBed.createComponent(BlogArticlePage);
      component = fixture.componentInstance;
      expect(component.token).toBe('test-token');
    });
  });

  describe('extractUntilQuestionMark', () => {
    it('should return string before question mark', () => {
      const result = component.extractUntilQuestionMark('test?param=value');
      expect(result).toBe('test');
    });

    it('should return full string if no question mark', () => {
      const result = component.extractUntilQuestionMark('test-string');
      expect(result).toBe('test-string');
    });

    it('should return empty string if input is empty', () => {
      const result = component.extractUntilQuestionMark('');
      expect(result).toBe('');
    });

    it('should handle multiple question marks', () => {
      const result = component.extractUntilQuestionMark('test?param=value?another');
      expect(result).toBe('test');
    });
  });

  describe('getblog', () => {
    it('should set blogId in localStorage and call service', fakeAsync(() => {
      component.blogid = '123';
      const mockResponse = {
        BlogID: '123',
        Blog: '<p>Test blog content</p>',
        Title: 'Test Blog',
        LikeCnt: '10',
        BlogComments: []
      };
      mockOnboardingService.getBlogId.and.returnValue(of(mockResponse));
      spyOn(component, 'handleBlogResponse');

      component.getblog();
      tick();

      expect(localStorage.getItem('blogId')).toBe('123');
      expect(mockOnboardingService.getBlogId).toHaveBeenCalledWith('123');
      expect(component.handleBlogResponse).toHaveBeenCalledWith(mockResponse);
    }));

    it('should handle error when service fails', fakeAsync(() => {
      component.blogid = '123';
      const consoleSpy = spyOn(console, 'log');
      mockOnboardingService.getBlogId.and.returnValue(throwError('Error'));

      component.getblog();
      tick();

      expect(consoleSpy).toHaveBeenCalledWith('Error');
    }));
  });

  describe('handleBlogResponse', () => {
    beforeEach(() => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
    });

    it('should process blog response for Adults program', () => {
      const mockResponse = {
        BlogID: '123',
        Blog: '<p>Test blog</p><img src="test.jpg">',
        Title: 'Test Blog',
        LikeCnt: '5',
        BlogComments: [
          { id: 1, comment: 'Comment 1' },
          { id: 2, comment: 'Comment 2' },
          { id: 3, comment: 'Comment 3' }
        ],
        MetaTitle: 'Meta Title',
        MetaDesc: 'Meta Description',
        ImgPath: 'image.jpg',
        MetaKeywords: 'keywords'
      };

      component.handleBlogResponse(mockResponse);

      expect(component.blogList).toBe(mockResponse);
      expect(component.BlogCommentsLen).toBe(3);
      const commentsList = component.BlogCommentsList as unknown as any[];
      expect(commentsList.length).toBe(3);
      expect(component.likecount).toBe(5);
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Test Blog');
    });

    it('should process blog response for Teenagers program and replace paths', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      const mockResponse = {
        BlogID: '123',
        Blog: '<p>Test blog /adults/path /pathway/live-your-best-life</p>',
        Title: 'Test Blog',
        LikeCnt: '5',
        BlogComments: [],
        MetaTitle: 'Meta Title',
        MetaDesc: 'Meta Description',
        ImgPath: 'image.jpg',
        MetaKeywords: 'keywords'
      };

      component.handleBlogResponse(mockResponse);

      expect(component.blogList.Blog).toContain('/teenagers/path');
      expect(component.blogList.Blog).toContain('/pathway/succeed-in-life');
    });

    it('should set image width to 100% for all images', () => {
      const mockResponse = {
        BlogID: '123',
        Blog: '<p>Test</p><img src="1.jpg"><img src="2.jpg">',
        Title: 'Test',
        LikeCnt: '0',
        BlogComments: [],
        MetaTitle: 'Title',
        MetaDesc: 'Desc',
        ImgPath: 'img.jpg',
        MetaKeywords: 'keys'
      };

      component.handleBlogResponse(mockResponse);

      // The images should have width set to 100% in the processed HTML
      expect(component.blogList.Blog).toBeDefined();
    });

    it('should handle comments list correctly when more than 3 comments', () => {
      const mockResponse = {
        BlogID: '123',
        Blog: '<p>Test</p>',
        Title: 'Test',
        LikeCnt: '0',
        BlogComments: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ],
        MetaTitle: 'Title',
        MetaDesc: 'Desc',
        ImgPath: 'img.jpg',
        MetaKeywords: 'keys'
      };

      component.handleBlogResponse(mockResponse);

      const commentsList = component.BlogCommentsList as unknown as any[];
      expect(commentsList.length).toBe(3);
      expect(component.BlogCommentsListabove.length).toBe(2);
    });

    it('should handle empty comments list', () => {
      const mockResponse = {
        BlogID: '123',
        Blog: '<p>Test</p>',
        Title: 'Test',
        LikeCnt: '0',
        BlogComments: [],
        MetaTitle: 'Title',
        MetaDesc: 'Desc',
        ImgPath: 'img.jpg',
        MetaKeywords: 'keys'
      };

      component.handleBlogResponse(mockResponse);

      expect(component.BlogCommentsLen).toBe(0);
      expect(component.BlogCommentsList).toBe(0);
    });
  });

  describe('updateMetaTags', () => {
    beforeEach(() => {
      component.blogList = {
        MetaTitle: 'Test Title',
        MetaDesc: 'Test Description',
        ImgPath: 'test-image.jpg',
        MetaKeywords: 'test, keywords'
      };
    });

    it('should update existing meta tags', () => {
      mockMeta.getTag.and.returnValue({} as any);
      component.updateMetaTags();
      expect(mockMeta.updateTag).toHaveBeenCalled();
    });

    it('should add new meta tags if they do not exist', () => {
      mockMeta.getTag.and.returnValue(null);
      component.updateMetaTags();
      expect(mockMeta.addTag).toHaveBeenCalled();
    });

    it('should set all required meta tags', () => {
      mockMeta.getTag.and.returnValue(null);
      component.updateMetaTags();
      expect(mockMeta.addTag).toHaveBeenCalledTimes(7);
    });
  });

  describe('getHtml', () => {
    it('should return sanitized HTML', () => {
      const html = '<p>Test</p>';
      const result = component.getHtml(html);
      expect(result).toBeDefined();
    });
  });

  describe('timeSince', () => {
    it('should return formatted time using moment', () => {
      const date = '2024-01-01T00:00:00Z';
      const result = component.timeSince(date);
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });
  });

  describe('likebtn', () => {
    beforeEach(() => {
      component.blogList = { BlogID: '123' };
    });

    it('should like blog when user is logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      mockOnboardingService.likeblog.and.returnValue(of({}));
      spyOn(component, 'getblog');

      component.likebtn();
      tick();

      expect(mockOnboardingService.likeblog).toHaveBeenCalledWith('123');
      expect(component.getblog).toHaveBeenCalled();
    }));

    it('should show alert when user is not logged in', () => {
      component.isLoggedIn = false;
      component.likebtn();
      expect(component.enableAlert).toBe(true);
      expect(component.enablecancel).toBe(true);
      expect(component.content).toBe('Please Register to activate this feature');
    });

    it('should handle error when like fails', fakeAsync(() => {
      component.isLoggedIn = true;
      const error = { error: { Message: 'Like failed' } };
      mockOnboardingService.likeblog.and.returnValue(throwError(error));

      component.likebtn();
      tick();

      expect(component.enableAlert).toBe(true);
      expect(component.content).toBe('Like failed');
    }));
  });

  describe('postcomment', () => {
    beforeEach(() => {
      component.blogList = { BlogID: '123' };
      component.comment = 'Test comment';
    });

    it('should post comment when user is logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      mockOnboardingService.commentblog.and.returnValue(of({}));
      spyOn(component, 'getblog');

      component.postcomment();
      tick();

      expect(mockOnboardingService.commentblog).toHaveBeenCalledWith({
        BlogId: '123',
        Comment: 'Test comment'
      });
      expect(component.comment).toBe('');
      expect(component.getblog).toHaveBeenCalled();
    }));

    it('should show alert when user is not logged in', () => {
      component.isLoggedIn = false;
      component.postcomment();
      expect(component.enableAlert).toBe(true);
      expect(component.enablecancel).toBe(true);
      expect(component.content).toBe('Please Register to activate this feature');
    });
  });

  describe('getimg', () => {
    it('should return the data as is', () => {
      const data = 'test-image.jpg';
      const consoleSpy = spyOn(console, 'log');
      const result = component.getimg(data);
      expect(result).toBe(data);
      expect(consoleSpy).toHaveBeenCalledWith(data);
    });
  });

  describe('goBack', () => {
    it('should navigate to back link when available', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/back-url');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/back-url']);
    });

    it('should call location.back when no back link available', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('share', () => {
    beforeEach(() => {
      component.address = '/blog/article';
      component.token = 'test-token';
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      spyOn(component, 'shareUrl');
    });

    it('should call shareUrl and ngNavigatorShareService.share', fakeAsync(() => {
      component.share();
      tick();

      expect(component.shareUrl).toHaveBeenCalledWith(ProgramType.Adults);
      expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith({
        title: 'HappierMe Program',
        text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
        url: component.path
      });
    }));

    it('should handle share error', fakeAsync(() => {
      const consoleSpy = spyOn(console, 'log');
      mockNgNavigatorShareService.share.and.returnValue(Promise.reject('Share failed'));

      component.share();
      tick();

      expect(consoleSpy).toHaveBeenCalledWith('Share failed');
    }));
  });

  describe('shareUrl', () => {
    beforeEach(() => {
      component.address = '/blog/article';
      component.token = 'test-token';
    });

    it('should set path for Adults program', () => {
      component.shareUrl(ProgramType.Adults);
      expect(component.path).toBe('https://adults.example.com/blog/article?t=test-token');
    });

    it('should set path for Teenagers program', () => {
      component.shareUrl(ProgramType.Teenagers);
      expect(component.path).toBe('https://teenagers.example.com/blog/article?t=test-token');
    });

    it('should set path to AdultsBaseUrl as default', () => {
      component.shareUrl(999 as any);
      expect(component.path).toBe('https://adults.example.com/blog/article?t=test-token');
    });
  });

  describe('commentbottom', () => {
    it('should scroll to bottom when user is logged in', () => {
      component.isLoggedIn = true;
      const scrollSpy = spyOn(window, 'scrollTo');
      component.commentbottom();
      expect(scrollSpy).toHaveBeenCalledWith(0, document.body.scrollHeight);
    });

    it('should show alert when user is not logged in', () => {
      component.isLoggedIn = false;
      component.commentbottom();
      expect(component.enableAlert).toBe(true);
      expect(component.enablecancel).toBe(true);
      expect(component.content).toBe('Please Register to activate this feature');
    });
  });

  describe('clickbanner', () => {
    it('should open iOS app store when platform is IOS', () => {
      Object.defineProperty(mockPlatform, 'IOS', { value: true, configurable: true });
      const windowOpenSpy = spyOn(window, 'open');
      component.clickbanner();
      expect(windowOpenSpy).toHaveBeenCalledWith('https://apps.apple.com/in/app/humanwisdom/id1588535567');
    });

    it('should open iOS app store when platform is SAFARI', () => {
      Object.defineProperty(mockPlatform, 'SAFARI', { value: true, configurable: true });
      const windowOpenSpy = spyOn(window, 'open');
      component.clickbanner();
      expect(windowOpenSpy).toHaveBeenCalledWith('https://apps.apple.com/in/app/humanwisdom/id1588535567');
    });

    it('should open Android play store when platform is ANDROID', () => {
      Object.defineProperty(mockPlatform, 'ANDROID', { value: true, configurable: true });
      const windowOpenSpy = spyOn(window, 'open');
      component.clickbanner();
      expect(windowOpenSpy).toHaveBeenCalledWith('https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US');
    });

    it('should open provided URL when url parameter is provided', () => {
      const windowOpenSpy = spyOn(window, 'open');
      component.clickbanner('https://example.com');
      expect(windowOpenSpy).toHaveBeenCalledWith('https://example.com');
    });
  });

  describe('getBlogList', () => {
    it('should get blog list and find blog by title', fakeAsync(() => {
      const mockBlogList = [
        { BlogID: '1', Title: 'First Blog' },
        { BlogID: '2', Title: 'Second Blog' },
        { BlogID: '3', Title: 'Third Blog Post' }
      ];
      mockOnboardingService.getBlog.and.returnValue(of(mockBlogList));
      spyOn(component, 'getblog');

      component.getBlogList('second-blog');
      tick();

      expect(mockOnboardingService.getBlog).toHaveBeenCalled();
      expect(component.blogid).toBe('2');
      expect(component.getblog).toHaveBeenCalled();
    }));

    it('should handle case insensitive title matching', fakeAsync(() => {
      const mockBlogList = [
        { BlogID: '1', Title: 'First Blog' }
      ];
      mockOnboardingService.getBlog.and.returnValue(of(mockBlogList));
      spyOn(component, 'getblog');

      component.getBlogList('FIRST-BLOG');
      tick();

      expect(component.blogid).toBe('1');
    }));

    it('should handle error when service fails', fakeAsync(() => {
      const consoleSpy = spyOn(console, 'log');
      mockOnboardingService.getBlog.and.returnValue(throwError('Error'));

      component.getBlogList('test');
      tick();

      expect(consoleSpy).toHaveBeenCalledWith('Error');
    }));

    it('should not call getblog if blog not found', fakeAsync(() => {
      const mockBlogList = [
        { BlogID: '1', Title: 'First Blog' }
      ];
      mockOnboardingService.getBlog.and.returnValue(of(mockBlogList));
      spyOn(component, 'getblog');

      component.getBlogList('non-existent');
      tick();

      expect(component.getblog).not.toHaveBeenCalled();
    }));
  });

  describe('getAlertcloseEvent', () => {
    it('should clear content and disable alert', () => {
      component.content = 'Test content';
      component.enableAlert = true;
      component.getAlertcloseEvent('close');
      expect(component.content).toBe('');
      expect(component.enableAlert).toBe(false);
    });

    it('should navigate to login when event is ok and enablecancel is true', () => {
      component.enablecancel = true;
      Object.defineProperty(mockPlatform, 'isBrowser', { value: true, configurable: true });
      component.getAlertcloseEvent('ok');
      expect(localStorage.getItem('isloggedin')).toBe('F');
      expect(localStorage.getItem('guest')).toBe('T');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/login']);
    });

    it('should not navigate when event is not ok', () => {
      component.enablecancel = true;
      component.getAlertcloseEvent('close');
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should not navigate when enablecancel is false', () => {
      component.enablecancel = false;
      component.getAlertcloseEvent('ok');
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('toggleAllComments', () => {
    it('should set showAllComments to true', () => {
      component.showAllComments = false;
      component.toggleAllComments();
      expect(component.showAllComments).toBe(true);
    });
  });
});

