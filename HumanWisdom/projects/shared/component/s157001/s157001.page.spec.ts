import { ComponentFixture, TestBed } from '@angular/core/testing';
import { S157001Page } from './s157001.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { TeenagersService } from '../../../teenagers/src/app/teenagers/teenagers.service';
import { CommonService } from '../../services/common.service';
import { SharedService } from '../../services/shared.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('S157001Page', () => {
  let component: S157001Page;
  let fixture: ComponentFixture<S157001Page>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockTeenagersService: jasmine.SpyObj<TeenagersService>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/teenagers/wisdom-exercise/s157001',
      configurable: true
    });

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockTeenagersService = jasmine.createSpyObj('TeenagersService', ['setmoduleID']);
    mockCommonService = jasmine.createSpyObj('CommonService', ['GetIntroContents']);
    mockCommonService.GetIntroContents.and.returnValue(of({ content: [] }));

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    spyOn(SharedService, 'isSubscriber').and.returnValue(false);
    spyOn(SharedService, 'contentIdData').and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [S157001Page],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: TeenagersService, useValue: mockTeenagersService },
        { provide: CommonService, useValue: mockCommonService },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(S157001Page);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should default isHome to true', () => {
      expect(component.isHome).toBe(true);
    });

    it('should default beginIsExpanded to false', () => {
      expect(component.beginIsExpanded).toBe(false);
    });

    it('should default beginHereCards to empty array', () => {
      expect(component.beginHereCards).toEqual([]);
    });
  });

  describe('ngOnInit', () => {
    it('should call setmoduleID with 157', () => {
      component.ngOnInit();
      expect(mockTeenagersService.setmoduleID).toHaveBeenCalledWith(157);
    });

    it('should set isGuest based on SharedService.isSubscriber', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.ngOnInit();
      expect(component.isGuest).toBe(true);

      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(true);
      fixture = TestBed.createComponent(S157001Page);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isGuest).toBe(false);
    });

    it('should call contentIdData with wisdom-exercise', () => {
      component.ngOnInit();
      expect(SharedService.contentIdData).toHaveBeenCalledWith('wisdom-exercise');
    });

    it('should populate beginHereCards when dashboardData has id', () => {
      (SharedService.contentIdData as jasmine.Spy).and.returnValue({ id: '123' });
      mockCommonService.GetIntroContents.and.returnValue(of({
        content: [
          {
            section_name: 'Start Here',
            path: '/path1',
            image_path: 'img1.jpg',
            title: 'Title 1',
            subtitle: 'Sub 1',
            module: 'audio',
            timing: '5 min',
            overlay_icon: '/icon.svg',
            isFree: '1',
            isRead: '0'
          }
        ]
      }));

      component.ngOnInit();

      expect(mockCommonService.GetIntroContents).toHaveBeenCalledWith('123');
      expect(component.beginHereCards.length).toBe(1);
      expect(component.beginHereCards[0].title).toBe('Title 1');
      expect(component.beginHereCards[0].path).toBe('/path1');
    });

    it('should filter content by start here or begin here', () => {
      (SharedService.contentIdData as jasmine.Spy).and.returnValue({ id: '123' });
      mockCommonService.GetIntroContents.and.returnValue(of({
        content: [
          { section_name: 'Start Here', path: '/a', title: 'A' },
          { section_name: 'Begin Here', path: '/b', title: 'B' },
          { section_name: 'Other', path: '/c', title: 'C' }
        ]
      }));

      component.ngOnInit();

      expect(component.beginHereCards.length).toBe(2);
      expect(component.beginHereCards.map(c => c.title)).toEqual(['A', 'B']);
    });
  });

  describe('goBack', () => {
    it('should call location.back when no back link', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });

    it('should navigateByUrl when back link exists', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/teenagers/home');
      component.goBack();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/teenagers/home');
      expect(mockLocation.back).not.toHaveBeenCalled();
    });
  });

  describe('share', () => {
    it('should call ngNavigatorShareService.share', async () => {
      component.path = '/teenagers/wisdom-exercise/s157001' as any;
      await component.share();
      expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith({
        title: 'HappierMe Program',
        text: 'Hey, check out the HappierMe Program',
        url: 'https://humanwisdom.me/teenagers/wisdom-exercise/s157001'
      });
    });
  });

  describe('routeTointroDash', () => {
    it('should navigate to wisdom-exercise dashboard', () => {
      component.routeTointroDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/dashboard/wisdom-exercise']);
    });
  });

  describe('toggleBegin', () => {
    it('should toggle beginIsExpanded', () => {
      expect(component.beginIsExpanded).toBe(false);
      component.toggleBegin();
      expect(component.beginIsExpanded).toBe(true);
      component.toggleBegin();
      expect(component.beginIsExpanded).toBe(false);
    });
  });

  describe('onCardClick', () => {
    it('should navigate when card has path', () => {
      component.onCardClick({ path: '/teenagers/wisdom-exercise/s157002' } as any);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/wisdom-exercise/s157002']);
    });

    it('should not navigate when card has no path', () => {
      component.onCardClick({ path: '' } as any);
      expect(mockRouter.navigate).not.toHaveBeenCalled();

      component.onCardClick({} as any);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('Input', () => {
    it('should accept isHome input', () => {
      component.isHome = false;
      expect(component.isHome).toBe(false);
    });
  });
});
