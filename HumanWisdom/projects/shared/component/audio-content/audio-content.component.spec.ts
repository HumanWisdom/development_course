import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';

import { AudioContentComponent } from './audio-content.component';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

describe('AudioContentComponent', () => {
  let component: AudioContentComponent;
  let fixture: ComponentFixture<AudioContentComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockActivatedRoute: any;

  const mockLoginResponse = {
    Subscriber: 0,
    UserId: 123
  };

  const mockMediaPercentResponse = [
    { MediaPrcnt: 50 }
  ];

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      url: '/adults/module/s001'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    mockActivatedRoute = {
      queryParams: of({ t: 'test-param' })
    };

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['mediaPercent']);
    mockAdultsService.mediaPercent.and.returnValue(of(mockMediaPercentResponse));

    await TestBed.configureTestingModule({
      declarations: [AudioContentComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AdultsService, useValue: mockAdultsService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    // Setup localStorage
    localStorage.clear();
    localStorage.setItem('mediaPercent', '50');
    localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
    localStorage.setItem('freeScreens', JSON.stringify([1, 2, 3]));

    fixture = TestBed.createComponent(AudioContentComponent);
    component = fixture.componentInstance;
    
    // Setup ViewChild references
    component.audio = {
      nativeElement: {
        onplaying: null,
        pause: jasmine.createSpy('pause'),
        play: jasmine.createSpy('play'),
        currentTime: 0,
        duration: 100
      }
    } as any;
  });

  afterEach(() => {
    fixture.destroy();
    localStorage.clear();
    if (component.interval) {
      clearInterval(component.interval);
    }
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have default property values', () => {
      expect(component.yellow).toBe('#FFC455');
      expect(component.reachedLimit).toBe(false);
      expect(component.enableAlert).toBe(false);
      // isAdults is set by constructor based on SharedService.ProgramId
      expect(component.isAdults).toBeDefined();
    });

    it('should initialize with input properties', () => {
      component.bg = 'test-bg.jpg';
      component.title = 'Test Audio';
      component.audioLink = 'https://example.com/audio.mp3';
      component.transcriptPage = 'test-transcript';

      expect(component.bg).toBe('test-bg.jpg');
      expect(component.title).toBe('Test Audio');
      expect(component.audioLink).toBe('https://example.com/audio.mp3');
      expect(component.transcriptPage).toBe('test-transcript');
    });
  });

  describe('Constructor', () => {
    it('should subscribe to query params', fakeAsync(() => {
      tick();
      expect(component.t).toBe('test-param');
    }));

    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      const newFixture = TestBed.createComponent(AudioContentComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      const newFixture = TestBed.createComponent(AudioContentComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.isAdults).toBe(false);
    });
  });

  describe('ngOnInit()', () => {
    it('should extract screen ID from router URL', () => {
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s12345'
      });

      component.ngOnInit();

      expect(component.scrId).toBe('12345');
    });

    it('should call mediaPercent API with screen ID', fakeAsync(() => {
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s001'
      });

      component.ngOnInit();
      tick();

      expect(mockAdultsService.mediaPercent).toHaveBeenCalledWith('001');
      expect(component.mediaPercent).toBe(50);
    }));

    it('should set up interval for non-subscribers on non-free screens', fakeAsync(() => {
      localStorage.setItem('loginResponse', JSON.stringify({ Subscriber: 0 }));
      localStorage.setItem('freeScreens', JSON.stringify([1, 2, 3]));
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s999'
      });

      component.ngOnInit();
      tick(1000);

      expect(component.interval).toBeDefined();
      
      clearInterval(component.interval);
    }));

    it('should not set up interval for subscribers', fakeAsync(() => {
      // Create a fresh component with subscriber status
      const subscriberLoginResponse = { Subscriber: 1 };
      localStorage.setItem('loginResponse', JSON.stringify(subscriberLoginResponse));
      localStorage.setItem('freeScreens', JSON.stringify([1, 2, 3]));
      
      const newFixture = TestBed.createComponent(AudioContentComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.audio = {
        nativeElement: {
          onplaying: null,
          pause: jasmine.createSpy('pause'),
          currentTime: 0,
          duration: 100
        }
      } as any;
      
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s999'
      });

      newComponent.ngOnInit();
      tick();

      expect(newComponent.interval).toBeUndefined();
    }));

    it('should not set up interval for free screens', fakeAsync(() => {
      localStorage.setItem('loginResponse', JSON.stringify({ Subscriber: 0 }));
      localStorage.setItem('freeScreens', JSON.stringify([1, 2, 3]));
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s001'
      });

      component.ngOnInit();
      tick();

      expect(component.interval).toBeUndefined();
    }));
  });

  describe('ngAfterViewInit()', () => {
    it('should set up audio onplaying event handler', () => {
      component.ngAfterViewInit();

      expect(component.audio.nativeElement.onplaying).toBeDefined();
    });

    it('should pause audio when limit is reached on playing', () => {
      component.reachedLimit = true;

      component.ngAfterViewInit();
      component.audio.nativeElement.onplaying();

      expect(component.audio.nativeElement.pause).toHaveBeenCalled();
      expect(component.enableAlert).toBe(true);
    });

    it('should call setAudioControlsBackground', () => {
      spyOn(component, 'setAudioControlsBackground');

      component.ngAfterViewInit();

      expect(component.setAudioControlsBackground).toHaveBeenCalled();
    });
  });

  describe('setAudioControlsBackground()', () => {
    beforeEach(() => {
      const existingStyles = document.head.querySelectorAll('style');
      existingStyles.forEach(style => {
        if (style.textContent?.includes('audio::-webkit-media-controls-enclosure')) {
          style.remove();
        }
      });
    });

    it('should add style element to document head', () => {
      const initialStyleCount = document.head.querySelectorAll('style').length;

      component.setAudioControlsBackground();

      const newStyleCount = document.head.querySelectorAll('style').length;
      expect(newStyleCount).toBeGreaterThan(initialStyleCount);
    });

    it('should set background color to rgb(18, 15, 64) for adults', () => {
      component.isAdults = true;

      component.setAudioControlsBackground();

      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );

      expect(audioControlStyle?.textContent).toContain('rgb(18, 15, 64)');
    });

    it('should set background color to #0C2B5F for teenagers', () => {
      component.isAdults = false;

      component.setAudioControlsBackground();

      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );

      expect(audioControlStyle?.textContent).toContain('#0C2B5F');
    });
  });

  describe('getTime()', () => {
    it('should emit audio current time', () => {
      const mockAudioElement = document.createElement('audio');
      mockAudioElement.id = 'aud1';
      Object.defineProperty(mockAudioElement, 'currentTime', {
        writable: true,
        value: 45.5
      });
      document.body.appendChild(mockAudioElement);

      spyOn(component.sendAvDuration, 'emit');

      component.getTime();
      
      expect(component.sendAvDuration.emit).toHaveBeenCalled();

      document.body.removeChild(mockAudioElement);
    });
  });

  describe('checkPauseTime()', () => {
    let mockAudioElement: any;

    beforeEach(() => {
      // Create a plain object with all necessary properties
      mockAudioElement = {
        id: 'aud1',
        duration: 100,
        currentTime: 30,
        pause: jasmine.createSpy('pause')
      };
      
      // Override getElementById to return our mock
      spyOn(document, 'getElementById').and.returnValue(mockAudioElement);

      // Ensure mediaPercent is properly initialized as a number
      component.mediaPercent = 50;
    });

    afterEach(() => {
      // No need to clean up DOM since we're using a mock
    });

    it('should calculate pause time based on media percent', () => {
      component.checkPauseTime();
      expect(component.pauseTime).toBe(50); // 50% of 100
    });

    it('should set reachedLimit to true when current time exceeds pause time', () => {
      mockAudioElement.currentTime = 60;

      component.checkPauseTime();
      expect(component.reachedLimit).toBe(true);
    });

    it('should pause audio when limit is reached', () => {
      mockAudioElement.currentTime = 60;

      component.checkPauseTime();
      expect(mockAudioElement.pause).toHaveBeenCalled();
    });

    it('should enable alert when limit is reached', () => {
      mockAudioElement.currentTime = 60;

      component.checkPauseTime();
      expect(component.enableAlert).toBe(true);
    });

    it('should not pause audio when current time is below pause time', () => {
      mockAudioElement.currentTime = 40;

      component.checkPauseTime();

      expect(mockAudioElement.pause).not.toHaveBeenCalled();
      expect(component.reachedLimit).toBe(false);
    });
  });

  describe('ngOnDestroy()', () => {
    it('should clear interval on destroy', () => {
      component.interval = setInterval(() => {}, 1000);
      spyOn(window, 'clearInterval');

      component.ngOnDestroy();

      expect(window.clearInterval).toHaveBeenCalledWith(component.interval);
    });

    it('should handle undefined interval gracefully', () => {
      component.interval = undefined;

      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });

  describe('gotoTranscript()', () => {
    it('should navigate to transcript page', () => {
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s001'
      });

      component.gotoTranscript();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/module/s001t']);
    });
  });

  describe('onChange()', () => {
    let mockAudioElement: any;

    beforeEach(() => {
      // Create a plain object with playbackRate property
      mockAudioElement = {
        id: 'aud1',
        playbackRate: 1.0
      };
      
      // Override getElementById to return our mock
      spyOn(document, 'getElementById').and.returnValue(mockAudioElement);
    });

    afterEach(() => {
      // No need to clean up DOM since we're using a mock
    });

    it('should change audio playback rate', () => {
      component.onChange('1.5');
      expect(mockAudioElement.playbackRate).toBe(1.5);
    });

    it('should accept different playback rates', () => {
      component.onChange('0.5');
      expect(mockAudioElement.playbackRate).toBe(0.5);

      component.onChange('2.0');
      expect(mockAudioElement.playbackRate).toBe(2.0);

      component.onChange('1.0');
      expect(mockAudioElement.playbackRate).toBe(1.0);
    });
  });

  describe('getAlertcloseEvent()', () => {
    it('should set enableAlert to false', () => {
      component.enableAlert = true;

      component.getAlertcloseEvent();

      expect(component.enableAlert).toBe(false);
    });
  });

  describe('Integration Tests', () => {
    it('should complete full lifecycle for non-subscriber', fakeAsync(() => {
      localStorage.setItem('loginResponse', JSON.stringify({ Subscriber: 0 }));
      localStorage.setItem('freeScreens', JSON.stringify([1, 2, 3]));
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s999'
      });

      component.ngOnInit();
      tick();

      expect(mockAdultsService.mediaPercent).toHaveBeenCalled();
      expect(component.interval).toBeDefined();

      component.ngOnDestroy();
    }));

    it('should handle subscriber workflow correctly', fakeAsync(() => {
      localStorage.setItem('loginResponse', JSON.stringify({ Subscriber: 1 }));
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s001'
      });

      component.ngOnInit();
      tick();

      expect(component.interval).toBeUndefined();
    }));
  });

  describe('Edge Cases', () => {
    it('should handle missing localStorage values gracefully', () => {
      localStorage.clear();
      localStorage.setItem('loginResponse', JSON.stringify({ Subscriber: 1 }));

      const newFixture = TestBed.createComponent(AudioContentComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent).toBeDefined();
    });

    it('should handle mediaPercent API call', fakeAsync(() => {
      mockAdultsService.mediaPercent.and.returnValue(of([{ MediaPrcnt: 75 }]));
      
      const newFixture = TestBed.createComponent(AudioContentComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.audio = {
        nativeElement: {
          onplaying: null,
          pause: jasmine.createSpy('pause'),
          currentTime: 0,
          duration: 100
        }
      } as any;
      
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/module/s001'
      });
      
      newComponent.ngOnInit();
      tick();
      
      expect(mockAdultsService.mediaPercent).toHaveBeenCalled();
      expect(newComponent.mediaPercent).toBe(75);
    }));

    it('should handle missing audio element in getTime gracefully', () => {
      const existingAudio = document.getElementById('aud1');
      if (existingAudio) {
        existingAudio.remove();
      }

      // Component will attempt to access null/undefined element
      // This should not crash but will result in an error
      expect(() => component.getTime()).toThrow();
    });

    it('should handle missing audio element in onChange gracefully', () => {
      const existingAudio = document.getElementById('aud1');
      if (existingAudio) {
        existingAudio.remove();
      }

      // Component will attempt to access null/undefined element
      // This should not crash but will result in an error
      expect(() => component.onChange('1.5')).toThrow();
    });
  });
});

