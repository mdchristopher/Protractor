var Individual360 = function () {
    'use strict';

    this.editThisIndividual = element(by.xpath(".//*[@id='ctl00_body_GeneralPanel']/table/tbody/tr/td[3]/div/ul/li[1]/a"));


    this.clickEditThisIndividual = function () {
        this.editThisIndividual.click();
    };

    this.phoneNumberShouldEqual = function (phonenumber) {
        expect(element(by.xpath(".//*[@id='ctl00_body_Main_PhoneNumber_0_4']")).getText()).toEqual(phonenumber);
    };

    this.messageBannerContains = function (message) {
        expect(element(by.id('ctl00_divMessage')).getText()).toContain(message);
    };

    this.waitForMessageBanner = function () {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.id('ctl00_divMessage'))));
    };


};
module.exports = Individual360;