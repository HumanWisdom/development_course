import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioCirclesComponent } from './audio-circles.component';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';

describe('AudioCirclesComponent', () => {
  let component: AudioCirclesComponent;
  let fixture: ComponentFixture<AudioCirclesComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockProgramId: any;
  let mockAudioElement: any;

  beforeEach(async () => {
    mockAudioElement = {
      duration: 100,
      currentTime: 0,
      pause: jasmine.createSpy('pause'),
      onplaying: null
    };

    localStorage.setItem('mediaPercent', '50');
    localStorage.setItem('loginResponse', JSON.stringify({ Subscriber: 1 }));
    localStorage.setItem('freeScreens', JSON.stringify([1, 2, 3]));
    localStorage.setItem('pageaction', 'play');

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/audiopage/123/1/45/test',
      configurable: true
    });

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });

    await TestBed.configureTestingModule({
      declarations: [AudioCirclesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioCirclesComponent);
    component = fixture.componentInstance;

    component.title = 'Test Title';
    component.audioLink = 'https://example.com/audio.mp3';
    component.audio = {
      audio: { nativeElement: mockAudioElement }
    } as any;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(AudioCirclesComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(AudioCirclesComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should extract scrId from router url', () => {
      localStorage.setItem('loginResponse', JSON.stringify({ Subscriber: 1 }));
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/audiopage/123/1/45',
        configurable: true
      });
      fixture = TestBed.createComponent(AudioCirclesComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.scrId).toBeDefined();
    });
  });

  describe('getTime', () => {
    it('should emit sendAvDuration with currentTime', () => {
      mockAudioElement.currentTime = 30;
      let emittedValue: string = '';
      component.sendAvDuration.subscribe((v) => (emittedValue = v));

      component.getTime();

      expect(emittedValue).toBe('30');
    });
  });

  describe('checkPauseTime', () => {
    it('should pause and set reachedLimit when currentTime exceeds limit', () => {
      component.mediaPercent = 50;
      mockAudioElement.duration = 100;
      mockAudioElement.currentTime = 60;

      component.checkPauseTime();

      expect(component.reachedLimit).toBe(true);
      expect(mockAudioElement.pause).toHaveBeenCalled();
      expect(component.enableAlert).toBe(true);
    });

    it('should not pause when currentTime is within limit', () => {
      component.mediaPercent = 50;
      mockAudioElement.duration = 100;
      mockAudioElement.currentTime = 40;

      component.checkPauseTime();

      expect(component.reachedLimit).toBe(false);
      expect(mockAudioElement.pause).not.toHaveBeenCalled();
    });
  });

  describe('gotoTranscript', () => {
    it('should navigate to url with t appended', () => {
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/audiopage/123/45',
        configurable: true
      });

      component.gotoTranscript();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/audiopage/123/45t']);
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
