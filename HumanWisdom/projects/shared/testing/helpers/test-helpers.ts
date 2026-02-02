/**
 * Test Helper Functions
 * Common utilities and helper functions for testing shared components
 */

import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

/**
 * Helper to find a DOM element by CSS selector
 */
export function findElement<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}

/**
 * Helper to find multiple DOM elements by CSS selector
 */
export function findElements<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement[] {
  return fixture.debugElement.queryAll(By.css(selector));
}

/**
 * Helper to get the native element
 */
export function getNativeElement<T>(
  fixture: ComponentFixture<T>,
  selector: string
): HTMLElement {
  const element = findElement(fixture, selector);
  return element ? element.nativeElement : null;
}

/**
 * Helper to click an element
 */
export function clickElement<T>(
  fixture: ComponentFixture<T>,
  selector: string
): void {
  const element = getNativeElement(fixture, selector);
  if (element) {
    element.click();
    fixture.detectChanges();
  }
}

/**
 * Helper to set input value
 */
export function setInputValue<T>(
  fixture: ComponentFixture<T>,
  selector: string,
  value: string
): void {
  const input = getNativeElement(fixture, selector) as HTMLInputElement;
  if (input) {
    input.value = value;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }
}

/**
 * Helper to get text content of an element
 */
export function getTextContent<T>(
  fixture: ComponentFixture<T>,
  selector: string
): string {
  const element = getNativeElement(fixture, selector);
  return element ? element.textContent?.trim() || '' : '';
}

/**
 * Helper to check if element exists
 */
export function elementExists<T>(
  fixture: ComponentFixture<T>,
  selector: string
): boolean {
  return findElement(fixture, selector) !== null;
}

/**
 * Helper to check if element is visible
 */
export function isElementVisible<T>(
  fixture: ComponentFixture<T>,
  selector: string
): boolean {
  const element = getNativeElement(fixture, selector);
  if (!element) return false;
  
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

/**
 * Helper to wait for async operations
 */
export async function waitForAsync(ms: number = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Helper to trigger change detection
 */
export function detectChanges<T>(fixture: ComponentFixture<T>): void {
  fixture.detectChanges();
}

/**
 * Helper to get component instance
 */
export function getComponentInstance<T>(fixture: ComponentFixture<T>): T {
  return fixture.componentInstance;
}

/**
 * Helper to dispatch custom event
 */
export function dispatchEvent<T>(
  fixture: ComponentFixture<T>,
  selector: string,
  eventType: string,
  eventData?: any
): void {
  const element = getNativeElement(fixture, selector);
  if (element) {
    const event = new CustomEvent(eventType, { detail: eventData });
    element.dispatchEvent(event);
    fixture.detectChanges();
  }
}

/**
 * Helper to check if element has class
 */
export function hasClass<T>(
  fixture: ComponentFixture<T>,
  selector: string,
  className: string
): boolean {
  const element = getNativeElement(fixture, selector);
  return element ? element.classList.contains(className) : false;
}

/**
 * Helper to get element attribute value
 */
export function getAttributeValue<T>(
  fixture: ComponentFixture<T>,
  selector: string,
  attributeName: string
): string | null {
  const element = getNativeElement(fixture, selector);
  return element ? element.getAttribute(attributeName) : null;
}

/**
 * Helper to check if element is disabled
 */
export function isElementDisabled<T>(
  fixture: ComponentFixture<T>,
  selector: string
): boolean {
  const element = getNativeElement(fixture, selector) as HTMLInputElement | HTMLButtonElement;
  return element ? element.disabled : false;
}

/**
 * Helper to count elements matching selector
 */
export function countElements<T>(
  fixture: ComponentFixture<T>,
  selector: string
): number {
  return findElements(fixture, selector).length;
}

/**
 * Helper to submit a form
 */
export function submitForm<T>(
  fixture: ComponentFixture<T>,
  formSelector: string = 'form'
): void {
  const form = getNativeElement(fixture, formSelector) as HTMLFormElement;
  if (form) {
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
  }
}

/**
 * Helper to select option in dropdown
 */
export function selectOption<T>(
  fixture: ComponentFixture<T>,
  selector: string,
  value: string
): void {
  const select = getNativeElement(fixture, selector) as HTMLSelectElement;
  if (select) {
    select.value = value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }
}

/**
 * Helper to check/uncheck checkbox
 */
export function setCheckboxValue<T>(
  fixture: ComponentFixture<T>,
  selector: string,
  checked: boolean
): void {
  const checkbox = getNativeElement(fixture, selector) as HTMLInputElement;
  if (checkbox) {
    checkbox.checked = checked;
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }
}

/**
 * Helper to mock console methods
 */
export function mockConsole() {
  return {
    log: spyOn(console, 'log'),
    error: spyOn(console, 'error'),
    warn: spyOn(console, 'warn'),
    info: spyOn(console, 'info')
  };
}

/**
 * Helper to create a fake timer for testing time-dependent code
 */
export function useFakeTimers() {
  jasmine.clock().install();
  return {
    tick: (ms: number) => jasmine.clock().tick(ms),
    uninstall: () => jasmine.clock().uninstall()
  };
}

/**
 * Helper to create a promise that resolves after specified time
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Helper to verify spy was called with specific arguments
 */
export function expectSpyToHaveBeenCalledWith(
  spy: jasmine.Spy,
  ...args: any[]
): void {
  expect(spy).toHaveBeenCalledWith(...args);
}

/**
 * Helper to verify spy call count
 */
export function expectSpyCallCount(
  spy: jasmine.Spy,
  count: number
): void {
  expect(spy).toHaveBeenCalledTimes(count);
}

/**
 * Helper to create a mock date
 */
export function createMockDate(dateString: string): Date {
  return new Date(dateString);
}

/**
 * Helper to get all spy calls
 */
export function getSpyCalls(spy: jasmine.Spy): jasmine.CallInfo<any>[] {
  return spy.calls.all();
}

/**
 * Helper to reset spy
 */
export function resetSpy(spy: jasmine.Spy): void {
  spy.calls.reset();
}

/**
 * Helper to create a mock file
 */
export function createMockFile(
  name: string,
  size: number,
  type: string = 'text/plain'
): File {
  const blob = new Blob(['test content'], { type });
  return new File([blob], name, { type });
}

/**
 * Helper to create a mock image file
 */
export function createMockImageFile(name: string = 'test.jpg'): File {
  return createMockFile(name, 1024, 'image/jpeg');
}

/**
 * Helper to wait for observable to emit
 */
export async function waitForObservable<T>(
  observable: any,
  expectedValue?: T
): Promise<T> {
  return new Promise((resolve, reject) => {
    const subscription = observable.subscribe({
      next: (value: T) => {
        if (expectedValue === undefined || value === expectedValue) {
          subscription.unsubscribe();
          resolve(value);
        }
      },
      error: (err: any) => {
        subscription.unsubscribe();
        reject(err);
      }
    });
  });
}

/**
 * Helper to create a mock local storage
 */
export function createMockLocalStorage(): Storage {
  let store: { [key: string]: string } = {};
  
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
    key: (index: number) => Object.keys(store)[index] || null,
    length: Object.keys(store).length
  };
}

