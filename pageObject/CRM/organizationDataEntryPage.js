var OrganizationDataEntry = function () {


    this.enterName = function (name) {
        var orgName = element(by.xpath(".//label[.='Name:*']/following::input[1]"));
        orgName.clear().sendKeys(name);
    };
    this.enterSortName = function (sortname) {
        var sortName = element(by.xpath(".//label[.='Sort Name:']/following::input[1]"));
        sortName.clear().sendKeys();
    };
    this.enterMainPhone = function (mainphone) {
        var mainPhone = element(by.xpath(".//label[.='Main Phone #:']/following::input[1]"));
        mainPhone.clear().sendKeys(mainphone);
    };
    this.selectStatus = function (status) {
        var selectStatus = element(by.xpath(".//label[.='Status:*']/following::input[1]"));
        selectStatus.clear().sendKeys();
    };
    this.enterBillingContact = function () {

        var billingContactName = element(by.xpath(".//label[.='Billing Contact:']/following::input[1]"));
        billingContactName.clear().sendKeys();
    };

    this.enterBillingPhoneNumber = function () {
        var billingPhoneNumber = element(by.xpath(".//label[.='Billing Phone Number:']/following::input[1]"));
        billingPhoneNumber.clear().sendKeys();
    };

    this.enterBillingEmailAddress = function () {
        var billingEmailAddress = element(by.xpath(".//label[.='Billing Email Address:']/following::input[1]"));
        billingEmailAddress.clear().sendKeys();
    };

    this.enterBasicInformation = function (name, sortname, mainphone) {
        this.enterName(name);
        this.enterSortName(sortname);
        this.enterMainPhone(mainphone);


    };

    this.save = function () {
        var saveBtn = element(by.xpath(".//span[.='Save']"));
        saveBtn.click();
    };


};
module.exports = OrganizationDataEntry;

