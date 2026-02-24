import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewStoriesPage } from './view-stories.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OnboardingService } from '../../services/onboarding.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ViewStoriesPage', () => {
  let component: ViewStoriesPage;
  let fixture: ComponentFixture<ViewStoriesPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockActivatedRoute: { queryParams: any };
  let originalProgramId: PropertyDescriptor | undefined;

  const mockStoryList = [
    {
      ScenarioID: 100,
      Title: 'Test Story',
      Img: 'https://example.com/img.jpg',
      Story: 'Story content',
      Msg: 'Explore more',
      ModIds: '7,27',
      ProgIDs: [9]
    }
  ];

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    (mockRouter as any).url = '/adults/wisdom-stories';

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['getScenarioswithId', 'clickModule']);
    mockOnboardingService.getScenarioswithId.and.returnValue(of(mockStoryList));
    mockOnboardingService.clickModule.and.returnValue(of({ ListOfReflection: [] }));

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockActivatedRoute = { queryParams: of({ sId: 100 }) };

    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('saveUsername', JSON.stringify('user'));
    localStorage.setItem('shareToken', 'token123');
    sessionStorage.setItem('userId', JSON.stringify(50));

    TestBed.configureTestingModule({
      declarations: [ViewStoriesPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    });

    fixture = TestBed.createComponent(ViewStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

    it('should set sId from route queryParams', () => {
      expect(component.sId).toBe(100);
    });

    it('should set isAdults from SharedService.ProgramId', () => {
      expect(component.isAdults).toBe(true);
    });
  });

  describe('ngOnInit', () => {
    it('should set userId from sessionStorage and call getStories', () => {
      expect(component.userId).toBe(50);
      expect(mockOnboardingService.getScenarioswithId).toHaveBeenCalledWith(100);
    });

    it('should set story and links after getStories completes', () => {
      expect(component.storyList).toEqual(mockStoryList);
      expect(component.story).toBeDefined();
      expect(component.story.ScenarioID).toBe(100);
      expect(component.story.Title).toBe('Test Story');
      expect(component.links.length).toBeGreaterThan(0);
    });
  });

  describe('goBack', () => {
    it('should call location.back when navigateToBackLink returns null', () => {
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });

    it('should navigate to url when navigateToBackLink returns a path', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/toc');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/toc']);
    });
  });

  describe('defaultGoBack', () => {
    it('should call location.back', () => {
      component.defaultGoBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('routeToUrl', () => {
    it('when Adults and story.ProgIDs includes ProgramId should navigate to url', () => {
      component.story = { ProgIDs: [9], ScenarioID: 100 };
      component.routeToUrl('/adults/comparison', component.story);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/comparison']);
    });

    it('when Adults and story.ProgIDs does not include ProgramId should navigate to adults wisdom-stories', () => {
      component.story = { ProgIDs: [8], ScenarioID: 100 };
      component.routeToUrl('/adults/comparison', component.story);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-stories']);
    });

    it('when Teenagers should replace adults with teenagers and navigate', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(ViewStoriesPage);
      component = fixture.componentInstance;
      component.story = { ProgIDs: [10], ScenarioID: 100 };
      component.routeToUrl('/adults/comparison', component.story);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/comparison']);
    });
  });

  describe('addToken', () => {
    it('should call share and set socialShare true', () => {
      component.sId = 100;
      component.addToken();
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockNgNavigatorShareService.share).toHaveBeenCalled();
      expect(component.socialShare).toBe(true);
    });
  });

  describe('loadReflections', () => {
    it('should call clickModule, set qrList, call routeToUrl and set localStorage', () => {
      const story = { ProgIDs: [9], ScenarioID: 100 };
      const qrRes = { ListOfReflection: [{ Id: 1 }] };
      mockOnboardingService.clickModule.and.returnValue(of(qrRes));
      component.userId = 50;
      component.loadReflections(7, '/adults/comparison', story);
      expect(mockOnboardingService.clickModule).toHaveBeenCalledWith(7, 50);
      expect(component.qrList).toEqual(qrRes);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/comparison']);
      expect(localStorage.getItem('qrList')).toBe(JSON.stringify(qrRes));
    });
  });

  describe('assignLinks', () => {
    it('should map module 7 to Comparison link', () => {
      component.modules = [7];
      component.assignLinks();
      expect(component.links).toContain(jasmine.objectContaining({ id: 7, module: 'Comparison & Envy', route: '/adults/comparison' }));
    });

    it('should map module 27 to Discovering Wisdom link', () => {
      component.modules = [27];
      component.assignLinks();
      expect(component.links).toContain(jasmine.objectContaining({ id: 27, module: 'Discovering Wisdom', route: '/adults/discovering-wisdom' }));
    });
  });
});
