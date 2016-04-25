'use strict';

module.exports = function search() {
  
  this.Given(/^the cucumber website$/, function (callback) {
    browser.driver.get('http://cucumber.org');
    browser.sleep(5000).then(() => {
      return element(by.css('input')).sendKeys('protractor cucumber framework');  
    })
    .then(() => callback());
    .catch(err => callback(err));
  });
  
  this.When(/^searchs "([^"]*)"$/, function (arg1, callback) {
    callback();
  });
  
  this.Then(/^results must appears$/, function (callback) {
    callback();
  });
  
}
