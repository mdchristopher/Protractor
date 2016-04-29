var Individual360 = function () {
    'use strict';

    this.editThisIndividual = element(by.xpath(".//*[@id='ctl00_body_GeneralPanel']/table/tbody/tr/td[3]/div/ul/li[1]/a"));

    this.waitForMessageBanner = function () {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.id('ctl00_divMessage'))));
    };

    this.clickEditThisIndividual = function () {
        this.editThisIndividual.click();
    };

    /*
     this.getPhoneNumberValue = function () {
     return element(by.xpath(".//*[@id='ctl00_body_Main_PhoneNumber_0_4']")).getText().then(function(value) {
     return value;
     })
     };
     */

    this.phoneNumberShouldEqual = function (phonenumber) {
        expect(element(by.xpath(".//*[@id='ctl00_body_Main_PhoneNumber_0_4']")).getText()).toEqual(phonenumber);
    };

};
module.exports = Individual360;