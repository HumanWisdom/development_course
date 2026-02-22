import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PodcastTocPage } from './podcast-toc.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { Meta, Title } from '@angular/platform-browser';
import { LogEventService } from '../../../services/log-event.service';
import { CommonService } from '../../../services/common.service';
import { SharedService } from '../../../services/shared.service';
import { NavigationService } from '../../../services/navigation.service';
import { of } from 'rxjs';
import { ProgramType } from '../../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PodcastTocPage', () => {
  let component: PodcastTocPage;
  let fixture: ComponentFixture<PodcastTocPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: { snapshot: { paramMap: { get: jasmine.Spy }; fragment: string | null } };
  let mockLocation: jasmine.SpyObj<Location>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockSanitizer: jasmine.SpyObj<DomSanitizer>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockProgramId: number;

  const mockPodcastList = [
    {
      PodcastID: 1,
      Title: 'Podcast 1',
      MediaUrl: 'https://test.com/audio1.mp3',
      ProgIDs: ['9'],
      PreferenceIDs: '1,2',
      searchtags: 'tag1',
      isFree: '1',
      IsMiniPodcast: '0'
    },
    {
      PodcastID: 2,
      Title: 'Podcast 2',
      MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/path/audio2.mp3',
      ProgIDs: ['9'],
      PreferenceIDs: '3',
      searchtags: 'tag2',
      isFree: '0',
      IsMiniPodcast: '0'
    }
  ];

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/podcast',
      configurable: true
    });

    const paramMapGet = jasmine.createSpy('get').and.returnValue('all');
    mockActivatedRoute = {
      snapshot: {
        paramMap: { get: paramMapGet },
        fragment: null
      }
    };

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
    mockSanitizer.bypassSecurityTrustResourceUrl.and.callFake((url: string) => url as any);

    mockCommonService = jasmine.createSpyObj('CommonService', ['GetPodcastList', 'clickPodcast']);
    mockCommonService.GetPodcastList.and.returnValue(of(mockPodcastList));
    mockCommonService.clickPodcast.and.returnValue(of(null));

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getPreferenceData').and.returnValue([
      { id: '1', displayName: 'Category1', active: false, name: 'cat1' },
      { id: '2', displayName: 'Category2', active: false, name: 'cat2' }
    ]);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    await TestBed.configureTestingModule({
      declarations: [PodcastTocPage],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: DomSanitizer, useValue: mockSanitizer },
        { provide: Platform, useValue: { IOS: false, SAFARI: false } },
        { provide: Meta, useValue: jasmine.createSpyObj('Meta', ['updateTag']) },
        { provide: Title, useValue: jasmine.createSpyObj('Title', ['setTitle']) },
        { provide: LogEventService, useValue: jasmine.createSpyObj('LogEventService', ['logEvent']) },
        { provide: CommonService, useValue: mockCommonService },
        { provide: NavigationService, useValue: mockNavigationService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastTocPage);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('isloggedin', 'T');
    localStorage.setItem('Subscriber', '1');
    localStorage.setItem('token', JSON.stringify('token'));
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(PodcastTocPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(PodcastTocPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set prefData from SharedService.getPreferenceData', () => {
      expect(component.prefData).toBeDefined();
      expect(SharedService.getPreferenceData).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('should call getPodcast and set address when isdefaultShow is false', fakeAsync(() => {
      component.isdefaultShow = false;
      component.ngOnInit();
      tick();
      expect(mockCommonService.GetPodcastList).toHaveBeenCalled();
      expect(component.address).toBe('/adults/podcast');
    }));

    it('should not call getPodcast when isdefaultShow is true', () => {
      component.isdefaultShow = true;
      component.ngOnInit();
      expect(mockCommonService.GetPodcastList).not.toHaveBeenCalled();
    });

    it('should set meta tags and log event', () => {
      const mockLogEventService = TestBed.inject(LogEventService) as jasmine.SpyObj<LogEventService>;
      component.isdefaultShow = true;
      component.ngOnInit();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('view_humanwisdom_podcast');
    });

    it('should set tag from route param when tag is sorrow', () => {
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('sorrow');
      component.isdefaultShow = true;
      component.ngOnInit();
      expect(component.tag).toBe('sorrow');
    });

    it('should set isSubscriber from localStorage', () => {
      localStorage.setItem('Subscriber', '1');
      component.ngOnInit();
      expect(component.isSubscriber).toBe(true);
    });

    it('should set isSubscriber to false when not subscriber', () => {
      localStorage.setItem('Subscriber', '0');
      component.ngOnInit();
      expect(component.isSubscriber).toBe(false);
    });
  });

  describe('goBack', () => {
    it('should navigate to back link when available', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/home');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
    });

    it('should call location.back when no back link', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('getPodcast', () => {
    it('should filter podcast list by ProgramId and set podcastList', fakeAsync(() => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(PodcastTocPage);
      component = fixture.componentInstance;
      component.getPodcast();
      tick();
      expect(component.podcastList.length).toBe(2);
      expect(component.allpodcastList.length).toBe(2);
    }));

    it('should call getUserPref with fragment when fragment matches', fakeAsync(() => {
      mockActivatedRoute.snapshot.fragment = 'category1';
      (SharedService.getPreferenceData as jasmine.Spy).and.returnValue([
        { id: '1', displayName: 'Category1', active: false, name: 'cat1' }
      ]);
      fixture = TestBed.createComponent(PodcastTocPage);
      component = fixture.componentInstance;
      spyOn(component, 'getUserPref');
      component.getPodcast();
      tick();
      expect(component.getUserPref).toHaveBeenCalledWith('1');
    }));
  });

  describe('audioevent', () => {
    it('should show modal when not subscriber and PodcastID >= 2', () => {
      localStorage.setItem('Subscriber', '0');
      const data = { PodcastID: 2, MediaUrl: 'url', Title: 'Title', isFree: '0' };
      component.audioevent(data);
      expect(component.showModal).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate when subscriber', fakeAsync(() => {
      localStorage.setItem('Subscriber', '1');
      const data = {
        PodcastID: 1,
        MediaUrl: '/path/audio.mp3',
        Title: 'My Podcast',
        isFree: '1'
      };
      component.audioevent(data);
      tick();
      expect(mockCommonService.clickPodcast).toHaveBeenCalledWith(1);
      expect(mockRouter.navigate).toHaveBeenCalled();
    }));

    it('should navigate when free podcast (PodcastID 1) and not subscriber', fakeAsync(() => {
      localStorage.setItem('Subscriber', '0');
      const data = {
        PodcastID: 1,
        MediaUrl: '/audio.mp3',
        Title: 'Free',
        isFree: '1'
      };
      component.audioevent(data);
      tick();
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalled();
    }));
  });

  describe('searchPodcast', () => {
    it('should filter list by search text', () => {
      component.allpodcastList = mockPodcastList as any;
      component.searchPodcast('Podcast 1');
      expect(component.podcastList.length).toBe(1);
      expect(component.podcastList[0].Title).toBe('Podcast 1');
    });

    it('should filter by searchtags', () => {
      component.allpodcastList = mockPodcastList as any;
      component.searchPodcast('tag2');
      expect(component.podcastList.length).toBe(1);
      expect(component.podcastList[0].Title).toBe('Podcast 2');
    });

    it('should reset to all when search is empty', () => {
      component.allpodcastList = mockPodcastList as any;
      component.searchPodcast('Podcast 1');
      component.searchPodcast('');
      expect(component.podcastList).toEqual(component.allpodcastList);
    });
  });

  describe('getimage', () => {
    it('should return url with padded id for id <= 9', () => {
      expect(component.getimage(5)).toContain('05.webp');
    });

    it('should return url with id as-is for id > 9', () => {
      expect(component.getimage(12)).toContain('12.webp');
    });
  });

  describe('getUserPref', () => {
    beforeEach(() => {
      component.allpodcastList = [...mockPodcastList] as any;
    });

    it('should show all when type is all', () => {
      component.getUserPref('all');
      expect(component.podcastList).toEqual(component.allpodcastList);
      expect(component.selectedPref).toBe('all');
    });

    it('should filter by PreferenceIDs when type matches', () => {
      component.getUserPref('1');
      expect(component.podcastList.length).toBe(1);
      expect(component.podcastList[0].PreferenceIDs).toContain('1');
    });

    it('should filter items without PreferenceIDs when type is 0', () => {
      component.allpodcastList = [
        ...mockPodcastList,
        { PodcastID: 3, PreferenceIDs: undefined, Title: 'No Pref' }
      ] as any;
      component.getUserPref('0');
      expect(component.podcastList.some((p: any) => !p.PreferenceIDs)).toBe(true);
    });

    it('should filter MiniPodcast when type is MiniPodcast', () => {
      component.allpodcastList = [
        ...mockPodcastList,
        { PodcastID: 3, IsMiniPodcast: '1', Title: 'Mini' }
      ] as any;
      component.getUserPref('MiniPodcast');
      expect(component.podcastList.every((p: any) => p.IsMiniPodcast === '1')).toBe(true);
    });
  });

  describe('share', () => {
    it('should call ngNavigatorShareService.share', async () => {
      component.address = '/adults/podcast';
      await component.share();
      expect(mockNgNavigatorShareService.share).toHaveBeenCalled();
      const args = mockNgNavigatorShareService.share.calls.mostRecent().args[0];
      expect(args.title).toBe('HappierMe Program');
      expect(args.text).toBe('Hey, check out the HappierMe Program');
      expect(typeof args.url).toBe('string');
    });
  });

  describe('onModalClose', () => {
    it('should close modal on any event', () => {
      component.showModal = true;
      component.onModalClose('close');
      expect(component.showModal).toBe(false);
    });

    it('should navigate to free trial when event is ok', () => {
      component.showModal = true;
      component.onModalClose('ok');
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults', 'subscription', 'start-your-free-trial']);
    });
  });

  describe('getSourceForPodBin', () => {
    it('should return all playlist url when tag is all', () => {
      component.tag = 'all';
      const result = component.getSourceForPodBin();
      expect(mockSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
      expect(mockSanitizer.bypassSecurityTrustResourceUrl.calls.mostRecent().args[0]).toContain('limit=100');
    });

    it('should return filtered url when tag is not all', () => {
      component.tag = 'sorrow';
      component.getSourceForPodBin();
      expect(mockSanitizer.bypassSecurityTrustResourceUrl.calls.mostRecent().args[0]).toContain('filter=tags');
    });
  });
});
