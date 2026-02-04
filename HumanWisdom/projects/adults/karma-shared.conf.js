// Karma configuration file for shared components only
// This file enables faster testing of shared components in isolation

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            jasmine: {
                // Jasmine configuration options
                random: false, // Run tests in order for consistency
                seed: null,
                stopSpecOnExpectationFailure: false
            },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true // removes the duplicated traces
        },
        coverageReporter: {
            dir: require('path').join(__dirname, '../../coverage/shared'),
            subdir: '.',
            reporters: [
                { type: 'html' },
                { type: 'text-summary' },
                { type: 'lcovonly' },
                { type: 'json' },
                { type: 'text' }
            ],
            check: {
                global: {
                    statements: 60,
                    branches: 60,
                    functions: 60,
                    lines: 60
                }
            }
        },
        reporters: ['progress', 'kjhtml', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true,
        browserNoActivityTimeout: 60000,
        browserDisconnectTolerance: 3,
        browserDisconnectTimeout: 10000
    });
};
