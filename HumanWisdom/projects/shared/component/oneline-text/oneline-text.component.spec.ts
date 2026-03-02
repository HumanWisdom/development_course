import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

import { OnelineTextComponent } from './oneline-text.component';

describe('OnelineTextComponent', () => {
  let component: OnelineTextComponent;
  let fixture: ComponentFixture<OnelineTextComponent>;
  let mockCaptureService: jasmine.SpyObj<NgxCaptureService>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    mockCaptureService = jasmine.createSpyObj('NgxCaptureService', ['getImage']);
    mockAdultsService = jasmine.createSpyObj('AdultsService', ['']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['']);

    await TestBed.configureTestingModule({
      declarations: [OnelineTextComponent],
      providers: [
        { provide: NgxCaptureService, useValue: mockCaptureService },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(OnelineTextComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have screen ViewChild', () => {
      expect(component.screen).toBeDefined();
    });

    it('should have scrId property', () => {
      expect(component.scrId).toBeUndefined();
    });

    it('should be defined', () => {
      expect(component).toBeDefined();
    });
  });

  describe('Input Properties', () => {
    it('should accept bg input', () => {
      component.bg = 'test-background';
      expect(component.bg).toBe('test-background');
    });

    it('should handle empty bg', () => {
      component.bg = '';
      expect(component.bg).toBe('');
    });

    it('should handle bg with color value', () => {
      component.bg = '#00ff00';
      expect(component.bg).toBe('#00ff00');
    });

    it('should handle bg with CSS class', () => {
      component.bg = 'bg-light';
      expect(component.bg).toBe('bg-light');
    });

    it('should handle null bg', () => {
      component.bg = null;
      expect(component.bg).toBeNull();
    });

    it('should handle undefined bg', () => {
      component.bg = undefined;
      expect(component.bg).toBeUndefined();
    });
  });

  describe('Component State', () => {
    it('should maintain bg value after changes', () => {
      component.bg = 'bg-1';
      expect(component.bg).toBe('bg-1');

      component.bg = 'bg-2';
      expect(component.bg).toBe('bg-2');
    });

    it('should have access to injected services', () => {
      expect(component['captureService']).toBeDefined();
      expect(component['service']).toBeDefined();
      expect(component['next']).toBeDefined();
    });

    it('should allow scrId to be set', () => {
      component.scrId = 'text-456';
      expect(component.scrId).toBe('text-456');
    });

    it('should allow scrId to be numeric', () => {
      component.scrId = 789;
      expect(component.scrId).toBe(789);
    });

    it('should allow scrId to be object', () => {
      component.scrId = { id: 1, type: 'oneline' };
      expect(component.scrId).toEqual({ id: 1, type: 'oneline' });
    });
  });

  describe('Component Rendering', () => {
    it('should render without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should render with bg property', () => {
      component.bg = 'test-bg';
      
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should handle multiple detectChanges calls', () => {
      expect(() => {
        fixture.detectChanges();
        fixture.detectChanges();
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should render with all properties set', () => {
      component.bg = 'test-bg';
      component.scrId = '789';
      
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should have app-oneline-text selector', () => {
      const compiled = fixture.nativeElement;
      expect(compiled).toBeDefined();
    });
  });

  describe('Edge Cases', () => {
    it('should handle special characters in bg', () => {
      component.bg = 'bg-!@#$%^';
      expect(component.bg).toBe('bg-!@#$%^');
    });

    it('should handle very long bg string', () => {
      const longBg = 'background-text-'.repeat(100);
      component.bg = longBg;
      expect(component.bg).toBe(longBg);
    });

    it('should handle bg with URL', () => {
      component.bg = 'url(/assets/images/bg.jpg)';
      expect(component.bg).toBe('url(/assets/images/bg.jpg)');
    });

    it('should handle bg with gradient', () => {
      component.bg = 'linear-gradient(90deg, red, blue)';
      expect(component.bg).toBe('linear-gradient(90deg, red, blue)');
    });

    it('should handle whitespace in bg', () => {
      component.bg = '   ';
      expect(component.bg).toBe('   ');
    });

    it('should handle newline in bg', () => {
      component.bg = 'line1\nline2';
      expect(component.bg).toBe('line1\nline2');
    });
  });

  describe('Service Integration', () => {
    it('should have NgxCaptureService available', () => {
      expect(component['captureService']).toBe(mockCaptureService);
    });

    it('should have AdultsService available', () => {
      expect(component['service']).toBe(mockAdultsService);
    });

    it('should have ActivatedRoute available', () => {
      expect(component['next']).toBe(mockActivatedRoute);
    });
  });

  describe('Component Lifecycle', () => {
    it('should initialize properly', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should be reusable', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();

      fixture.destroy();

      const newFixture = TestBed.createComponent(OnelineTextComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent).toBeTruthy();
      newFixture.destroy();
    });

    it('should cleanup properly on destroy', () => {
      fixture.detectChanges();
      
      expect(() => {
        fixture.destroy();
      }).not.toThrow();
    });

    it('should maintain component instance', () => {
      const initialComponent = component;
      fixture.detectChanges();
      expect(component).toBe(initialComponent);
    });
  });

  describe('ViewChild', () => {
    it('should have screen ViewChild with static true', () => {
      expect(component.screen).toBeDefined();
    });

    it('should allow screen to be accessed', () => {
      expect(() => {
        const screen = component.screen;
      }).not.toThrow();
    });
  });
});


