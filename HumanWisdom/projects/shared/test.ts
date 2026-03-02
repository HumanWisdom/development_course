import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
    context(path: string, deep?: boolean, filter?: RegExp): {
        <T>(id: string): T;
        keys(): string[];
    };
};

// Handle unhandled promise rejections globally to prevent test runner from hanging
if (typeof window !== 'undefined') {
    window.addEventListener('unhandledrejection', (event) => {
        // Suppress navigation errors that occur in afterAll hooks
        if (event.reason && event.reason === 'Navigation error') {
            console.warn('Suppressed unhandled navigation error in test cleanup');
            event.preventDefault();
            return;
        }
        // Let other errors through
    });
}

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
);

// // Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);
// // And load the modules.
// context.keys().map(context);
