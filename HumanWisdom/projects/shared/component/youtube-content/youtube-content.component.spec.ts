import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeContentComponent } from './youtube-content.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';

describe('YoutubeContentComponent', () => {
  let component: YoutubeContentComponent;
  let fixture: ComponentFixture<YoutubeContentComponent>;
  let mockActivatedRoute: any;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockDomSanitizer: jasmine.SpyObj<DomSanitizer>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockProgramId: any;

  beforeEach(async () => {
    // Mock window.history.state to prevent null reference errors
    Object.defineProperty(window, 'history', {
      writable: true,
      configurable: true,
      value: {
        state: {}
      }
    });

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('dQw4w9WgXcQ')
        }
      }
    };

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
    mockDomSanitizer.bypassSecurityTrustResourceUrl.and.returnValue('safe-url' as any);

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });

    await TestBed.configureTestingModule({
      declarations: [YoutubeContentComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: DomSanitizer, useValue: mockDomSanitizer },
        { provide: Location, useValue: mockLocation },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(YoutubeContentComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
    // Reset window.history.state
    Object.defineProperty(window, 'history', {
      writable: true,
      configurable: true,
      value: {
        state: {}
      }
    });
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set linkcode from route params', () => {
      expect(component.linkcode).toBe('dQw4w9WgXcQ');
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: { state: {} }
      });
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(YoutubeContentComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: { state: {} }
      });
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(YoutubeContentComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should extract accesscode from linkcode when it contains =', () => {
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: { state: {} }
      });
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('dQw4w9WgXcQ=vncbxdfchgvxd');
      fixture = TestBed.createComponent(YoutubeContentComponent);
      component = fixture.componentInstance;
      expect(component.linkcode).toBe('dQw4w9WgXcQ');
    });

    it('should navigate to subscription when subscriber is 0 and access is paid', () => {
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: { state: {} }
      });
      localStorage.setItem('Subscriber', '0');
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('dQw4w9WgXcQ=vncbxdfchgvxd');
      fixture = TestBed.createComponent(YoutubeContentComponent);
      component = fixture.componentInstance;
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should set bg from window.history.state.class', () => {
      const mockState = { class: 'test-bg-class' };
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: {
          state: mockState
        }
      });
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('dQw4w9WgXcQ');
      fixture = TestBed.createComponent(YoutubeContentComponent);
      component = fixture.componentInstance;
      expect(component.bg).toBe('test-bg-class');
      expect(localStorage.getItem('program-guide-class')).toBe('test-bg-class');
    });

    it('should set bg from localStorage when linkcode matches stored videolink', () => {
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: { state: {} }
      });
      localStorage.setItem('videolink', 'dQw4w9WgXcQ');
      localStorage.setItem('program-guide-class', 'stored-bg-class');
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('dQw4w9WgXcQ');
      fixture = TestBed.createComponent(YoutubeContentComponent);
      component = fixture.componentInstance;
      expect(component.bg).toBe('stored-bg-class');
    });

    it('should set default bg when linkcode does not match stored videolink', () => {
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: { state: {} }
      });
      localStorage.setItem('videolink', 'different-video');
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('dQw4w9WgXcQ');
      fixture = TestBed.createComponent(YoutubeContentComponent);
      component = fixture.componentInstance;
      expect(component.bg).toBe('dark_blue_w1');
    });

    it('should set title from window.history.state', () => {
      const mockState = { title: 'Test Video Title' };
      Object.defineProperty(window, 'history', {
        writable: true,
        configurable: true,
        value: {
          state: mockState
        }
      });
      mockActivatedRoute.snapshot.paramMap.get.and.returnValue('dQw4w9WgXcQ');
      fixture = TestBed.createComponent(YoutubeContentComponent);
      component = fixture.componentInstance;
      expect(component.title).toBe('Test Video Title');
    });
  });

  describe('ngOnInit', () => {
    it('should set videoLink with sanitized YouTube embed URL', () => {
      component.ngOnInit();
      expect(mockDomSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith('https://www.youtube.com/embed/dQw4w9WgXcQ');
      expect(component.videoLink).toBe('safe-url');
    });
  });

  describe('getSafeUrl', () => {
    it('should return sanitized URL', () => {
      const url = 'https://www.youtube.com/embed/test';
      const result = component.getSafeUrl(url);
      expect(mockDomSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
      expect(result).toBe('safe-url');
    });
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

  describe('getclcickevent', () => {
    it('should click enablepopup element when event is enablepopup', () => {
      const mockElement = {
        click: jasmine.createSpy('click')
      };
      (component as any).enablepopup = { nativeElement: mockElement } as ElementRef;
      component.getclcickevent('enablepopup');
      expect(mockElement.click).toHaveBeenCalled();
    });

    it('should not click when event is not enablepopup', () => {
      const mockElement = {
        click: jasmine.createSpy('click')
      };
      (component as any).enablepopup = { nativeElement: mockElement } as ElementRef;
      component.getclcickevent('other-event');
      expect(mockElement.click).not.toHaveBeenCalled();
    });
  });
});

