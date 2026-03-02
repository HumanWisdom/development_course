// This file is used for running individual spec files
// Usage: Set the TEST_FILES environment variable to the path(s) of the test file(s) you want to run
// Example: TEST_FILES=../../shared/component/home/home.component.spec.ts npm run test:single

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false }
}
);

// Get the test file pattern from environment or command line
const testFilePattern = process.env.TEST_FILES || '**/*.spec.ts';

// Load only the specified test file(s)
const context = require.context('./', true, new RegExp(testFilePattern.replace(/\*/g, '.*')));
const contextShared = require.context('../../shared/', true, new RegExp(testFilePattern.replace(/\*/g, '.*')));

// Load the test modules
context.keys().map(context);
contextShared.keys().map(contextShared);
