// Karma configuration for shared components testing
// This configuration focuses on testing only the shared folder components

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        random: false, // Run tests in order
        seed: 42, // Consistent seed for reproducibility
        stopSpecOnExpectationFailure: false,
        stopOnSpecFailure: false,
        timeoutInterval: 10000 // 10 seconds timeout
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: false, // Show all test results
      suppressFailed: false
    },
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/shared'),
      subdir: '.',
      reporters: [
        { type: 'html' }, // HTML report for viewing in browser
        { type: 'text-summary' }, // Console summary
        { type: 'lcovonly' }, // For CI/CD tools
        { type: 'json' } // For further processing
      ],
      check: {
        global: {
          statements: 60,
          branches: 50,
          functions: 50,
          lines: 60
        }
      }
    },
    junitReporter: {
      outputDir: 'test-results/shared',
      outputFile: 'junit-results.xml',
      useBrowserName: false
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    
    // Additional browser configurations
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage'
        ]
      },
      ChromeDebug: {
        base: 'Chrome',
        flags: [
          '--remote-debugging-port=9333'
        ]
      }
    },
    
    singleRun: false,
    restartOnFileChange: true,
    browserDisconnectTimeout: 10000,
    browserNoActivityTimeout: 60000,
    captureTimeout: 210000,
    
    // Files to include
    files: [
      // Add any additional test setup files here
    ],
    
    // Files to exclude
    exclude: [
      '**/*.e2e.ts'
    ]
  });
};

