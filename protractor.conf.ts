exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'custom',
  frameworkPath: './node_modules/protractor-cucumber-framework',
  specs: ['./features/**/*.feature'],
  cucumberOpts: {
    require: 'app/**/*.step.js',
    format: 'pretty'
  },
  onPrepare: function(done) {
    browser.waitForAngular().then(done);
  }
};
