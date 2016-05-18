var CreateAnIndividual = function () {
    'use strict';

    //Basic Info
    this.enterFirstName = function (firstname) {
        var firstNameTxt = element(by.xpath(".//td/label[contains(text(), 'First Name')]/following:: td[1]/input"));
        firstNameTxt.clear().sendKeys(firstname);
    };
    this.enterMiddleName = function (middlename) {
        var middleNameTxt = element(by.xpath(".//td/label[contains(text(), 'Middle Name')]/following:: td[1]/input"));
        middleNameTxt.clear().sendKeys(middlename);
    };
    this.enterLastName = function (lastname) {
        var lastNameTxt = element(by.xpath(".//td/label[contains(text(), 'Last Name')]/following:: td[1]/input"));
        lastNameTxt.clear().sendKeys(lastname);
    };
    this.enterEamilName = function (emailaddress) {
        var emailAddressTxt = element(by.xpath(".//td/label[contains(text(), 'Email Address')]/following:: td[1]/input"));
        emailAddressTxt.clear().sendKeys(emailaddress);
    };
    this.enterMainPhone = function (mainphone) {
        var mainPhonesTxt = element(by.xpath(".//td/label[contains(text(), 'Main Phone #')]/following:: td[1]/input"));
        mainPhonesTxt.clear().sendKeys(mainphone);
    };

    //Organization Info

    //Addresses
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


    //Other Information

    //Notes

    //Buttons


    this.enterBasicInfo = function (firstname, middlename, lastname, emailaddress, mainphonenumber) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(".//td/label[contains(text(), 'First Name')]/following:: td[1]/input"))));
        this.enterFirstName(firstname);
        this.enterMiddleName(middlename);
        this.enterLastName(lastname);
        this.enterEamilName(emailaddress);
        this.enterMainPhone(mainphonenumber);
    };

    this.clickSave = function() {
        var saveBtn = element(by.xpath(".//*[@id='ctl00_body_lb_CheckForDuplicates']/span"));
        saveBtn.click();
    };

};
module.exports = CreateAnIndividual;
