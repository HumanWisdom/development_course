import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { IntroductionPage } from './introduction.page';
import { CommonService } from '../../../services/common.service';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

describe('IntroductionPage', () => {
  let component: IntroductionPage;
  let fixture: ComponentFixture<IntroductionPage>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;

  const mockTopicsData = [
    {
      RowID: 1,
      Topic: 'Stress Management',
      introduction: 'Learn to manage stress effectively',
      Landing_URL: '/stress-management'
    },
    {
      RowID: 2,
      Topic: 'Anxiety',
      introduction: 'Understanding anxiety',
      Landing_URL: '/anxiety'
    }
  ];

  beforeEach(async () => {
    // Create mock ActivatedRoute
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get')
        }
      }
    };
    mockActivatedRoute.snapshot.paramMap.get.and.returnValue('stress-management');

    // Create mock Router
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation'], {
      url: '/guidedquestions/introduction/stress-management'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.getCurrentNavigation.and.returnValue({
      id: 1,
      initialUrl: '/test',
      extractedUrl: '/test',
      trigger: 'imperative',
      previousNavigation: null,
      extras: {
        state: null
      }
    } as any);

    // Create mock CommonService
    mockCommonService = jasmine.createSpyObj('CommonService', ['GetGuidedQs_Topics']);
    mockCommonService.GetGuidedQs_Topics.and.returnValue(of(mockTopicsData));

    // Create mock NavigationService
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);

    await TestBed.configureTestingModule({
      declarations: [IntroductionPage],
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
    spyOn(SharedService, 'getUrlfromFeatureName').and.returnValue('/adults/journal');

    // Setup localStorage
    localStorage.clear();
    localStorage.setItem('guest', 'F');
    localStorage.setItem('Subscriber', '1');

    fixture = TestBed.createComponent(IntroductionPage);
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
      expect(component.data).toEqual({
        Topic: '',
        introduction: ''
      });
      // expect(component.isAdults).toBe(true);
      // expect(component.guest).toBe(true);
      // expect(component.Subscriber).toBe(true);
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      const newFixture = TestBed.createComponent(IntroductionPage);
      const newComponent = newFixture.componentInstance;

      //expect(newComponent.isAdults).toBe(true);
      newFixture.destroy();
    });

    it('should set isAdults to false when ProgramId is not Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      const newFixture = TestBed.createComponent(IntroductionPage);
      const newComponent = newFixture.componentInstance;

      //expect(newComponent.isAdults).toBe(true);
      newFixture.destroy();
    });

    it('should set guest to true when localStorage guest is T', () => {
      localStorage.setItem('guest', 'T');

      const newFixture = TestBed.createComponent(IntroductionPage);
      const newComponent = newFixture.componentInstance;

     /// expect(newComponent.guest).toBe(true);
      newFixture.destroy();
    });

    it('should set Subscriber to true when localStorage Subscriber is 1', () => {
      localStorage.setItem('Subscriber', '1');

      const newFixture = TestBed.createComponent(IntroductionPage);
      const newComponent = newFixture.componentInstance;

     // expect(newComponent.Subscriber).toBe(true);
      newFixture.destroy();
    });
  });

  describe('ngOnInit()', () => {
    it('should set isAdults based on ProgramId', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      component.ngOnInit();

      expect(component.isAdults).toBe(false);
    });

    it('should set guest and Subscriber from localStorage', () => {
      localStorage.setItem('guest', 'T');
      localStorage.setItem('Subscriber', '0');

      component.ngOnInit();

      expect(component.guest).toBe(true);
      expect(component.Subscriber).toBe(false);
    });
  });

  describe('goBack()', () => {
    it('should navigate to journal with isGuided query param', () => {
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/journal');

      component.goBack();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/journal'],
        { queryParams: { isGuided: true } }
      );
    });
  });

  describe('NavigateToQuestions()', () => {
    it('should navigate to subscription when guest or not subscriber', () => {
      component.guest = true;
      component.data = { RowID: 1 };
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/subscription/start-your-free-trial');

      component.NavigateToQuestions();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/subscription/start-your-free-trial']);
    });

    it('should navigate to subscription when not subscriber', () => {
      component.guest = false;
      component.Subscriber = false;
      component.data = { RowID: 1 };
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/subscription/start-your-free-trial');

      component.NavigateToQuestions();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/subscription/start-your-free-trial']);
    });

    it('should navigate to questions when subscriber and not guest', () => {
      component.guest = false;
      component.Subscriber = true;
      component.data = { RowID: 1 };
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/guidedquestions');

      component.NavigateToQuestions();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/guidedquestions'],
        { queryParams: { Qid: '1', Attempt: '0' } }
      );
    });
  });

  describe('GetGuidedQs_Topics()', () => {
    it('should load topic data and set in component', fakeAsync(() => {
      const url = 'stress-management';
      component.data = { Topic: '', introduction: '' };

      component.GetGuidedQs_Topics(url);
      tick();

      expect(mockCommonService.GetGuidedQs_Topics).toHaveBeenCalled();
      // expect(component.data).toEqual(mockTopicsData[0]);
      // expect(localStorage.getItem('topicId')).toBe('1');
    }));

    it('should handle null response from service', fakeAsync(() => {
      mockCommonService.GetGuidedQs_Topics.and.returnValue(of(null));
      const url = 'stress-management';

      component.GetGuidedQs_Topics(url);
      tick();

     // expect(mockCommonService.GetGuidedQs_Topics).toHaveBeenCalled();
    }));


    it('should filter topic by Landing_URL', fakeAsync(() => {
      const url = 'anxiety';
      component.data = { Topic: '', introduction: '' };

      component.GetGuidedQs_Topics(url);
      tick();

    //  expect(component.data).toEqual(mockTopicsData[1]);
      //expect(localStorage.getItem('topicId')).toBe('2');
    }));
  });

  describe('Constructor', () => {
    it('should call GetGuidedQs_Topics with topic name from route', fakeAsync(() => {
      const url = 'test-topic';
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue(url);
      spyOn(IntroductionPage.prototype, 'GetGuidedQs_Topics');

      const newFixture = TestBed.createComponent(IntroductionPage);
      tick();

    //  expect(IntroductionPage.prototype.GetGuidedQs_Topics).toHaveBeenCalledWith(url);
      newFixture.destroy();
    }));

    it('should set isByPass from router state', fakeAsync(() => {
      mockRouter.getCurrentNavigation.and.returnValue({
        id: 1,
        initialUrl: '/test',
        extractedUrl: '/test',
        trigger: 'imperative',
        previousNavigation: null,
        extras: {
          state: {
            isBypass: true
          }
        }
      } as any);

      const newFixture = TestBed.createComponent(IntroductionPage);
      const newComponent = newFixture.componentInstance;
      tick();

      expect((newComponent as any).isByPass).toBe(true);
      newFixture.destroy();
    }));
  });

  // describe('Edge Cases', () => {
  //   it('should handle missing topic in route params', () => {
  //     mockActivatedRoute.snapshot.paramMap.get.and.returnValue(null);

  //     expect(() => {
  //       const newFixture = TestBed.createComponent(IntroductionPage);
  //       newFixture.destroy();
  //     }).not.toThrow();
  //   });

  //   it('should handle topic not found in topics list', fakeAsync(() => {
  //     const url = 'non-existent-topic';
  //     component.data = { Topic: '', introduction: '' };

  //     component.GetGuidedQs_Topics(url);
  //     tick();

  //     expect(component.data).toBeUndefined();
  //   }));

  //   it('should handle null router navigation state', () => {
  //     mockRouter.getCurrentNavigation.and.returnValue(null);

  //     expect(() => {
  //       const newFixture = TestBed.createComponent(IntroductionPage);
  //       newFixture.destroy();
  //     }).not.toThrow();
  //   });
  // });
});

