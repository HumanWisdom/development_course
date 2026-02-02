# Testing Setup Installation Checklist

## Pre-Installation Verification

### ✅ Prerequisites Check
- [ ] Node.js installed (v18.x or v20.x)
  ```bash
  node --version
  ```
- [ ] npm installed (v9.x or higher)
  ```bash
  npm --version
  ```
- [ ] Git installed and repository cloned
  ```bash
  git --version
  ```
- [ ] Chrome browser installed (for Karma tests)

## Installation Steps

### Step 1: Navigate to Project
```bash
cd HumanWisdom/projects/adults
```
**Status**: [ ] Complete

### Step 2: Install Dependencies
```bash
npm install
```
**Expected Output**: Dependencies installed successfully  
**Status**: [ ] Complete

### Step 3: Verify Installation
```bash
npm list | grep karma
npm list | grep jasmine
```
**Expected**: karma and jasmine packages listed  
**Status**: [ ] Complete

## Configuration Verification

### Step 4: Check Karma Configuration
```bash
# File should exist
ls karma.conf.js
```
**Status**: [ ] Complete

### Step 5: Check TypeScript Test Configuration
```bash
# File should exist
ls tsconfig.spec.json
```
**Expected Content**: Should include `../shared/**/*.spec.ts`  
**Status**: [ ] Complete

### Step 6: Verify Test File
```bash
# File should exist
ls src/test.ts
```
**Expected Content**: Should load shared tests  
**Status**: [ ] Complete

## Initial Test Run

### Step 7: Run First Test
```bash
npm test
```
**Expected**: Karma server starts, Chrome opens  
**Status**: [ ] Complete

### Step 8: Verify Shared Tests Load
Look for tests from shared folder in Karma runner  
**Expected**: Shared component tests visible  
**Status**: [ ] Complete

### Step 9: Stop Test Runner
Press `Ctrl+C` in terminal  
**Status**: [ ] Complete

### Step 10: Run Tests in CI Mode
```bash
npm run test:ci
```
**Expected**: Tests run in headless mode and complete  
**Status**: [ ] Complete

## Testing Utilities Verification

### Step 11: Verify Testing Folder Structure
```bash
ls -R HumanWisdom/projects/shared/testing/
```
**Expected Structure**:
```
testing/
├── README.md
├── TEST_SETUP_GUIDE.md
├── QUICK_REFERENCE.md
├── NPM_SCRIPTS_CONFIG.md
├── PROJECT_SUMMARY.md
├── INSTALLATION_CHECKLIST.md
├── ci-cd-examples.yml
├── karma.conf.shared.js
├── index.ts
├── helpers/
│   └── test-helpers.ts
├── mocks/
│   └── mock-services.ts
├── fixtures/
│   └── test-data.ts
└── examples/
    ├── example-service.spec.ts
    └── example-component.spec.ts
```
**Status**: [ ] Complete

### Step 12: Test Import of Utilities
Create a test file to verify imports work:
```typescript
// test-import.spec.ts
import {
  MockCommonService,
  clickElement,
  MOCK_USER
} from '../testing';

describe('Test Utilities Import', () => {
  it('should import successfully', () => {
    expect(MockCommonService).toBeDefined();
    expect(clickElement).toBeDefined();
    expect(MOCK_USER).toBeDefined();
  });
});
```
**Status**: [ ] Complete

## NPM Scripts Configuration

### Step 13: Add NPM Scripts
Add these to `package.json` in `scripts` section:
```json
{
  "test:shared": "ng test --include='**/shared/**/*.spec.ts'",
  "test:coverage": "ng test --code-coverage --watch=false",
  "test:ci": "ng test --watch=false --browsers=ChromeHeadless --code-coverage"
}
```
**Status**: [ ] Complete

### Step 14: Test NPM Scripts
```bash
# Test shared script
npm run test:shared

# Stop and test coverage script
npm run test:coverage

# Test CI script
npm run test:ci
```
**Status**: [ ] Complete

## Coverage Setup

### Step 15: Verify Coverage Generation
```bash
npm run test:coverage
```
**Expected**: `coverage/` folder created  
**Status**: [ ] Complete

### Step 16: Open Coverage Report
```bash
# macOS
open coverage/adults/index.html

# Windows
start coverage/adults/index.html

# Linux
xdg-open coverage/adults/index.html
```
**Expected**: HTML coverage report opens in browser  
**Status**: [ ] Complete

## Documentation Review

### Step 17: Read Main Documentation
```bash
# Open and read
code HumanWisdom/projects/shared/testing/README.md
```
**Status**: [ ] Complete

### Step 18: Review Setup Guide
```bash
code HumanWisdom/projects/shared/testing/TEST_SETUP_GUIDE.md
```
**Status**: [ ] Complete

### Step 19: Bookmark Quick Reference
```bash
code HumanWisdom/projects/shared/testing/QUICK_REFERENCE.md
```
**Status**: [ ] Complete

## Create Your First Test

### Step 20: Write a Sample Test
Create `HumanWisdom/projects/shared/services/sample.service.spec.ts`:
```typescript
import { TestBed } from '@angular/core/testing';
import { MockCommonService } from '../testing/mocks/mock-services';
import { MOCK_USER } from '../testing/fixtures/test-data';

describe('Sample Test', () => {
  it('should use test utilities', () => {
    const mockService = new MockCommonService();
    expect(mockService).toBeDefined();
    expect(MOCK_USER.email).toBe('test@happierme.app');
  });
});
```
**Status**: [ ] Complete

