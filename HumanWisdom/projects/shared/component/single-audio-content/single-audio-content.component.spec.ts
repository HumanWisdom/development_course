import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleAudioContentComponent } from './single-audio-content.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SingleAudioContentComponent', () => {
  let component: SingleAudioContentComponent;
  let fixture: ComponentFixture<SingleAudioContentComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let originalProgramId: PropertyDescriptor | undefined;
  let mockProgramId: number;

  const mockMediaAudio = 'https://cdn.example.com/';
  const mockTranscriptText = 'Transcript content';

  beforeEach(() => {
    mockProgramId = ProgramType.Adults;
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.callFake((key: string) => {
            const params: Record<string, string> = {
              audiolink: encodeURIComponent('~audios~module~audio.mp3'),
              title: encodeURIComponent('Test-Audio-Title'),
              RowId: '5',
              moduleName: 'TestModule',
              enable: 'F'
            };
            return params[key] ?? null;
          })
        }
      }
    };

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockCommonService = jasmine.createSpyObj('CommonService', ['GetAudioTranscript']);
    mockCommonService.GetAudioTranscript.and.returnValue(of(mockTranscriptText));
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    localStorage.clear();
    localStorage.setItem('mediaAudio', JSON.stringify(mockMediaAudio));
    localStorage.setItem('guest', 'F');

    TestBed.configureTestingModule({
      declarations: [SingleAudioContentComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: HttpClient, useValue: {} },
        { provide: Location, useValue: mockLocation },
        { provide: CommonService, useValue: mockCommonService },
        { provide: NavigationService, useValue: mockNavigationService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleAudioContentComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
    const styles = document.head.querySelectorAll('style');
    styles.forEach(s => s.remove());
  });

  describe('component creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set yellow color', () => {
      expect(component.yellow).toBe('#FFC455');
    });

    it('should set audioLink from route and mediaAudio', () => {
      expect(component.audioLink).toContain(mockMediaAudio);
      expect(component.audioLink).toContain('audios/module/audio.mp3');
    });

    it('should set audioTitle decoded with hyphens replaced by spaces', () => {
      expect(component.audioTitle).toBe('Test Audio Title');
    });

    it('should set rowId from route', () => {
      expect(component.rowId).toBe(5);
    });

    it('should set moduleName and headerTitle with titleCase', () => {
      expect(component.moduleName).toBe('TestModule');
      expect(component.headerTitle).toBe('TestModule');
    });

    it('should set imageUrl for module', () => {
      expect(component.imageUrl).toContain('testmodule/05.webp');
    });

    it('should set isFree from route', () => {
      expect(component.isFree).toBe('F');
    });

    it('should call GetAudioTranscript in constructor', () => {
      expect(mockCommonService.GetAudioTranscript).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });

    it('should call setAudioControlsBackground', () => {
      const spy = spyOn(component, 'setAudioControlsBackground');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('readText', () => {
    it('should set enableTextContent true when argument is Read text', () => {
      component.enableTextContent = false;
      component.readText('Read text');
      expect(component.enableTextContent).toBe(true);
    });

    it('should set enableTextContent false for other values', () => {
      component.enableTextContent = true;
      component.readText('Hide text');
      expect(component.enableTextContent).toBe(false);
    });
  });

  describe('callText', () => {
    it('should set textContent from GetAudioTranscript response', () => {
      component.callText();
      expect(component.textContent).toBe(mockTranscriptText);
    });

    it('should call GetAudioTranscript with S3Directory and FileName', () => {
      component.audioLinkUrl = '/audios/module/file.mp3';
      mockCommonService.GetAudioTranscript.calls.reset();
      component.callText();
      expect(mockCommonService.GetAudioTranscript).toHaveBeenCalledWith(
        jasmine.objectContaining({
          FileName: 'file.txt',
          S3Directory: jasmine.any(String)
        })
      );
    });
  });

  describe('redirectIfGuest', () => {
    it('should not redirect when guest is F', () => {
      localStorage.setItem('guest', 'F');
      component.redirectIfGuest();
      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should not redirect when guest is T but isFree is T', () => {
      localStorage.setItem('guest', 'T');
      component.moduleName = 'podcast';
      component.isFree = 'T';
      component.redirectIfGuest();
      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should redirect guest to adults trial when paid content', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      localStorage.setItem('guest', 'T');
      component.moduleName = 'podcast';
      component.isFree = 'F';
      component.redirectIfGuest();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(
        '/subscription/start-your-free-trial'
      );
    });

    it('should redirect guest to teenagers trial when paid content', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      localStorage.setItem('guest', 'T');
      component.moduleName = 'other';
      component.isFree = 'F';
      component.redirectIfGuest();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(
        '/teenagers/subscription/start-your-free-trial'
      );
    });

    it('should not redirect for soundscapes rowId 1 when guest', () => {
      localStorage.setItem('guest', 'T');
      component.moduleName = 'soundscapes';
      component.rowId = 1;
      component.isFree = 'F';
      component.redirectIfGuest();
      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });
  });

  describe('setAudioControlsBackground', () => {
    it('should append style with adults background color', () => {
      component.isAdults = true;
      component.setAudioControlsBackground();
      const styles = document.head.querySelectorAll('style');
      const last = Array.from(styles).pop();
      expect(last?.textContent).toContain('#FFE8BB');
    });

    it('should append style with teenagers background color', () => {
      component.isAdults = false;
      component.setAudioControlsBackground();
      const styles = document.head.querySelectorAll('style');
      const last = Array.from(styles).pop();
      expect(last?.textContent).toContain('#0C2B5F');
    });
  });

  describe('titleCase', () => {
    it('should capitalize first letter', () => {
      expect(component.titleCase('hello')).toBe('Hello');
    });

    it('should return empty string for empty input', () => {
      expect(component.titleCase('')).toBe('');
    });

    it('should return empty string for null/undefined', () => {
      expect(component.titleCase(null as any)).toBe('');
      expect(component.titleCase(undefined as any)).toBe('');
    });
  });

  describe('goBack', () => {
    it('should navigate when navigateToBackLink returns url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/dashboard');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/dashboard']);
    });

    it('should call location.back when navigateToBackLink returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });
});
