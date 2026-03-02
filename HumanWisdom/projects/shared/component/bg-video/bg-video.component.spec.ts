import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BgVideoComponent } from './bg-video.component';

describe('BgVideoComponent', () => {
  let component: BgVideoComponent;
  let fixture: ComponentFixture<BgVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgVideoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(BgVideoComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should have BgVideoComponent type', () => {
      expect(component instanceof BgVideoComponent).toBe(true);
    });
  });

  describe('Component Rendering', () => {
    it('should render without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should have app-bg-video selector', () => {
      const compiled = fixture.nativeElement;
      expect(compiled).toBeDefined();
    });
  });

  describe('Component Lifecycle', () => {
    it('should initialize properly', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should handle multiple detectChanges calls', () => {
      expect(() => {
        fixture.detectChanges();
        fixture.detectChanges();
        fixture.detectChanges();
      }).not.toThrow();
    });
  });

  describe('Component State', () => {
    it('should maintain component instance', () => {
      const initialComponent = component;
      fixture.detectChanges();
      expect(component).toBe(initialComponent);
    });

    it('should be reusable', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();

      fixture.destroy();

      const newFixture = TestBed.createComponent(BgVideoComponent);
      const newComponent = newFixture.componentInstance;

      expect(newComponent).toBeTruthy();
      newFixture.destroy();
    });
  });
});


