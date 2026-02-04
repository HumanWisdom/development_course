# Writing Your First Test - Step by Step Guide

This guide walks you through writing tests for shared components, starting from scratch.

## 📖 Table of Contents
1. [Test File Structure](#test-file-structure)
2. [Basic Template](#basic-template)
3. [Common Test Patterns](#common-test-patterns)
4. [Running Your Test](#running-your-test)

---

## Test File Structure

Every test file (`.spec.ts`) follows this structure:

```typescript
// 1. Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourComponent } from './your.component';

// 2. Describe block - groups all tests for this component
describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;

  // 3. beforeEach - runs before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourComponent ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
  });

  // 4. Individual tests
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

---

## Basic Template

### For a Simple Component

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent ],
      imports: [], // Add modules like FormsModule, RouterTestingModule
      providers: [] // Add service mocks
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default property value', () => {
    expect(component.someProperty).toBe(expectedValue);
  });

  it('should call a method correctly', () => {
    const result = component.someMethod();
    expect(result).toBe(expectedResult);
  });
});
```

### For a Service

```typescript
import { TestBed } from '@angular/core/testing';
import { MyService } from './my.service';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyService]
    });
    service = TestBed.inject(MyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct value from method', () => {
    const result = service.getData();
    expect(result).toEqual(expectedData);
  });
});
```

---

## Common Test Patterns

### 1. Testing Component Properties

```typescript
it('should initialize with default values', () => {
  expect(component.title).toBe('');
  expect(component.isLoading).toBe(false);
  expect(component.items).toEqual([]);
});
```

### 2. Testing Methods

```typescript
it('should add item to list', () => {
  const newItem = 'Test Item';
  component.addItem(newItem);
  
  expect(component.items.length).toBe(1);
  expect(component.items[0]).toBe(newItem);
});
```

### 3. Testing with Mocked Services

```typescript
describe('MyComponent with Mock Service', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  let mockService: jasmine.SpyObj<MyService>;

  beforeEach(async () => {
    // Create mock service
    mockService = jasmine.createSpyObj('MyService', ['getData', 'saveData']);
    mockService.getData.and.returnValue(of({ data: 'test' }));

    await TestBed.configureTestingModule({
      declarations: [ MyComponent ],
      providers: [
        { provide: MyService, useValue: mockService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should call service method', () => {
    component.loadData();
    expect(mockService.getData).toHaveBeenCalled();
  });

  it('should handle service response', () => {
    component.loadData();
    expect(component.data).toEqual({ data: 'test' });
  });
});
```

### 4. Testing Async Operations

```typescript
it('should handle async operation', fakeAsync(() => {
  component.loadDataAsync();
  tick(); // Simulate passage of time
  
  expect(component.isLoading).toBe(false);
  expect(component.data).toBeDefined();
}));
```

### 5. Testing with Router

```typescript
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('MyComponent with Router', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent ],
      imports: [ RouterTestingModule ]
    }).compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
  });

  it('should navigate to home', () => {
    component.goHome();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
```

### 6. Testing Inputs and Outputs

```typescript
it('should accept input value', () => {
  component.inputValue = 'test';
  fixture.detectChanges();
  
  expect(component.inputValue).toBe('test');
});

it('should emit output event', () => {
  spyOn(component.outputEvent, 'emit');
  
  component.triggerOutput();
  
  expect(component.outputEvent.emit).toHaveBeenCalledWith(expectedValue);
});
```

---

## Running Your Test

### Step 1: Create Your Test File

Create a file named `your-component.component.spec.ts` next to your component file:

```
projects/shared/component/
├── your-component/
│   ├── your-component.component.ts
│   ├── your-component.component.html
│   ├── your-component.component.scss
│   └── your-component.component.spec.ts  ← Create this file
```

### Step 2: Write Your Tests

Start with the basic structure and add tests incrementally.

### Step 3: Run the Test

```bash
# Run in watch mode (recommended while writing tests)
run-single-test.bat projects/shared/component/your-component/your-component.component.spec.ts

# Run with coverage when done
run-single-test.bat projects/shared/component/your-component/your-component.component.spec.ts --coverage
```

### Step 4: Check Coverage

```bash
npm run coverage:report
```

Navigate to your component in the coverage report to see:
- Which lines are covered (green)
- Which lines need tests (red)
- Coverage percentage

---

## Example: Complete Test File

Here's a complete example for a simple component:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      imports: [ FormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize counter to zero', () => {
      expect(component.count).toBe(0);
    });
  });

  describe('Increment Functionality', () => {
    it('should increment counter by 1', () => {
      component.increment();
      expect(component.count).toBe(1);
    });

    it('should increment counter multiple times', () => {
      component.increment();
      component.increment();
      component.increment();
      expect(component.count).toBe(3);
    });
  });

  describe('Decrement Functionality', () => {
    it('should decrement counter by 1', () => {
      component.count = 5;
      component.decrement();
      expect(component.count).toBe(4);
    });

    it('should not go below zero', () => {
      component.count = 0;
      component.decrement();
      expect(component.count).toBe(0);
    });
  });

  describe('Reset Functionality', () => {
    it('should reset counter to zero', () => {
      component.count = 10;
      component.reset();
      expect(component.count).toBe(0);
    });
  });
});
```

---

## Tips for Success

### ✅ DO:
- Start with simple tests (e.g., "should create")
- Group related tests in `describe` blocks
- Test one thing per `it` block
- Use descriptive test names
- Mock external dependencies
- Test happy paths first, then edge cases

### ❌ DON'T:
- Test Angular framework code
- Test third-party libraries
- Write tests that depend on each other
- Use real HTTP calls or external services
- Test private methods directly

---

## Next Steps

1. **Pick a simple component** from the shared folder
2. **Copy the basic template** from this guide
3. **Add your imports and setup**
4. **Write your first test**: "should create"
5. **Run the test** to make sure it passes
6. **Add more tests** incrementally
7. **Check coverage** to find untested code
8. **Repeat** for each method/feature

---

## Reference

For more complex examples, see:
- `projects/shared/component/home/home.component.spec.ts` - Comprehensive component test
- Angular Testing Guide: https://angular.io/guide/testing
- Jasmine Documentation: https://jasmine.github.io/

Happy testing! 🎉
