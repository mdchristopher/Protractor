var CreateAnOrderPage = function () {


    this.billTo = function (billtoname) {
        var EC;
        var EC = protractor.ExpectedConditions;

        browser.wait(EC.visibilityOf(element(by.id('ctl00_body_cbBillTo_Input')), 5000));

        var billToTx = element(by.id('ctl00_body_cbBillTo_Input'));
        billToTx.sendKeys(billtoname);


        var customerNameXpath = ".//td/span[contains(text(), '{0}')]";
        EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(customerNameXpath.replace("{0}", billtoname)), 5000)));

        var customer = element(by.xpath(customerNameXpath.replace("{0}", billtoname)));
        customer.click();
    };

    this.shipTo = function (shiptoname) {

        var shipToTx = element(by.id('ctl00_body_cbShipTo_Input'));
        shipToTx.sendKeys(shiptoname);

        var shipToNameXpath = ".//td/span[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(shipToNameXpath.replace("{0}", shiptoname)), 5000)));

        var shipToRecord = element(by.xpath(shipToNameXpath.replace("{0}", shiptoname)));
        shipToRecord.click();
    };

    this.selectProduct = function (productname) {


        var productXpath = ".//td/span[contains(text(), '{0}')] ";
        var EC = protractor.ExpectedConditions;

        browser.wait(EC.visibilityOf(element(by.id("ctl00_body_rgItems_ctl00_ctl04_cbProduct_Input")), 8000));
        var product = element(by.id("ctl00_body_rgItems_ctl00_ctl04_cbProduct_Input"));
        product.sendKeys(productname);

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(productXpath.replace("{0}", productname)), 5000)));

        var shipToRecord = element(by.xpath(productXpath.replace("{0}", productname)));
        shipToRecord.click();

    };

    this.paymentType = function (paymenttype) {
        var paymentText = element(by.id('ctl00_body_cbPaymentMethod_Input'));
        paymentText.click();

        var paymentXpath = ".//ul/li[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be visible on the dom.
        browser.wait(EC.visibilityOf(element(by.xpath(paymentXpath.replace("{0}", paymenttype)), 5000)));
        var creditcardpayment = element(by.xpath(paymentXpath.replace("{0}", paymenttype)));
        creditcardpayment.click();

    };

    this.savedPaymentMethod = function (payment) {
        var savedpayment = element(by.cssContainingText('option', payment));
        savedpayment.click();
    };

    this.creditCardPayment = function (ccnumber, month, year, ccv, savecc) {
        var cctextbox = element(by.id('ctl00_body_tbCreditCardNumber'));
        cctextbox.sendKeys(ccnumber);

        var expirationMonth = element(by.cssContainingText('option', month)).click();

        var expirationYear = element(by.cssContainingText('option', year)).click();
        var ccvCode = element(by.id('ctl00_body_tbCCV'));
        ccvCode.sendKeys(ccv);

        var checkbox = element(by.id('ctl00_body_cbSavePaymentMethod'));
        checkbox.isSelected().then(function (selected) {
            if (selected !== savecc) {
                checkbox.click();
            }
        })

    };

    this.processOrder = function () {
        var EC = protractor.ExpectedConditions;
        var button = $(".sBtn.last>span");
        //button.click();
        var isClickable = EC.elementToBeClickable(button);
        browser.wait(isClickable, 10000); //wait for an element to become clickable
        button.click();


    };

};
module.exports = CreateAnOrderPage;