### Step 21: Run Your Test
```bash
npm test -- --include='**/sample.service.spec.ts'
```
**Expected**: Test passes  
**Status**: [ ] Complete

### Step 22: Clean Up Sample Test
```bash
rm HumanWisdom/projects/shared/services/sample.service.spec.ts
```
**Status**: [ ] Complete

## IDE Setup (Optional)

### Step 23: Configure VS Code
Create `.vscode/settings.json`:
```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "testing.automaticallyOpenPeekView": "failureInVisibleDocument"
}
```
**Status**: [ ] Complete

### Step 24: Add VS Code Launch Configuration
Create/update `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Karma Tests",
      "type": "chrome",
      "request": "attach",
      "port": 9333,
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true
    }
  ]
}
```
**Status**: [ ] Complete

### Step 25: Install Recommended Extensions
For VS Code:
- [ ] Angular Language Service
- [ ] Jasmine Test Explorer
- [ ] Code Coverage
- [ ] GitLens (optional)
**Status**: [ ] Complete

## Team Setup

### Step 26: Share with Team
- [ ] Commit testing setup to repository
- [ ] Share documentation links with team
- [ ] Schedule knowledge sharing session
**Status**: [ ] Complete

### Step 27: Update Project README
Add testing section to main project README:
```markdown
## Testing

Run tests:
\`\`\`bash
npm test
\`\`\`

See [Testing Documentation](./projects/shared/testing/README.md) for details.
```
**Status**: [ ] Complete

## CI/CD Integration

### Step 28: Choose CI/CD Platform
Select your platform:
- [ ] GitHub Actions
- [ ] GitLab CI
- [ ] Azure Pipelines
- [ ] Jenkins
- [ ] CircleCI
- [ ] Travis CI
**Status**: [ ] Complete

### Step 29: Add CI/CD Configuration
Copy appropriate configuration from `ci-cd-examples.yml`  
**Status**: [ ] Complete

### Step 30: Test CI/CD Pipeline
Push changes and verify pipeline runs  
**Status**: [ ] Complete

## Final Verification

### Step 31: Run Full Test Suite
```bash
npm test -- --watch=false
```
**Expected**: All tests pass  
**Status**: [ ] Complete

### Step 32: Generate Coverage Report
```bash
npm run test:coverage
```
**Expected**: Coverage meets minimum thresholds  
**Status**: [ ] Complete

### Step 33: Verify Shared Tests Specifically
```bash
npm run test:ci:shared
```
**Expected**: Shared tests pass in CI mode  
**Status**: [ ] Complete

## Post-Installation

### Step 34: Set Coverage Goals
Document team coverage goals:
- [ ] Minimum: 60% statements
- [ ] Target: 80% statements
- [ ] Critical paths: 100%
**Status**: [ ] Complete

### Step 35: Establish Testing Guidelines
Document when to write tests:
- [ ] All new features require tests
- [ ] Bug fixes include regression tests
- [ ] Refactoring maintains test coverage
**Status**: [ ] Complete

### Step 36: Schedule Code Review
- [ ] Review test quality in PRs
- [ ] Check coverage reports
- [ ] Ensure tests follow patterns
**Status**: [ ] Complete

## Troubleshooting

### Common Issues

#### Issue: Karma not found
**Solution**:
```bash
npm install --save-dev karma karma-jasmine karma-chrome-launcher
```

#### Issue: Chrome binary not found
**Solution**:
```bash
# Set Chrome path
export CHROME_BIN=/path/to/chrome
# or
export CHROME_BIN=/usr/bin/google-chrome
```

#### Issue: Tests timeout
**Solution**: Increase timeout in `karma.conf.js`:
```javascript
browserNoActivityTimeout: 60000
```

#### Issue: Port already in use
**Solution**: Kill process or use different port:
```bash
# Find process
lsof -i :9876
# Kill process
kill -9 <PID>
# Or use different port
npm test -- --port=9877
```

## Success Criteria

### ✅ Installation Complete When:
- [ ] All dependencies installed
- [ ] Tests run successfully
- [ ] Coverage reports generate
- [ ] NPM scripts work
- [ ] Documentation accessible
- [ ] Team members trained
- [ ] CI/CD integrated
- [ ] First tests written

## Next Steps

1. **Read Documentation**
   - Main README for overview
   - Setup Guide for detailed instructions
   - Quick Reference for daily use

2. **Write Tests**
   - Start with simple service tests
   - Move to component tests
   - Add integration tests

3. **Maintain Coverage**
   - Run coverage regularly
   - Aim for improvement
   - Review in PRs

4. **Share Knowledge**
   - Train team members
   - Document learnings
   - Improve processes

## Support

If you encounter issues:
1. ✅ Check this checklist
2. ✅ Review documentation
3. ✅ Check example tests
4. ✅ Ask team members
5. ✅ Consult Angular docs

---

## Summary

- **Total Steps**: 36
- **Estimated Time**: 2-3 hours
- **Difficulty**: Intermediate
- **Prerequisites**: Node.js, npm, Git

---

**Installation Date**: _____________  
**Installed By**: _____________  
**Team**: _____________  
**Notes**: _____________

---

Last Updated: 2026-02-01

