import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WisdomShortsIndexPage } from './wisdom-shorts-index.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from '../../../services/common.service';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationService } from '../../../services/navigation.service';
import { Platform } from '@angular/cdk/platform';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WisdomShortsIndexPage', () => {
  let component: WisdomShortsIndexPage;
  let fixture: ComponentFixture<WisdomShortsIndexPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: { snapshot: { fragment: string | null } };
  let mockLocation: jasmine.SpyObj<Location>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockPlatform: jasmine.SpyObj<Platform>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockProgramId: number;

  const mockRouterUrl = '/adults/wisdom-shorts';

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: { fragment: null }
    };

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      url: mockRouterUrl
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => mockRouterUrl,
      configurable: true
    });

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    mockCommonService = jasmine.createSpyObj('CommonService', ['GetWisdomShorts', 'clickShorts', 'CheckShortsIsFree']);
    mockCommonService.GetWisdomShorts.and.returnValue(of([]));
    mockCommonService.clickShorts.and.returnValue(of({}));
    mockCommonService.CheckShortsIsFree.and.returnValue(of(true));

    mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockPlatform = jasmine.createSpyObj('Platform', [], {
      IOS: false,
      ANDROID: false
    });

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getPreferenceData').and.returnValue([
      { id: '1', displayName: 'All', active: false, name: 'all' },
      { id: '2', displayName: 'Voices', active: false, name: 'voices' }
    ]);

    await TestBed.configureTestingModule({
      declarations: [WisdomShortsIndexPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation },
        { provide: CommonService, useValue: mockCommonService },
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: Platform, useValue: mockPlatform },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomShortsIndexPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set address from router.url', () => {
      expect(component.address).toBe(mockRouterUrl);
    });

    it('should set prefData from SharedService.getPreferenceData', () => {
      expect(component.prefData).toBeDefined();
      expect(SharedService.getPreferenceData).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(WisdomShortsIndexPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(WisdomShortsIndexPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });

    it('should set isSubscriber to true when user is logged in and subscriber', () => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
      component.ngOnInit();
      expect(component.isSubscriber).toBe(true);
    });

    it('should set isSubscriber to false when user is not logged in or not subscriber', () => {
      localStorage.setItem('isloggedin', 'F');
      localStorage.setItem('Subscriber', '0');
      component.ngOnInit();
      expect(component.isSubscriber).toBe(false);
    });

    it('should set meta tags for Adults program', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.ngOnInit();
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Inspiring Shorts for Adults');
      expect(mockMeta.updateTag).toHaveBeenCalled();
    });

    it('should set meta tags for Teenagers program', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.ngOnInit();
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Inspiring Shorts for Teenagers');
    });

    it('should call getwisdomshorts', () => {
      spyOn(component, 'getwisdomshorts');
      component.ngOnInit();
      expect(component.getwisdomshorts).toHaveBeenCalled();
    });
  });

  describe('getwisdomshorts', () => {
    it('should filter wisdom shorts by ProgramId and set allwisdomshorts', fakeAsync(() => {
      const mockShorts = [
        { ProgIDs: [ProgramType.Adults], Title: 'Adult Short', PreferenceIDs: '1', searchtags: '' },
        { ProgIDs: [ProgramType.Teenagers], Title: 'Teen Short', PreferenceIDs: '2', searchtags: '' },
        { ProgIDs: [ProgramType.Adults], Title: 'Another Adult Short', PreferenceIDs: '1', searchtags: '' }
      ];
      mockCommonService.GetWisdomShorts.and.returnValue(of(mockShorts));

      component.getwisdomshorts();
      tick();

      expect(component.allwisdomshorts.length).toBe(2);
      expect(component.allwisdomshorts.some((s: any) => s.Title === 'Adult Short')).toBe(true);
    }));

    it('should set wisdomShortData in localStorage', fakeAsync(() => {
      const mockShorts = [
        { ProgIDs: [ProgramType.Adults], Title: 'Test Short', PreferenceIDs: '', searchtags: '' }
      ];
      mockCommonService.GetWisdomShorts.and.returnValue(of(mockShorts));

      component.getwisdomshorts();
      tick();

      const stored = JSON.parse(localStorage.getItem('wisdomShortData') || '[]');
      expect(stored.length).toBeGreaterThan(0);
    }));

    it('should call getUserPref with fragment when fragment exists', fakeAsync(() => {
      mockActivatedRoute.snapshot.fragment = 'voices';
      spyOn(component, 'getUserPref');
      const mockShorts = [
        { ProgIDs: [ProgramType.Adults], Title: 'Test Short', PreferenceIDs: '1', searchtags: '' }
      ];
      mockCommonService.GetWisdomShorts.and.returnValue(of(mockShorts));

      component.getwisdomshorts();
      tick(300);

      // prefData from constructor has Voices with id '2'; fragment 'voices' triggers getUserPref(match.id)
      expect(component.getUserPref).toHaveBeenCalledWith('2');
    }));
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
    it('should call ngNavigatorShareService.share with correct url', async () => {
      component.address = '/adults/wisdom-shorts';
      await component.share();
      expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith({
        title: 'HappierMe Program',
        text: 'Hey, check out the HappierMe Program',
        url: 'https://happierme.app/adults/wisdom-shorts'
      });
    });
  });

  describe('wisdoshortsevent', () => {
    it('should navigate to video when short is free', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
      const video = '/adults/wisdom-shorts/video.123.mp4';
      const title = 'Test Title';
      const val = { IsVoices: '0' };
      mockCommonService.CheckShortsIsFree.and.returnValue(of(true));

      component.wisdoshortsevent(val, video, title);
      tick();

      expect(localStorage.getItem('fromIndex')).toBe('true');
      expect(mockRouter.navigate).toHaveBeenCalled();
    }));

    it('should show modal when user is not subscriber and short is not free', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'F');
      localStorage.setItem('Subscriber', '0');
      const video = '/adults/wisdom-shorts/video.123.mp4';
      const title = 'Test Title';
      const val = { IsVoices: '0' };
      mockCommonService.CheckShortsIsFree.and.returnValue(of(false));

      component.wisdoshortsevent(val, video, title);
      tick();

      expect(component.showModal).toBe(true);
    }));

    it('should call clickShorts when id is extracted', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
      const video = '/adults/wisdom-shorts/video.123.mp4';
      const title = 'Test Title';
      const val = { IsVoices: '0' };
      mockCommonService.CheckShortsIsFree.and.returnValue(of(true));

      component.wisdoshortsevent(val, video, title);
      tick();

      expect(mockCommonService.clickShorts).toHaveBeenCalledWith(123);
    }));

    it('should pass queryParams pref voices when IsVoices is 1', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
      const video = '/adults/wisdom-shorts/video.99.mp4';
      const title = 'Voices Title';
      const val = { IsVoices: '1' };
      mockCommonService.CheckShortsIsFree.and.returnValue(of(true));

      component.wisdoshortsevent(val, video, title);
      tick();

      expect(mockRouter.navigate).toHaveBeenCalledWith(
        jasmine.any(Array),
        jasmine.objectContaining({ queryParams: { pref: 'voices' } })
      );
    }));
  });

  describe('extractShortIdFromUrl', () => {
    it('should extract ID from URL with extension pattern', () => {
      const url = '/path/to/video.123.mp4';
      const result = (component as any).extractShortIdFromUrl(url);
      expect(result).toBe(123);
    });

    it('should extract ID from filename with dots', () => {
      const url = '/path/video.456.test.mp4';
      const result = (component as any).extractShortIdFromUrl(url);
      expect(result).toBe(456);
    });

    it('should return null for empty URL', () => {
      const result = (component as any).extractShortIdFromUrl('');
      expect(result).toBeNull();
    });

    it('should strip query string before parsing', () => {
      const url = '/path/video.789.mp4?t=123';
      const result = (component as any).extractShortIdFromUrl(url);
      expect(result).toBe(789);
    });
  });

  describe('searchShorts', () => {
    beforeEach(() => {
      component.allwisdomshorts = [
        { Title: 'Test Video', searchtags: 'test, video' },
        { Title: 'Another Video', searchtags: 'another' },
        { Title: 'Sample Content', searchtags: 'sample' }
      ] as any;
    });

    it('should set wisdomshorts to allwisdomshorts when search is empty', () => {
      component.searchShorts('');
      expect(component.wisdomshorts).toEqual(component.allwisdomshorts);
    });

    it('should filter by title', () => {
      component.searchShorts('Test');
      expect(component.wisdomshorts.length).toBe(1);
      expect(component.wisdomshorts[0].Title).toBe('Test Video');
    });

    it('should filter by searchtags', () => {
      component.searchShorts('sample');
      expect(component.wisdomshorts.length).toBe(1);
      expect(component.wisdomshorts[0].Title).toBe('Sample Content');
    });

    it('should be case insensitive', () => {
      component.searchShorts('TEST');
      expect(component.wisdomshorts.length).toBe(1);
    });
  });

  describe('getUserPref', () => {
    beforeEach(() => {
      component.allwisdomshorts = [
        { Title: 'Short 1', PreferenceIDs: '1', IsVoices: '0' },
        { Title: 'Short 2', PreferenceIDs: '2', IsVoices: '0' },
        { Title: 'Short 3', IsVoices: '1' },
        { Title: 'Short 4' }
      ] as any;
    });

    it('should set all wisdomshorts when type is all', () => {
      component.getUserPref('all');
      expect(component.wisdomshorts).toEqual(component.allwisdomshorts);
      expect(component.selectedPref).toBe('all');
    });

    it('should filter by IsVoices when type is voices', () => {
      component.getUserPref('voices');
      expect(component.wisdomshorts.length).toBe(1);
      expect(component.wisdomshorts[0].IsVoices).toBe('1');
    });

    it('should filter by PreferenceIDs when type is specific ID', () => {
      component.getUserPref('1');
      expect(component.wisdomshorts.length).toBe(1);
      expect(component.wisdomshorts[0].PreferenceIDs).toContain('1');
    });

    it('should filter items without PreferenceIDs when type is 0', () => {
      component.getUserPref('0');
      expect(component.wisdomshorts.length).toBe(2);
      const titles = component.wisdomshorts.map((s: any) => s.Title);
      expect(titles).toContain('Short 3');
      expect(titles).toContain('Short 4');
    });
  });

  describe('onModalClose', () => {
    it('should close modal and navigate to free trial when event is ok', () => {
      component.showModal = true;
      component.onModalClose('ok');
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults', 'subscription', 'start-your-free-trial']);
    });

    it('should only close modal when event is not ok', () => {
      component.showModal = true;
      component.onModalClose('close');
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });
});
