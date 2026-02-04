# Code Coverage Guide for HumanWisdom Project

This guide explains how to set up and use code coverage for the HumanWisdom project, with a focus on starting with the shared components.

## Table of Contents
1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Running Tests](#running-tests)
4. [Viewing Coverage Reports](#viewing-coverage-reports)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

---

## Overview

Code coverage has been configured to help you:
- Track which parts of your code are tested
- Identify untested code paths
- Improve overall code quality
- Run tests faster by targeting specific files

### Coverage Thresholds

Current thresholds are intentionally set at achievable levels to start:
- **Statements**: 50%
- **Branches**: 50%
- **Functions**: 50%
- **Lines**: 50%

For shared components (karma-shared.conf.js), thresholds are set at 60%.

---

## Quick Start

### Option 1: Test Shared Components Only (Recommended for Starting)

```bash
# Run shared component tests with coverage (no watch mode)
npm run test:shared:coverage

# Run shared component tests in watch mode (for development)
npm run test:shared
```

### Option 2: Test a Single File

```bash
# Using the helper script (Windows)
run-single-test.bat projects/shared/component/home/home.component.spec.ts --coverage

# Or using npm directly
npm run test:single -- --include="**/home.component.spec.ts" --code-coverage --no-watch --project=adults
```

### Option 3: Run All Tests with Coverage

```bash
npm run test:coverage
```

---

## Running Tests

### 1. Running Shared Component Tests

The shared components are a great starting point because they're used across the application:

```bash
# Watch mode - tests re-run on file changes (for development)
npm run test:shared

# Coverage mode - runs once and generates coverage report
npm run test:shared:coverage
```

### 2. Running Individual Test Files

**Method A: Using the Batch Script (Easiest)**

```bash
# Without coverage (watch mode)
run-single-test.bat projects/shared/component/home/home.component.spec.ts

# With coverage
run-single-test.bat projects/shared/component/home/home.component.spec.ts --coverage
```

**Method B: Using NPM Scripts**

```bash
# Run a specific test file with coverage
npm run test:single -- --include="**/home.component.spec.ts" --code-coverage --no-watch --project=adults

# Run multiple test files matching a pattern
npm run test:single -- --include="**/component/**/*.spec.ts" --code-coverage --no-watch --project=adults
```

### 3. Running All Tests

```bash
# Run all tests with coverage
npm run test:coverage

# Run all tests in watch mode
npm run test:watch

# Run tests with default settings
npm test
```

---

## Viewing Coverage Reports

### Opening Coverage Reports

After running tests with coverage, reports are generated in the `coverage/` directory:

```bash
# Open the HTML coverage report (Windows)
npm run coverage:report

# Or manually open:
# coverage/adults/index.html (for all tests or adults tests)
# coverage/shared/index.html (for shared component tests)
```

### Understanding Coverage Reports

The HTML report shows:
- **Overall coverage percentages** for statements, branches, functions, and lines
- **File-by-file breakdown** with color coding:
  - 🟢 Green: Good coverage (>80%)
  - 🟡 Yellow: Medium coverage (50-80%)
  - 🔴 Red: Low coverage (<50%)
- **Line-by-line view** showing exactly which lines are covered

Click on any file to see detailed line-by-line coverage.

### Coverage Output Formats

Coverage is generated in multiple formats:
- **HTML**: Visual reports in `coverage/*/index.html`
- **LCOV**: For CI/CD integration in `coverage/*/lcov.info`
- **JSON**: Machine-readable format in `coverage/*/coverage-final.json`
- **Text**: Console output showing summary

---

## Best Practices

### 1. Start Small
Begin with shared components since they're foundational:
```bash
npm run test:shared:coverage
```

### 2. Test During Development
Use watch mode for immediate feedback:
```bash
npm run test:shared
```

### 3. Run Single File Tests
When working on a specific component, test only that file:
```bash
run-single-test.bat projects/shared/component/home/home.component.spec.ts
```

### 4. Write Tests Incrementally
- Don't try to write all tests at once
- Focus on one component at a time
- Start with happy path tests, then edge cases
- Use the existing `home.component.spec.ts` as a reference

### 5. Check Coverage Before Commits
```bash
npm run test:shared:coverage
```

### 6. Set Realistic Goals
- Start with 50% coverage
- Gradually increase to 60-70%
- Aim for 80%+ on critical components

---

## Examples

### Example 1: Testing Home Component

```bash
# Development mode (watch)
run-single-test.bat projects/shared/component/home/home.component.spec.ts

# Generate coverage
run-single-test.bat projects/shared/component/home/home.component.spec.ts --coverage

# View the report
npm run coverage:report
```

### Example 2: Testing All Services

```bash
npm run test:single -- --include="**/services/**/*.spec.ts" --code-coverage --no-watch --project=adults
```

### Example 3: Testing Specific Page

```bash
npm run test:single -- --include="**/s159057.page.spec.ts" --code-coverage --no-watch --project=adults
```

---

## Troubleshooting

### Issue: Tests Running Too Slow

**Solution**: Run only the tests you need:
```bash
# Instead of running all tests
npm run test:coverage

# Run only what you're working on
run-single-test.bat projects/shared/component/home/home.component.spec.ts --coverage
```

### Issue: Coverage Report Not Generated

**Solution**: Make sure you include the `--code-coverage` flag:
```bash
npm run test:single -- --include="**/*.spec.ts" --code-coverage --no-watch --project=adults
```

### Issue: Can't Find Test File

**Solution**: Use the correct path pattern:
```bash
# Correct - relative to the test.ts file
run-single-test.bat projects/shared/component/home/home.component.spec.ts

# Incorrect - absolute paths won't work
run-single-test.bat C:/Development/project/home.component.spec.ts
```

### Issue: Tests Failing Due to Missing Dependencies

**Solution**: Check your test setup:
1. Ensure all services are properly mocked
2. Import required modules in TestBed
3. Check the `home.component.spec.ts` for reference

### Issue: Browser Not Launching

**Solution**: Check Karma configuration:
```bash
# Make sure Chrome is installed
# Try using ChromeHeadless for CI environments
```

Edit `karma.conf.js` and change:
```javascript
browsers: ['ChromeHeadless']
```

---

## NPM Scripts Reference

| Script | Description |
|--------|-------------|
| `npm test` | Run all tests in watch mode |
| `npm run test:coverage` | Run all tests with coverage (no watch) |
| `npm run test:watch` | Run all tests in watch mode |
| `npm run test:shared` | Run shared component tests (watch mode) |
| `npm run test:shared:coverage` | Run shared component tests with coverage |
| `npm run test:single` | Run specific test file(s) |
| `npm run coverage:report` | Open the HTML coverage report |

---

## File Structure

```
HumanWisdom/
├── coverage/                        # Generated coverage reports
│   ├── adults/                     # Coverage for all tests
│   │   └── index.html             # Main coverage report
│   └── shared/                     # Coverage for shared tests
│       └── index.html             # Shared coverage report
├── projects/
│   ├── adults/
│   │   ├── karma.conf.js          # Main Karma config
│   │   ├── karma-shared.conf.js   # Shared-only Karma config
│   │   └── src/
│   │       ├── test.ts            # Main test entry point
│   │       └── test-single.ts     # Single file test entry
│   └── shared/                     # Shared components to test
│       └── component/
│           └── home/
│               └── home.component.spec.ts
├── run-single-test.bat             # Helper script for Windows
└── COVERAGE_GUIDE.md              # This file
```

---

## Next Steps

1. **Start with shared components**:
   ```bash
   npm run test:shared:coverage
   ```

2. **Review the coverage report**:
   ```bash
   npm run coverage:report
   ```

3. **Identify untested components** in the shared folder

4. **Write tests incrementally**, one component at a time

5. **Use single file testing** for faster feedback during development

6. **Gradually increase coverage** to meet your quality goals

---

## Support

For questions or issues:
1. Check the existing `home.component.spec.ts` as a reference
2. Review Angular testing documentation
3. Check Karma and Jasmine documentation

Happy testing! 🚀
