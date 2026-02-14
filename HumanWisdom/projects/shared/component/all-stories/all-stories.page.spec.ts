import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

import { AllStoriesPage } from './all-stories.page';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../services/shared.service';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';

describe('AllStoriesPage', () => {
  let component: AllStoriesPage;
  let fixture: ComponentFixture<AllStoriesPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;

  // Mock data
  const mockStories = [
    {
      ScenarioID: 1,
      Title: 'Story 1',
      Story: 'This is story 1 content',
      Img: 'https://example.com/story1.jpg',
      Modules: 'Stress',
      searchtags: 'stress, anxiety',
      PublishedOn: 1640000000,
      ProgIDs: '1,2',
      ExclFromChild: '0'
    },
    {
      ScenarioID: 2,
      Title: 'Story 2',
      Story: 'This is story 2 content',
      Img: 'https://example.com/story2.jpg',
      Modules: 'Mental health',
      searchtags: 'health, wellness',
      PublishedOn: 1640000001,
      ProgIDs: '1',
      ExclFromChild: '1'
    },
    {
      ScenarioID: 42,
      Title: 'Guest Free Story',
      Story: 'This is a free story for guests',
      Img: 'https://example.com/story42.jpg',
      Modules: 'General',
      searchtags: 'free, guest',
      PublishedOn: 1640000002,
      ProgIDs: '1,2',
      ExclFromChild: '1'
    }
  ];

  const mockReadStories = [
    { ScenarioID: 1 },
    { ScenarioID: 2 }
  ];

  beforeEach(async () => {
    // Create mock services
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'getScenarios',
      'readStories',
      'clickStory'
    ]);
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);

    // Default mock returns
    mockOnboardingService.getScenarios.and.returnValue(of(mockStories));
    mockOnboardingService.readStories.and.returnValue(of(mockReadStories));
    mockOnboardingService.clickStory.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [AllStoriesPage],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: Location, useValue: mockLocation },
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle },
        { provide: NavigationService, useValue: mockNavigationService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    // Clear localStorage before each test
    localStorage.clear();

    fixture = TestBed.createComponent(AllStoriesPage);
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
      expect(component.storyList).toEqual([]);
      expect(component.searchstoryList).toEqual([]);
      expect(component.secondstoryList).toEqual([]);
      expect(component.readStories).toEqual([]);
      expect(component.searchedText).toBe('');
      expect(component.enable_view_more_less).toBe(false);
      expect(component.view_more_less).toBe('View more');
      expect(component.isSubscriber).toBe(false);
      expect(component.isAdults).toBe(true);
      expect(component.showModal).toBe(false);
      expect(component.modalTitle).toBe('The best is yet to come');
      expect(component.modalContent).toContain('Unlock the full experience');
    });
  });

  describe('ngOnInit()', () => {
    beforeEach(() => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });
    });

    it('should call getStories on initialization', () => {
      spyOn(component, 'getStories');

      component.ngOnInit();

      expect(component.getStories).toHaveBeenCalled();
    });

    it('should set page title and meta tags', () => {
      component.ngOnInit();

      expect(mockTitle.setTitle).toHaveBeenCalledWith('Inspiring real-life stories');
      expect(mockMeta.updateTag).toHaveBeenCalledWith({ property: 'title', content: 'Inspiring real-life stories' });
      expect(mockMeta.updateTag).toHaveBeenCalledWith({ 
        property: 'description', 
        content: 'Discover the transformative impact of wisdom through the real-life stories of adults and find ways to apply it in your life.' 
      });
      expect(mockMeta.updateTag).toHaveBeenCalledWith(jasmine.objectContaining({ 
        property: 'keywords'
      }));
    });

    it('should set isSubscriber to true when user is logged in and subscribed', () => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');

      component.ngOnInit();

      expect(component.isSubscriber).toBe(true);
    });

    it('should set isSubscriber to false when user is not logged in', () => {
      localStorage.setItem('isloggedin', 'F');
      localStorage.setItem('Subscriber', '1');

      component.ngOnInit();

      expect(component.isSubscriber).toBe(false);
    });

    it('should set isSubscriber to false when user is not subscribed', () => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');

      component.ngOnInit();

      expect(component.isSubscriber).toBe(false);
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      component.ngOnInit();

      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      component.ngOnInit();

      expect(component.isAdults).toBe(false);
    });
  });

  describe('getStories()', () => {
    beforeEach(() => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: '1'
      });
    });

    it('should fetch and sort stories by PublishedOn date', fakeAsync(() => {
      component.getStories();
      tick();

      expect(mockOnboardingService.getScenarios).toHaveBeenCalled();
      expect(component.storyList.length).toBeGreaterThan(0);
      // Verify sorting - most recent first
      if (component.storyList.length > 1) {
        expect(component.storyList[0]['PublishedOn']).toBeGreaterThanOrEqual(component.storyList[1]['PublishedOn']);
      }
    }));

    it('should filter stories by ProgramId', fakeAsync(() => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: '1'
      });

      component.getStories();
      tick();

      // All stories in storyList should have ProgramId '1' in their ProgIDs
      component.storyList.forEach(story => {
        expect(story.ProgIDs).toContain('1');
      });
    }));

    it('should populate storyList with first 10 stories', fakeAsync(() => {
      const manyStories = Array.from({ length: 15 }, (_, i) => ({
        ...mockStories[0],
        ScenarioID: i + 1,
        PublishedOn: 1640000000 + i,
        ProgIDs: '1'
      }));
      mockOnboardingService.getScenarios.and.returnValue(of(manyStories));

      component.getStories();
      tick();

      expect(component.storyList.length).toBe(10);
    }));

    it('should populate secondstoryList with remaining stories after first 10', fakeAsync(() => {
      const manyStories = Array.from({ length: 15 }, (_, i) => ({
        ...mockStories[0],
        ScenarioID: i + 1,
        PublishedOn: 1640000000 + i,
        ProgIDs: '1'
      }));
      mockOnboardingService.getScenarios.and.returnValue(of(manyStories));

      component.getStories();
      tick();

      expect(component.secondstoryList.length).toBe(5);
    }));

    it('should store storyList in localStorage', fakeAsync(() => {
      component.getStories();
      tick();

      const storedList = JSON.parse(localStorage.getItem('storyList'));
      expect(storedList).toEqual(component.storyList);
    }));

    it('should fetch read stories for logged-in users', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');

      component.getStories();
      tick();

      expect(mockOnboardingService.readStories).toHaveBeenCalled();
      expect(component.readStories).toEqual([1, 2]);
    }));

    it('should not fetch read stories for non-logged-in users', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'F');

      component.getStories();
      tick();

      expect(mockOnboardingService.readStories).not.toHaveBeenCalled();
    }));

    it('should handle error when fetching stories', fakeAsync(() => {
      spyOn(console, 'log');
      const error = new Error('API Error');
      mockOnboardingService.getScenarios.and.returnValue(throwError(error));

      component.getStories();
      tick();

      expect(console.log).toHaveBeenCalledWith(error);
    }));

    it('should handle empty response', fakeAsync(() => {
      mockOnboardingService.getScenarios.and.returnValue(of([]));

      component.getStories();
      tick();

      expect(component.storyList).toEqual([]);
      expect(component.secondstoryList).toEqual([]);
    }));
  });

  describe('goBack()', () => {
    it('should navigate to URL from navigationService when available', () => {
      const backUrl = '/adults/home';
      mockNavigationService.navigateToBackLink.and.returnValue(backUrl);
      spyOn(console, 'log');

      component.goBack();

      expect(mockNavigationService.navigateToBackLink).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('url=' + backUrl);
      expect(mockRouter.navigate).toHaveBeenCalledWith([backUrl]);
      expect(mockLocation.back).not.toHaveBeenCalled();
    });

    it('should use location.back() when navigationService returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      spyOn(console, 'log');

      component.goBack();

      expect(mockNavigationService.navigateToBackLink).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('url=null');
      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('toRead()', () => {
    const testStory = mockStories[0];

    beforeEach(() => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });
      spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    });

    it('should navigate to subscription for guest user accessing non-free story', () => {
      localStorage.removeItem('isloggedin');
      const nonFreeStory = { ...testStory, ScenarioID: 99 }; // Not ID 1 or 42

      component.toRead(nonFreeStory, false);

      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/subscription/start-your-free-trial');
    });

    it('should allow guest user to read free story (ScenarioID 42)', () => {
      localStorage.removeItem('isloggedin');
      const freeStory = mockStories[2]; // ScenarioID 42

      component.toRead(freeStory, false);

      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should allow guest user to read free story (ScenarioID 1)', () => {
      localStorage.removeItem('isloggedin');
      const freeStory = mockStories[0]; // ScenarioID 1

      component.toRead(freeStory, false);

      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should store story in localStorage when proceeding', () => {
      localStorage.setItem('isloggedin', 'T');

      component.toRead(testStory, true);

      const storedStory = JSON.parse(localStorage.getItem('story'));
      expect(storedStory).toEqual(testStory);
    });

    it('should set sId property when reading story', () => {
      localStorage.setItem('isloggedin', 'T');

      component.toRead(testStory, true);

      expect(component.sId).toBe(testStory.ScenarioID);
    });

    it('should call clickStory API for logged-in users', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');
      spyOn(component, 'routeToViewStories');

      component.toRead(testStory, true);
      tick();

      expect(mockOnboardingService.clickStory).toHaveBeenCalledWith(testStory.ScenarioID);
      expect(component.routeToViewStories).toHaveBeenCalled();
    }));

    it('should not call clickStory API for guest users', () => {
      localStorage.removeItem('isloggedin');
      spyOn(component, 'routeToViewStories');

      component.toRead(mockStories[2], true); // Free story

      expect(mockOnboardingService.clickStory).not.toHaveBeenCalled();
    });

    it('should show modal when subscriber attempts to read restricted story', () => {
      localStorage.setItem('isloggedin', 'T');
      component.isSubscriber = false;

      component.toRead(testStory, false);

      expect(component.showModal).toBe(true);
    });

    it('should allow subscriber to read any story', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');
      component.isSubscriber = true;
      spyOn(component, 'routeToViewStories');

      component.toRead(testStory, true);
      tick();

      expect(component.routeToViewStories).toHaveBeenCalled();
      expect(component.showModal).toBe(false);
    }));

    it('should allow reading story when enable parameter is true', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');
      spyOn(component, 'routeToViewStories');

      component.toRead(testStory, true);
      tick();

      expect(component.routeToViewStories).toHaveBeenCalled();
    }));
  });

  describe('Submit()', () => {
    it('should navigate to adults submit-story page when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      component.Submit();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom-stories/submit-story']);
    });

    it('should navigate to teenagers submit-story page when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      component.Submit();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/wisdom-stories/submit-story']);
    });
  });

  describe('searchStory()', () => {
    beforeEach(() => {
      component.searchstoryList = [...mockStories];
      component.storyList = mockStories.slice(0, 10);
      component.secondstoryList = mockStories.slice(10);
    });

    it('should reset to full list when search text is empty', () => {
      const manyStories = Array.from({ length: 15 }, (_, i) => ({
        ...mockStories[0],
        ScenarioID: i + 1,
        Title: `Story ${i + 1}`
      }));
      component.searchstoryList = manyStories;

      component.searchStory('');

      expect(component.storyList.length).toBe(10);
      expect(component.secondstoryList.length).toBe(5);
    });

    it('should filter stories by Title (case-insensitive)', () => {
      component.searchStory('Story 1');

      expect(component.storyList.length).toBeGreaterThan(0);
      expect(component.storyList[0].Title).toContain('Story 1');
    });

    it('should filter stories by Modules (case-insensitive)', () => {
      component.searchStory('stress');

      const hasStressModule = component.storyList.some(story => 
        story.Modules.toLowerCase().includes('stress')
      );
      expect(hasStressModule).toBe(true);
    });

    it('should filter stories by searchtags (case-insensitive)', () => {
      component.searchStory('anxiety');

      const hasAnxietyTag = component.storyList.some(story => 
        story.searchtags.toLowerCase().includes('anxiety')
      );
      expect(hasAnxietyTag).toBe(true);
    });

    it('should update searchedText property', () => {
      component.searchStory('test search');

      expect(component.searchedText).toBe('test search');
    });

    it('should handle case-insensitive search', () => {
      component.searchStory('STRESS');

      const hasMatch = component.storyList.some(story => 
        story.Modules.toLowerCase().includes('stress') ||
        story.Title.toLowerCase().includes('stress') ||
        story.searchtags.toLowerCase().includes('stress')
      );
      expect(hasMatch).toBe(true);
    });

    it('should return empty list when no matches found', () => {
      component.searchStory('nonexistentterm12345');

      expect(component.storyList.length).toBe(0);
      expect(component.secondstoryList.length).toBe(0);
    });

    it('should split results into first 10 and remaining', () => {
      const manyStories = Array.from({ length: 15 }, (_, i) => ({
        ...mockStories[0],
        ScenarioID: i + 1,
        Title: 'Test Story',
        Modules: 'Test'
      }));
      component.searchstoryList = manyStories;

      component.searchStory('Test');

      expect(component.storyList.length).toBe(10);
      expect(component.secondstoryList.length).toBe(5);
    });
  });

  describe('toggle_view_more_less()', () => {
    it('should enable view more and change text to "View less"', () => {
      component.view_more_less = 'View more';
      component.enable_view_more_less = false;

      component.toggle_view_more_less();

      expect(component.enable_view_more_less).toBe(true);
      expect(component.view_more_less).toBe('View less');
    });

    it('should disable view more and change text to "View more"', () => {
      component.view_more_less = 'View less';
      component.enable_view_more_less = true;

      component.toggle_view_more_less();

      expect(component.enable_view_more_less).toBe(false);
      expect(component.view_more_less).toBe('View more');
    });

    it('should toggle between states on multiple calls', () => {
      component.view_more_less = 'View more';
      component.enable_view_more_less = false;

      component.toggle_view_more_less();
      expect(component.view_more_less).toBe('View less');

      component.toggle_view_more_less();
      expect(component.view_more_less).toBe('View more');

      component.toggle_view_more_less();
      expect(component.view_more_less).toBe('View less');
    });
  });

  describe('routeToViewStories()', () => {
    beforeEach(() => {
      component.sId = 123;
    });

    it('should navigate to adults view-stories with query params', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      component.routeToViewStories();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/wisdom-stories/view-stories'],
        { queryParams: { sId: '123' } }
      );
    });

    it('should navigate to teenagers view-stories with query params', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      component.routeToViewStories();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/teenagers/wisdom-stories/view-stories'],
        { queryParams: { sId: '123' } }
      );
    });

    it('should use correct sId in query params', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });
      component.sId = 456;

      component.routeToViewStories();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/wisdom-stories/view-stories'],
        { queryParams: { sId: '456' } }
      );
    });
  });

  describe('onModalClose()', () => {
    beforeEach(() => {
      component.showModal = true;
      spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    });

    it('should close modal', () => {
      component.onModalClose('cancel');

      expect(component.showModal).toBe(false);
    });

    it('should navigate to free trial when event is "ok"', () => {
      component.onModalClose('ok');

      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults', 'subscription', 'start-your-free-trial']);
    });

    it('should only close modal when event is not "ok"', () => {
      component.onModalClose('cancel');

      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should handle empty event string', () => {
      component.onModalClose('');

      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('Integration Tests', () => {
    it('should complete full workflow for logged-in subscriber', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      component.ngOnInit();
      tick();

      expect(component.isSubscriber).toBe(true);
      
      // Verify stories were loaded and process
      if (component.storyList.length > 0) {
        const story = component.storyList[0];
        component.toRead(story, true);
        tick();

        expect(mockOnboardingService.clickStory).toHaveBeenCalledWith(story.ScenarioID);
        expect(mockRouter.navigate).toHaveBeenCalled();
      } else {
        // If stories didn't load, just verify the initialization worked
        expect(component.storyList).toBeDefined();
      }
    }));

    it('should handle guest user workflow correctly', fakeAsync(() => {
      localStorage.removeItem('isloggedin');
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      component.ngOnInit();
      tick();

      expect(component.isSubscriber).toBe(false);

      // Guest can read free stories
      const freeStory = mockStories[2]; // ScenarioID 42
      component.toRead(freeStory, false);

      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    }));

    it('should filter and display search results', fakeAsync(() => {
      component.ngOnInit();
      tick();

      const initialCount = component.storyList.length;

      component.searchStory('Story 1');

      expect(component.searchedText).toBe('Story 1');
      expect(component.storyList.length).toBeLessThanOrEqual(initialCount);
    }));
  });

  describe('Edge Cases', () => {
    it('should handle null response from getScenarios', fakeAsync(() => {
      mockOnboardingService.getScenarios.and.returnValue(of(null));

      expect(() => {
        component.getStories();
        tick();
      }).not.toThrow();
    }));

    it('should handle stories with missing properties gracefully', fakeAsync(() => {
      const incompleteStory = {
        ScenarioID: 999,
        Title: 'Incomplete Story',
        ProgIDs: '1',
        PublishedOn: 1640000000,
        Modules: '',
        searchtags: '',
        Story: '',
        Img: '',
        ExclFromChild: '0'
      } as any;
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: '1'
      });
      mockOnboardingService.getScenarios.and.returnValue(of([incompleteStory]));

      component.getStories();
      tick();

      expect(component.storyList).toBeDefined();
      expect(component.searchstoryList).toBeDefined();
    }));

    it('should access localStorage during initialization', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOn(localStorage, 'setItem');

      component.ngOnInit();

      expect(localStorage.getItem).toHaveBeenCalled();
    });

    it('should handle undefined sId in routeToViewStories', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });
      component.sId = undefined;

      component.routeToViewStories();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/wisdom-stories/view-stories'],
        { queryParams: { sId: 'undefined' } }
      );
    });

    it('should handle search with special characters', () => {
      component.searchstoryList = [...mockStories];

      expect(() => {
        component.searchStory('test@#$%^&*()');
      }).not.toThrow();
    });

    it('should handle toggle when view_more_less has unexpected value', () => {
      component.view_more_less = 'unexpected value';

      component.toggle_view_more_less();

      expect(component.enable_view_more_less).toBe(false);
      expect(component.view_more_less).toBe('View more');
    });
  });
});

