import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TocHeaderComponent } from './toc-header.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { ProgramType } from '../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TocHeaderComponent', () => {
  let component: TocHeaderComponent;
  let fixture: ComponentFixture<TocHeaderComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockProgramId: number;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/stress/s101',
      configurable: true
    });

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockLocation.back.and.stub();

    mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    SharedService.AdultsBaseUrl = 'https://adults.happierme.app/';
    SharedService.TeenagerBaseUrl = 'https://teenagers.happierme.app/';
    spyOn(SharedService, 'getDataFromLocalStorage').and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [TocHeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TocHeaderComponent);
    component = fixture.componentInstance;
    component.moduleName = 'Stress';
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(TocHeaderComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should set path from router url', () => {
      component.ngOnInit();
      expect(component.path).toBe('/adults/stress/s101');
    });

    it('should set title and meta tags', () => {
      component.moduleName = 'Anxiety';
      component.ngOnInit();
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Explore this HappierMe module on Anxiety');
      expect(mockMeta.updateTag).toHaveBeenCalled();
    });
  });

  describe('goBack', () => {
    it('should call location.back when navigateToBackLink returns null and no NaviagtedFrom', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });

    it('should navigateByUrl when navigateToBackLink returns url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/home');
      component.goBack();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/home');
    });

    it('should navigateByUrl to NaviagtedFrom when navigateToBackLink null but NaviagtedFrom set', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      (SharedService.getDataFromLocalStorage as jasmine.Spy).and.returnValue('/adults/previous');
      component.goBack();
      expect(SharedService.getDataFromLocalStorage).toHaveBeenCalledWith(Constant.NaviagtedFrom);
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/previous');
    });
  });

  describe('share', () => {
    it('should call ngNavigatorShareService.share', async () => {
      component.ngOnInit();
      await component.share();
      expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith(
        jasmine.objectContaining({
          title: 'HappierMe Program',
          text: 'Hey, check out the HappierMe Program'
        })
      );
    });
  });

  describe('shareUrl', () => {
    it('should set baseUrl to AdultsBaseUrl for Adults', () => {
      component.shareUrl(ProgramType.Adults);
      expect(component.baseUrl).toBe(SharedService.AdultsBaseUrl);
    });

    it('should set baseUrl to TeenagerBaseUrl for Teenagers', () => {
      component.shareUrl(ProgramType.Teenagers);
      expect(component.baseUrl).toBe(SharedService.TeenagerBaseUrl);
    });

    it('should set baseUrl to TeenagerBaseUrl for default', () => {
      component.shareUrl(999);
      expect(component.baseUrl).toBe(SharedService.TeenagerBaseUrl);
    });
  });

  describe('goToDash', () => {
    it('should navigate to adult-dashboard for Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.goToDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('should navigate to teenager-dashboard for Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.goToDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenager-dashboard']);
    });
  });
});
