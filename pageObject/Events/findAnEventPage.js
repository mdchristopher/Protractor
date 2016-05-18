var FindAnEventPage = function () {


    this.findEvent = function () {
        var findbutton = element(by.xpath(".//span[.='Find']"));
        findbutton.click();
    };
    this.selectEvent = function (eventname) {

        var xpath = ".//td[contains(text(),'{0}')]/following::td[3]/a";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(xpath.replace("{0}", eventname)), 5000)));

        var event = element(by.xpath(xpath.replace("{0}", eventname)));
        event.click();
    };
};
module.exports = FindAnEventPage; 
