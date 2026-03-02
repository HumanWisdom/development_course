# CI/CD Integration for Code Coverage

## Overview

This document explains how to integrate code coverage into your CI/CD pipeline.

---

## GitHub Actions Example

Create `.github/workflows/test-coverage.yml`:

```yaml
name: Test Coverage

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests with coverage
      run: npm run test:coverage
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        files: ./coverage/adults/lcov.info
        flags: unittests
        name: codecov-umbrella
        fail_ci_if_error: true
    
    - name: Archive coverage results
      uses: actions/upload-artifact@v3
      with:
        name: coverage-report
        path: coverage/adults/
```

---

## Azure DevOps Pipeline

Create `azure-pipelines.yml`:

```yaml
trigger:
  branches:
    include:
    - main
    - develop

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Install Node.js'

- script: |
    npm ci
  displayName: 'Install dependencies'

- script: |
    npm run test:coverage
  displayName: 'Run tests with coverage'

- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: 'Cobertura'
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/coverage/adults/cobertura-coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/coverage/adults'
  displayName: 'Publish code coverage'

- task: PublishTestResults@2
  inputs:
    testResultsFormat: 'JUnit'
    testResultsFiles: '**/TESTS-*.xml'
    failTaskOnFailedTests: true
  displayName: 'Publish test results'
```

---

## GitLab CI

Create `.gitlab-ci.yml`:

```yaml
image: node:18

stages:
  - test
  - report

cache:
  paths:
    - node_modules/

test:
  stage: test
  script:
    - npm ci
    - npm run test:coverage
  coverage: '/Lines\s*:\s*(\d+.\d+)%/'
  artifacts:
    when: always
    paths:
      - coverage/
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/adults/cobertura-coverage.xml

pages:
  stage: report
  dependencies:
    - test
  script:
    - mkdir public
    - cp -r coverage/adults/* public/
  artifacts:
    paths:
      - public
  only:
    - main
```

---

## Jenkins Pipeline

Create `Jenkinsfile`:

```groovy
pipeline {
    agent any
    
    tools {
        nodejs "Node 18"
    }
    
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm run test:coverage'
            }
        }
        
        stage('Publish Coverage') {
            steps {
                publishHTML([
                    reportDir: 'coverage/adults',
                    reportFiles: 'index.html',
                    reportName: 'Coverage Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }
    }
    
    post {
        always {
            junit '**/TESTS-*.xml'
        }
    }
}
```

---

## npm Scripts for CI

Add these scripts to `package.json` for CI environments:

```json
{
  "scripts": {
    "test:ci": "ng test --no-watch --no-progress --browsers=ChromeHeadless --code-coverage --project=adults",
    "test:ci:shared": "ng test --include='**/shared/**/*.spec.ts' --no-watch --no-progress --browsers=ChromeHeadless --code-coverage --project=adults"
  }
}
```

---

## Coverage Badges

### Using Codecov

1. Add to your CI pipeline (see GitHub Actions example above)
2. Add badge to README.md:

```markdown
[![codecov](https://codecov.io/gh/username/repo/branch/main/graph/badge.svg)](https://codecov.io/gh/username/repo)
```

### Using Coveralls

1. Add to package.json:
```json
{
  "devDependencies": {
    "coveralls": "^3.1.1"
  },
  "scripts": {
    "coverage:upload": "cat coverage/adults/lcov.info | coveralls"
  }
}
```

2. Update CI to upload:
```yaml
- name: Upload to Coveralls
  run: npm run coverage:upload
  env:
    COVERALLS_REPO_TOKEN: ${{ secrets.COVERALLS_TOKEN }}
```

---

## Quality Gates

### Option 1: Using karma.conf.js Thresholds

Already configured in `karma.conf.js`:

```javascript
coverageReporter: {
  check: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    }
  }
}
```

Tests will fail if coverage drops below thresholds.

### Option 2: Using SonarQube

1. Install SonarScanner:
```bash
npm install --save-dev sonarqube-scanner
```

