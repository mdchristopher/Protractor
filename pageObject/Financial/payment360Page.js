/**
 * Created by office on 4/25/16.
 */

var Payment360Page = function () {


    this.isAt = function () {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.titleContains('Order 360'), 50000);

        var title = element(by.css('#ctl00_lCurrentPageName'));
        return title.getText();
    };


};
module.exports = Payment360Page;
