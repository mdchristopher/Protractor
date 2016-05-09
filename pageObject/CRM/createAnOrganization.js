var CreateAnOrganization = function () {
    'use strict';

    //Basic Info
    this.enterName = function (name) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(".//td/label[contains(text(), 'Name')]/following:: td[1]/input"))));
        var nameTxt = element(by.xpath(".//td/label[contains(text(), 'Name')]/following:: td[1]/input"));
        nameTxt.clear().sendKeys(name);
    };
    this.enterMainPhoneNumber = function (mainPhoneNumber) {
        var mainPhoneNumberTxt = element(by.xpath(".//td/label[contains(text(), 'Main Phone #')]/following:: td[1]/input"));
        mainPhoneNumberTxt.clear().sendKeys(mainPhoneNumber);
    };

    this.enterBasicInfo = function (name, mainPhoneNumber) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(".//td/label[contains(text(), 'Name')]/following:: td[1]/input"))));
        this.enterName(name);
        this.enterMainPhoneNumber(mainPhoneNumber);
    };


    //Billing Information
    this.enterBillingContact = function (billingContact) {
        var billingContactTxt = element(by.xpath(".//td/label[contains(text(), 'Billing Contact')]/following:: td[1]/input"));
        billingContactTxt.clear().sendKeys(billingContact);
    };
    this.enterBillingPhoneNumber = function (billingPhoneNumber) {
        var billingPhoneNumberText = element(by.xpath(".//td/label[contains(text(), 'Billing Phone Number')]/following:: td[1]/input"));
        billingPhoneNumberText.clear().sendKeys(billingPhoneNumber);
    };
    this.enterBillingEmailAddress = function (billingEmailAddress) {
        var billingEmailAddressTxt = element(by.xpath(".//td/label[contains(text(), 'Billing Email Address')]/following:: td[1]/input"));
        billingEmailAddressTxt.clear().sendKeys(billingEmailAddress)
    };

    this.enterBillingInfo = function (billingContact, billingPhoneNumber, billingEmailAddress) {
        this.enterBillingContact(billingContact);
        this.enterBillingPhoneNumber(billingPhoneNumber);
        this.enterBillingEmailAddress(billingEmailAddress);
    };


    //Main Address
    this.enterMainAddressLine1 = function (line1) {
        var mainAddressLine1Txt = element(by.xpath(".//td[contains(text(), 'Main Address Line 1')]/following:: input [1]"));
        mainAddressLine1Txt.clear().sendKeys(line1);
    };
    this.enterMainAddressLine2 = function (line2) {
        var mainAddressLine2Txt = element(by.xpath(".//td[contains(text(), 'Main Address Line 2')]/following:: input [1]"));
        mainAddressLine2Txt.clear().sendKeys(line2);
    };
    this.enterMainAddressPostalCode = function (postalCode) {
        var mainAddressPostalCodeTxt = element(by.xpath(".//td[contains(text(), 'Main Address Postal Code')]/following:: input [1]"));
        mainAddressPostalCodeTxt.clear().sendKeys(postalCode);
    };
    this.enterMainAddressCity = function (city) {
        var mainAddressCityTxt = element(by.xpath(".//td[contains(text(), 'Main Address City')]/following:: input [1]"));
        mainAddressCityTxt.clear().sendKeys(city);
    };
    this.enterMainAddressStateProvince = function (state) {
        var mainAddressStateProvinceTxt = element(by.xpath(".//td[contains(text(), 'Main Address State/Province')]/following:: input [1]"));
        mainAddressStateProvinceTxt.clear().sendKeys(state);
    };
    this.enterMainAddressCountry = function (country) {
        var mainAddressCountryTxt = element(by.xpath(".//td[contains(text(), 'Main Address Country')]/following:: input [1]"));
        mainAddressCountryTxt.clear().sendKeys(country);
    };

    this.enterMainAddress = function (line1, line2, postalCode, city, state, country) {
        this.enterMainAddressLine1(line1);
        this.enterMainAddressLine2(line2);
        this.enterMainAddressPostalCode(postalCode);
        this.enterMainAddressCity(city);
        this.enterMainAddressStateProvince(state);
        this.enterMainAddressCountry(country);
        //this doesn't work, need to finish.
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.id("ctl00_body_AddressControl37_ValidationStatus"))));
        expect(element(by.id("ctl00_body_AddressControl37_ValidationStatus")).getText()).toContain("Address validated successfully.");
    };

    //Buttons
    this.clickSave = function () {
        var saveBtn = element(by.xpath(".//*[@id='ctl00_body_lb_CheckForDuplicates']/span"));
        saveBtn.click();
    };

};
module.exports = CreateAnOrganization;