import { ComponentFixture, TestBed } from '@angular/core/testing';
import { S51000Page } from './s51000.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from '../../../services/common.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { Meta, Title } from '@angular/platform-browser';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../../services/navigation.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('S51000Page (Audio Meditation)', () => {
  let component: S51000Page;
  let fixture: ComponentFixture<S51000Page>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    (mockRouter as any).url = '/adults/guided-meditation';

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    mockCommonService = jasmine.createSpyObj('CommonService', [
      'setmoduleID',
      'GetAudioMeditation',
      'createScreen',
      'submitProgressText',
      'clickMeditations'
    ]);
    mockCommonService.setmoduleID.and.stub();
    mockCommonService.GetAudioMeditation.and.returnValue(
      of([{ RowID: 1, Title: 'Calm', ProgIDs: ['9'], Text_URL: 'path/to/audio', Timing: '5', dailyPractiseID: 1 }])
    );
    mockCommonService.createScreen.and.returnValue(of({}));
    mockCommonService.submitProgressText.and.returnValue(of({ GetBkMrkScr: [] }));
    mockCommonService.clickMeditations.and.returnValue(of({}));

    mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);
    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    Object.defineProperty(SharedService, 'AdultsBaseUrl', { value: 'https://adults.example/', configurable: true });
    Object.defineProperty(SharedService, 'TeenagerBaseUrl', { value: 'https://teenagers.example/', configurable: true });

    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('saveUsername', JSON.stringify('user'));
    localStorage.setItem('text', 'screen');
    localStorage.setItem('moduleId', '51');
    localStorage.setItem('isloggedin', 'T');
    localStorage.setItem('Subscriber', '1');
    localStorage.setItem('wisdomstories', JSON.stringify([]));
    localStorage.setItem('mediaAudio', JSON.stringify('https://cdn.example/'));

    TestBed.configureTestingModule({
      declarations: [S51000Page],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: CommonService, useValue: mockCommonService },
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    });

    fixture = TestBed.createComponent(S51000Page);
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

    it('should call setmoduleID with 51', () => {
      expect(mockCommonService.setmoduleID).toHaveBeenCalledWith(51);
    });

    it('should call GetAudioMeditation and set audiomeditation filtered by ProgramId', () => {
      expect(mockCommonService.GetAudioMeditation).toHaveBeenCalled();
      expect(component.audiomeditation.length).toBe(1);
      expect(component.audiomeditation[0].Title).toBe('Calm');
    });

    it('should set isAdults from SharedService.ProgramId', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isSubscriber when user is logged in and Subscriber is 1', () => {
      expect(component.isSubscriber).toBe(true);
    });
  });

  describe('ngOnInit', () => {
    it('should set title and meta tags', () => {
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Relaxation Meditations for Sleep and Calmness');
      expect(mockMeta.updateTag).toHaveBeenCalled();
    });

    it('should call createScreen', () => {
      expect(mockCommonService.createScreen).toHaveBeenCalled();
    });
  });

  describe('goBack', () => {
    it('should call location.back when navigateToBackLink returns null', () => {
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });

    it('should navigate to url when navigateToBackLink returns a url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/toc');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/toc']);
    });
  });

  describe('toggleBookmark', () => {
    it('should set bookmark to 1 when 0', () => {
      component.bookmark = 0;
      component.toggleBookmark();
      expect(component.bookmark).toBe(1);
    });

    it('should set bookmark to 0 when 1', () => {
      component.bookmark = 1;
      component.toggleBookmark();
      expect(component.bookmark).toBe(0);
    });
  });

  describe('routeJournal', () => {
    it('should navigate to adults journal', () => {
      component.routeJournal();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
    });
  });

  describe('searchAudio', () => {
    it('when empty string should set audiomeditation to allaudiomeditation', () => {
      component.audiomeditation = [];
      component.searchAudio('');
      expect(component.audiomeditation).toEqual(component.allaudiomeditation);
    });

    it('when non-empty should filter by title or searchtags', () => {
      component.allaudiomeditation = [
        { Title: 'Calm', searchtags: 'sleep', RowID: 1, ProgIDs: ['9'], Text_URL: '', Timing: '', dailyPractiseID: 1 },
        { Title: 'Focus', searchtags: 'mind', RowID: 2, ProgIDs: ['9'], Text_URL: '', Timing: '', dailyPractiseID: 2 }
      ];
      component.audiomeditation = component.allaudiomeditation;
      component.searchAudio('Calm');
      expect(component.searchedText).toBe('Calm');
      expect(component.audiomeditation.length).toBe(1);
      expect(component.audiomeditation[0].Title).toBe('Calm');
    });
  });

  describe('getimage', () => {
    it('should pad id <= 9 with zero', () => {
      expect(component.getimage(5)).toContain('05.webp');
    });

    it('should not pad id > 9', () => {
      expect(component.getimage(10)).toContain('10.webp');
    });
  });

  describe('shareUrl', () => {
    it('should set baseUrl to AdultsBaseUrl for Adults program', () => {
      component.shareUrl(ProgramType.Adults);
      expect(component.baseUrl).toBe('https://adults.example/');
    });

    it('should set baseUrl to TeenagerBaseUrl for Teenagers program', () => {
      component.shareUrl(ProgramType.Teenagers);
      expect(component.baseUrl).toBe('https://teenagers.example/');
    });
  });

  describe('onModalClose', () => {
    it('should set showModal false', () => {
      component.showModal = true;
      component.onModalClose('cancel');
      expect(component.showModal).toBe(false);
    });

    it('when event is ok should navigate to free trial', () => {
      component.showModal = true;
      component.onModalClose('ok');
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults', 'subscription', 'start-your-free-trial']);
    });
  });
});
