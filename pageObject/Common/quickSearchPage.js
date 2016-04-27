/**
 * Created by office on 4/26/16.
 */
var QuickSearchPage = function () {


    this.Individual = function (name) {

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.id('ctl00_rcAllAvailableQuickSearches_Arrow')), 5000));
        var individualDropDwonArrow = element(by.id('ctl00_rcAllAvailableQuickSearches_Arrow'));
        individualDropDwonArrow.click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(".//ul/li[.='Individuals']")), 5000));
        var individual = element(by.xpath(".//ul/li[.='Individuals']"));
        individual.click();

        //var individualtextBox = element(by.id('ctl00_Individual_primaryInput'));
        // individualDropDwonArrow.click();

        var individualXpath = ".//td/span[contains(text(), '{0}')]";

        EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(individualXpath.replace('{0}', name))), 5000));
        var individualname = element(by.xpath(individualXpath.replace('{0}', name)));
        individualname.click();

    };


};
module.exports = QuickSearchPage;
