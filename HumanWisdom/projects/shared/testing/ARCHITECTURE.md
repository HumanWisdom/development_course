# Testing Architecture - Visual Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     HappierMe Application                        │
│                    (Mental Wellness Platform)                    │
└─────────────────────────────────────────────────────────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
                ▼                ▼                ▼
        ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
        │    Adults    │  │  Teenagers   │  │  GetStarted  │
        │   (Angular)  │  │   (Angular)  │  │    (PHP)     │
        └──────────────┘  └──────────────┘  └──────────────┘
                │                │
                └────────┬───────┘
                         │
                         ▼
                ┌──────────────────┐
                │  Shared Components│
                │   (Angular Lib)  │
                └──────────────────┘
                         │
                         ▼
                ┌──────────────────┐
                │  Testing Project │  ◄── YOU ARE HERE
                │   (This Setup)   │
                └──────────────────┘
```

## Testing Framework Architecture

```
┌───────────────────────────────────────────────────────────────────┐
│                        Testing Framework                           │
├───────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Documentation  │  │  Configuration  │  │   Utilities     │  │
│  │                 │  │                 │  │                 │  │
│  │  • README       │  │  • Karma Config │  │  • Test Helpers │  │
│  │  • Setup Guide  │  │  • tsconfig     │  │  • Mock Services│  │
│  │  • Quick Ref    │  │  • index.ts     │  │  • Test Data    │  │
│  │  • NPM Scripts  │  │                 │  │                 │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                    │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │    Examples     │  │     CI/CD       │  │   Checklists    │  │
│  │                 │  │                 │  │                 │  │
│  │  • Component    │  │  • GitHub       │  │  • Install      │  │
│  │  • Service      │  │  • GitLab       │  │  • Architecture │  │
│  │  • Best Practice│  │  • Jenkins      │  │  • Summary      │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                    │
└───────────────────────────────────────────────────────────────────┘
```

## Test Execution Flow

```
Developer Writes Code
         │
         ▼
┌──────────────────┐
│  Write Test File │
│   (.spec.ts)     │
└──────────────────┘
         │
         ▼
┌──────────────────┐
│  Import from     │
│  testing/        │
│  • Helpers       │
│  • Mocks         │
│  • Fixtures      │
└──────────────────┘
         │
         ▼
┌──────────────────┐
│  Run: npm test   │
└──────────────────┘
         │
         ▼
┌──────────────────┐
│  Karma Starts    │
│  Chrome Opens    │
└──────────────────┘
         │
         ▼
┌──────────────────┐
│  Jasmine Runs    │
│  Tests Execute   │
└──────────────────┘
         │
         ▼
┌──────────────────┐
│  Results Display │
│  ✓ Pass / ✗ Fail│
└──────────────────┘
         │
         ▼
┌──────────────────┐
│  Coverage Report │
│  Generated       │
└──────────────────┘
```

## File Organization

```
HumanWisdom/projects/
│
├── adults/
│   ├── karma.conf.js          ◄─┐
│   ├── tsconfig.spec.json     ◄─┤ Test Configuration
│   ├── src/                     │
│   │   └── test.ts             ◄─┘
│   └── package.json            ◄── NPM Scripts
│
├── teenagers/
│   └── (similar structure)
│
└── shared/
    ├── component/              ◄─┐
    │   └── **/*.spec.ts          │
    ├── services/                 │
    │   └── **/*.spec.ts          │ 201 Test Files
    ├── forum/                    │
    │   └── **/*.spec.ts          │
    ├── subscription/             │
    │   └── **/*.spec.ts        ◄─┘
    │
    └── testing/                ◄── THIS PROJECT
        ├── README.md                   [Main Docs]
        ├── TEST_SETUP_GUIDE.md         [Setup]
        ├── QUICK_REFERENCE.md          [Cheat Sheet]
        ├── NPM_SCRIPTS_CONFIG.md       [Scripts]
        ├── PROJECT_SUMMARY.md          [Overview]
        ├── INSTALLATION_CHECKLIST.md   [Checklist]
        ├── ARCHITECTURE.md             [This File]
        ├── ci-cd-examples.yml          [CI/CD]
        ├── karma.conf.shared.js        [Config]
        ├── index.ts                    [Exports]
        │
        ├── helpers/
        │   └── test-helpers.ts         [30+ Functions]
        │
        ├── mocks/
        │   └── mock-services.ts        [11 Services]
        │
        ├── fixtures/
        │   └── test-data.ts            [30+ Objects]
        │
        └── examples/
            ├── example-service.spec.ts [Service Examples]
            └── example-component.spec.ts [Component Examples]
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Test Data Flow                            │
└─────────────────────────────────────────────────────────────┘

