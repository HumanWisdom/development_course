# Testing Quick Reference Guide

## Cheat Sheet for Shared Component Testing

### Import Statements

```typescript
// Testing utilities
import { TestBed, ComponentFixture, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Custom test utilities
import { 
  clickElement, 
  setInputValue, 
  getTextContent 
} from '../../testing/helpers/test-helpers';

// Mock services
import { 
  MockCommonService, 
  MockNavigationService 
} from '../../testing/mocks/mock-services';

// Test data
import { 
  MOCK_USER, 
  MOCK_FORUM_POST 
} from '../../testing/fixtures/test-data';
```

### Basic Test Template

```typescript
describe('YourComponent/Service', () => {
  // Declare variables
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;
  let mockService: MockService;

  // Setup before each test
  beforeEach(waitForAsync(() => {
    mockService = new MockService();
    
    TestBed.configureTestingModule({
      declarations: [ YourComponent ],
      providers: [
        { provide: Service, useValue: mockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Cleanup after each test
  afterEach(() => {
    fixture.destroy();
  });

  // Your tests
  it('should do something', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = component.method(input);
    
    // Assert
    expect(result).toBe('expected');
  });
});
```

### Common Test Patterns

#### Testing Component Creation
```typescript
it('should create', () => {
  expect(component).toBeTruthy();
});
```

#### Testing Input Properties
```typescript
it('should accept input data', () => {
  component.inputData = MOCK_USER;
  fixture.detectChanges();
  expect(component.inputData).toEqual(MOCK_USER);
});
```

#### Testing Output Events
```typescript
it('should emit event', () => {
  let emitted = false;
  component.eventEmitter.subscribe(() => emitted = true);
  
  component.triggerEvent();
  
  expect(emitted).toBe(true);
});
```

#### Testing Button Clicks
```typescript
it('should handle click', () => {
  spyOn(component, 'onClick');
  clickElement(fixture, '#myButton');
  expect(component.onClick).toHaveBeenCalled();
});
```

#### Testing Form Input
```typescript
it('should update on input', () => {
  setInputValue(fixture, '#nameInput', 'John');
  expect(component.name).toBe('John');
});
```

#### Testing DOM Content
```typescript
it('should display text', () => {
  component.title = 'Test Title';
  fixture.detectChanges();
  expect(getTextContent(fixture, 'h1')).toBe('Test Title');
});
```

#### Testing Async Operations
```typescript
it('should handle async', fakeAsync(() => {
  component.loadData();
  tick(1000);
  expect(component.data).toBeDefined();
}));
```

#### Testing HTTP Requests
```typescript
it('should make HTTP call', () => {
  service.getData().subscribe(data => {
    expect(data).toEqual(MOCK_DATA);
  });
  
  const req = httpMock.expectOne('/api/data');
  expect(req.request.method).toBe('GET');
  req.flush(MOCK_DATA);
});
```

#### Testing Error Handling
```typescript
it('should handle errors', () => {
  service.getData().subscribe({
    next: () => fail('should have failed'),
    error: (error) => {
      expect(error.status).toBe(500);
    }
  });
  
  const req = httpMock.expectOne('/api/data');
  req.error(new ErrorEvent('Network error'), { status: 500 });
});
```

#### Testing Conditional Rendering
```typescript
it('should show element conditionally', () => {
  component.showElement = true;
  fixture.detectChanges();
  expect(elementExists(fixture, '.my-element')).toBe(true);
  
  component.showElement = false;
  fixture.detectChanges();
  expect(elementExists(fixture, '.my-element')).toBe(false);
});
```

### Jasmine Matchers

```typescript
// Equality
expect(value).toBe(expected);                    // ===
expect(value).toEqual(expected);                 // deep equal
expect(value).not.toBe(unexpected);

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();

// Comparison
expect(value).toBeGreaterThan(3);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(3.5, 0.1);

// Strings
expect(string).toContain('substring');
expect(string).toMatch(/pattern/);

// Arrays
expect(array).toContain(item);
expect(array.length).toBe(3);

// Objects
expect(obj).toHaveProperty('key');
expect(obj.key).toBe('value');

// Functions
expect(fn).toThrow();
expect(fn).toThrowError('message');
expect(fn).toHaveBeenCalled();
expect(fn).toHaveBeenCalledWith(arg1, arg2);
expect(fn).toHaveBeenCalledTimes(2);
```

### Spy Operations

```typescript
// Create spy
const spy = jasmine.createSpy('methodName');
const spyObj = jasmine.createSpyObj('ObjectName', ['method1', 'method2']);

// Spy on method
spyOn(service, 'method');
spyOn(service, 'method').and.returnValue('value');
spyOn(service, 'method').and.callThrough();
spyOn(service, 'method').and.throwError('error');

// Spy assertions
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledWith(arg1, arg2);
expect(spy).toHaveBeenCalledTimes(2);

// Reset spy
spy.calls.reset();
```

### Common Commands

```bash
# Run tests
npm test

# Run shared tests only
npm run test:shared

# Run with coverage
npm run test:coverage

# Run in CI mode
npm run test:ci

# Run specific file
npm test -- --include='**/my-test.spec.ts'

# Run in debug mode
npm run test:debug
```

### Debugging Tips

```typescript
// Log to console
console.log('Debug:', component, fixture);

// Use debugger
it('should debug', () => {
  debugger; // Execution pauses here
  expect(component).toBeTruthy();
});

// Focus on specific test
fit('should run only this test', () => {
  // test code
});

// Skip test
xit('should skip this test', () => {
  // test code
});
```

### Common Errors & Fixes

| Error | Solution |
|-------|----------|
| `Cannot find module` | Check import path |
| `No provider for Service` | Add to TestBed providers |
| `Timeout - Async callback not invoked` | Call `done()` or use `fakeAsync` |
| `Expected spy to be called` | Call `fixture.detectChanges()` |
| `Cannot read property of undefined` | Initialize component properties |

### File Structure

```
shared/
├── component/
│   └── my-component/
│       ├── my-component.component.ts
│       ├── my-component.component.html
│       ├── my-component.component.scss
│       └── my-component.component.spec.ts ✓
├── services/
│   └── my-service.service.ts
│   └── my-service.service.spec.ts ✓
└── testing/
    ├── helpers/
    ├── mocks/
    ├── fixtures/
    └── examples/
```

### Best Practices Checklist

- [ ] Test file name matches source file with `.spec.ts`
- [ ] Tests follow AAA pattern (Arrange, Act, Assert)
- [ ] Descriptive test names (`should do X when Y`)
- [ ] Test one thing per `it()` block
- [ ] Mock external dependencies
- [ ] Clean up in `afterEach()`
- [ ] Use fixtures for test data
- [ ] Test both success and error cases
- [ ] Call `fixture.detectChanges()` after changes
- [ ] Test accessibility features

---

**Quick Tip**: Press `Ctrl+F` to search this document for specific testing scenarios!

Last Updated: 2026-02-01

