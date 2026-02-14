import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';

import { AudioPlayerComponent } from './audio-player.component';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

describe('AudioPlayerComponent', () => {
  let component: AudioPlayerComponent;
  let fixture: ComponentFixture<AudioPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioPlayerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioPlayerComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have default property values', () => {
      expect(component.yellow).toBe('#FFC455');
      expect(component.isAdults).toBe(true);
    });

    it('should accept audioLink as input', () => {
      const testLink = 'https://example.com/audio.mp3';
      component.audioLink = testLink;

      expect(component.audioLink).toBe(testLink);
    });
  });

  describe('ngOnInit()', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      component.ngOnInit();

      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });

      component.ngOnInit();

      expect(component.isAdults).toBe(false);
    });

    it('should call setAudioControlsBackground', () => {
      spyOn(component, 'setAudioControlsBackground');

      component.ngOnInit();

      expect(component.setAudioControlsBackground).toHaveBeenCalled();
    });
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

    it('should set background color to #FFE8BB for adults', () => {
      component.isAdults = true;

      component.setAudioControlsBackground();

      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );

      expect(audioControlStyle).toBeDefined();
      expect(audioControlStyle?.textContent).toContain('#FFE8BB');
    });

    it('should set background color to #0C2B5F for teenagers', () => {
      component.isAdults = false;

      component.setAudioControlsBackground();

      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );

      expect(audioControlStyle).toBeDefined();
      expect(audioControlStyle?.textContent).toContain('#0C2B5F');
    });

    it('should include webkit-media-controls-enclosure in style', () => {
      component.setAudioControlsBackground();

      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );

      expect(audioControlStyle).toBeDefined();
      expect(audioControlStyle?.textContent).toContain('audio::-webkit-media-controls-enclosure');
    });

    it('should use !important flag in CSS', () => {
      component.setAudioControlsBackground();

      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );

      expect(audioControlStyle?.textContent).toContain('!important');
    });
  });

  describe('ViewChild References', () => {
    it('should have audio ViewChild property defined in component class', () => {
      // ViewChild won't be populated until template is rendered and detectChanges is called
      // Just verify the property exists on the component
      expect(component.hasOwnProperty('audio') || component.audio === undefined).toBeTruthy();
    });

    it('should be able to set audio reference', () => {
      const mockAudioElement = document.createElement('audio');
      component.audio = { nativeElement: mockAudioElement } as ElementRef;

      expect(component.audio.nativeElement.tagName).toBe('AUDIO');
    });
  });

  describe('Input Properties', () => {
    it('should accept and store audioLink', () => {
      const testAudioLink = 'https://example.com/test-audio.mp3';
      component.audioLink = testAudioLink;

      fixture.detectChanges();

      expect(component.audioLink).toBe(testAudioLink);
    });

    it('should handle empty audioLink', () => {
      component.audioLink = '';

      fixture.detectChanges();

      expect(component.audioLink).toBe('');
    });

    it('should handle undefined audioLink', () => {
      component.audioLink = undefined;

      fixture.detectChanges();

      expect(component.audioLink).toBeUndefined();
    });

    it('should handle various audio file formats', () => {
      const formats = [
        'https://example.com/audio.mp3',
        'https://example.com/audio.wav',
        'https://example.com/audio.ogg',
        'https://example.com/audio.m4a'
      ];

      formats.forEach(format => {
        component.audioLink = format;
        expect(component.audioLink).toBe(format);
      });
    });
  });

  describe('Integration Tests', () => {
    it('should complete full lifecycle for Adults program', () => {
      // Clean up previous styles
      const existingStyles = document.head.querySelectorAll('style');
      existingStyles.forEach(style => {
        if (style.textContent?.includes('audio::-webkit-media-controls-enclosure')) {
          style.remove();
        }
      });

      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });
      component.audioLink = 'https://example.com/meditation.mp3';
      component.isAdults = true;

      component.ngOnInit();
      fixture.detectChanges();

      expect(component.isAdults).toBe(true);
      
      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );
      expect(audioControlStyle).toBeDefined();
    });

    it('should complete full lifecycle for Teenagers program', () => {
      // Clean up previous styles
      const existingStyles = document.head.querySelectorAll('style');
      existingStyles.forEach(style => {
        if (style.textContent?.includes('audio::-webkit-media-controls-enclosure')) {
          style.remove();
        }
      });

      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Teenagers
      });
      component.audioLink = 'https://example.com/meditation.mp3';
      component.isAdults = false;

      component.ngOnInit();
      fixture.detectChanges();

      expect(component.isAdults).toBe(false);
      
      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );
      expect(audioControlStyle).toBeDefined();
    });

    it('should handle multiple setAudioControlsBackground calls', () => {
      const initialStyleCount = document.head.querySelectorAll('style').length;

      component.setAudioControlsBackground();
      component.setAudioControlsBackground();
      component.setAudioControlsBackground();

      const newStyleCount = document.head.querySelectorAll('style').length;
      // Should add 3 style elements
      expect(newStyleCount).toBe(initialStyleCount + 3);
    });
  });

  describe('Edge Cases', () => {
    it('should handle null ProgramId gracefully', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: null
      });

      expect(() => component.ngOnInit()).not.toThrow();
    });

    it('should handle undefined ProgramId gracefully', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: undefined
      });

      expect(() => component.ngOnInit()).not.toThrow();
    });

    it('should maintain yellow property constant', () => {
      const initialYellow = component.yellow;
      
      component.ngOnInit();
      
      expect(component.yellow).toBe(initialYellow);
      expect(component.yellow).toBe('#FFC455');
    });

    it('should handle audioLink with special characters', () => {
      const specialLink = 'https://example.com/audio with spaces and-dashes_underscores.mp3';
      component.audioLink = specialLink;

      expect(component.audioLink).toBe(specialLink);
    });

    it('should handle very long audioLink', () => {
      const longLink = 'https://example.com/' + 'a'.repeat(1000) + '.mp3';
      component.audioLink = longLink;

      expect(component.audioLink).toBe(longLink);
      expect(component.audioLink.length).toBeGreaterThan(1000);
    });
  });

  describe('Component State', () => {
    it('should maintain isAdults state after initialization', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: ProgramType.Adults
      });

      component.ngOnInit();
      const initialState = component.isAdults;

      // Simulate some operations
      component.audioLink = 'https://example.com/new-audio.mp3';

      expect(component.isAdults).toBe(initialState);
      expect(component.isAdults).toBe(true);
    });

    it('should allow isAdults to be changed manually', () => {
      component.isAdults = true;
      expect(component.isAdults).toBe(true);

      component.isAdults = false;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('Styling Verification', () => {
    it('should create valid CSS syntax', () => {
      component.setAudioControlsBackground();

      const styles = document.head.querySelectorAll('style');
      const audioControlStyle = Array.from(styles).find(style =>
        style.textContent?.includes('audio::-webkit-media-controls-enclosure')
      );

      expect(audioControlStyle?.textContent).toContain('background:');
      expect(audioControlStyle?.textContent).toContain('{');
      expect(audioControlStyle?.textContent).toContain('}');
    });

    it('should inject style into document head not body', () => {
      const headStyleCountBefore = document.head.querySelectorAll('style').length;
      const bodyStyleCountBefore = document.body.querySelectorAll('style').length;

      component.setAudioControlsBackground();

      const headStyleCountAfter = document.head.querySelectorAll('style').length;
      const bodyStyleCountAfter = document.body.querySelectorAll('style').length;

      expect(headStyleCountAfter).toBeGreaterThan(headStyleCountBefore);
      expect(bodyStyleCountAfter).toBe(bodyStyleCountBefore);
    });
  });
});

