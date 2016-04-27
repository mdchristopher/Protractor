var Individual360 = function () {
    'use strict';

    this.editThisIndividual = element(by.xpath(".//*[@id='ctl00_body_GeneralPanel']/table/tbody/tr/td[3]/div/ul/li[1]/a"));

    this.waitForMessageBanner = function () {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.id('ctl00_divMessage'))));
    };

    //Once on the individual 360 screen you click the tab, then the action you wish to perform on that tab. 
    //The name of the tab and the name of the action you whish to perform is pass in as parameters 
    this.do = function (tabname, text) {
        var tabXpath = ".//span/span[.='Financial']";
        var tab = element(by.xpath(tabXpath.replace("{0}", tabname)));
        tab.click();

        var whatWouldYouLikeToDo = element(by.linkText(text));
        whatWouldYouLikeToDo.click();

    };


};
module.exports = Individual360;