/**
 * Example Component Test
 * Demonstrates best practices for testing Angular components in the shared folder
 */

import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// Import component to test
// import { ExampleComponent } from '../component/example/example.component';

// Import test helpers and mocks
import {
  findElement,
  clickElement,
  setInputValue,
  getTextContent,
  elementExists
} from '../helpers/test-helpers';
import { MockCommonService, MockNavigationService } from '../mocks/mock-services';
import { MOCK_USER } from '../fixtures/test-data';

/**
 * Example: Testing a Component
 */
describe('ExampleComponent', () => {
  // let component: ExampleComponent;
  // let fixture: ComponentFixture<ExampleComponent>;
  let mockCommonService: MockCommonService;
  let mockNavigationService: MockNavigationService;

  beforeEach(waitForAsync(() => {
    // Create mocks
    mockCommonService = new MockCommonService();
    mockNavigationService = new MockNavigationService();

    TestBed.configureTestingModule({
      declarations: [
        // ExampleComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        { provide: 'CommonService', useValue: mockCommonService },
        { provide: 'NavigationService', useValue: mockNavigationService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ExampleComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  /**
   * Test 1: Component Creation
   */
  it('should create', () => {
    // expect(component).toBeTruthy();
    expect(true).toBe(true); // Placeholder
  });

  /**
   * Test 2: Component Initialization
   */
  it('should initialize with default values', () => {
    // Assert
    // expect(component.title).toBe('Example Component');
    // expect(component.isLoading).toBe(false);
    // expect(component.items).toEqual([]);
    expect(true).toBe(true); // Placeholder
  });

  /**
   * Test 3: Testing DOM Elements
   */
  it('should render title in h1 element', () => {
    // Arrange
    // component.title = 'Test Title';
    // fixture.detectChanges();

    // Act
    // const titleElement = getTextContent(fixture, 'h1');

    // Assert
    // expect(titleElement).toBe('Test Title');
  });

  /**
   * Test 4: Testing User Input
   */
  it('should update model when input value changes', () => {
    // Arrange
    const testValue = 'test input';

    // Act
    // setInputValue(fixture, '#nameInput', testValue);

    // Assert
    // expect(component.name).toBe(testValue);
  });

  /**
   * Test 5: Testing Button Clicks
   */
  it('should call submit method when button is clicked', () => {
    // Arrange
    // spyOn(component, 'onSubmit');

    // Act
    // clickElement(fixture, '#submitButton');

    // Assert
    // expect(component.onSubmit).toHaveBeenCalled();
  });

  /**
   * Test 6: Testing Form Validation
   */
  it('should show error message when form is invalid', () => {
    // Arrange
    // component.form.controls['email'].setValue('invalid-email');
    // component.form.controls['email'].markAsTouched();
    // fixture.detectChanges();

    // Assert
    // expect(elementExists(fixture, '.error-message')).toBe(true);
    // expect(getTextContent(fixture, '.error-message')).toContain('valid email');
  });

  /**
   * Test 7: Testing Conditional Rendering
   */
  it('should show loading spinner when isLoading is true', () => {
    // Arrange
    // component.isLoading = true;
    // fixture.detectChanges();

    // Assert
    // expect(elementExists(fixture, '.spinner')).toBe(true);
  });

  it('should hide loading spinner when isLoading is false', () => {
    // Arrange
    // component.isLoading = false;
    // fixture.detectChanges();

    // Assert
    // expect(elementExists(fixture, '.spinner')).toBe(false);
  });

  /**
   * Test 8: Testing List Rendering
   */
  it('should render list of items', () => {
    // Arrange
    // component.items = [
    //   { id: 1, name: 'Item 1' },
    //   { id: 2, name: 'Item 2' },
    //   { id: 3, name: 'Item 3' }
    // ];
    // fixture.detectChanges();

    // Act
    // const listItems = fixture.debugElement.queryAll(By.css('.list-item'));

    // Assert
    // expect(listItems.length).toBe(3);
    // expect(listItems[0].nativeElement.textContent).toContain('Item 1');
  });

  /**
   * Test 9: Testing Event Emitters
   */
  it('should emit event when item is selected', () => {
    // Arrange
    // let emittedValue: any;
    // component.itemSelected.subscribe((value: any) => {
    //   emittedValue = value;
    // });

    // Act
    // component.selectItem({ id: 1, name: 'Test Item' });

    // Assert
    // expect(emittedValue).toEqual({ id: 1, name: 'Test Item' });
  });

  /**
   * Test 10: Testing Async Operations
   */
  it('should load data asynchronously', fakeAsync(() => {
    // Arrange
    // spyOn(component, 'loadData').and.returnValue(
    //   Promise.resolve([{ id: 1, name: 'Item 1' }])
    // );

    // Act
    // component.ngOnInit();
    // tick();

    // Assert
    // expect(component.items.length).toBe(1);
    // expect(component.isLoading).toBe(false);
  }));

  /**
   * Test 11: Testing Service Interactions
   */
  it('should call navigation service when navigating', () => {
    // Arrange
    mockNavigationService.navigate.and.returnValue(Promise.resolve(true));

    // Act
    // component.navigateToDetails(123);

    // Assert
    expect(mockNavigationService.navigate).toHaveBeenCalledWith(['/details', 123]);
  });

  /**
   * Test 12: Testing Error Handling
   */
  it('should display error message when data loading fails', fakeAsync(() => {
    // Arrange
    // spyOn(component, 'loadData').and.returnValue(
    //   Promise.reject(new Error('Failed to load'))
    // );

    // Act
    // component.ngOnInit();
    // tick();
    // fixture.detectChanges();

    // Assert
    // expect(component.errorMessage).toBe('Failed to load data');
    // expect(elementExists(fixture, '.error-alert')).toBe(true);
  }));

  /**
   * Test 13: Testing @Input Properties
   */
  it('should accept and display input data', () => {
    // Arrange
    const inputData = { id: 1, name: 'Test' };

    // Act
    // component.data = inputData;
    // fixture.detectChanges();

    // Assert
    // expect(component.data).toEqual(inputData);
    // expect(getTextContent(fixture, '.data-display')).toContain('Test');
  });

  /**
   * Test 14: Testing @Output Events
   */
  it('should emit close event when close button is clicked', () => {
    // Arrange
    // let eventEmitted = false;
    // component.closeClicked.subscribe(() => {
    //   eventEmitted = true;
    // });

    // Act
    // clickElement(fixture, '.close-button');

    // Assert
    // expect(eventEmitted).toBe(true);
  });

  /**
   * Test 15: Testing CSS Classes
   */
  it('should add active class when item is selected', () => {
    // Arrange
    // component.selectedId = 1;
    // fixture.detectChanges();

    // Act
    // const activeElement = fixture.debugElement.query(By.css('.active'));

    // Assert
    // expect(activeElement).toBeTruthy();
    // expect(activeElement.nativeElement.getAttribute('data-id')).toBe('1');
  });

  /**
   * Test 16: Testing ngOnDestroy
   */
  it('should unsubscribe from observables on destroy', () => {
    // Arrange
    // spyOn(component.subscription, 'unsubscribe');

    // Act
    // component.ngOnDestroy();

    // Assert
    // expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });

  /**
   * Test 17: Testing Template-driven Forms
   */
  it('should bind form values correctly', () => {
    // Arrange
    // const input = fixture.debugElement.query(By.css('#usernameInput'));

    // Act
    // input.nativeElement.value = 'testuser';
    // input.nativeElement.dispatchEvent(new Event('input'));
    // fixture.detectChanges();

    // Assert
    // expect(component.username).toBe('testuser');
  });

  /**
   * Test 18: Testing Reactive Forms
   */
  it('should validate reactive form correctly', () => {
    // Arrange
    // const emailControl = component.form.get('email');

    // Act
    // emailControl.setValue('invalid-email');

    // Assert
    // expect(emailControl.valid).toBe(false);
    // expect(emailControl.errors?.['email']).toBeTruthy();

    // Act - Set valid email
    // emailControl.setValue('valid@email.com');

    // Assert
    // expect(emailControl.valid).toBe(true);
  });

  /**
   * Test 19: Testing Pipes in Template
   */
  it('should format date using date pipe', () => {
    // Arrange
    // component.date = new Date('2024-01-15');
    // fixture.detectChanges();

    // Act
    // const dateElement = getTextContent(fixture, '.formatted-date');

    // Assert
    // expect(dateElement).toContain('Jan 15, 2024');
  });

  /**
   * Test 20: Testing Accessibility
   */
  it('should have proper aria labels', () => {
    // fixture.detectChanges();

    // Assert
    // const button = fixture.debugElement.query(By.css('button'));
    // expect(button.nativeElement.getAttribute('aria-label')).toBe('Submit form');
  });
});

/**
 * Example: Testing Component with Child Components
 */
describe('ExampleParentComponent', () => {
  // let component: ExampleParentComponent;
  // let fixture: ComponentFixture<ExampleParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        // ExampleParentComponent,
        // MockChildComponent // Use mock child component
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ExampleParentComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should pass data to child component', () => {
    // Arrange
    const testData = { id: 1, name: 'Test' };
    // component.dataForChild = testData;
    // fixture.detectChanges();

    // Act
    // const childComponent = fixture.debugElement.query(By.directive(MockChildComponent));
    // const childInstance = childComponent.componentInstance;

    // Assert
    // expect(childInstance.data).toEqual(testData);
  });

  it('should handle event from child component', () => {
    // Arrange
    // spyOn(component, 'onChildEvent');

    // Act
    // const childComponent = fixture.debugElement.query(By.directive(MockChildComponent));
    // childComponent.componentInstance.eventEmitter.emit('test data');

    // Assert
    // expect(component.onChildEvent).toHaveBeenCalledWith('test data');
  });
});

/**
 * Best Practices Summary:
 * 
 * 1. Use waitForAsync() for component compilation
 * 2. Use fakeAsync() and tick() for testing async operations
 * 3. Always call fixture.detectChanges() after modifying component
 * 4. Test both component logic and template rendering
 * 5. Use test helpers for common DOM operations
 * 6. Mock child components and services
 * 7. Test accessibility features
 * 8. Test error states and edge cases
 * 9. Clean up subscriptions in ngOnDestroy
 * 10. Test user interactions thoroughly
 */

