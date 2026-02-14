import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

import { SimpleTextComponent } from './simple-text.component';

describe('SimpleTextComponent', () => {
  let component: SimpleTextComponent;
  let fixture: ComponentFixture<SimpleTextComponent>;
  let mockCaptureService: jasmine.SpyObj<NgxCaptureService>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    mockCaptureService = jasmine.createSpyObj('NgxCaptureService', ['getImage']);
    mockAdultsService = jasmine.createSpyObj('AdultsService', ['']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['']);

    await TestBed.configureTestingModule({
      declarations: [SimpleTextComponent],
      providers: [
        { provide: NgxCaptureService, useValue: mockCaptureService },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleTextComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    localStorage.clear();
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
      component.bg = '#ffffff';
      expect(component.bg).toBe('#ffffff');
    });

    it('should handle bg with CSS class name', () => {
      component.bg = 'bg-primary';
      expect(component.bg).toBe('bg-primary');
    });

    it('should handle null bg', () => {
      component.bg = null;
      expect(component.bg).toBeNull();
    });
  });

  describe('localStorage Integration', () => {
    it('should retrieve pageaction from localStorage on initialization', () => {
      localStorage.setItem('pageaction', 'test-action');
      
      const newFixture = TestBed.createComponent(SimpleTextComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('test-action');
      
      newFixture.destroy();
    });

    it('should handle null pageaction from localStorage', () => {
      localStorage.removeItem('pageaction');
      
      const newFixture = TestBed.createComponent(SimpleTextComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBeNull();
      
      newFixture.destroy();
    });

    it('should handle empty pageaction from localStorage', () => {
      localStorage.setItem('pageaction', '');
      
      const newFixture = TestBed.createComponent(SimpleTextComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('');
      
      newFixture.destroy();
    });

    it('should retrieve pageaction value correctly', () => {
      localStorage.setItem('pageaction', 'view');
      
      const newFixture = TestBed.createComponent(SimpleTextComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('view');
      
      newFixture.destroy();
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
      component.scrId = 'screen-123';
      expect(component.scrId).toBe('screen-123');
    });

    it('should allow scrId to be numeric', () => {
      component.scrId = 12345;
      expect(component.scrId).toBe(12345);
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
  });

  describe('Edge Cases', () => {
    it('should handle undefined bg', () => {
      component.bg = undefined;
      expect(component.bg).toBeUndefined();
    });

    it('should handle special characters in bg', () => {
      component.bg = 'bg-@#$%';
      expect(component.bg).toBe('bg-@#$%');
    });

    it('should handle very long bg string', () => {
      const longBg = 'a'.repeat(1000);
      component.bg = longBg;
      expect(component.bg).toBe(longBg);
    });

    it('should handle whitespace in pageaction', () => {
      localStorage.setItem('pageaction', '   ');
      
      const newFixture = TestBed.createComponent(SimpleTextComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('   ');
      
      newFixture.destroy();
    });
  });
});

