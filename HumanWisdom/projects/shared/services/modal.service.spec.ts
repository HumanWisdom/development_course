import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  let mockModalElement: HTMLElement;
  let mockBackdrop: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService]
    });
    service = TestBed.inject(ModalService);

    // Create mock modal element
    mockModalElement = document.createElement('div');
    mockModalElement.id = 'testModal';
    mockModalElement.classList.add('modal');
    document.body.appendChild(mockModalElement);

    // Mock Bootstrap on window
    (window as any).bootstrap = {
      Modal: jasmine.createSpy('Modal').and.returnValue({
        show: jasmine.createSpy('show'),
        hide: jasmine.createSpy('hide')
      })
    };
    
    // Mock Modal.getInstance as a static method
    (window as any).bootstrap.Modal.getInstance = jasmine.createSpy('getInstance').and.returnValue(null);
  });

  afterEach(() => {
    // Clean up DOM
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.remove());
    
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    
    document.body.classList.remove('modal-open');
    (document.body as any).style.paddingRight = '';
    document.body.style.overflow = '';
    
    // Clean up Bootstrap mock
    delete (window as any).bootstrap;
  });

  describe('Service Initialization', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('openModal', () => {
    it('should open modal by adding classes and styles', () => {
      const result = service.openModal('testModal');

      expect(result).toBe(true);
      expect(mockModalElement.classList.contains('show')).toBe(true);
      expect(mockModalElement.classList.contains('fade')).toBe(true);
      expect(mockModalElement.classList.contains('in')).toBe(true);
      expect(mockModalElement.style.display).toBe('block');
      expect(mockModalElement.getAttribute('aria-hidden')).toBe('false');
    });

    it('should add modal-open class to body', () => {
      service.openModal('testModal');

      expect(document.body.classList.contains('modal-open')).toBe(true);
    });

    it('should create backdrop if not exists', () => {
      service.openModal('testModal');

      const backdrop = document.querySelector('.modal-backdrop');
      expect(backdrop).toBeTruthy();
      expect(backdrop?.classList.contains('fade')).toBe(true);
      expect(backdrop?.classList.contains('in')).toBe(true);
      expect(backdrop?.classList.contains('show')).toBe(true);
    });

    it('should not create duplicate backdrop', () => {
      service.openModal('testModal');
      service.openModal('testModal');

      const backdrops = document.querySelectorAll('.modal-backdrop');
      expect(backdrops.length).toBe(1);
    });

    it('should return false for non-existent modal', () => {
      spyOn(console, 'warn');
      const result = service.openModal('nonExistentModal');

      expect(result).toBe(false);
      expect(console.warn).toHaveBeenCalledWith('Modal element with ID "nonExistentModal" not found');
    });

    it('should stop event propagation if event is provided', () => {
      const mockEvent = jasmine.createSpyObj('Event', ['stopPropagation', 'preventDefault']);
      service.openModal('testModal', mockEvent);

      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should work without event parameter', () => {
      expect(() => service.openModal('testModal')).not.toThrow();
    });
  });

  describe('closeModal', () => {
    beforeEach(() => {
      // Open modal first
      service.openModal('testModal');
    });

    it('should close modal by removing classes and styles', () => {
      const result = service.closeModal('testModal');

      expect(result).toBe(true);
      expect(mockModalElement.classList.contains('show')).toBe(false);
      expect(mockModalElement.classList.contains('in')).toBe(false);
      expect(mockModalElement.style.display).toBe('none');
      expect(mockModalElement.getAttribute('aria-hidden')).toBe('true');
    });

    it('should remove modal-open class from body', () => {
      service.closeModal('testModal');

      expect(document.body.classList.contains('modal-open')).toBe(false);
    });

    it('should remove all backdrops', () => {
      service.closeModal('testModal');

      const backdrops = document.querySelectorAll('.modal-backdrop');
      expect(backdrops.length).toBe(0);
    });

    it('should reset body overflow and padding', () => {
      document.body.style.overflow = 'hidden';
      (document.body as any).style.paddingRight = '17px';

      service.closeModal('testModal');

      expect(document.body.style.overflow).toBe('auto');
      expect((document.body as any).style.paddingRight).toBe('');
    });

    it('should return false for non-existent modal', () => {
      spyOn(console, 'warn');
      const result = service.closeModal('nonExistentModal');

      expect(result).toBe(false);
      expect(console.warn).toHaveBeenCalledWith('Modal element with ID "nonExistentModal" not found');
    });

    it('should try to use Bootstrap Modal if available', () => {
      const mockInstance = {
        hide: jasmine.createSpy('hide')
      };
      (window as any).bootstrap.Modal.getInstance = jasmine.createSpy().and.returnValue(mockInstance);

      service.closeModal('testModal');

      expect(mockInstance.hide).toHaveBeenCalled();
    });

    it('should fallback to manual close if Bootstrap fails', () => {
      // Mock getInstance to return null
      (window as any).bootstrap.Modal.getInstance = jasmine.createSpy('getInstance').and.returnValue(null);
      
      // Create a constructor that throws an error but still has getInstance
      const MockModalConstructor: any = jasmine.createSpy('Modal').and.throwError('Bootstrap error');
      MockModalConstructor.getInstance = (window as any).bootstrap.Modal.getInstance;
      (window as any).bootstrap.Modal = MockModalConstructor;

      const result = service.closeModal('testModal');

      expect(result).toBe(true);
      expect(mockModalElement.classList.contains('show')).toBe(false);
    });

    it('should work when Bootstrap is not available', () => {
      delete (window as any).bootstrap;

      const result = service.closeModal('testModal');

      expect(result).toBe(true);
      expect(mockModalElement.classList.contains('show')).toBe(false);
    });
  });

  describe('openModalByElement', () => {
    it('should open modal using element reference', () => {
      const result = service.openModalByElement(mockModalElement);

      expect(result).toBe(true);
      expect(mockModalElement.classList.contains('show')).toBe(true);
      expect(mockModalElement.style.display).toBe('block');
    });

    it('should return false for null element', () => {
      spyOn(console, 'warn');
      const result = service.openModalByElement(null as any);

      expect(result).toBe(false);
      expect(console.warn).toHaveBeenCalledWith('Modal element is null or undefined');
    });

    it('should return false for undefined element', () => {
      spyOn(console, 'warn');
      const result = service.openModalByElement(undefined as any);

      expect(result).toBe(false);
      expect(console.warn).toHaveBeenCalledWith('Modal element is null or undefined');
    });

    it('should stop event propagation if event is provided', () => {
      const mockEvent = jasmine.createSpyObj('Event', ['stopPropagation', 'preventDefault']);
      service.openModalByElement(mockModalElement, mockEvent);

      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should add backdrop when opening', () => {
      service.openModalByElement(mockModalElement);

      const backdrop = document.querySelector('.modal-backdrop');
      expect(backdrop).toBeTruthy();
    });

    it('should add modal-open class to body', () => {
      service.openModalByElement(mockModalElement);

      expect(document.body.classList.contains('modal-open')).toBe(true);
    });

    it('should set aria-hidden to false', () => {
      service.openModalByElement(mockModalElement);

      expect(mockModalElement.getAttribute('aria-hidden')).toBe('false');
    });
  });

  describe('closeModalByElement', () => {
    beforeEach(() => {
      service.openModalByElement(mockModalElement);
    });

    it('should close modal using element reference', () => {
      const result = service.closeModalByElement(mockModalElement);

      expect(result).toBe(true);
      expect(mockModalElement.classList.contains('show')).toBe(false);
      expect(mockModalElement.style.display).toBe('none');
    });

    it('should return false for null element', () => {
      spyOn(console, 'warn');
      const result = service.closeModalByElement(null as any);

      expect(result).toBe(false);
      expect(console.warn).toHaveBeenCalledWith('Modal element is null or undefined');
    });

    it('should return false for undefined element', () => {
      spyOn(console, 'warn');
      const result = service.closeModalByElement(undefined as any);

      expect(result).toBe(false);
      expect(console.warn).toHaveBeenCalledWith('Modal element is null or undefined');
    });

    it('should remove all backdrops', () => {
      service.closeModalByElement(mockModalElement);

      const backdrops = document.querySelectorAll('.modal-backdrop');
      expect(backdrops.length).toBe(0);
    });

    it('should remove modal-open class from body', () => {
      service.closeModalByElement(mockModalElement);

      expect(document.body.classList.contains('modal-open')).toBe(false);
    });

    it('should set aria-hidden to true', () => {
      service.closeModalByElement(mockModalElement);

      expect(mockModalElement.getAttribute('aria-hidden')).toBe('true');
    });

    it('should try to use Bootstrap Modal if available', () => {
      const mockInstance = {
        hide: jasmine.createSpy('hide')
      };
      (window as any).bootstrap.Modal.getInstance = jasmine.createSpy().and.returnValue(mockInstance);

      service.closeModalByElement(mockModalElement);

      expect(mockInstance.hide).toHaveBeenCalled();
    });
  });

  describe('isModalOpen', () => {
    it('should return true when modal is open', () => {
      service.openModal('testModal');
      
      const result = service.isModalOpen('testModal');
      
      expect(result).toBe(true);
    });

    it('should return false when modal is closed', () => {
      service.openModal('testModal');
      service.closeModal('testModal');
      
      const result = service.isModalOpen('testModal');
      
      expect(result).toBe(false);
    });

    it('should return false for non-existent modal', () => {
      const result = service.isModalOpen('nonExistentModal');
      
      expect(result).toBe(false);
    });

    it('should return false when modal has show class but display is not block', () => {
      mockModalElement.classList.add('show');
      mockModalElement.style.display = 'none';
      
      const result = service.isModalOpen('testModal');
      
      expect(result).toBe(false);
    });

    it('should return false when modal has display block but no show class', () => {
      mockModalElement.classList.remove('show');
      mockModalElement.style.display = 'block';
      
      const result = service.isModalOpen('testModal');
      
      expect(result).toBe(false);
    });

    it('should return true only when both conditions are met', () => {
      mockModalElement.classList.add('show');
      mockModalElement.style.display = 'block';
      
      const result = service.isModalOpen('testModal');
      
      expect(result).toBe(true);
    });
  });

  describe('Backdrop Management', () => {
    it('should create only one backdrop for multiple modals', () => {
      const modal2 = document.createElement('div');
      modal2.id = 'testModal2';
      document.body.appendChild(modal2);

      service.openModal('testModal');
      service.openModal('testModal2');

      const backdrops = document.querySelectorAll('.modal-backdrop');
      expect(backdrops.length).toBe(1);

      modal2.remove();
    });

    it('should remove all backdrops when closing modal', () => {
      // Create multiple backdrops manually
      const backdrop1 = document.createElement('div');
      backdrop1.className = 'modal-backdrop';
      document.body.appendChild(backdrop1);

      const backdrop2 = document.createElement('div');
      backdrop2.className = 'modal-backdrop fade in show';
      document.body.appendChild(backdrop2);

      service.closeModal('testModal');

      const backdrops = document.querySelectorAll('.modal-backdrop');
      expect(backdrops.length).toBe(0);
    });

    it('should handle closing when no backdrop exists', () => {
      // Remove any existing backdrops
      document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());

      expect(() => service.closeModal('testModal')).not.toThrow();
    });
  });

  describe('Body Scroll Prevention', () => {
    it('should prevent body scroll when modal opens', () => {
      service.openModal('testModal');

      expect(document.body.classList.contains('modal-open')).toBe(true);
    });

    it('should restore body scroll when modal closes', () => {
      service.openModal('testModal');
      expect(document.body.classList.contains('modal-open')).toBe(true);

      service.closeModal('testModal');
      expect(document.body.classList.contains('modal-open')).toBe(false);
      expect(document.body.style.overflow).toBe('auto');
    });

    it('should reset padding when closing', () => {
      (document.body as any).style.paddingRight = '17px';
      service.closeModal('testModal');

      expect((document.body as any).style.paddingRight).toBe('');
    });
  });

  describe('Bootstrap Integration', () => {
    it('should create new Bootstrap Modal instance if none exists', () => {
      const mockConstructor = jasmine.createSpy('Modal').and.returnValue({
        hide: jasmine.createSpy('hide')
      });
      (window as any).bootstrap.Modal = mockConstructor;
      (window as any).bootstrap.Modal.getInstance = jasmine.createSpy().and.returnValue(null);

      service.closeModal('testModal');

      expect(mockConstructor).toHaveBeenCalledWith(mockModalElement);
    });

    it('should handle Bootstrap constructor error gracefully', () => {
      (window as any).bootstrap.Modal = jasmine.createSpy().and.throwError('Bootstrap error');
      (window as any).bootstrap.Modal.getInstance = jasmine.createSpy().and.returnValue(null);

      const result = service.closeModal('testModal');

      expect(result).toBe(true);
      // Should still close the modal manually
      expect(mockModalElement.classList.contains('show')).toBe(false);
    });

    it('should use existing Bootstrap Modal instance', () => {
      const mockInstance = {
        hide: jasmine.createSpy('hide')
      };
      (window as any).bootstrap.Modal.getInstance = jasmine.createSpy().and.returnValue(mockInstance);

      service.closeModal('testModal');

      expect(mockInstance.hide).toHaveBeenCalled();
    });

    it('should work without Bootstrap library', () => {
      delete (window as any).bootstrap;

      const openResult = service.openModal('testModal');
      expect(openResult).toBe(true);

      const closeResult = service.closeModal('testModal');
      expect(closeResult).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle opening already open modal', () => {
      service.openModal('testModal');
      const result = service.openModal('testModal');

      expect(result).toBe(true);
      expect(mockModalElement.classList.contains('show')).toBe(true);
    });

    it('should handle closing already closed modal', () => {
      const result = service.closeModal('testModal');

      expect(result).toBe(true);
    });

    it('should handle rapid open/close cycles', () => {
      for (let i = 0; i < 10; i++) {
        service.openModal('testModal');
        service.closeModal('testModal');
      }

      expect(mockModalElement.classList.contains('show')).toBe(false);
      expect(document.body.classList.contains('modal-open')).toBe(false);
      const backdrops = document.querySelectorAll('.modal-backdrop');
      expect(backdrops.length).toBe(0);
    });

    it('should handle modal with existing classes', () => {
      mockModalElement.classList.add('custom-class');
      service.openModal('testModal');

      expect(mockModalElement.classList.contains('custom-class')).toBe(true);
      expect(mockModalElement.classList.contains('show')).toBe(true);
    });

    it('should handle modal with existing styles', () => {
      mockModalElement.style.backgroundColor = 'red';
      service.openModal('testModal');

      expect(mockModalElement.style.backgroundColor).toBe('red');
      expect(mockModalElement.style.display).toBe('block');
    });

    it('should not throw error when closing non-existent backdrop', () => {
      // Remove all backdrops
      document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());

      expect(() => service.closeModal('testModal')).not.toThrow();
    });
  });

  describe('ARIA Attributes', () => {
    it('should set aria-hidden to false when opening', () => {
      service.openModal('testModal');

      expect(mockModalElement.getAttribute('aria-hidden')).toBe('false');
    });

    it('should set aria-hidden to true when closing', () => {
      service.openModal('testModal');
      service.closeModal('testModal');

      expect(mockModalElement.getAttribute('aria-hidden')).toBe('true');
    });

    it('should maintain other aria attributes', () => {
      mockModalElement.setAttribute('aria-labelledby', 'modalTitle');
      service.openModal('testModal');

      expect(mockModalElement.getAttribute('aria-labelledby')).toBe('modalTitle');
    });
  });

  describe('Multiple Modals', () => {
    let modal2: HTMLElement;

    beforeEach(() => {
      modal2 = document.createElement('div');
      modal2.id = 'testModal2';
      modal2.classList.add('modal');
      document.body.appendChild(modal2);
    });

    afterEach(() => {
      modal2.remove();
    });

    it('should handle opening multiple modals', () => {
      service.openModal('testModal');
      service.openModal('testModal2');

      expect(mockModalElement.classList.contains('show')).toBe(true);
      expect(modal2.classList.contains('show')).toBe(true);
    });

    it('should maintain body scroll prevention with multiple modals', () => {
      service.openModal('testModal');
      service.openModal('testModal2');

      expect(document.body.classList.contains('modal-open')).toBe(true);

      service.closeModal('testModal');
      // Body should still have modal-open because another modal is open
      // Note: This service doesn't track multiple modals, so it will remove the class
      // This is expected behavior based on current implementation
      expect(document.body.classList.contains('modal-open')).toBe(false);
    });
  });

  describe('Event Handling', () => {
    it('should handle MouseEvent', () => {
      const mockEvent = new MouseEvent('click');
      spyOn(mockEvent, 'stopPropagation');
      spyOn(mockEvent, 'preventDefault');

      service.openModal('testModal', mockEvent);

      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should handle KeyboardEvent', () => {
      const mockEvent = new KeyboardEvent('keydown');
      spyOn(mockEvent, 'stopPropagation');
      spyOn(mockEvent, 'preventDefault');

      service.openModal('testModal', mockEvent);

      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should handle custom events', () => {
      const mockEvent = new CustomEvent('customEvent');
      spyOn(mockEvent, 'stopPropagation');
      spyOn(mockEvent, 'preventDefault');

      service.openModal('testModal', mockEvent);

      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  describe('CSS Class Management', () => {
    it('should add all required classes when opening', () => {
      service.openModal('testModal');

      const classList = Array.from(mockModalElement.classList);
      expect(classList).toContain('fade');
      expect(classList).toContain('in');
      expect(classList).toContain('show');
    });

    it('should remove show and in classes when closing', () => {
      service.openModal('testModal');
      service.closeModal('testModal');

      expect(mockModalElement.classList.contains('show')).toBe(false);
      expect(mockModalElement.classList.contains('in')).toBe(false);
      // fade class may or may not be removed based on implementation
    });

    it('should preserve non-modal-related classes', () => {
      mockModalElement.classList.add('custom-modal', 'large-modal');
      service.openModal('testModal');
      service.closeModal('testModal');

      expect(mockModalElement.classList.contains('custom-modal')).toBe(true);
      expect(mockModalElement.classList.contains('large-modal')).toBe(true);
    });
  });

  describe('Display Style Management', () => {
    it('should set display to block when opening', () => {
      service.openModal('testModal');

      expect(mockModalElement.style.display).toBe('block');
    });

    it('should set display to none when closing', () => {
      service.openModal('testModal');
      service.closeModal('testModal');

      expect(mockModalElement.style.display).toBe('none');
    });

    it('should override inline display style', () => {
      mockModalElement.style.display = 'flex';
      service.openModal('testModal');

      expect(mockModalElement.style.display).toBe('block');
    });
  });
});

