var CreateAnIndividual = function () {
    'use strict';

    this.firstNameTxt = element(by.xpath(".//td/label[contains(text(), 'First Name')]/following:: td[1]/input"));
    this.middleNameTxt = element(by.xpath(".//td/label[contains(text(), 'Middle Name')]/following:: td[1]/input"));
    this.lastNameTxt = element(by.xpath(".//td/label[contains(text(), 'Last Name')]/following:: td[1]/input"));
    this.emailAddressTxt = element(by.xpath(".//td/label[contains(text(), 'Email Address')]/following:: td[1]/input"));

    this.saveBtn = element(by.xpath(".//*[@id='ctl00_body_lb_CheckForDuplicates']/span"));

    this.enterBasicInfo = function (firstname, middlename, lastname, emailaddress) {
        this.firstNameTxt.sendKeys(firstname);
        this.middleNameTxt.sendKeys(middlename);
        this.lastNameTxt.sendKeys(lastname);
        this.emailAddressTxt.sendKeys(emailaddress);
    };

    this.clickSave = function() {
      this.saveBtn.click();
    };

};
module.exports = CreateAnIndividual;
