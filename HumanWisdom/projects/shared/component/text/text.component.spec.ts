import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have quote property', () => {
      expect(component.quote).toBeUndefined();
    });

    it('should have author property', () => {
      expect(component.author).toBeUndefined();
    });
  });

  describe('Input Properties', () => {
    it('should accept quote input', () => {
      component.quote = 'Test quote';
      expect(component.quote).toBe('Test quote');
    });

    it('should accept author input', () => {
      component.author = 'Test Author';
      expect(component.author).toBe('Test Author');
    });

    it('should handle empty quote', () => {
      component.quote = '';
      expect(component.quote).toBe('');
    });

    it('should handle empty author', () => {
      component.author = '';
      expect(component.author).toBe('');
    });

    it('should handle long quote text', () => {
      const longQuote = 'This is a very long quote that might span multiple lines and contain various punctuation marks, symbols, and different formatting.';
      component.quote = longQuote;
      expect(component.quote).toBe(longQuote);
    });

    it('should handle quote with special characters', () => {
      component.quote = 'Quote with "special" characters & symbols!';
      expect(component.quote).toBe('Quote with "special" characters & symbols!');
    });

    it('should handle author with special characters', () => {
      component.author = 'Author O\'Brien';
      expect(component.author).toBe('Author O\'Brien');
    });
  });

  describe('Component State', () => {
    it('should maintain quote and author values after changes', () => {
      component.quote = 'First quote';
      component.author = 'First Author';
      
      expect(component.quote).toBe('First quote');
      expect(component.author).toBe('First Author');

      component.quote = 'Second quote';
      component.author = 'Second Author';
      
      expect(component.quote).toBe('Second quote');
      expect(component.author).toBe('Second Author');
    });

    it('should handle null values', () => {
      component.quote = null;
      component.author = null;
      
      expect(component.quote).toBeNull();
      expect(component.author).toBeNull();
    });

    it('should allow setting quote without author', () => {
      component.quote = 'Quote without author';
      
      expect(component.quote).toBe('Quote without author');
      expect(component.author).toBeUndefined();
    });

    it('should allow setting author without quote', () => {
      component.author = 'Author without quote';
      
      expect(component.author).toBe('Author without quote');
      expect(component.quote).toBeUndefined();
    });
  });

  describe('Component Rendering', () => {
    it('should render without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should render with quote and author', () => {
      component.quote = 'Test quote';
      component.author = 'Test Author';
      
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should handle multiple detectChanges calls', () => {
      component.quote = 'Test quote';
      component.author = 'Test Author';
      
      expect(() => {
        fixture.detectChanges();
        fixture.detectChanges();
        fixture.detectChanges();
      }).not.toThrow();
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined values', () => {
      component.quote = undefined;
      component.author = undefined;
      
      expect(component.quote).toBeUndefined();
      expect(component.author).toBeUndefined();
    });

    it('should handle numeric values as strings', () => {
      component.quote = '123' as any;
      component.author = '456' as any;
      
      expect(component.quote).toBe('123');
      expect(component.author).toBe('456');
    });

    it('should handle whitespace-only strings', () => {
      component.quote = '   ';
      component.author = '   ';
      
      expect(component.quote).toBe('   ');
      expect(component.author).toBe('   ');
    });

    it('should handle newline characters', () => {
      component.quote = 'Line 1\nLine 2';
      component.author = 'Author\nName';
      
      expect(component.quote).toBe('Line 1\nLine 2');
      expect(component.author).toBe('Author\nName');
    });
  });
});


