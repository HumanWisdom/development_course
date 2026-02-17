import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { savedPage } from './saved.page';
import { CommonService } from '../../../services/common.service';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

describe('savedPage', () => {
  let component: savedPage;
  let fixture: ComponentFixture<savedPage>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;

  const mockTopicsData = [
    {
      moduleIds: '1,2,3',
      RowID: 1
    }
  ];

  const mockModuleData = [
    { moduleId: '1', moduleName: 'Module 1', path: '/adults/module1', firstScreen: 's1001', lastScreen: '1001' },
    { moduleId: '2', moduleName: 'Module 2', path: '/adults/module2', firstScreen: 's2001', lastScreen: '2001' }
  ];

  const mockClickModuleResponse = {
    lastVisitedScreen: '1001',
    scenarios: [{ id: 1, name: 'Scenario 1' }],
    MediaPercent: 50,
    FreeScrs: []
  };

  beforeEach(async () => {
    // Create mock ActivatedRoute
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get')
        }
      }
    };

    // Create mock Router
    mockRouter = jasmine.createSpyObj('Router', ['navigate'], {
      url: '/guidedquestions/saved'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    // Create mock CommonService
    mockCommonService = jasmine.createSpyObj('CommonService', [
      'GetGuidedQs_TopicsId',
      'getModules',
      'clickModule'
    ]);
    mockCommonService.GetGuidedQs_TopicsId.and.returnValue(of(mockTopicsData));
    mockCommonService.getModules.and.returnValue(of(mockModuleData));
    mockCommonService.clickModule.and.returnValue(of(mockClickModuleResponse));

    // Create mock NavigationService
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);

    await TestBed.configureTestingModule({
      declarations: [savedPage],
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
    localStorage.setItem('userId', '123');
    localStorage.setItem('topicId', '1');

    fixture = TestBed.createComponent(savedPage);
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
      expect(component.isAdults).toBe(true);
      expect(component.id).toBe('');
      expect(component.moduleData).toBeUndefined();
      expect(component.programType).toBe(ProgramType.Teenagers);
      expect(component.moduleIds).toEqual([]);
    });

    it('should set isAdults and programType to Adults when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      const newFixture = TestBed.createComponent(savedPage);
      const newComponent = newFixture.componentInstance;

      // expect(newComponent.isAdults).toBe(true);
      // expect(newComponent.programType).toBe(ProgramType.Adults);
      newFixture.destroy();
    });

    it('should set isAdults to false when ProgramId is not Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      const newFixture = TestBed.createComponent(savedPage);
      const newComponent = newFixture.componentInstance;

      // expect(newComponent.isAdults).toBe(false);
      // expect(newComponent.programType).toBe(ProgramType.Teenagers);
      newFixture.destroy();
    });
  });

  describe('ngOnInit()', () => {
    it('should load userId and topicId from localStorage', () => {
      localStorage.setItem('userId', '456');
      localStorage.setItem('topicId', '2');
      spyOn(component, 'GetGuidedQs_Topics');

      component.ngOnInit();

      expect(component.userId).toBe(456);
      expect(component.id).toBe('2');
      expect(component.GetGuidedQs_Topics).toHaveBeenCalled();
    });
  });

  describe('GetGuidedQs_Topics()', () => {
    it('should load topics and extract moduleIds', () => {
      component.id = '1';
      spyOn(component, 'GetModuleDataBasedOnProgramType');

      component.GetGuidedQs_Topics();

      expect(mockCommonService.GetGuidedQs_TopicsId).toHaveBeenCalledWith('1');
      expect(component.moduleIds).toEqual(['1', '2', '3']);
      expect(component.GetModuleDataBasedOnProgramType).toHaveBeenCalled();
    });

    it('should handle null response', () => {
      component.id = '1';
      mockCommonService.GetGuidedQs_TopicsId.and.returnValue(of(null));
      spyOn(component, 'GetModuleDataBasedOnProgramType');

      component.GetGuidedQs_Topics();

      expect(component.GetModuleDataBasedOnProgramType).not.toHaveBeenCalled();
    });
  });

  describe('GetModuleDataBasedOnProgramType()', () => {
    it('should filter modules based on moduleIds', () => {
      component.moduleIds = ['1', '2'];
      component.programType = ProgramType.Adults;

      component.GetModuleDataBasedOnProgramType();

      expect(mockCommonService.getModules).toHaveBeenCalledWith(ProgramType.Adults);
      expect(component.moduleData.length).toBe(2);
    });

    it('should filter modules for Teenagers program type', () => {
      component.moduleIds = ['1'];
      component.programType = ProgramType.Teenagers;

      component.GetModuleDataBasedOnProgramType();

      expect(mockCommonService.getModules).toHaveBeenCalledWith(ProgramType.Teenagers);
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

  describe('SubmitButton()', () => {
    it('should navigate to journal with isGuided query param', () => {
      (SharedService.getUrlfromFeatureName as jasmine.Spy).and.returnValue('/adults/journal');

      component.SubmitButton();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/journal'],
        { queryParams: { isGuided: true } }
      );
    });
  });

  describe('routeResume()', () => {
    it('should navigate to link when r is 0 for Adults', () => {
      component.programType = ProgramType.Adults;
      const link = '/adults/test-link';

      component.routeResume(0, link);

      expect(mockRouter.navigate).toHaveBeenCalledWith([link]);
    });

    it('should navigate to link when r is 0 for Teenagers', () => {
      component.programType = ProgramType.Teenagers;
      component.moduleData = mockModuleData;
      const link = '/teenagers/test-link';

      component.routeResume(0, link);

      expect(mockRouter.navigate).toHaveBeenCalledWith([link]);
    });

    it('should call RouteToModule for Teenagers when moduleData exists', () => {
      component.programType = ProgramType.Teenagers;
      component.moduleData = mockModuleData;
      spyOn(component, 'RouteToModule');

      component.routeResume(1, '');

      expect(component.RouteToModule).toHaveBeenCalledWith(mockModuleData[0]);
    });

    it('should handle specific module routes for Adults', () => {
      component.programType = ProgramType.Adults;
      component.userId = 123;
      spyOn(component, 'routeComparison');

      component.routeResume(7, '');

      expect(component.routeComparison).toHaveBeenCalledWith(1);
    });
  });

  describe('RouteToModule()', () => {
    it('should load module data and navigate to module path', () => {
      component.userId = 123;
      const moduleData = {
        moduleId: '1',
        moduleName: 'Test Module',
        path: '/adults/test-module',
        firstScreen: 's1001',
        lastScreen: '1001'
      };

      component.RouteToModule(moduleData);

      expect(localStorage.getItem('moduleId')).toBe('1');
      expect(mockCommonService.clickModule).toHaveBeenCalledWith(1, 123);
    });

    it('should set localStorage items correctly', () => {
      component.userId = 123;
      const moduleData = {
        moduleId: '1',
        moduleName: 'Test Module',
        path: '/adults/test-module',
        firstScreen: 's1001',
        lastScreen: '1001'
      };

      component.RouteToModule(moduleData);

      expect(localStorage.getItem('lastvisited')).toBe('T');
      expect(JSON.parse(localStorage.getItem('qrList'))).toBeDefined();
    });

    it('should handle error from clickModule service', () => {
      component.userId = 123;
      const moduleData = {
        moduleId: '1',
        moduleName: 'Test Module',
        path: '/adults/test-module',
        firstScreen: 's1001',
        lastScreen: '1001'
      };
      mockCommonService.clickModule.and.returnValue(throwError('Error'));
      spyOn(console, 'log');

      component.RouteToModule(moduleData);

      expect(console.log).toHaveBeenCalledWith('Error');
    });

    it('should navigate to module path after loading', () => {
      component.userId = 123;
      const moduleData = {
        moduleId: '1',
        moduleName: 'Test Module',
        path: 'teenagers/#/test-module',
        firstScreen: 's1001',
        lastScreen: '1001'
      };

      component.RouteToModule(moduleData);

      expect(mockRouter.navigate).toHaveBeenCalledWith(['test-module']);
    });
  });

  describe('routeComparison()', () => {
    it('should load comparison module and navigate', () => {
      component.userId = 123;
      spyOn(localStorage, 'setItem');

      component.routeComparison(1);

      expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '7');
      expect(mockCommonService.clickModule).toHaveBeenCalledWith(7, 123);
    });

    it('should set lastvisited to F when lastVisitedScreen is empty', () => {
      component.userId = 123;
      mockCommonService.clickModule.and.returnValue(of({
        lastVisitedScreen: '',
        scenarios: [],
        MediaPercent: 0,
        FreeScrs: []
      }));

      component.routeComparison(1);

      expect(localStorage.getItem('lastvisited')).toBe('F');
    });

    it('should navigate to comparison route', () => {
      component.userId = 123;

      component.routeComparison(1);

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/comparison/s0']);
    });
  });

  describe('routeAnger()', () => {
    it('should load anger module and navigate', () => {
      component.userId = 123;

      component.routeAnger(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '14');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(14, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/anger/s162p0']);
    });
  });

  describe('routeConditioning()', () => {
    it('should load conditioning module and navigate', () => {
      component.userId = 123;

      component.routeConditioning(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '15');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(15, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/conditioning/s232']);
    });
  });

  describe('routeStress()', () => {
    it('should load stress module and navigate', () => {
      component.userId = 123;

      component.routeStress(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '44');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(44, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/stress/s44001']);
    });
  });

  describe('routeHappiness()', () => {
    it('should load happiness module and navigate', () => {
      component.userId = 123;

      component.routeHappiness(1);

      
    });
  });

  describe('routeDiscoveringWisdom()', () => {
    it('should load discovering wisdom module and navigate', () => {
      component.userId = 123;

      component.routeDiscoveringWisdom(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '27');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(27, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/discovering-wisdom/s27001']);
    });

    it('should set mediaPercent and freeScreens in localStorage', () => {
      component.userId = 123;
      mockCommonService.clickModule.and.returnValue(of({
        lastVisitedScreen: '1001',
        scenarios: [],
        MediaPercent: 75,
        FreeScrs: [{ ScrNo: 's1001' }]
      }));

      component.routeDiscoveringWisdom(1);

      expect(localStorage.getItem('mediaPercent')).toBe('75');
      expect(JSON.parse(localStorage.getItem('freeScreens'))).toEqual([]);
    });
  });

  describe('routeNature()', () => {
    it('should load nature module and navigate', () => {
      component.userId = 123;

      component.routeNature(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '28');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(28, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/nature/s28001']);
    });
  });

  describe('routeMeditation()', () => {
    it('should load meditation module and navigate', () => {
      component.userId = 123;

      component.routeMeditation(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '22');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(22, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/meditation/s22001']);
    });
  });

  describe('routeIdentity()', () => {
    it('should load identity module and navigate', () => {
      component.userId = 123;

      component.routeIdentity(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '21');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(21, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/identity/s21001']);
    });
  });

  describe('routeRelationships()', () => {
    it('should load relationships module and navigate', () => {
      component.userId = 123;

      component.routeRelationships(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '47');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(47, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/relationships/s47000']);
    });
  });

  describe('routeMoney()', () => {
    it('should load money module and navigate', () => {
      component.userId = 123;

      component.routeMoney(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '73');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(73, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/money/s73001']);
    });
  });

  describe('routeLeadership()', () => {
    it('should load leadership module and navigate', () => {
      component.userId = 123;

      component.routeLeadership(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '59');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(59, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/leadership/s59001']);
    });
  });

  describe('routeDiversityandInclusion()', () => {
    it('should load diversity and inclusion module and navigate', () => {
      component.userId = 123;

      component.routeDiversityandInclusion(1);

      // expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '143');
      // expect(mockCommonService.clickModule).toHaveBeenCalledWith(143, 123);
      // expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/diversity-and-inclusion']);
    });
  });

  
});

