# Testing Setup Guide for Shared Components

## Quick Start

### 1. Install Dependencies
```bash
cd HumanWisdom/projects/adults
npm install
```

### 2. Run Tests
```bash
# Run all tests (includes shared)
npm test

# Run only shared tests
npm run test:shared

# Run with coverage
npm run test:coverage

# Run in CI mode (headless)
npm run test:ci
```

## Detailed Setup Instructions

### Step 1: Understanding the Test Structure

The shared folder tests are integrated with the adults project. The configuration files you need to know:

1. **karma.conf.js** - Main Karma configuration (in adults folder)
2. **tsconfig.spec.json** - TypeScript configuration for tests
3. **test.ts** - Test initialization file

### Step 2: Adding New Test Files

When creating a new component/service in the shared folder, always create a corresponding `.spec.ts` file:

```
shared/
├── component/
│   └── your-component/
│       ├── your-component.component.ts
│       ├── your-component.component.html
│       ├── your-component.component.scss
│       └── your-component.component.spec.ts  ← TEST FILE
├── services/
│   └── your-service/
│       ├── your-service.service.ts
│       └── your-service.service.spec.ts      ← TEST FILE
```

### Step 3: Writing Your First Test

#### For a Service:
```typescript
import { TestBed } from '@angular/core/testing';
import { YourService } from './your-service.service';

describe('YourService', () => {
  let service: YourService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YourService]
    });
    service = TestBed.inject(YourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform expected operation', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = service.yourMethod(input);
    
    // Assert
    expect(result).toBe('expected output');
  });
});
```

#### For a Component:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourComponent } from './your.component';

describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Step 4: Using Test Utilities

The testing folder provides utilities to make testing easier:

#### Import Test Helpers:
```typescript
import {
  clickElement,
  setInputValue,
  getTextContent,
  elementExists
} from '../../testing/helpers/test-helpers';

// Use in your tests
it('should update when button is clicked', () => {
  clickElement(fixture, '#myButton');
  expect(component.clicked).toBe(true);
});
```

#### Import Mock Services:
```typescript
import { MockCommonService } from '../../testing/mocks/mock-services';

beforeEach(() => {
  const mockService = new MockCommonService();
  
  TestBed.configureTestingModule({
    providers: [
      { provide: CommonService, useValue: mockService }
    ]
  });
});
```

#### Import Test Fixtures:
```typescript
import { MOCK_USER, MOCK_FORUM_POST } from '../../testing/fixtures/test-data';

it('should display user information', () => {
  component.user = MOCK_USER;
  fixture.detectChanges();
  
  expect(getTextContent(fixture, '.user-name')).toBe(MOCK_USER.name);
});
```

### Step 5: Running Specific Tests

#### Run tests for a specific file:
```bash
npm test -- --include='**/your-component.spec.ts'
```

#### Run tests matching a pattern:
```bash
npm test -- --include='**/services/**/*.spec.ts'
```

#### Run a specific test suite:
```bash
# In the test file, add 'f' prefix to describe or it
fdescribe('YourComponent', () => {  // Only this suite runs
  it('should work', () => {
    // test
  });
});
```

#### Skip a test:
```bash
# Add 'x' prefix to describe or it
xdescribe('YourComponent', () => {  // This suite is skipped
  it('should work', () => {
    // test
  });
});
```

### Step 6: Debugging Tests

#### Method 1: Browser Debug Mode
```bash
npm test
# Click "Debug" in the Karma window
# Open Chrome DevTools
# Set breakpoints in your test files
```

#### Method 2: VS Code Debugging
Add to `.vscode/launch.json`:
```json
{
  "name": "Karma Tests",
  "type": "chrome",
  "request": "attach",
  "port": 9333,
  "webRoot": "${workspaceFolder}",
  "sourceMaps": true
}
```

Then:
1. Run: `npm test`
2. Start VS Code debugger
3. Set breakpoints
4. Refresh Karma window

#### Method 3: Console Logging
```typescript
it('should debug test', () => {
  console.log('Component state:', component);
  console.log('Fixture:', fixture.debugElement.nativeElement);
  // Your test assertions
});
```

### Step 7: Code Coverage

#### Generate coverage report:
```bash
npm run test:coverage
```

#### View coverage report:
```bash
# Open in browser
open coverage/adults/index.html  # macOS
start coverage/adults/index.html # Windows
```

#### Coverage thresholds:
The project aims for:
- **Statements**: 60%+
- **Branches**: 50%+
- **Functions**: 50%+
- **Lines**: 60%+

### Step 8: CI/CD Integration

#### GitHub Actions Example:
```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install Dependencies
        run: |
          cd HumanWisdom/projects/adults
          npm ci
          
      - name: Run Tests
        run: |
          cd HumanWisdom/projects/adults
          npm run test:ci
          
      - name: Upload Coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/adults/lcov.info
```

## Common Issues and Solutions

### Issue 1: "Cannot find module"
**Solution**: Check imports and ensure the path is correct
```typescript
// ❌ Wrong
import { Service } from '../service';

// ✅ Correct
import { Service } from '../services/service.service';
```

### Issue 2: "No provider for..."
**Solution**: Add the service to TestBed providers
```typescript
TestBed.configureTestingModule({
  providers: [YourService, DependencyService]
});
```

### Issue 3: "Timeout - Async callback was not invoked"
**Solution**: Use `done()` callback or increase timeout
```typescript
it('should handle async', (done) => {
  service.asyncMethod().subscribe(() => {
    expect(true).toBe(true);
    done();  // ← Don't forget this!
  });
}, 10000);  // ← Increase timeout if needed
```

### Issue 4: "Expected spy to have been called"
**Solution**: Ensure fixture.detectChanges() is called
```typescript
clickElement(fixture, '#button');
// Make sure to trigger change detection!
expect(component.method).toHaveBeenCalled();
```

### Issue 5: "Cannot read property of undefined"
**Solution**: Initialize component properties in beforeEach
```typescript
beforeEach(() => {
  fixture = TestBed.createComponent(YourComponent);
  component = fixture.componentInstance;
  
  // Initialize required inputs
  component.requiredInput = 'test';
  
  fixture.detectChanges();
});
```

## Best Practices Checklist

- [ ] Every new component/service has a `.spec.ts` file
- [ ] Tests follow AAA pattern (Arrange, Act, Assert)
- [ ] Tests are independent and can run in any order
- [ ] External dependencies are mocked
- [ ] Tests have descriptive names
- [ ] Both success and error cases are tested
- [ ] Async operations use proper testing utilities
- [ ] Code coverage meets minimum thresholds
- [ ] Tests run successfully in CI/CD
- [ ] No console errors or warnings during tests

## Resources

- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jasmine Documentation](https://jasmine.github.io/api/edge/global)
- [Karma Documentation](https://karma-runner.github.io/latest/index.html)
- [Testing Best Practices](https://angular.io/guide/testing-best-practices)

## Getting Help

If you encounter issues:

1. Check this guide for solutions
2. Review example tests in `testing/examples/`
3. Check existing test files for patterns
4. Ask team members
5. Consult Angular documentation

## Next Steps

1. ✅ Read this setup guide
2. ✅ Run existing tests to ensure setup works
3. ✅ Review example tests
4. ✅ Write your first test
5. ✅ Achieve coverage goals
6. ✅ Integrate with CI/CD

---

**Happy Testing! 🧪**

Last Updated: 2026-02-01

