// An example configuration file.

/*
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    showConfiguration: true,
    reportTitle: null


 });

 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    useAllAngular2AppRoots: true,
    //directConnect: true,
    capabilities: {
        'browserName': 'chrome'

    },
    /*
     // Capabilities to be passed to the webdriver instance.
     multiCapabilities:[ {
     'browserName': 'firefox' },
     {
     'browserName': 'chrome'},
     {
     'browserName': 'internet explorer',
     'platform': 'ANY',
     'version': '11'

     }],
     */
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',


    // Spec patterns are relative to the current working directly when
    // protractor is called.

    //use this to run all specs
    specs: ['consoleOrder_spec.js'],

    //use this to run multiple specific specs
    //specs: ['crmCRUD_spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 90000,
        showColors: true
    }

    /*
// Setup the report before any tests start
    beforeLaunch: function () {
     return new Promise(function (resolve) {
     reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
    },

     //Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
     */

};
