var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        // '../tests/fibra.spec.js'
        // '../tests/vvv.spec.js'
        '../tests/notifs.spec.js'
        // '../tests/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--window-size=1600,1200']
        }
    },

    // Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 25000
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
            screenshotsFolder: 'fail_images'
            })
        );
    }
};

