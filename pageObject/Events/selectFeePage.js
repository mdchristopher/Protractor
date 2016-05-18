var SelectFeePage = function () {

    this.fee = function (feename) {
        var xpath = ".//label[contains(text(),'{0}')]/preceding::input[1]";

        var feeName = element(by.xpath(xpath.replace('{0}', feename)));
        feeName.click();
    };
    this.continue = function () {
        var continueBtn = element(by.xpath(".//span[.='Continue']"));
        continueBtn.click();
    };
    this.goBack = function () {
        var goBackBtn = element(by.xpath(".//span[.='Go Back']"));
        goBackBtn.click();
    };
    this.cancel = function () {
        var cancelBtn = element(by.xpath(".//span[.='Cancel']"));
        cancelBtn.click();
    };
};
module.exports = SelectFeePage;