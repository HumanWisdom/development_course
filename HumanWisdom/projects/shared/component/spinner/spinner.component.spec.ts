import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have default show property as false', () => {
      expect(component.show).toBe(false);
    });

    it('should have default dark property as false', () => {
      expect(component.dark).toBe(false);
    });
  });

  describe('Input Properties', () => {
    it('should accept show input', () => {
      component.show = true;
      fixture.detectChanges();

      expect(component.show).toBe(true);
    });

    it('should accept dark input', () => {
      component.dark = true;
      fixture.detectChanges();

      expect(component.dark).toBe(true);
    });

    it('should toggle show property', () => {
      component.show = false;
      expect(component.show).toBe(false);

      component.show = true;
      expect(component.show).toBe(true);

      component.show = false;
      expect(component.show).toBe(false);
    });

    it('should handle both show and dark being true', () => {
      component.show = true;
      component.dark = true;
      fixture.detectChanges();

      expect(component.show).toBe(true);
      expect(component.dark).toBe(true);
    });

    it('should handle both show and dark being false', () => {
      component.show = false;
      component.dark = false;
      fixture.detectChanges();

      expect(component.show).toBe(false);
      expect(component.dark).toBe(false);
    });
  });

  describe('Template Rendering', () => {
    it('should not render spinner when show is false', () => {
      component.show = false;
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const spinnerOverlay = compiled.querySelector('.spinner-overlay');
      
      expect(spinnerOverlay).toBeNull();
    });

    it('should render spinner when show is true', () => {
      component.show = true;
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const spinnerOverlay = compiled.querySelector('.spinner-overlay');
      
      expect(spinnerOverlay).not.toBeNull();
    });

    it('should apply dark class when dark is true', () => {
      component.show = true;
      component.dark = true;
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const spinnerOverlay = compiled.querySelector('.spinner-overlay');
      
      expect(spinnerOverlay.classList.contains('spinner-overlay--dark')).toBe(true);
    });

    it('should not apply dark class when dark is false', () => {
      component.show = true;
      component.dark = false;
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const spinnerOverlay = compiled.querySelector('.spinner-overlay');
      
      expect(spinnerOverlay.classList.contains('spinner-overlay--dark')).toBe(false);
    });

    it('should contain spinner element when shown', () => {
      component.show = true;
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const spinner = compiled.querySelector('.spinner');
      
      expect(spinner).not.toBeNull();
    });
  });

  describe('Component State', () => {
    it('should maintain state after multiple changes', () => {
      component.show = true;
      fixture.detectChanges();
      expect(component.show).toBe(true);

      component.show = false;
      fixture.detectChanges();
      expect(component.show).toBe(false);

      component.show = true;
      fixture.detectChanges();
      expect(component.show).toBe(true);
    });

    it('should handle dark property changes independently', () => {
      component.show = true;
      component.dark = false;
      fixture.detectChanges();

      component.dark = true;
      fixture.detectChanges();
      
      expect(component.show).toBe(true);
      expect(component.dark).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined show value', () => {
      component.show = undefined;
      fixture.detectChanges();

      expect(component.show).toBeUndefined();
    });

    it('should handle undefined dark value', () => {
      component.dark = undefined;
      fixture.detectChanges();

      expect(component.dark).toBeUndefined();
    });

    it('should handle null values gracefully', () => {
      component.show = null;
      component.dark = null;
      fixture.detectChanges();

      expect(component.show).toBeNull();
      expect(component.dark).toBeNull();
    });
  });
});

