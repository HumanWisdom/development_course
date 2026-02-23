import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngerPage } from './anger.page';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { ProgramType } from '../../../../shared/models/program-model';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';

describe('AngerPage', () => {
  let component: AngerPage;
  let fixture: ComponentFixture<AngerPage>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockProgramId: any;

  beforeEach(async () => {
    localStorage.setItem('mediaAudio', JSON.stringify('https://example.com/audio'));
    localStorage.setItem('Subscriber', '0');
    localStorage.setItem('isloggedin', 'F');

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/feel-better-now/anger',
      configurable: true
    });

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    Object.defineProperty(SharedService, 'isIos', {
      get: () => false,
      configurable: true
    });
    spyOn(SharedService, 'getScreenConfiguration').and.returnValue({
      moduleName: 'Soundscapes',
      preferenceData: []
    } as any);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    await TestBed.configureTestingModule({
      declarations: [AngerPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: Router, useValue: mockRouter },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AngerPage);
    component = fixture.componentInstance;

    // Mock ViewChild enablepopup
    component.enablepopup = { nativeElement: { click: jasmine.createSpy('click') } } as ElementRef;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(AngerPage);
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
      fixture = TestBed.createComponent(AngerPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });

    it('should set isSubscribed to true when Subscriber is 1', () => {
      localStorage.setItem('Subscriber', '1');
      fixture = TestBed.createComponent(AngerPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isSubscribed).toBe(true);
    });

    it('should set isSubscribed to true when Subscriber is T', () => {
      localStorage.setItem('Subscriber', 'T');
      fixture = TestBed.createComponent(AngerPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isSubscribed).toBe(true);
    });
  });

  describe('getclcickevent', () => {
    it('should trigger enablepopup click when event is enablepopup', () => {
      component.enablepopup = { nativeElement: { click: jasmine.createSpy('click') } } as ElementRef;

      component.getclcickevent('enablepopup');

      expect(component.enablepopup.nativeElement.click).toHaveBeenCalled();
    });

    it('should not trigger click when event is not enablepopup', () => {
      const clickSpy = jasmine.createSpy('click');
      component.enablepopup = { nativeElement: { click: clickSpy } } as ElementRef;

      component.getclcickevent('other');

      expect(clickSpy).not.toHaveBeenCalled();
    });
  });

  describe('goBack', () => {
    it('should navigate to back link when navigateToBackLink returns url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/back-url');

      component.goBack();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/back-url']);
    });

    it('should call defaultGoBack when navigateToBackLink returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);

      component.goBack();

      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('defaultGoBack', () => {
    it('should navigate to feel-better-now route', () => {
      component.defaultGoBack();

      expect(mockRouter.navigate).toHaveBeenCalled();
      const navArgs = mockRouter.navigate.calls.mostRecent().args[0];
      expect(
        navArgs[0] === '/adults/feel-better-now' || navArgs[0] === '/teenagers/feel-better-now'
      ).toBe(true);
    });
  });

  describe('routeVideoaudio', () => {
    it('should navigate to trial when not logged in', () => {
      localStorage.setItem('isloggedin', 'F');
      component.isSubscribed = false;

      component.routeVideoaudio('video', '/url', 'title');

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should navigate to trial when not subscribed', () => {
      localStorage.setItem('isloggedin', 'T');
      component.isSubscribed = false;

      component.routeVideoaudio('video', '/url', 'title');

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should navigate to videopage for video type when subscribed', () => {
      localStorage.setItem('isloggedin', 'T');
      component.isSubscribed = true;

      component.routeVideoaudio('video', '/some-video-url', 'My Title');

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/some-video-url', 'F', 'My Title']);
    });

    it('should navigate to audiopage for audio type when subscribed (Adults)', () => {
      localStorage.setItem('isloggedin', 'T');
      component.isSubscribed = true;
      mockProgramId = ProgramType.Adults;

      component.routeVideoaudio('audio', 'https://example.com/audio/file.mp3', 'Audio Title');

      expect(mockRouter.navigate).toHaveBeenCalled();
      const args = mockRouter.navigate.calls.mostRecent().args[0];
      expect(args[0]).toContain('audiopage');
      expect(args[2]).toBe('1');
    });

    it('should navigate to feel-better-now for page type when subscribed', () => {
      localStorage.setItem('isloggedin', 'T');
      component.isSubscribed = true;

      component.routeVideoaudio('page', 'anger-at', '');

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/feel-better-now', 'anger-at']);
    });

    it('should prevent default when event is passed', () => {
      const mockEvent = { preventDefault: jasmine.createSpy(), stopPropagation: jasmine.createSpy() } as any;
      component.isSubscribed = true;

      component.routeVideoaudio('video', '/url', 'title', mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('determineVideoUrl', () => {
    it('should return teenagers videopage URL when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });

      const result = component.determineVideoUrl('video-123');

      expect(result).toBe('/teenagers/videopage/video-123');
    });

    it('should return adults videopage URL when ProgramId is Adults', () => {
      const result = component.determineVideoUrl('video-123');

      expect(result).toBe('/adults/videopage/video-123');
    });
  });

  describe('determineRouterLink', () => {
    it('should navigate to trial when not subscribed', () => {
      component.isSubscribed = false;

      component.determineRouterLink('feel-better-now');

      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/subscription/start-your-free-trial');
    });

    it('should navigate to adults path when subscribed', () => {
      component.isSubscribed = true;

      component.determineRouterLink('feel-better-now');

      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/feel-better-now');
    });

    it('should navigate to teenagers path when subscribed and ProgramId is Teenagers', () => {
      component.isSubscribed = true;
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });

      component.determineRouterLink('feel-better-now');

      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/teenagers/feel-better-now');
    });
  });

  describe('determinePathway', () => {
    it('should navigate to adults path', () => {
      component.determinePathway('pathway/calm');

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/pathway/calm']);
    });

    it('should navigate to teenagers path when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });

      component.determinePathway('pathway/calm');

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/pathway/calm']);
    });
  });

  describe('getClickEvent', () => {
    it('should navigate to trial when not subscribed', () => {
      component.isSubscribed = false;
      component.config = { moduleName: 'Soundscapes' };

      component.getClickEvent({ MediaUrl: 'https://example.com/audio', Title: 'Test', SoundscapeID: '1' });

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should navigate to audiopage when subscribed', () => {
      component.isSubscribed = true;
      component.config = { moduleName: 'Soundscapes' };

      component.getClickEvent({
        MediaUrl: 'https://d1tenzemoxuh75.cloudfront.net/audio/file.mp3',
        Title: 'Test Audio',
        SoundscapeID: '1'
      });

      expect(mockRouter.navigate).toHaveBeenCalled();
      const args = mockRouter.navigate.calls.mostRecent().args[0];
      expect(args[0]).toContain('audiopage');
      expect(args[2]).toBe('1');
      expect(args[3]).toBe('T');
    });
  });
});