2. Create `sonar-project.properties`:
```properties
sonar.projectKey=humanwisdom
sonar.projectName=HumanWisdom
sonar.projectVersion=1.0
sonar.sources=projects/shared
sonar.tests=projects/shared
sonar.test.inclusions=**/*.spec.ts
sonar.javascript.lcov.reportPaths=coverage/adults/lcov.info
sonar.coverage.exclusions=**/*.spec.ts,**/*.module.ts
```

3. Add to CI:
```yaml
- name: SonarQube Scan
  uses: sonarsource/sonarcloud-github-action@master
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

---

## Pull Request Checks

### GitHub Status Checks

Add to `.github/workflows/pr-check.yml`:

```yaml
name: PR Coverage Check

on:
  pull_request:
    branches: [ main, develop ]

jobs:
  coverage-check:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Check coverage
      run: |
        npm run test:coverage
        # Fail if coverage is less than 50%
        node -e "const coverage = require('./coverage/adults/coverage-summary.json'); const threshold = 50; Object.keys(coverage.total).forEach(key => { if (coverage.total[key].pct < threshold) { console.error(\`${key} coverage ${coverage.total[key].pct}% is below threshold ${threshold}%\`); process.exit(1); }})"
    
    - name: Comment PR with coverage
      uses: romeovs/lcov-reporter-action@v0.3.1
      with:
        lcov-file: ./coverage/adults/lcov.info
        github-token: ${{ secrets.GITHUB_TOKEN }}
```

---

## Coverage Reports in CI

### Store as Artifacts

Most CI systems allow storing artifacts:

```yaml
# GitHub Actions
- name: Upload coverage artifact
  uses: actions/upload-artifact@v3
  with:
    name: coverage-report
    path: coverage/adults/

# Azure DevOps
- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: 'coverage/adults'
    artifactName: 'coverage'
```

### Deploy to GitHub Pages

```yaml
- name: Deploy coverage to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  if: github.ref == 'refs/heads/main'
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./coverage/adults
```

---

## Recommended CI/CD Strategy

### For Pull Requests:
1. Run shared component tests only (faster feedback)
2. Comment PR with coverage diff
3. Block merge if coverage drops below threshold

```yaml
- name: Test shared components
  run: npm run test:ci:shared
```

### For Main Branch:
1. Run all tests with coverage
2. Upload to coverage service (Codecov/Coveralls)
3. Update coverage badge
4. Deploy coverage report

```yaml
- name: Test all with coverage
  run: npm run test:ci
```

### Scheduled:
1. Run full test suite nightly
2. Generate trending reports
3. Send notifications if coverage drops

```yaml
on:
  schedule:
    - cron: '0 2 * * *'  # Run at 2 AM daily
```

---

## Monitoring Coverage Trends

### Using Coverage Service Dashboards
- Codecov: Provides graphs and trends
- Coveralls: Shows coverage over time
- SonarQube: Detailed quality metrics

### Custom Script to Track Coverage

Create `scripts/track-coverage.js`:

```javascript
const fs = require('fs');
const coverage = require('../coverage/adults/coverage-summary.json');

const timestamp = new Date().toISOString();
const data = {
  timestamp,
  lines: coverage.total.lines.pct,
  statements: coverage.total.statements.pct,
  functions: coverage.total.functions.pct,
  branches: coverage.total.branches.pct
};

// Append to coverage history
const historyFile = 'coverage-history.json';
let history = [];

if (fs.existsSync(historyFile)) {
  history = JSON.parse(fs.readFileSync(historyFile));
}

history.push(data);
fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));

console.log('Coverage tracked:', data);
```

Add to package.json:
```json
{
  "scripts": {
    "coverage:track": "node scripts/track-coverage.js"
  }
}
```

---

## Summary

Choose the right strategy for your project:

- **Small teams**: Use GitHub Actions + Codecov
- **Enterprise**: Use Azure DevOps + SonarQube
- **Open source**: Use GitHub Actions + Coveralls + Badges

Always:
- Run tests in CI/CD
- Track coverage trends
- Set quality gates
- Make coverage visible to the team
