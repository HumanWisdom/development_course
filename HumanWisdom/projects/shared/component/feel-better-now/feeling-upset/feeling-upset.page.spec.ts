import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeelingUpsetPage } from './feeling-upset.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../../../services/navigation.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeelingUpsetPage', () => {
  let component: FeelingUpsetPage;
  let fixture: ComponentFixture<FeelingUpsetPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let originalProgramId: PropertyDescriptor | undefined;
  let originalIsIos: PropertyDescriptor | undefined;

  const mockScreenConfig = {
    moduleName: 'Soundscapes',
    shortDescription: 'Test',
    preferenceData: [],
    apiMethod: 'getSoundsCapesList',
    filterByProgramId: 'ProgIDs',
    sort: null,
    transform: null,
    localStorageKey: 'soundsCapes',
    shareBaseUrl: 'https://happierme.app',
    shareTitle: 'HappierMe Program',
    shareText: 'Hey, check out the HappierMe Program',
    checkIsFreeMethod: 'CheckShortsIsFree',
    tocImage: 'test.webp',
    searchFields: ['Title', 'searchtags'],
    videoUrlField: 'VideoUrl',
    titleField: 'Title'
  };

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    originalIsIos = Object.getOwnPropertyDescriptor(SharedService, 'isIos');

    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });
    Object.defineProperty(SharedService, 'isIos', {
      value: false,
      writable: true,
      configurable: true
    });

    spyOn(SharedService, 'getScreenConfiguration').and.returnValue(mockScreenConfig);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    (mockRouter as any).url = '/adults/feel-better-now/feeling-upset';

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('Subscriber', '1');
    localStorage.setItem('isloggedin', 'T');

    TestBed.configureTestingModule({
      declarations: [FeelingUpsetPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    });

    fixture = TestBed.createComponent(FeelingUpsetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    if (originalIsIos) {
      Object.defineProperty(SharedService, 'isIos', originalIsIos);
    }
    localStorage.clear();
    sessionStorage.clear();
  });

  describe('component creation and constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call getScreenConfiguration with SoundCapes in constructor', () => {
      expect(SharedService.getScreenConfiguration).toHaveBeenCalledWith('SoundCapes');
    });

    it('should set config from getScreenConfiguration', () => {
      expect(component.config).toEqual(mockScreenConfig);
    });

    it('should set mediaUrl with url and youtubeUrl', () => {
      expect(component.mediaUrl).toBeDefined();
      expect(component.mediaUrl.url).toContain('guided-meditation');
      expect(component.mediaUrl.youtubeUrl).toBe('b5PZ6fFCL3g');
    });
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });

    it('should set isSubscribed to true when Subscriber is 1', () => {
      localStorage.setItem('Subscriber', '1');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isSubscribed).toBe(true);
    });

    it('should set isSubscribed to true when Subscriber is T', () => {
      localStorage.setItem('Subscriber', 'T');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isSubscribed).toBe(true);
    });

    it('should set isSubscribed to false when Subscriber is not 1 or T', () => {
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isSubscribed).toBe(false);
    });

    it('should set isIOS from SharedService.isIos', () => {
      Object.defineProperty(SharedService, 'isIos', {
        value: true,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isIOS).toBe(true);
    });
  });

  describe('routeToYoutube', () => {
    it('should navigate to teenagers youtubelink when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.routeToYoutube('abc123');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/feel-better-now/feeling-upset/youtubelink/', 'abc123']);
    });

    it('should navigate to adults youtubelink when ProgramId is Adults', () => {
      component.routeToYoutube('xyz789');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/feel-better-now/feeling-upset/youtubelink/', 'xyz789']);
    });
  });

  describe('getclcickevent', () => {
    it('should click enablepopup when event is enablepopup', () => {
      const clickSpy = jasmine.createSpy('click');
      component.enablepopup = { nativeElement: { click: clickSpy } } as any;
      component.getclcickevent('enablepopup');
      expect(clickSpy).toHaveBeenCalled();
    });

    it('should not click when event is not enablepopup', () => {
      const clickSpy = jasmine.createSpy('click');
      component.enablepopup = { nativeElement: { click: clickSpy } } as any;
      component.getclcickevent('other');
      expect(clickSpy).not.toHaveBeenCalled();
    });
  });

  describe('defaultGoBack', () => {
    it('should navigate to feel-better-now based on current url', () => {
      component.defaultGoBack();
      expect(mockRouter.navigate).toHaveBeenCalled();
      const navArgs = mockRouter.navigate.calls.mostRecent().args[0];
      expect([
        ['/adults/feel-better-now'],
        ['/teenagers/feel-better-now']
      ]).toContain(navArgs);
    });
  });

  describe('goBack', () => {
    it('should call defaultGoBack when navigateToBackLink returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      spyOn(component, 'defaultGoBack');
      component.goBack();
      expect(component.defaultGoBack).toHaveBeenCalled();
    });

    it('should navigate to url when navigateToBackLink returns a path', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/toc');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/toc']);
    });
  });

  describe('routeVideoaudio', () => {
    it('should preventDefault and stopPropagation when event is provided', () => {
      const event = { preventDefault: jasmine.createSpy(), stopPropagation: jasmine.createSpy() } as any;
      component.routeVideoaudio('video', '/adults/videopage/test', 'Title', event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('should navigate to trial when not logged in', () => {
      localStorage.setItem('isloggedin', 'F');
      component.routeVideoaudio('video', '/adults/videopage/test', 'Title');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should navigate to trial when not subscribed', () => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.routeVideoaudio('video', '/adults/videopage/test', 'Title');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should navigate to teenagers trial when router url includes teenagers and not subscribed', () => {
      (mockRouter as any).url = '/teenagers/feel-better-now/feeling-upset';
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.routeVideoaudio('video', '/test', 'Title');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/subscription/start-your-free-trial']);
    });

    it('should navigate for type video when logged in and subscribed', () => {
      component.routeVideoaudio('video', '/adults/videopage/breathing-videos-1.6.mp4', 'Hand on chest');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/videopage/breathing-videos-1.6.mp4', 'F', 'Hand on chest']);
    });

    it('should navigate for type audio when Adults', () => {
      component.routeVideoaudio('audio', '/guided-meditation/audios/test.mp3', 'Manage expectations');
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        'adults/audiopage/',
        encodeURIComponent('/guided-meditation/audios/test.mp3'.split('/').join('~')),
        '1',
        'F',
        'Manage expectations'
      ]);
    });

    it('should navigate for type audio when Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.routeVideoaudio('audio', '/guided-meditation/audios/test.mp3', 'Title');
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        '/teenagers/audiopage/',
        encodeURIComponent('/guided-meditation/audios/test.mp3'.split('/').join('~')),
        '1',
        'F',
        'Title'
      ]);
    });

    it('should navigate for type page when Adults', () => {
      component.routeVideoaudio('page', 'feeling-upset-at');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/feel-better-now', 'feeling-upset-at']);
    });

    it('should navigate for type page when Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.routeVideoaudio('page', 'feeling-upset-at');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/feel-better-now', 'feeling-upset-at']);
    });
  });

  describe('determineVideoUrl', () => {
    it('should return teenagers videopage url when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      const url = component.determineVideoUrl('breathing-videos-1.6.mp4');
      expect(url).toBe('/teenagers/videopage/breathing-videos-1.6.mp4');
    });

    it('should return adults videopage url when ProgramId is Adults', () => {
      const url = component.determineVideoUrl('breathing-videos-1.6.mp4');
      expect(url).toBe('/adults/videopage/breathing-videos-1.6.mp4');
    });
  });

  describe('determineRouterLink', () => {
    it('should navigate to teenagers trial when not subscribed and Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.determineRouterLink('wisdom-shorts/1.53.mp4/T/Title');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/teenagers/subscription/start-your-free-trial');
    });

    it('should navigate to adults trial when not subscribed and Adults', () => {
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.determineRouterLink('meditation');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/subscription/start-your-free-trial');
    });

    it('should navigate to teenagers url when subscribed and Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      localStorage.setItem('Subscriber', '1');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.determineRouterLink('wisdom-shorts/1.53.mp4/T/Title');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/teenagers/wisdom-shorts/1.53.mp4/T/Title');
    });

    it('should navigate to adults url when subscribed and Adults', () => {
      component.determineRouterLink('meditation');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/meditation');
    });
  });

  describe('determinePathway', () => {
    it('should navigate to teenagers path when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.determinePathway('pathway/index');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/pathway/index']);
    });

    it('should navigate to adults path when ProgramId is Adults', () => {
      component.determinePathway('pathway/index');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/pathway/index']);
    });
  });

  describe('getClickEvent', () => {
    it('should navigate to trial when not subscribed', () => {
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.getClickEvent({
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/soundscapes/13.mp3',
        SoundscapeID: 13,
        Title: 'Restful Rhythm'
      });
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should navigate to teenagers trial when not subscribed and teenagers route', () => {
      (mockRouter as any).url = '/teenagers/feel-better-now/feeling-upset';
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(FeelingUpsetPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      component.getClickEvent({
        MediaUrl: 'https://test.com/audio.mp3',
        SoundscapeID: 1,
        Title: 'Test'
      });
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/subscription/start-your-free-trial']);
    });

    it('should navigate to audiopage when subscribed with cloudfront MediaUrl', () => {
      const data = {
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/soundscapes/13.mp3',
        SoundscapeID: 13,
        Title: 'Restful Rhythm'
      };
      component.getClickEvent(data);
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        'adults/audiopage/',
        encodeURIComponent('~soundscapes~13.mp3'),
        13,
        'T',
        'Restful-Rhythm',
        'Soundscapes'
      ]);
    });

    it('should replace cloudfront prefix in MediaUrl when building concat', () => {
      const data = {
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/soundscapes/13.mp3',
        SoundscapeID: 13,
        Title: 'Restful Rhythm'
      };
      component.getClickEvent(data);
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        jasmine.arrayContaining([
          jasmine.any(String),
          encodeURIComponent('~soundscapes~13.mp3'),
          13,
          'T',
          'Restful-Rhythm',
          'Soundscapes'
        ])
      );
    });

    it('should use config moduleName when config is set', () => {
      component.config = { moduleName: 'CustomModule' };
      component.getClickEvent({
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/soundscapes/13.mp3',
        SoundscapeID: 13,
        Title: 'Restful Rhythm'
      });
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        jasmine.arrayContaining([jasmine.any(String), jasmine.any(String), 13, 'T', 'Restful-Rhythm', 'CustomModule'])
      );
    });

    it('should use Soundscapes as moduleName when config has no moduleName', () => {
      component.config = {};
      component.getClickEvent({
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/soundscapes/13.mp3',
        SoundscapeID: 13,
        Title: 'Restful Rhythm'
      });
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        jasmine.arrayContaining([jasmine.any(String), jasmine.any(String), 13, 'T', 'Restful-Rhythm', 'Soundscapes'])
      );
    });

    it('should handle Title with spaces by replacing with hyphens', () => {
      component.getClickEvent({
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/soundscapes/13.mp3',
        SoundscapeID: 13,
        Title: 'Restful Rhythm Test'
      });
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        jasmine.arrayContaining([jasmine.any(String), jasmine.any(String), 13, 'T', 'Restful-Rhythm-Test', 'Soundscapes'])
      );
    });

    it('should handle MediaUrl without cloudfront prefix', () => {
      component.getClickEvent({
        MediaUrl: 'https://other-cdn.com/audio/14.mp3',
        SoundscapeID: 14,
        Title: 'Custom-Sound'
      });
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        jasmine.arrayContaining([
          jasmine.any(String),
          encodeURIComponent('https://other-cdn.com/audio/14.mp3'.replaceAll('/', '~')),
          14,
          'T',
          'Custom-Sound',
          jasmine.any(String)
        ])
      );
    });

    it('should handle data with undefined Title', () => {
      component.getClickEvent({
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/soundscapes/13.mp3',
        SoundscapeID: 13
      });
      expect(mockRouter.navigate).toHaveBeenCalled();
      const navArgs = mockRouter.navigate.calls.mostRecent().args[0];
      expect(navArgs[4]).toBeUndefined();
    });
  });

  describe('constructor with localStorage', () => {
    it('should handle missing mediaAudio in localStorage', () => {
      localStorage.removeItem('mediaAudio');
      expect(() => TestBed.createComponent(FeelingUpsetPage)).not.toThrow();
    });

    it('should handle null mediaAudio in localStorage', () => {
      localStorage.setItem('mediaAudio', 'null');
      const comp = TestBed.createComponent(FeelingUpsetPage).componentInstance;
      expect(comp.mediaAudio).toBeNull();
    });
  });
});
