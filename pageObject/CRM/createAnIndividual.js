var CreateAnIndividual = function () {
    'use strict';

    //Basic Info
    this.firstNameTxt = element(by.xpath(".//td/label[contains(text(), 'First Name')]/following:: td[1]/input"));
    this.middleNameTxt = element(by.xpath(".//td/label[contains(text(), 'Middle Name')]/following:: td[1]/input"));
    this.lastNameTxt = element(by.xpath(".//td/label[contains(text(), 'Last Name')]/following:: td[1]/input"));
    this.emailAddressTxt = element(by.xpath(".//td/label[contains(text(), 'Email Address')]/following:: td[1]/input"));
    this.mainPhoneNumberTxt = element(by.xpath(".//td/label[contains(text(), 'Main Phone #')]/following:: td[1]/input"));

    //Organization Info

    //Addresses

    //Other Information

    //Notes

    //Buttons
    this.saveBtn = element(by.xpath(".//*[@id='ctl00_body_lb_CheckForDuplicates']/span"));


    this.enterBasicInfo = function (firstname, middlename, lastname, emailaddress, mainphonenumber) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(".//td/label[contains(text(), 'First Name')]/following:: td[1]/input"))));

        this.firstNameTxt.clear().sendKeys(firstname);
        this.middleNameTxt.clear().sendKeys(middlename);
        this.lastNameTxt.clear().sendKeys(lastname);
        this.emailAddressTxt.clear().sendKeys(emailaddress);
        this.mainPhoneNumberTxt.clear().sendKeys(mainphonenumber);
    };

    this.clickSave = function() {
      this.saveBtn.click();
    };

};
module.exports = CreateAnIndividual;
