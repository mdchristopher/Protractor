var CreateAnOrderPage = function () {

    this.processOrder = function (link) {
        var xpath = "//span/span[.='{0}']";
        var task = element(by.xpath(xpath.replace("{0}", link)));
        task.click();
    };

    this.billTo = function () {

        var customerNameXpath = ".//td/span[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be visible on the dom.
        browser.wait(EC.visibilityOf(element(by.xpath(customerNameXpath.replace("{0}", billtoname)), 5000))).click();
    };
    this.selectProduct = function (productname) {

        var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be visible on the dom.
        browser.wait(EC.visibilityOf(element(by.id("ctl00_body_rgItems_ctl00_ctl04_cbProduct_ClientState")), 5000))).sendKeys(productname);
};
};
module.exports = CreateAnOrderPage;
