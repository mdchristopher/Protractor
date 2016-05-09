var CreateAnOrganization = function () {
    'use strict';

    //Basic Info
    this.name = element(by.xpath(".//td/label[contains(text(), 'Name')]/following:: td[1]/input"));
    this.mainPhoneNumber = element(by.xpath(".//td/label[contains(text(), 'Main Phone #')]/following:: td[1]/input"));

    //Billing Information
    this.billingContact = element(by.xpath(".//td/label[contains(text(), 'Billing Contact')]/following:: td[1]/input"));
    this.billingPhoneNumber = element(by.xpath(".//td/label[contains(text(), 'Billing Phone Number')]/following:: td[1]/input"));
    this.billingEmailAddress = element(by.xpath(".//td/label[contains(text(), 'Billing Email Address')]/following:: td[1]/input"));

    //Addresses
    this.mainAddressLine1 = element(by.xpath(".//td/label[contains(text(), 'Main Address Line 1')]/following:: td[1]/input"));
    this.mainAddressLine2 = element(by.xpath(".//td/label[contains(text(), 'Main Address Line 2')]/following:: td[1]/input"));
    this.mainAddressPostalCode = element(by.xpath(".//td/label[contains(text(), 'Main Address Postal Code')]/following:: td[1]/input"));
    this.mainAddressCity = element(by.xpath(".//td/label[contains(text(), 'Main Address City')]/following:: td[1]/input"));
    this.mainAddressStateProvince = element(by.xpath(".//td/label[contains(text(), 'Main Address State/Province')]/following:: td[1]/input"));
    this.mainAddressCountry = element(by.xpath(".//td/label[contains(text(), 'Main Address Country)]/following:: td[1]/input"));

    //Buttons
    this.save = element(by.xpath(".//*[@id='ctl00_body_lb_CheckForDuplicates']/span"));
    this.saveAndCreateNew = element(by.xpath(".//*[@id='ctl00_body_lb_CheckForDuplicatesAndCreateNew']/span"));
    this.cancel = element(by.xpath(".//*[@id='ctl00_body_lb_Cancel']/span"));


    this.enterBasicInfo = function (name, mainphonenumber) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(".//td/label[contains(text(), 'Name')]/following:: td[1]/input"))));
        this.name.clear().sendKeys(name);
        this.mainPhoneNumber.clear().sendKeys(mainphonenumber);
    };

    this.enterBillingInfo = function (billingcontact, billingphonenumber, billingemailaddress) {
        this.billingContact.clear().sendKeys(billingcontact);
        this.billingPhoneNumber.clear().sendKeys(billingphonenumber);
        this.billingEmailAddress.clear().sendKeys(billingemailaddress);
    };

    this.enterMainAddress = function (addressline1, addressline2, postalcode, state, country) {
        this.mainAddressLine1.clear().sendKeys(addressline1);
        this.mainAddressLine2.clear().sendKeys(addressline2);
        this.mainAddressPostalCode.clear().sendKeys(postalcode);
        this.mainAddressStateProvince.clear().sendKeys(state);
        this.mainAddressCountry.clear().sendKeys(country);


        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(".//*[@id='ctl00_body_AddressControl30_ValidationStatus']"))));
    };

    this.clickSave = function () {
        this.save.click();
    };
};
module.exports = CreateAnOrganization;