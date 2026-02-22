import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioImageOverlayComponent } from './audio-image-overlay.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AudioImageOverlayComponent', () => {
  let component: AudioImageOverlayComponent;
  let fixture: ComponentFixture<AudioImageOverlayComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockCaptureService: jasmine.SpyObj<NgxCaptureService>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockAudioElement: any;
  let mockDomAudio: any;

  beforeEach(async () => {
    mockAudioElement = {
      duration: 100,
      currentTime: 0,
      pause: jasmine.createSpy('pause'),
      onplaying: null
    };

    mockDomAudio = {
      duration: 100,
      currentTime: 0,
      pause: jasmine.createSpy('pause')
    };
    spyOn(document, 'getElementById').and.returnValue(mockDomAudio);

    localStorage.setItem('mediaPercent', '50');
    localStorage.setItem('loginResponse', JSON.stringify({ Subscriber: 1 }));
    localStorage.setItem('freeScreens', JSON.stringify([1, 2, 3]));

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/audiopage/123/1/45/test',
      configurable: true
    });

    mockActivatedRoute = {
      queryParams: of({ t: null })
    };

    mockCaptureService = jasmine.createSpyObj('NgxCaptureService', ['capture']);
    mockAdultsService = jasmine.createSpyObj('AdultsService', ['submitJournal', 'screenProgress']);

    await TestBed.configureTestingModule({
      declarations: [AudioImageOverlayComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: NgxCaptureService, useValue: mockCaptureService },
        { provide: AdultsService, useValue: mockAdultsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioImageOverlayComponent);
    component = fixture.componentInstance;

    component.title = 'Test Title';
    component.audioLink = 'https://example.com/audio.mp3';
    component.audio = {
      audio: { nativeElement: mockAudioElement },
      nativeElement: mockAudioElement
    } as any;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should extract scrId from router url', () => {
      component.ngOnInit();
      expect(component.scrId).toBeDefined();
    });
  });

  describe('getTime', () => {
    it('should emit sendAvDuration with currentTime', () => {
      mockAudioElement.currentTime = 25;
      let emittedValue: any;
      component.sendAvDuration.subscribe((v) => (emittedValue = v));

      component.getTime();

      expect(emittedValue).toBe(25);
    });
  });

  describe('checkPauseTime', () => {
    it('should pause and set reachedLimit when currentTime exceeds limit', () => {
      component.mediaPercent = 50;
      mockDomAudio.duration = 100;
      mockDomAudio.currentTime = 60;

      component.checkPauseTime();

      expect(component.reachedLimit).toBe(true);
      expect(mockDomAudio.pause).toHaveBeenCalled();
      expect(component.enableAlert).toBe(true);
    });

    it('should not pause when currentTime is within limit', () => {
      component.mediaPercent = 50;
      mockDomAudio.duration = 100;
      mockDomAudio.currentTime = 40;

      component.checkPauseTime();

      expect(component.reachedLimit).toBe(false);
      expect(mockDomAudio.pause).not.toHaveBeenCalled();
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should set enableAlert to false', () => {
      component.enableAlert = true;

      component.getAlertcloseEvent({});

      expect(component.enableAlert).toBe(false);
    });
  });

  describe('ngOnDestroy', () => {
    it('should clear interval when interval exists', () => {
      component.interval = setInterval(() => {}, 10000);

      expect(() => component.ngOnDestroy()).not.toThrow();
    });

    it('should not throw when interval is null', () => {
      component.interval = null;

      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });
});
