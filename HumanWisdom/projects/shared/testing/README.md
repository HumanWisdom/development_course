# Shared Components Testing Setup

## Overview
This directory contains the testing configuration and utilities for the HappierMe shared components library. The shared folder contains reusable components, services, guards, pipes, and modules used across both Adults and Teenagers applications.

## Project Structure
```
shared/
├── component/          # 972 files - Shared UI components
├── services/          # Shared services (navigation, chatbot, common, etc.)
├── subscription/      # Subscription-related components
├── forum/            # Forum components and services
├── modules/          # Feature modules (search, etc.)
├── guard/            # Route guards
├── models/           # Data models
├── pipe/             # Custom pipes
├── stores/           # State management stores
└── testing/          # Testing utilities (this directory)
```

## Technology Stack
- **Framework**: Angular 
- **Test Runner**: Karma
- **Test Framework**: Jasmine
- **Coverage**: Istanbul/NYC

## Getting Started

### Prerequisites
```bash
# Ensure you have Node.js and npm installed
node --version
npm --version
```

### Installation
```bash
# From the project root
cd HumanWisdom/projects
npm install
```

### Running Tests

#### Run all shared component tests
```bash
# From adults project (includes shared tests)
cd adults
npm test

# Run specific tests
npm test -- --include='**/shared/**/*.spec.ts'
```

#### Run tests with coverage
```bash
npm test -- --code-coverage
```

#### Run tests in headless mode (CI/CD)
```bash
npm test -- --browsers=ChromeHeadless --watch=false
```

#### Run specific test suite
```bash
npm test -- --include='**/navigation.service.spec.ts'
```

## Test File Naming Convention
- Component tests: `{component-name}.component.spec.ts`
- Service tests: `{service-name}.service.spec.ts`
- Page tests: `{page-name}.page.spec.ts`
- Guard tests: `{guard-name}.guard.spec.ts`
- Pipe tests: `{pipe-name}.pipe.spec.ts`

## Writing Tests

### Basic Test Structure
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
});
```

### Component Testing Example
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

## Test Coverage Goals
- **Target**: 80% code coverage
- **Minimum**: 60% code coverage
- **Critical paths**: 100% coverage

### Current Coverage Statistics
Run `npm test -- --code-coverage` to generate coverage reports.
Reports are generated in: `coverage/adults/`

## Best Practices

### 1. Arrange-Act-Assert (AAA) Pattern
```typescript
it('should calculate total price', () => {
  // Arrange
  const items = [{ price: 10 }, { price: 20 }];
  
  // Act
  const total = service.calculateTotal(items);
  
  // Assert
  expect(total).toBe(30);
});
```

### 2. Use Descriptive Test Names
```typescript
// Good
it('should return empty array when no items exist')
it('should throw error when user is not authenticated')

// Bad
it('works')
it('test1')
```

### 3. Mock External Dependencies
```typescript
const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post']);
TestBed.configureTestingModule({
  providers: [
    { provide: HttpClient, useValue: mockHttpClient }
  ]
});
```

### 4. Test One Thing Per Test
```typescript
// Good
it('should add item to cart', () => {
  service.addItem(item);
  expect(service.getCartItems().length).toBe(1);
});

it('should update cart total when item is added', () => {
  service.addItem(item);
  expect(service.getTotal()).toBe(item.price);
});

// Bad - testing multiple things
it('should add item and update total', () => {
  service.addItem(item);
  expect(service.getCartItems().length).toBe(1);
  expect(service.getTotal()).toBe(item.price);
});
```

### 5. Use beforeEach for Common Setup
```typescript
describe('CartService', () => {
  let service: CartService;
  let testItem: CartItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    testItem = { id: 1, name: 'Test Item', price: 99.99 };
  });

  // Tests use the pre-configured service and testItem
});
```

## Testing Utilities

### Mock Services
Located in `testing/mocks/` - Reusable mock implementations for common services.

### Test Helpers
Located in `testing/helpers/` - Helper functions for common testing scenarios.

### Fixtures
Located in `testing/fixtures/` - Sample data for testing.

## Continuous Integration

### GitHub Actions / CI Pipeline
```yaml
# Example CI configuration
- name: Run Tests
  run: npm test -- --watch=false --browsers=ChromeHeadless
  
- name: Generate Coverage
  run: npm test -- --code-coverage --watch=false
  
- name: Upload Coverage
  uses: codecov/codecov-action@v3
```

## Debugging Tests

### Running tests in browser
```bash
npm test
# Opens Chrome browser with Jasmine test runner
# Click "Debug" to open developer tools
```

### Running single test file
```bash
npm test -- --include='**/your-test.spec.ts'
```

### Debugging in VS Code
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

## Common Issues and Solutions

### Issue: Tests timeout
**Solution**: Increase timeout in karma.conf.js or use `done()` callback

### Issue: Async operations not completing
**Solution**: Use `fakeAsync()` and `tick()` or `async/await`

### Issue: Module not found
**Solution**: Check imports in test.ts and tsconfig.spec.json

### Issue: Component dependencies missing
**Solution**: Add required modules to TestBed.configureTestingModule

## Resources
- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jasmine Documentation](https://jasmine.github.io/)
- [Karma Documentation](https://karma-runner.github.io/)

## Contributing
1. Write tests for all new features
2. Ensure existing tests pass before committing
3. Maintain or improve code coverage
4. Follow the established patterns and conventions
5. Update this documentation as needed

## Support
For questions or issues with testing:
- Check this documentation
- Review existing test files for examples
- Contact the development team

---
Last Updated: 2026-02-01

