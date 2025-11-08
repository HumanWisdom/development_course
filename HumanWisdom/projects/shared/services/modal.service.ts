import { Injectable } from '@angular/core';

/**
 * Service for managing modal popups across the application.
 * Provides common logic for opening and closing modals with proper
 * backdrop handling, body scroll prevention, and Bootstrap compatibility.
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  /**
   * Opens a modal popup by its element ID.
   * Handles Bootstrap v5 modal instances and provides fallback for manual control.
   * 
   * @param modalId - The ID of the modal element to open
   * @param event - Optional event to prevent default behavior and stop propagation
   * @returns true if modal was successfully opened, false otherwise
   */
  openModal(modalId: string, event?: Event): boolean {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    const modalElement = document.getElementById(modalId);
    if (!modalElement) {
      console.warn(`Modal element with ID "${modalId}" not found`);
      return false;
    }

    // Ensure classes and styles to show the modal
    modalElement.classList.add('fade', 'in', 'show');
    (modalElement as HTMLElement).style.display = 'block';
    modalElement.setAttribute('aria-hidden', 'false');

    // Add backdrop if missing
    if (!document.querySelector('.modal-backdrop')) {
      this.createBackdrop();
    }

    // Prevent background scroll
    document.body.classList.add('modal-open');

    return true;
  }

  /**
   * Closes a modal popup by its element ID.
   * Handles Bootstrap v5 modal instances and provides fallback for manual control.
   * 
   * @param modalId - The ID of the modal element to close
   * @returns true if modal was successfully closed, false otherwise
   */
  closeModal(modalId: string): boolean {
    const modalElement = document.getElementById(modalId);
    if (!modalElement) {
      console.warn(`Modal element with ID "${modalId}" not found`);
      return false;
    }

    // Try Bootstrap v5 first
    const bootstrapAny: any = (window as any).bootstrap;
    if (bootstrapAny && bootstrapAny.Modal) {
      let instance = bootstrapAny.Modal.getInstance(modalElement);
      if (!instance) {
        try {
          instance = new bootstrapAny.Modal(modalElement);
        } catch (_) {
          // fall through to manual close
        }
      }
      if (instance && instance.hide) {
        instance.hide();
      }
    }

    // Fallback: force-close for mixed/legacy markup (v4/v5)
    modalElement.classList.remove('show', 'in');
    modalElement.setAttribute('aria-hidden', 'true');
    (modalElement as HTMLElement).style.display = 'none';

    // Remove all backdrops
    this.removeBackdrops();

    // Restore body scroll
    document.body.classList.remove('modal-open');
    (document.body as any).style.paddingRight = '';
    document.body.style.overflow = 'auto';

    return true;
  }

  /**
   * Opens a modal popup using an HTMLElement reference.
   * 
   * @param modalElement - The modal element to open
   * @param event - Optional event to prevent default behavior and stop propagation
   * @returns true if modal was successfully opened, false otherwise
   */
  openModalByElement(modalElement: HTMLElement, event?: Event): boolean {
    if (!modalElement) {
      console.warn('Modal element is null or undefined');
      return false;
    }

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    // Ensure classes and styles to show the modal
    modalElement.classList.add('fade', 'in', 'show');
    modalElement.style.display = 'block';
    modalElement.setAttribute('aria-hidden', 'false');

    // Add backdrop if missing
    if (!document.querySelector('.modal-backdrop')) {
      this.createBackdrop();
    }

    // Prevent background scroll
    document.body.classList.add('modal-open');

    return true;
  }

  /**
   * Closes a modal popup using an HTMLElement reference.
   * 
   * @param modalElement - The modal element to close
   * @returns true if modal was successfully closed, false otherwise
   */
  closeModalByElement(modalElement: HTMLElement): boolean {
    if (!modalElement) {
      console.warn('Modal element is null or undefined');
      return false;
    }

    // Try Bootstrap v5 first
    const bootstrapAny: any = (window as any).bootstrap;
    if (bootstrapAny && bootstrapAny.Modal) {
      let instance = bootstrapAny.Modal.getInstance(modalElement);
      if (!instance) {
        try {
          instance = new bootstrapAny.Modal(modalElement);
        } catch (_) {
          // fall through to manual close
        }
      }
      if (instance && instance.hide) {
        instance.hide();
      }
    }

    // Fallback: force-close for mixed/legacy markup (v4/v5)
    modalElement.classList.remove('show', 'in');
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.style.display = 'none';

    // Remove all backdrops
    this.removeBackdrops();

    // Restore body scroll
    document.body.classList.remove('modal-open');
    (document.body as any).style.paddingRight = '';
    document.body.style.overflow = 'auto';

    return true;
  }

  /**
   * Creates and appends a modal backdrop element to the document body.
   * @private
   */
  private createBackdrop(): void {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade in show';
    document.body.appendChild(backdrop);
  }

  /**
   * Removes all modal backdrop elements from the document.
   * @private
   */
  private removeBackdrops(): void {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(b => b.parentElement?.removeChild(b));
  }

  /**
   * Checks if a modal is currently open.
   * 
   * @param modalId - The ID of the modal element to check
   * @returns true if modal is open, false otherwise
   */
  isModalOpen(modalId: string): boolean {
    const modalElement = document.getElementById(modalId);
    if (!modalElement) {
      return false;
    }
    return modalElement.classList.contains('show') && 
           (modalElement as HTMLElement).style.display === 'block';
  }
}

