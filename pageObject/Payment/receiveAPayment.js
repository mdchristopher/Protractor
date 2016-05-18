/**
 * Created by office on 4/26/16.
 */

var ReceiveAPaymentPage = function () {


    this.getCustomer = function (billtoname) {

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.id('ctl00_body_cbBillTo_Input')), 5000));

        var billToTextBx = element(by.id('ctl00_body_cbBillTo_Input'));
        billToTextBx.clear();
        billToTextBx.sendKeys(billtoname);


        var customerNameXpath = ".//td/span[contains(text(), '{0}')]";
        EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(customerNameXpath.replace("{0}", billtoname)), 5000)));
        var customer = element(by.xpath(customerNameXpath.replace("{0}", billtoname)));
        customer.click();
    };


    this.selectABatch = function (batchname) {
        var dropDownArrow = element(by.id('ctl00_body_cbBatch_Arrow'));
        dropDownArrow.click();

        var batchXpath = ".//ul/li[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(batchXpath.replace("{0}", batchname)), 5000)));
        var batch = element(by.xpath(batchXpath.replace("{0}", batchname)));
        batch.click();

    };

    this.paymentDate = function (date) {
        var dateTextBx = element(by.id('ctl00_body_dpDate_dateInput_text'));
        dateTextBx.sendKeys(date);
    };

    this.sourceCode = function (sourcecode) {
        var dropDownArrow = element(by.id('ctl00_body_cbSourceCode_Arrow'));
        dropDownArrow.click();

        var sourceCodeXpath = ".//ul/li[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(sourceCodeXpath.replace("{0}", sourcecode)), 5000)));
        var scname = element(by.xpath(sourceCodeXpath.replace("{0}", sourcecode)));
        scname.click();
    };


    this.paymentMethod = function (payment) {
        var paymentDownArrow = element(by.id('ctl00_body_cbPaymentMethod_Arrow'));
        paymentDownArrow.click();

        var paymentXpath = ".//ul/li[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(paymentXpath.replace("{0}", payment)), 5000))).click();
    };


    this.paymentAmount = function (amount) {
        var paymentTextBx = element(by.id('ctl00_body_tbAmount'));
        paymentTextBx.clear();
        paymentTextBx.sendKeys(amount);
    };


    this.mediaCode = function (mediacode) {
        var mediaCodeDownArrow = element(by.id('ctl00_body_cbMediaCode_Arrow'));
        mediaCodeDownArrow.click();

        var mediaCodeXpath = ".//ul/li[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(mediaCodeXpath.replace("{0}", mediacode)), 5000))).click();
    };


    this.selectCashAccount = function (cashaccount) {
        var cashAccountDownArrow = element(by.id('ctl00_body_cbBankAccount_Arrow'));
        cashAccountDownArrow.click();

        var cashAccountXpath = ".//ul/li[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(cashAccountXpath.replace("{0}", cashaccount)), 5000))).click();
    };


    this.creditCardPayment = function (ccnumber, month, year, savecc) {
        var cctextbox = element(by.id('ctl00_body_tbCreditCardNumber'));
        cctextbox.sendKys(ccnumber);

        var expirationMonth = element(by.cssContainingText('option', month)).click();

        var expirationYear = element(by.cssContainingText('option', year)).click();
        var ccvCode = element(by.id('ctl00_body_tbCCV'));
        ccvCode.sendKeys(ccv);

        var dropDownArrow = element(by.id('ctl00_body_cbMerchantAccount_Arrow'));
        dropDownArrow.click();

        var merchantAccountXpath = ".//ul/li[contains(text(), '{0}')]";
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(merchantAccountXpath.replace("{0}", sourcecode)), 5000))).click();

        var checkbox = element(by.id('ctl00_body_cbSavePaymentMethod'));
        checkbox.isChecked().then(function (selected) {
            if (selected !== savecc) {
                checkbox.click();
            }
        });

    };
    this.enterEcheckInformation = function (bankaccountnumber, routingnumber, accounttype, savecc) {
        var bankAccount = element(by.xpath(".//label[contains(text(), 'Bank Account #')]/following::td[1]/input"));
        bankAccount.clear();
        bankAccount.sendKeys(bankaccountnumber);

        var routingABA = element(by.xpath(".//label[contains(text(), 'Routing/ABA')]/following::td[1]/input"));
        routingABA.clear();
        routingABA.sendKeys(routingnumber);

        var expirationMonth = element(by.id('ctl00_body_cbBankAccountType_Input')).sendKeys(accounttype);

        var checkbox = element(by.id('ctl00_body_cbSavePaymentMethod'));
        checkbox.isChecked().then(function (selected) {
            if (selected !== savecc) {
                checkbox.click();
            }
        });

    };


    this.enterCheckReferenceNumber = function (checkrefnumber) {
        element(by.id('ctl00_body_tbCheckReferenceNumber')).sendKeys(checkrefnumber);
    };


    this.clickEmailConfirmation = function (value) {
        var checkbox = element(by.id('ctl00_body_cbAutomaticallyEmail'));
        checkbox.isChecked().then(function (selected) {
            if (selected !== value) {
                checkbox.click();
            }
        });

    };


    this.enterEmailAddress = function (emailaddress) {
        var customerEmail = element(by.id('ctl00_body_tbEmailConfirmation'));
        customerEmail.clear();
        customerEmail.sendKeys(emailaddress);
    };


    this.addInvoiceFromOtherCustomer = function (customername) {
        var anothercustomertxtbx = element(by.id('ctl00_body_cbAddInvoice_Input'));
        anothercustomertxtbx.sendKeys(customername);

        var customerXpath = '  .//td/span[contains(text(), "{0}")]';
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(customerXpath.replace("{0}", customername)), 5000))).click();
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
