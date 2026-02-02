# NPM Scripts Configuration for Testing

## Add these scripts to `HumanWisdom/projects/adults/package.json`

```json
{
  "scripts": {
    "test": "ng test",
    "test:shared": "ng test --include='**/shared/**/*.spec.ts'",
    "test:shared:watch": "ng test --include='**/shared/**/*.spec.ts' --watch",
    "test:coverage": "ng test --code-coverage --watch=false",
    "test:coverage:shared": "ng test --include='**/shared/**/*.spec.ts' --code-coverage --watch=false",
    "test:ci": "ng test --watch=false --browsers=ChromeHeadless --code-coverage",
    "test:ci:shared": "ng test --include='**/shared/**/*.spec.ts' --watch=false --browsers=ChromeHeadless --code-coverage",
    "test:debug": "ng test --browsers=ChromeDebug",
    "test:single": "ng test --watch=false",
    "test:headless": "ng test --watch=false --browsers=ChromeHeadless"
  }
}
```

## Script Descriptions

### Basic Testing Scripts

#### `npm test`
- **Purpose**: Run all tests (adults + shared) in watch mode
- **When to use**: During active development
- **Output**: Opens Karma in Chrome browser

#### `npm run test:shared`
- **Purpose**: Run only shared component tests in watch mode
- **When to use**: When working specifically on shared components
- **Output**: Opens Karma with only shared tests

#### `npm run test:shared:watch`
- **Purpose**: Same as test:shared (explicit watch mode)
- **When to use**: Alternative explicit command
- **Output**: Opens Karma with watch mode enabled

### Coverage Scripts

#### `npm run test:coverage`
- **Purpose**: Run all tests and generate coverage report
- **When to use**: Before committing code, checking overall coverage
- **Output**: Coverage report in `coverage/adults/` directory

#### `npm run test:coverage:shared`
- **Purpose**: Generate coverage report for shared components only
- **When to use**: Checking shared folder coverage specifically
- **Output**: Coverage report focusing on shared folder

### CI/CD Scripts

#### `npm run test:ci`
- **Purpose**: Run all tests in CI/CD environment
- **When to use**: In GitHub Actions, GitLab CI, Jenkins, etc.
- **Characteristics**:
  - Runs once (no watch mode)
  - Uses headless Chrome
  - Generates coverage report
  - Exits with code 0 (success) or 1 (failure)

#### `npm run test:ci:shared`
- **Purpose**: Run only shared tests in CI/CD environment
- **When to use**: In CI pipeline for shared components
- **Characteristics**: Same as test:ci but shared only

### Development Scripts

#### `npm run test:debug`
- **Purpose**: Run tests with remote debugging enabled
- **When to use**: When you need to debug tests in detail
- **How to use**:
  1. Run the command
  2. Attach VS Code debugger (port 9333)
  3. Set breakpoints
  4. Refresh Karma window

#### `npm run test:single`
- **Purpose**: Run all tests once without watch mode
- **When to use**: Quick check before committing
- **Output**: Single test run in Chrome

#### `npm run test:headless`
- **Purpose**: Run tests once in headless Chrome
- **When to use**: Local testing without UI, similar to CI
- **Output**: Terminal output only

## Advanced Usage

### Run Specific Test File
```bash
npm test -- --include='**/navigation.service.spec.ts'
```

### Run Tests Matching Pattern
```bash
npm test -- --include='**/services/**/*.spec.ts'
npm test -- --include='**/component/**/*.spec.ts'
npm test -- --include='**/forum/**/*.spec.ts'
```

### Run Tests with Custom Config
```bash
npm test -- --karma-config=karma.custom.conf.js
```

### Run Tests in Different Browser
```bash
npm test -- --browsers=Firefox
npm test -- --browsers=ChromeHeadless,Firefox
```

### Set Coverage Thresholds
```bash
npm test -- --code-coverage --code-coverage-exclude='**/test/**'
```

## Example Workflows

### Daily Development Workflow
```bash
# Start work
npm run test:shared  # Watch shared tests while coding

# Before commit
npm run test:coverage:shared  # Check coverage
npm run test:single  # Quick full test run
```

### Pre-Commit Workflow
```bash
# Run all tests
npm test -- --watch=false

# Check coverage
npm run test:coverage

# Review coverage report
open coverage/adults/index.html  # macOS
start coverage/adults/index.html # Windows
```

### CI/CD Pipeline Workflow
```bash
# Install dependencies
npm ci

# Run tests
npm run test:ci

# Upload coverage
# (handled by CI tool)
```

## Custom Karma Configuration

Create `karma.shared.conf.js` for shared-specific configuration:

```javascript
module.exports = function(config) {
  require('./karma.conf')(config);
  
  // Override with shared-specific settings
  config.set({
    coverageReporter: {
      dir: require('path').join(__dirname, '../coverage/shared'),
      // ... other shared-specific settings
    }
  });
};
```

Use it:
```bash
npm test -- --karma-config=karma.shared.conf.js
```

## Troubleshooting

### Tests Run Slowly
```bash
# Use headless mode
npm run test:headless

# Or limit to specific tests
npm run test:shared
```

### Browser Keeps Opening
```bash
# Use headless mode
npm test -- --browsers=ChromeHeadless
```

### Out of Memory
```bash
# Increase Node memory
export NODE_OPTIONS="--max_old_space_size=4096"
npm test
```

### Port Already in Use
```bash
# Use different port
npm test -- --port=9877
```

## Integration with Other Tools

### Pre-commit Hook (Husky)
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run test:single"
    }
  }
}
```

### VS Code Tasks
Create `.vscode/tasks.json`:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Test Shared Components",
      "type": "npm",
      "script": "test:shared",
      "problemMatcher": [],
      "group": {
        "kind": "test",
        "isDefault": true
      }
    }
  ]
}
```

### GitHub Actions
```yaml
- name: Run Tests
  run: |
    cd HumanWisdom/projects/adults
    npm run test:ci
```

## Environment Variables

Set these in your environment or CI/CD:

```bash
# Chrome path (if not in default location)
export CHROME_BIN=/path/to/chrome

# Headless mode
export CHROME_HEADLESS=true

# Coverage thresholds
export COVERAGE_STATEMENTS=60
export COVERAGE_BRANCHES=50
export COVERAGE_FUNCTIONS=50
export COVERAGE_LINES=60
```

## Performance Optimization

### Faster Test Execution
```json
{
  "scripts": {
    "test:fast": "ng test --source-map=false --progress=false"
  }
}
```

### Parallel Testing (if available)
```json
{
  "scripts": {
    "test:parallel": "ng test --max-workers=4"
  }
}
```

---

**Note**: Adapt these scripts based on your specific project needs and Angular CLI version.

Last Updated: 2026-02-01

