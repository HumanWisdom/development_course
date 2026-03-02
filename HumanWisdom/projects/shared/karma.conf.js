// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

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
                // you can add configuration options for Jasmine here
                // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
                // for example, you can disable the random execution with `random: false`
                // or set a specific seed with `seed: 4321`
                timeoutInterval: 10000,
                stopSpecOnExpectationFailure: false,
                stopOnSpecFailure: false,
                failFast: false
            },
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
            captureConsole: false
        },
        browserNoActivityTimeout: 300000,
        browserDisconnectTimeout: 60000,
        browserDisconnectTolerance: 5,
        captureTimeout: 600000,
        processKillTimeout: 10000,
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
                { type: 'json' }
            ]
        },
        reporters: ['progress', 'kjhtml', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        restartOnFileChange: true
    });
};
