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
