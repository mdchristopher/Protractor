// An example configuration file.

//var HtmlReporter = require('protractor-html-screenshot-reporter')
exports.config = {
   useAllAngular2AppRoots: true,
    directConnect: true,
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

  specs: ['membership.js'],


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000,
    showColors: true
  }
};
