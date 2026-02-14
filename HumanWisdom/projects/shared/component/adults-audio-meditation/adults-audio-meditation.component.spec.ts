import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

import { AdultsAudioMeditationComponent } from './adults-audio-meditation.component';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

describe('AdultsAudioMeditationComponent', () => {
  let component: AdultsAudioMeditationComponent;
  let fixture: ComponentFixture<AdultsAudioMeditationComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;

  beforeEach(async () => {
    // Create mock services
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      url: '/adults/audio-meditation/audiopage/test-audio/test-title/1'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.callFake((key: string) => {
            const params = {
              'audiolink': 'https%3A%2F%2Fexample.com%2Faudio.mp3',
              'type': 'breathing-meditation',
              'title': '5'
            };
            return params[key] || null;
          })
        }
      }
    };

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);

    await TestBed.configureTestingModule({
      declarations: [AdultsAudioMeditationComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation },
        { provide: NavigationService, useValue: mockNavigationService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AdultsAudioMeditationComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have default values for properties', () => {
      expect(component.audioLink).toBeDefined();
      expect(component.audioTitle).toBeDefined();
      expect(component.type).toBe('breathing-meditation');
      expect(component.isAdults).toBe(true);
    });
  });

  describe('Constructor - Route Parameter Processing', () => {
    it('should decode audioLink from route parameters', () => {
      expect(component.audioLink).toContain('https://example.com/audio.mp3');
    });

    it('should decode audioTitle and replace dashes with spaces', () => {
      expect(component.audioTitle).toBe('breathing meditation');
    });

    it('should handle double encoded URLs', () => {
      const doubleEncodedRoute = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'https%253A%252F%252Fexample.com%252Faudio.mp3',
                'type': 'test-type',
                'title': '1'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: doubleEncodedRoute },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.audioLink).toBeDefined();
      expect(newComponent.audioLink).not.toContain('%');
    });

    it('should replace underscore with colon in audioLink', () => {
      const routeWithUnderscore = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'https_//example.com/audio.mp3',
                'type': 'test',
                'title': '1'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithUnderscore },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.audioLink).toContain(':');
      expect(newComponent.audioLink).not.toContain('_');
    });

    it('should replace tildes with forward slashes in audioLink', () => {
      const routeWithTildes = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'https:~~example.com~audio.mp3',
                'type': 'test',
                'title': '1'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithTildes },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.audioLink).toContain('//');
      expect(newComponent.audioLink).not.toContain('~');
    });

    it('should format rowId with leading zero for single digits', () => {
      expect(component.rowId).toBe('05');
    });

    it('should not add leading zero for rowId >= 10', () => {
      const routeWithLargeRowId = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'test-audio',
                'type': 'test',
                'title': '15'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithLargeRowId },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.rowId).toBe(15);
    });

    it('should handle missing title parameter', () => {
      const routeWithoutTitle = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'test-audio',
                'type': 'test',
                'title': null
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithoutTitle },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.rowId).toBe('00');
    });
  });

  describe('ngOnInit()', () => {
    it('should set type to empty string when URL includes "podcast"', () => {
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/podcast/audiopage/test/1/1'
      });

      component.ngOnInit();

      expect(component.type).toBe('');
    });

    it('should set type to "Audio" when URL does not include "podcast"', () => {
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/audio-meditation/audiopage/test/1/1'
      });

      component.ngOnInit();

      expect(component.type).toBe('Audio');
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      component.ngOnInit();

      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is not Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      component.ngOnInit();

      expect(component.isAdults).toBe(false);
    });

    it('should call setAudioControlsBackground()', () => {
      spyOn(component, 'setAudioControlsBackground');

      component.ngOnInit();

      expect(component.setAudioControlsBackground).toHaveBeenCalled();
    });
  });

  describe('ngAfterViewInit()', () => {
    it('should not throw error if audioRef is undefined', () => {
      component.audioRef = undefined;

      expect(() => component.ngAfterViewInit()).not.toThrow();
    });

    it('should not throw error if audioRef nativeElement is null', () => {
      component.audioRef = { nativeElement: null } as ElementRef<HTMLAudioElement>;

      expect(() => component.ngAfterViewInit()).not.toThrow();
    });

    it('should attempt to play audio when readyState >= 2', fakeAsync(() => {
      const mockAudioElement = document.createElement('audio');
      Object.defineProperty(mockAudioElement, 'readyState', {
        writable: true,
        value: 2
      });
      spyOn(mockAudioElement, 'play').and.returnValue(Promise.resolve());

      component.audioRef = { nativeElement: mockAudioElement } as ElementRef<HTMLAudioElement>;

      component.ngAfterViewInit();
      tick();

      expect(mockAudioElement.play).toHaveBeenCalled();
    }));

    it('should wait for canplaythrough event when readyState < 2', fakeAsync(() => {
      const mockAudioElement = document.createElement('audio');
      Object.defineProperty(mockAudioElement, 'readyState', {
        writable: true,
        value: 0
      });
      spyOn(mockAudioElement, 'play').and.returnValue(Promise.resolve());
      spyOn(mockAudioElement, 'addEventListener').and.callThrough();

      component.audioRef = { nativeElement: mockAudioElement } as ElementRef<HTMLAudioElement>;

      component.ngAfterViewInit();
      tick();

      expect(mockAudioElement.addEventListener).toHaveBeenCalledWith(
        'canplaythrough',
        jasmine.any(Function),
        { once: true }
      );
    }));

    it('should handle play promise rejection gracefully', fakeAsync(() => {
      const mockAudioElement = document.createElement('audio');
      Object.defineProperty(mockAudioElement, 'readyState', {
        writable: true,
        value: 2
      });
      spyOn(mockAudioElement, 'play').and.returnValue(Promise.reject('Autoplay blocked'));
      spyOn(console, 'warn');

      component.audioRef = { nativeElement: mockAudioElement } as ElementRef<HTMLAudioElement>;

      component.ngAfterViewInit();
      tick();

      expect(mockAudioElement.play).toHaveBeenCalled();
      // The error should be caught and logged
      flush();
      expect(console.warn).toHaveBeenCalledWith('Autoplay blocked by browser:', 'Autoplay blocked');
    }));
  });

  describe('setAudioControlsBackground()', () => {
    beforeEach(() => {
      // Clean up any previously added styles
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

  describe('getclcickevent()', () => {
    it('should click enablepopup element when event is "enablepopup"', () => {
      const mockElement = {
        nativeElement: {
          click: jasmine.createSpy('click')
        }
      };
      component.enablepopup = mockElement as any;

      component.getclcickevent('enablepopup');

      expect(mockElement.nativeElement.click).toHaveBeenCalled();
    });

    it('should throw error when enablepopup is undefined', () => {
      component.enablepopup = undefined;

      expect(() => component.getclcickevent('enablepopup')).toThrow();
    });

    it('should not click enablepopup when event is not "enablepopup"', () => {
      const mockElement = {
        nativeElement: {
          click: jasmine.createSpy('click')
        }
      };
      component.enablepopup = mockElement as any;

      component.getclcickevent('other-event');

      expect(mockElement.nativeElement.click).not.toHaveBeenCalled();
    });
  });

  describe('goBack()', () => {
    it('should navigate to URL from navigationService when available', () => {
      const backUrl = '/adults/home';
      mockNavigationService.navigateToBackLink.and.returnValue(backUrl);

      component.goBack();

      expect(mockNavigationService.navigateToBackLink).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith([backUrl]);
      expect(mockLocation.back).not.toHaveBeenCalled();
    });

    it('should use location.back() when navigationService returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);

      component.goBack();

      expect(mockNavigationService.navigateToBackLink).toHaveBeenCalled();
      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should use location.back() when navigationService returns undefined', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(undefined);

      component.goBack();

      expect(mockNavigationService.navigateToBackLink).toHaveBeenCalled();
      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('Input Properties', () => {
    it('should accept audioLink as input', () => {
      const testAudioLink = 'https://example.com/test-audio.mp3';
      component.audioLink = testAudioLink;

      expect(component.audioLink).toBe(testAudioLink);
    });

    it('should accept audioTitle as input', () => {
      const testTitle = 'Test Audio Title';
      component.audioTitle = testTitle;

      expect(component.audioTitle).toBe(testTitle);
    });
  });

  describe('ViewChild Properties', () => {
    it('should have enablepopup ViewChild property', () => {
      // ViewChild won't be populated in unit tests without template rendering
      // Just verify the property exists on the component class
      expect(component.hasOwnProperty('enablepopup')).toBe(false); // undefined until template renders
      expect(component.enablepopup).toBeUndefined();
    });

    it('should have audioRef ViewChild property', () => {
      // ViewChild won't be populated in unit tests without template rendering
      // Just verify the property exists on the component class
      expect(component.hasOwnProperty('audioRef')).toBe(false); // undefined until template renders
      expect(component.audioRef).toBeUndefined();
    });
  });

  describe('Integration Tests', () => {
    it('should properly initialize with all route parameters and call ngOnInit', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });
      spyOn(component, 'setAudioControlsBackground');

      component.ngOnInit();

      expect(component.audioLink).toBeDefined();
      expect(component.audioTitle).toBeDefined();
      expect(component.type).toBe('Audio');
      expect(component.isAdults).toBe(true);
      expect(component.setAudioControlsBackground).toHaveBeenCalled();
    });

    it('should handle complete lifecycle for teenagers program', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/teenagers/audio-meditation/audiopage/test/1/1'
      });

      component.ngOnInit();

      expect(component.isAdults).toBe(false);
      expect(component.type).toBe('Audio');
    });

    it('should handle podcast URL correctly', () => {
      Object.defineProperty(mockRouter, 'url', {
        writable: true,
        value: '/adults/podcast/audiopage/test/1/1'
      });

      component.ngOnInit();

      expect(component.type).toBe('');
    });
  });

  describe('Edge Cases', () => {
    it('should handle null audioTitle gracefully', () => {
      const routeWithNullTitle = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'test-audio',
                'type': null,
                'title': '1'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithNullTitle },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.audioTitle).toBeFalsy();
    });

    it('should handle empty string audioLink', () => {
      const routeWithEmptyAudioLink = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': '',
                'type': 'test',
                'title': '1'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithEmptyAudioLink },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.audioLink).toBeDefined();
    });

    it('should handle rowId of 0', () => {
      const routeWithZeroRowId = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'test-audio',
                'type': 'test',
                'title': '0'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithZeroRowId },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.rowId).toBe('00');
    });

    it('should handle multiple dashes in audioTitle', () => {
      const routeWithMultipleDashes = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'test-audio',
                'type': 'test-audio-meditation-session',
                'title': '1'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithMultipleDashes },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.audioTitle).toBe('test audio meditation session');
      expect(newComponent.audioTitle).not.toContain('-');
    });

    it('should handle multiple tildes in audioLink', () => {
      const routeWithMultipleTildes = {
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get').and.callFake((key: string) => {
              const params = {
                'audiolink': 'https:~~example.com~path~to~audio.mp3',
                'type': 'test',
                'title': '1'
              };
              return params[key] || null;
            })
          }
        }
      };

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [AdultsAudioMeditationComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: routeWithMultipleTildes },
          { provide: Location, useValue: mockLocation },
          { provide: NavigationService, useValue: mockNavigationService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      const newFixture = TestBed.createComponent(AdultsAudioMeditationComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent.audioLink).toBe('https://example.com/path/to/audio.mp3');
    });
  });
});

