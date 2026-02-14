import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

import { QuotationComponent } from './quotation.component';

describe('QuotationComponent', () => {
  let component: QuotationComponent;
  let fixture: ComponentFixture<QuotationComponent>;
  let mockCaptureService: jasmine.SpyObj<NgxCaptureService>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    mockCaptureService = jasmine.createSpyObj('NgxCaptureService', ['getImage']);
    mockAdultsService = jasmine.createSpyObj('AdultsService', ['']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['']);

    await TestBed.configureTestingModule({
      declarations: [QuotationComponent],
      providers: [
        { provide: NgxCaptureService, useValue: mockCaptureService },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotationComponent);
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
      component.bg = '#ff0000';
      expect(component.bg).toBe('#ff0000');
    });

    it('should handle bg with image path', () => {
      component.bg = '/assets/images/bg.jpg';
      expect(component.bg).toBe('/assets/images/bg.jpg');
    });

    it('should handle null bg', () => {
      component.bg = null;
      expect(component.bg).toBeNull();
    });

    it('should handle bg with gradient', () => {
      component.bg = 'linear-gradient(to right, red, blue)';
      expect(component.bg).toBe('linear-gradient(to right, red, blue)');
    });
  });

  describe('localStorage Integration', () => {
    it('should retrieve pageaction from localStorage on initialization', () => {
      localStorage.setItem('pageaction', 'test-action');
      
      const newFixture = TestBed.createComponent(QuotationComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('test-action');
      
      newFixture.destroy();
    });

    it('should handle null pageaction from localStorage', () => {
      localStorage.removeItem('pageaction');
      
      const newFixture = TestBed.createComponent(QuotationComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBeNull();
      
      newFixture.destroy();
    });

    it('should handle empty pageaction from localStorage', () => {
      localStorage.setItem('pageaction', '');
      
      const newFixture = TestBed.createComponent(QuotationComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('');
      
      newFixture.destroy();
    });

    it('should handle different pageaction values', () => {
      localStorage.setItem('pageaction', 'edit');
      
      const newFixture = TestBed.createComponent(QuotationComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('edit');
      
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
      component.scrId = 'quote-123';
      expect(component.scrId).toBe('quote-123');
    });

    it('should allow scrId to be numeric', () => {
      component.scrId = 456;
      expect(component.scrId).toBe(456);
    });

    it('should handle scrId as object', () => {
      component.scrId = { id: 1, name: 'test' };
      expect(component.scrId).toEqual({ id: 1, name: 'test' });
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
      component.scrId = '123';
      
      expect(() => {
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
      component.bg = 'bg-!@#$%';
      expect(component.bg).toBe('bg-!@#$%');
    });

    it('should handle very long bg string', () => {
      const longBg = 'background-'.repeat(100);
      component.bg = longBg;
      expect(component.bg).toBe(longBg);
    });

    it('should handle whitespace in pageaction', () => {
      localStorage.setItem('pageaction', '  spaces  ');
      
      const newFixture = TestBed.createComponent(QuotationComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('  spaces  ');
      
      newFixture.destroy();
    });

    it('should handle numeric string in pageaction', () => {
      localStorage.setItem('pageaction', '12345');
      
      const newFixture = TestBed.createComponent(QuotationComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('12345');
      
      newFixture.destroy();
    });

    it('should handle JSON string in pageaction', () => {
      localStorage.setItem('pageaction', '{"action":"view"}');
      
      const newFixture = TestBed.createComponent(QuotationComponent);
      const newComponent = newFixture.componentInstance;
      
      expect(newComponent.pageaction).toBe('{"action":"view"}');
      
      newFixture.destroy();
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
});