Test File (.spec.ts)
      │
      ├─► Import Helpers      ──► test-helpers.ts
      │                              │
      │                              ├─► findElement()
      │                              ├─► clickElement()
      │                              └─► setInputValue()
      │
      ├─► Import Mocks        ──► mock-services.ts
      │                              │
      │                              ├─► MockNavigationService
      │                              ├─► MockCommonService
      │                              └─► MockHttpClient
      │
      └─► Import Fixtures     ──► test-data.ts
                                     │
                                     ├─► MOCK_USER
                                     ├─► MOCK_FORUM_POST
                                     └─► MOCK_SUBSCRIPTION_PLAN
                                     
                              ▼
                     Component/Service
                              │
                              ▼
                        Test Results
```

## Dependency Graph

```
┌─────────────────────────────────────────────────────────┐
│                   Dependencies                           │
└─────────────────────────────────────────────────────────┘

Angular Core
    │
    ├─► @angular/core
    ├─► @angular/common
    ├─► @angular/platform-browser
    └─► @angular/router
              │
              ▼
    Testing Framework
              │
              ├─► Jasmine (Test Framework)
              │     │
              │     ├─► describe()
              │     ├─► it()
              │     ├─► expect()
              │     └─► spyOn()
              │
              ├─► Karma (Test Runner)
              │     │
              │     ├─► karma-jasmine
              │     ├─► karma-chrome-launcher
              │     └─► karma-coverage
              │
              └─► Angular Testing
                    │
                    ├─► TestBed
                    ├─► ComponentFixture
                    └─► HttpClientTestingModule
                          │
                          ▼
                 Your Test Files
                          │
                          ▼
                 Testing Utilities ◄── THIS PROJECT
```

## Component Testing Flow

```
┌────────────────────────────────────────────────────────┐
│           Component Test Lifecycle                      │
└────────────────────────────────────────────────────────┘

beforeEach(() => {
  ┌──────────────────┐
  │ Configure TestBed│
  │  - declarations  │
  │  - imports       │
  │  - providers     │
  └──────────────────┘
           │
           ▼
  ┌──────────────────┐
  │ Create Component │
  │    Fixture       │
  └──────────────────┘
           │
           ▼
  ┌──────────────────┐
  │ Get Component    │
  │    Instance      │
  └──────────────────┘
           │
           ▼
  ┌──────────────────┐
  │ detectChanges()  │
  └──────────────────┘
})
           │
           ▼
it('should...', () => {
  ┌──────────────────┐
  │ ARRANGE          │
  │ Set up test data │
  └──────────────────┘
           │
           ▼
  ┌──────────────────┐
  │ ACT              │
  │ Execute action   │
  └──────────────────┘
           │
           ▼
  ┌──────────────────┐
  │ ASSERT           │
  │ Verify results   │
  └──────────────────┘
})
           │
           ▼
afterEach(() => {
  ┌──────────────────┐
  │ Clean Up         │
  │ Destroy Fixture  │
  └──────────────────┘
})
```

## Service Testing Flow

```
┌────────────────────────────────────────────────────────┐
│            Service Test Lifecycle                       │
└────────────────────────────────────────────────────────┘

beforeEach(() => {
  ┌──────────────────────┐
  │ Configure TestBed    │
  │  - providers         │
  │  - imports           │
  │  (HttpClientTesting) │
  └──────────────────────┘
           │
           ▼
  ┌──────────────────────┐
  │ Inject Service       │
  │ Inject HttpMock      │
  └──────────────────────┘
})
           │
           ▼
it('should...', () => {
  ┌──────────────────────┐
  │ Call Service Method  │
  └──────────────────────┘
           │
           ▼
  ┌──────────────────────┐
  │ Expect HTTP Request  │
  │ Verify Method/URL    │
  └──────────────────────┘
           │
           ▼
  ┌──────────────────────┐
  │ Flush Mock Response  │
  └──────────────────────┘
           │
           ▼
  ┌──────────────────────┐
  │ Assert Results       │
  └──────────────────────┘
})
           │
           ▼
afterEach(() => {
  ┌──────────────────────┐
  │ Verify No Pending    │
  │ HTTP Requests        │
  └──────────────────────┘
})
```

## CI/CD Pipeline Architecture

```
┌────────────────────────────────────────────────────────┐
│                 CI/CD Pipeline                          │
└────────────────────────────────────────────────────────┘

  Git Push
      │
      ▼
