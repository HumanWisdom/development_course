import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { BotnavComponent } from './botnav.component';

describe('BotnavComponent', () => {
  let component: BotnavComponent;
  let fixture: ComponentFixture<BotnavComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    mockLocation = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      declarations: [BotnavComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(BotnavComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should inject Router service', () => {
      expect(component['router']).toBeDefined();
    });

    it('should inject Location service', () => {
      expect(component['location']).toBeDefined();
    });

    it('should be defined', () => {
      expect(component).toBeDefined();
    });
  });

  describe('routeJournal()', () => {
    it('should navigate to journal page', () => {
      component.routeJournal();
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
    });

    it('should call navigate with correct parameter', () => {
      component.routeJournal();
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(1);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
    });

    it('should not throw error when called', () => {
      expect(() => {
        component.routeJournal();
      }).not.toThrow();
    });

    it('should navigate successfully on multiple calls', () => {
      component.routeJournal();
      component.routeJournal();
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(2);
    });
  });

  describe('routeDash()', () => {
    it('should navigate to dashboard page', () => {
      component.routeDash();
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('should call navigate with correct parameter', () => {
      component.routeDash();
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(1);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('should not throw error when called', () => {
      expect(() => {
        component.routeDash();
      }).not.toThrow();
    });

    it('should navigate successfully on multiple calls', () => {
      component.routeDash();
      component.routeDash();
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(2);
    });
  });

  describe('Component Rendering', () => {
    it('should render without errors', () => {
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

    it('should have app-botnav selector', () => {
      const compiled = fixture.nativeElement;
      expect(compiled).toBeDefined();
    });
  });

  describe('Navigation Flow', () => {
    it('should navigate to journal then dashboard', () => {
      component.routeJournal();
      component.routeDash();
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(2);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('should navigate to dashboard then journal', () => {
      component.routeDash();
      component.routeJournal();
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(2);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
    });

    it('should handle rapid navigation calls', () => {
      component.routeJournal();
      component.routeDash();
      component.routeJournal();
      component.routeDash();
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(4);
    });
  });

  describe('Service Integration', () => {
    it('should use Router service for journal navigation', () => {
      component.routeJournal();
      
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should use Router service for dashboard navigation', () => {
      component.routeDash();
      
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should have readonly router service', () => {
      const router = component['router'];
      expect(router).toBe(mockRouter);
    });

    it('should have readonly location service', () => {
      const location = component['location'];
      expect(location).toBe(mockLocation);
    });
  });

  describe('Edge Cases', () => {
    it('should handle navigation error gracefully', () => {
      mockRouter.navigate.and.returnValue(Promise.reject('Navigation error'));
      
      expect(() => {
        component.routeJournal();
      }).not.toThrow();
    });

    it('should handle multiple rapid journal navigations', () => {
      for (let i = 0; i < 10; i++) {
        component.routeJournal();
      }
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(10);
    });

    it('should handle multiple rapid dashboard navigations', () => {
      for (let i = 0; i < 10; i++) {
        component.routeDash();
      }
      
      expect(mockRouter.navigate).toHaveBeenCalledTimes(10);
    });

    it('should maintain component state after navigation', () => {
      const initialComponent = component;
      
      component.routeJournal();
      component.routeDash();
      
      expect(component).toBe(initialComponent);
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

      const newFixture = TestBed.createComponent(BotnavComponent);
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
  });
});

