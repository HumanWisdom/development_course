import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { ModalComponent } from './modal.component';
import { SharedService } from '../../services/shared.service';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));

    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    
    // Mock ViewChild
    component.enablecookiemodal = {
      nativeElement: {
        click: jasmine.createSpy('click'),
        contains: jasmine.createSpy('contains').and.returnValue(true)
      }
    } as any;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have default input properties', () => {
      expect(component.okText).toBe('close');
      expect(component.content).toBe('');
      expect(component.title).toBe('');
      expect(component.cancelText).toBe('Cancel');
      expect(component.enableCancel).toBe(false);
      expect(component.modalid).toBe('');
      expect(component.isFreeTrialEnable).toBe(false);
      expect(component.isAdults).toBe(true);
    });

    it('should have modalopened as false initially', () => {
      expect(component.modalopened).toBe(false);
    });
  });

  describe('ngOnInit()', () => {
    it('should trigger modal after timeout', fakeAsync(() => {
      component.ngOnInit();
      
      expect(component.modalopened).toBe(false);
      
      tick(100);
      
      expect(component.enablecookiemodal.nativeElement.click).toHaveBeenCalled();
      expect(component.modalopened).toBe(true);
    }));

    it('should set isAdults based on SharedService.ProgramId', fakeAsync(() => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: 9
      });

      component.ngOnInit();
      tick(100);

      expect(component.isAdults).toBe(true);
    }));

    it('should set isAdults to false when ProgramId is not 9', fakeAsync(() => {
      Object.defineProperty(SharedService, 'ProgramId', {
        writable: true,
        configurable: true,
        value: 1
      });

      component.ngOnInit();
      tick(100);

      expect(component.isAdults).toBe(false);
    }));
  });

  describe('close()', () => {
    it('should set modalopened to false', () => {
      component.modalopened = true;
      
      component.close('test');
      
      expect(component.modalopened).toBe(false);
    });

    it('should emit closeEvent with provided text', () => {
      spyOn(component.closeEvent, 'emit');
      
      component.close('ok');
      
      expect(component.closeEvent.emit).toHaveBeenCalledWith('ok');
    });

    it('should emit closeEvent with different texts', () => {
      spyOn(component.closeEvent, 'emit');
      
      component.close('cancel');
      expect(component.closeEvent.emit).toHaveBeenCalledWith('cancel');
      
      component.close('close');
      expect(component.closeEvent.emit).toHaveBeenCalledWith('close');
    });

    it('should handle empty string', () => {
      spyOn(component.closeEvent, 'emit');
      
      component.close('');
      
      expect(component.closeEvent.emit).toHaveBeenCalledWith('');
      expect(component.modalopened).toBe(false);
    });
  });

  describe('emitFn()', () => {
    it('should emit closeEvent when clicking outside modal', fakeAsync(() => {
      component.modalopened = true;
      component.enablecookiemodal.nativeElement.contains = jasmine.createSpy('contains').and.returnValue(false);
      spyOn(component.closeEvent, 'emit');

      const event = { target: document.createElement('div') };
      component.emitFn(event);
      
      tick();
      
      expect(component.closeEvent.emit).toHaveBeenCalledWith('');
    }));

    it('should not emit when clicking inside modal', fakeAsync(() => {
      component.modalopened = true;
      component.enablecookiemodal.nativeElement.contains = jasmine.createSpy('contains').and.returnValue(true);
      spyOn(component.closeEvent, 'emit');

      const event = { target: document.createElement('div') };
      component.emitFn(event);
      
      tick();
      
      expect(component.closeEvent.emit).not.toHaveBeenCalled();
    }));

    it('should not emit when modal is not opened', fakeAsync(() => {
      component.modalopened = false;
      component.enablecookiemodal.nativeElement.contains = jasmine.createSpy('contains').and.returnValue(false);
      spyOn(component.closeEvent, 'emit');

      const event = { target: document.createElement('div') };
      component.emitFn(event);
      
      tick();
      
      expect(component.closeEvent.emit).not.toHaveBeenCalled();
    }));

    it('should handle multiple click events', fakeAsync(() => {
      component.modalopened = true;
      component.enablecookiemodal.nativeElement.contains = jasmine.createSpy('contains').and.returnValue(false);
      spyOn(component.closeEvent, 'emit');

      const event1 = { target: document.createElement('div') };
      const event2 = { target: document.createElement('div') };
      
      component.emitFn(event1);
      tick();
      component.emitFn(event2);
      tick();
      
      expect(component.closeEvent.emit).toHaveBeenCalledTimes(2);
    }));
  });

  describe('routeTofreetrial()', () => {
    beforeEach(() => {
      spyOn(SharedService, 'getUrlfromFeatureName').and.returnValue('/adults/subscription/start-your-free-trial');
    });

    it('should emit closeEvent with empty string', () => {
      spyOn(component.closeEvent, 'emit');
      
      component.routeTofreetrial();
      
      expect(component.closeEvent.emit).toHaveBeenCalledWith('');
    });

    it('should call getUrlfromFeatureName', () => {
      component.routeTofreetrial();
      
      expect(SharedService.getUrlfromFeatureName).toHaveBeenCalledWith('subscription/start-your-free-trial');
    });

    it('should navigate to free trial page', () => {
      component.routeTofreetrial();
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/subscription/start-your-free-trial']);
    });

    it('should emit closeEvent before navigation', () => {
      spyOn(component.closeEvent, 'emit');
      
      component.routeTofreetrial();
      
      expect(component.closeEvent.emit).toHaveBeenCalledWith('');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/subscription/start-your-free-trial']);
    });
  });

  describe('Input Properties', () => {
    it('should accept okText input', () => {
      component.okText = 'OK';
      expect(component.okText).toBe('OK');
    });

    it('should accept content input', () => {
      component.content = 'Test content';
      expect(component.content).toBe('Test content');
    });

    it('should accept title input', () => {
      component.title = 'Test Title';
      expect(component.title).toBe('Test Title');
    });

    it('should accept cancelText input', () => {
      component.cancelText = 'No';
      expect(component.cancelText).toBe('No');
    });

    it('should accept enableCancel input', () => {
      component.enableCancel = true;
      expect(component.enableCancel).toBe(true);
    });

    it('should accept modalid input', () => {
      component.modalid = 'test-modal';
      expect(component.modalid).toBe('test-modal');
    });

    it('should accept isFreeTrialEnable input', () => {
      component.isFreeTrialEnable = true;
      expect(component.isFreeTrialEnable).toBe(true);
    });
  });

  describe('Integration Tests', () => {
    it('should complete full modal lifecycle', fakeAsync(() => {
      spyOn(component.closeEvent, 'emit');
      
      component.ngOnInit();
      tick(100);
      
      expect(component.modalopened).toBe(true);
      
      component.close('ok');
      
      expect(component.modalopened).toBe(false);
      expect(component.closeEvent.emit).toHaveBeenCalledWith('ok');
    }));

    it('should handle outside click after opening', fakeAsync(() => {
      spyOn(component.closeEvent, 'emit');
      component.enablecookiemodal.nativeElement.contains = jasmine.createSpy('contains').and.returnValue(false);
      
      component.ngOnInit();
      tick(100);
      
      expect(component.modalopened).toBe(true);
      
      const event = { target: document.createElement('div') };
      component.emitFn(event);
      tick();
      
      expect(component.closeEvent.emit).toHaveBeenCalledWith('');
    }));
  });

  describe('Edge Cases', () => {
    it('should handle undefined ViewChild gracefully in close', () => {
      component.enablecookiemodal = undefined;
      
      expect(() => component.close('test')).not.toThrow();
    });

    it('should handle null event target in emitFn', fakeAsync(() => {
      component.modalopened = true;
      spyOn(component.closeEvent, 'emit');

      const event = { target: null };
      
      expect(() => {
        component.emitFn(event);
        tick();
      }).not.toThrow();
    }));

    it('should handle empty modalid', () => {
      component.modalid = '';
      fixture.detectChanges();
      
      expect(component.modalid).toBe('');
    });
  });
});