┌──────────────┐
│ CI Triggered │
└──────────────┘
      │
      ├─► Checkout Code
      │
      ├─► Install Dependencies (npm ci)
      │
      ├─► Run Linting
      │
      ├─► Run Tests (npm run test:ci)
      │        │
      │        ├─► Karma Headless
      │        ├─► All Tests Execute
      │        └─► Coverage Generated
      │
      ├─► Upload Coverage
      │        │
      │        └─► Codecov/Coveralls
      │
      ├─► Publish Test Results
      │        │
      │        └─► JUnit XML
      │
      └─► Build Success/Failure
              │
              ▼
         Notify Team
```

## Coverage Report Structure

```
┌────────────────────────────────────────────────────────┐
│              Coverage Report Structure                  │
└────────────────────────────────────────────────────────┘

coverage/
├── adults/
│   ├── index.html          ◄── Open in browser
│   ├── lcov.info          ◄── For CI tools
│   ├── coverage-summary.json
│   │
│   ├── shared/            ◄── Shared folder coverage
│   │   ├── component/
│   │   ├── services/
│   │   └── ...
│   │
│   └── src/
│       └── ...

Metrics:
├── Statements: X%
├── Branches: X%
├── Functions: X%
└── Lines: X%

Color Coding:
├── Green: > 80%
├── Yellow: 50-80%
└── Red: < 50%
```

## Test Utilities Organization

```
┌────────────────────────────────────────────────────────┐
│           Testing Utilities Structure                   │
└────────────────────────────────────────────────────────┘

testing/index.ts  ◄── Central Export
      │
      ├─► helpers/test-helpers.ts
      │         │
      │         ├─► DOM Helpers (15 functions)
      │         │    • findElement()
      │         │    • clickElement()
      │         │    • setInputValue()
      │         │    • getTextContent()
      │         │
      │         ├─► Async Helpers (5 functions)
      │         │    • waitForAsync()
      │         │    • delay()
      │         │    • waitForObservable()
      │         │
      │         └─► Utility Helpers (10 functions)
      │              • mockConsole()
      │              • useFakeTimers()
      │              • createMockFile()
      │
      ├─► mocks/mock-services.ts
      │         │
      │         ├─► Core Services (4 mocks)
      │         │    • MockNavigationService
      │         │    • MockCommonService
      │         │    • MockSharedService
      │         │
      │         ├─► Feature Services (4 mocks)
      │         │    • MockChatbotService
      │         │    • MockForumService
      │         │    • MockModalService
      │         │    • MockOnboardingService
      │         │
      │         └─► Framework Services (3 mocks)
      │              • MockHttpClient
      │              • MockRouter
      │              • MockActivatedRoute
      │
      └─► fixtures/test-data.ts
                │
                ├─► User Data (2 objects)
                ├─► Forum Data (4 objects)
                ├─► Subscription Data (3 objects)
                ├─► Content Data (3 objects)
                ├─► Journal Data (2 objects)
                ├─► Survey Data (2 objects)
                ├─► Progress Data (1 object)
                ├─► Chat Data (1 object)
                ├─► Notification Data (1 object)
                ├─► Error Responses (4 objects)
                ├─► API Responses (2 objects)
                └─► Config Data (3 objects)
```

## Integration Points

```
┌────────────────────────────────────────────────────────┐
│              System Integration Points                  │
└────────────────────────────────────────────────────────┘

Testing Framework
      │
      ├──► Adults App
      │      │
      │      ├─► Runs shared tests
      │      ├─► Generates combined coverage
      │      └─► Uses same config
      │
      ├──► Teenagers App
      │      │
      │      ├─► Can run shared tests
      │      ├─► Separate config possible
      │      └─► Shares utilities
      │
      ├──► CI/CD Systems
      │      │
      │      ├─► GitHub Actions
      │      ├─► GitLab CI
      │      ├─► Jenkins
      │      ├─► Azure Pipelines
      │      └─► CircleCI
      │
      └──► Development Tools
             │
             ├─► VS Code (Launch configs)
             ├─► Chrome DevTools
             └─► Coverage Viewers
```

## Summary Statistics

```
┌────────────────────────────────────────────────────────┐
│                  Project Statistics                     │
└────────────────────────────────────────────────────────┘

Files Created:      14 files
Documentation:      2,000+ lines
Code:              1,500+ lines
Test Helpers:      30+ functions
Mock Services:     11 services
Test Fixtures:     30+ objects
Example Tests:     40+ test cases
NPM Scripts:       10+ scripts
CI/CD Examples:    7 platforms

Estimated Setup Time:    2-3 hours
Maintenance Time:        1-2 hours/month
Learning Curve:          Intermediate
ROI:                     High
```

---

**This architecture document provides a visual overview of the entire testing framework structure, data flow, and integration points.**

Last Updated: 2026-02-01

