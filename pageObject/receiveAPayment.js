var ReceiveAPaymentPage = function () {

    this.getCustomer = function (billtoname) {
       
        var billToTextBx = element(by.id('ctl00_body_cbBillTo_Input'));
        billToTextBx.clear();
        billToTextBx.sendKeys(billtoname);

        var customerNameXpath = ".//td/span[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(customerNameXpath.replace("{0}", billtoname)), 5000))).click();
    };

    this.selectAnInvoice = function () {
        var invoice = element(by.id('ctl00_body_rgOpenInvoices_ctl00_ctl04_cbUse'));
        invoice.click();
    };
    this.processPayment = function () {
        element(by.id('ctl00_body_lbSave')).click();

    }
};
module.exports = ReceiveAPaymentPage;
