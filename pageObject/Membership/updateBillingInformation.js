var UpdateBillingInformationPage = function () {

    this.getName = function () {
        var nametext = element(by.css('#ctl00_body_Label22'));
        return nametext.getText();
    };
    this.getType = function () {
        var typeText = element(by.css('#ctl00_body_Label24'));
        return typeText.getText();

    };
    this.getExpirationDate = function () {
        var expirationdateValue = element(by.css('#ctl00_body_Label24'));
        return expirationdateValue.getText();

    };
    this.manuallyEnterNewCreditCardInformation = function () {
        var newccoption = element(by.css('#ctl00_body_NewOptions_0'));
        newccoption.click();
    };
    this.manuallyEnterNewECheckACHInformation = function () {
        var newecheckoption = element(by.css('#ctl00_body_NewOptions_1'));
        newecheckoption.click();

    };
    this.removeBillingInformation = function () {
        var removebillingoption = element(by.css('#ctl00_body_NewOptions_2'));
        removebillingoption.click();
    };
    this.enterNewCreditCard = function (name) {
        var nameoncard = element(by.xpath(".//td/label[contains(text(), 'Name on Card')]/following::td[1]/input"));
        nameoncard.clear();
        nameoncard.sendKeys(name);
    };
    this.creditCardNumber = function (ccnumber) {
        var creditcard = element(".//td/label[contains(text(), 'Card Number')]/following::td[1]/input");
        creditcard.clear();
        creditcard.sendKeys(ccnumber);

    };

    this.selectMonth = function (month) {
        var expirationMonth = element(by.cssContainingText('option', month)).click();

    };
    this.selectYear = function (year) {
        var expirationYear = element(by.cssContainingText('option', year)).click();
    };
    this.enterCvv = function (cvvnumber) {
        var ccvCode = element(by.id('ctl00_body_tbCCV'));
        ccvCode.clear();
        ccvCode.sendKeys(ccv);
    };

    this.enterEcheckInformation = function (bankaccountnumber, routingnumber, accounttype) {
        var bankAccount = element(by.xpath(".//label[contains(text(), 'Bank Account #')]/following::td[1]/input"));
        bankAccount.clear();
        bankAccount.sendKeys(bankaccountnumber);

        var routingABA = element(by.xpath(".//label[contains(text(), 'Routing/ABA')]/following::td[1]/input"));
        routingABA.clear();
        routingABA.sendKeys(routingnumber);

        var expirationMonth = element(by.id('ctl00_body_cbBankAccountType_Input')).sendKeys(accounttype);

    };
    this.enterBillingAddress = function (addressline1, addressline2, city, addressstate, postalcode, country) {
        var textaddressline1 = element(by.xpath(".//td[contains(text(), 'Line 1')]/following::td[1]/input"));
        textaddressline1.clear();
        textaddressline1.sendKeys(addressline1);

        var textaddressline2 = element(by.xpath(".//td[contains(text(), 'Line 2')]/following::td[1]/input"));
        textaddressline2.clear();
        textaddressline2.sendKeys(addressline2);

        var textCity = element(by.xpath(".//td[contains(text(), 'City')]/following::td[1]/input"));
        textCity.clear();
        textCity.sendKeys(city);

        var textState = element(by.xpath(".//td[contains(text(), 'State')]/following::td[1]/input"));
        textState.clear();
        textState.sendKeys(addressstate);

        var textPostalCode = element(by.xpath(".//td[contains(text(), 'Postal Code:')]/following::td[1]/input"));
        textPostalCode.clear();
        textPostalCode.sendKeys(postalcode);

        var textCountry = element(by.xpath(".//td[contains(text(), 'Country')]/following::td[1]/input"));
        textCountry.clear();
        textCountry.sendKeys(country);

    };

    this.saveChanges = function () {
        var savechangeBtn = element(by.xpath(".//span[.='Save Changes']"));
        savechangeBtn.click();
    };

    this.continue = function () {
        var continueBtn = element(by.xpath(".//span[.='Continue']"));
        continueBtn.click();
    };
    this.cancel = function () {
        var cancelBtn = element(by.xpath(".//span[.='Cancel']"));
        cancelBtn.click();

    };


};
module.exports = UpdateBillingInformationPage;