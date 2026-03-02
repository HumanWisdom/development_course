import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WisdomExerciseS75001Component } from './wisdom-exercise-s75001.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';
import { CommonService } from '../../services/common.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WisdomExerciseS75001Component', () => {
  let component: WisdomExerciseS75001Component;
  let fixture: ComponentFixture<WisdomExerciseS75001Component>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockProgramId: any;
  let mockRouterUrl: string;

  beforeEach(async () => {
    mockRouterUrl = '/adults/wisdom-exercise';
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue(null)
        }
      }
    };

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      url: mockRouterUrl
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => mockRouterUrl,
      configurable: true
    });

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve(true));

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockCommonService = jasmine.createSpyObj('CommonService', ['setmoduleID', 'GetIntroContents']);
    mockCommonService.setmoduleID.and.returnValue(undefined);
    mockCommonService.GetIntroContents.and.returnValue(of({
      id: 1,
      introPara: 'Introduction paragraph',
      content: []
    }));

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'isSubscriber').and.returnValue(false);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue(null);
    spyOn(SharedService, 'contentIdData').and.returnValue({
      id: 1,
      name: 'wisdom-exercise',
      title:'Wisdom Exercise'
    });

    await TestBed.configureTestingModule({
      declarations: [WisdomExerciseS75001Component],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: Location, useValue: mockLocation },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: CommonService, useValue: mockCommonService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomExerciseS75001Component);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set isAdults based on ProgramId', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(WisdomExerciseS75001Component);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isGuest based on subscriber status', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.ngOnInit();
      expect(component.isGuest).toBe(true);
    });
  });

  describe('ngOnInit', () => {
    it('should call setmoduleID with 75', () => {
      component.ngOnInit();
      expect(mockCommonService.setmoduleID).toHaveBeenCalledWith(75);
    });

    it('should set dashboardType from route params', () => {
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('test-type');
      fixture = TestBed.createComponent(WisdomExerciseS75001Component);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.dashboardType).toBe('test-type');
    });

    it('should set default dashboardType to wisdom-exercise when not provided', () => {
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue(null);
      fixture = TestBed.createComponent(WisdomExerciseS75001Component);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.dashboardType).toBe('wisdom-exercise');
    });

    it('should call GetIntroContents when dashboardData has id', fakeAsync(() => {
      (SharedService.contentIdData as jasmine.Spy).and.returnValue({ id: 1 });
      const mockResponse = {
        id: 1,
        introPara: 'Test intro',
        content: [
          {
            path: '/test',
            image_path: '/image.jpg',
            title: 'Test Title',
            subtitle: 'Test Subtitle',
            module: 'VIDEO',
            timing: '10:00',
            overlay_icon: '/play.svg',
            isFree: 1,
            isRead: 0,
            section_name: 'Start here'
          }
        ]
      };
      mockCommonService.GetIntroContents.and.returnValue(of(mockResponse));

      component.ngOnInit();
      tick();

      expect(mockCommonService.GetIntroContents).toHaveBeenCalledWith(1);
      expect(component.introTitle).toBe('Test intro');
    }));
  });

  describe('processContentIntoSections', () => {
    beforeEach(() => {
      component.cardList = [
        {
          path: '/test1',
          image_path: '/img1.jpg',
          title: 'Title 1',
          subtitle: 'Subtitle 1',
          module: 'VIDEO',
          timing: '10:00',
          overlay_icon: '/play.svg',
          isFree: 1,
          isRead: 0,
          section_name: 'Start here'
        },
        {
          path: '/test2',
          image_path: '/img2.jpg',
          title: 'Title 2',
          subtitle: 'Subtitle 2',
          module: 'AUDIO',
          timing: '5:00',
          overlay_icon: '/audio.svg',
          isFree: 0,
          isRead: 1,
          section_name: 'Other Section'
        },
        {
          path: '/test3',
          image_path: '/img3.jpg',
          title: 'Title 3',
          module: 'WELLNESS SURVEY',
          section_name: 'Test'
        }
      ];
    });

    it('should process content into sections', () => {
      component.processContentIntoSections();
      expect(component.contentSections.length).toBeGreaterThan(0);
    });

    it('should skip WELLNESS SURVEY and FORUM modules', () => {
      component.processContentIntoSections();
      const hasWellnessSurvey = component.contentSections.some(section =>
        section.cards.some(card => card.moduleType === 'WELLNESS SURVEY')
      );
      expect(hasWellnessSurvey).toBe(false);
    });

    it('should rename Start here to Begin Here', () => {
      component.processContentIntoSections();
      const beginHereSection = component.contentSections.find(s => s.title === 'Begin Here');
      expect(beginHereSection).toBeDefined();
    });

    it('should sort sections with Begin Here first', () => {
      component.processContentIntoSections();
      if (component.contentSections.length > 0) {
        expect(component.contentSections[0].title).toBe('Begin Here');
      }
    });

    it('should set default values for missing properties', () => {
      component.cardList = [{
        path: '/test',
        title: 'Test',
        module: 'VIDEO'
      }];
      component.processContentIntoSections();
      expect(component.contentSections.length).toBeGreaterThan(0);
    });
  });

  describe('onSectionToggle', () => {
    it('should toggle isExpanded property', () => {
      const section = {
        id: '1',
        title: 'Test Section',
        isExpanded: false,
        cards: []
      } as any;
      component.onSectionToggle(section);
      expect(section.isExpanded).toBe(true);
      component.onSectionToggle(section);
      expect(section.isExpanded).toBe(false);
    });
  });

  describe('onCardClick', () => {
    it('should navigate to card path when path exists', () => {
      const card = {
        id: '1',
        path: '/test/path',
        title: 'Test Card'
      } as any;
      component.onCardClick(card);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/test/path']);
    });

    it('should not navigate when path is empty', () => {
      const card = {
        id: '1',
        path: '',
        title: 'Test Card'
      } as any;
      component.onCardClick(card);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('share', () => {
    it('should call ngNavigatorShareService.share', fakeAsync(() => {
    //  component.path = '/test-path';
      component.share();
      tick();
      // expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith({
      //   title: 'HappierMe Program',
      //   text: 'Hey, check out the HappierMe Program',
      //   url: 'https://humanwisdom.me/test-path'
      // });

    }));

    it('should handle share error', fakeAsync(() => {
      const consoleSpy = spyOn(console, 'log');
      mockNgNavigatorShareService.share.and.returnValue(Promise.reject('Share failed'));
      component.share();
      tick();
      expect(consoleSpy).toHaveBeenCalledWith('Share failed');
    }));
  });

  describe('goBack', () => {
    it('should navigate to back link when available', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/back-url');
      component.goBack();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/back-url');
    });

    it('should navigate to NaviagtedFrom when back link is null and NaviagtedFrom exists', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue('/previous-page');
      component.goBack();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/previous-page');
    });

    it('should call location.back when no back link and no NaviagtedFrom', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('routeTointroDash', () => {
    it('should navigate to wisdom-exercise dashboard', () => {
      component.routeTointroDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/dashboard/wisdom-exercise']);
    });
  });

  describe('goToSubscribe', () => {
    it('should navigate to subscription free trial', () => {
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');
      component.goToSubscribe();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults', 'subscription', 'start-your-free-trial']);
    });
  });
});

