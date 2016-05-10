var CreateAMemberPage = function () {
    'use strict';

    this.individualWhoAlreadyExist = function (name) {

        element(by.xpath(".//label[contains(text(),'An individual who already exists in the system')]/preceding::input[1]")).click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.id('ctl00_body_cbExistingIndividual_Input')), 5000));
        var individualNameTx = element(by.id('ctl00_body_cbExistingIndividual_Input'));
        individualNameTx.sendKeys(billtoname);


        var individualXpath = ".//td/span[contains(text(), '{0}')]";
        EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(individualXpath.replace("{0}", name)), 5000)));

        var individual = element(by.xpath(individualXpath.replace("{0}", name)));
        individual.click();

    };

    this.organizationWhoAlreadyExist = function (name) {

        element(by.xpath(".//label[contains(text(),'An organization that already exists in the system')]/preceding::input[1]")).click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.id('ctl00_body_cbExistingOrganization_Input')), 5000));
        var organizationNameTx = element(by.id('ctl00_body_cbExistingOrganization_Input'));
        organizationNameTx.sendKeys(name);


        var organizationXpath = ".//td/span[contains(text(), '{0}')]";
        EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(organizationXpath.replace("{0}", name)), 5000)));

        var organization = element(by.xpath(organizationXpath.replace("{0}", name)));
        organization.click();

    };

    this.aNewIndividual = function () {

        var newIndividualRadioBtn = element(by.xpath(".//label[contains(text(),'A new individual that is not in the system')]/preceding::input[1]"));
        newIndividualRadioBtn.click();
    };

    this.aNewOrganization = function () {
        var newOrganizationRadioBtn = element(by.xpath(".//label[contains(text(),'A new organization that is not in the system')]/preceding::input[1]"));
        newOrganizationRadioBtn.click();
    };


    this.continue = function () {
        var continueBtn = element(by.xpath(".//span[.='Continue']"));
        continueBtn.click();

    };
};
module.exports = CreateAMemberPage;