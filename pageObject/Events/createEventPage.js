var CreateEventPage = function () {

    this.enterCode = function (eventcode) {
        var codeInputBx = element(by.xpath(".//label[contains(text(), 'Code')]/following::td[1]/input"));
        codeInputBx.clear();
        codeInputBx.sendKeys(eventcode);
    };

    this.eventName = function (name) {
        var eventNameInputTx = element(by.xpath(".//label[contains(text(), 'Name')]/following::td[1]/input"));
        eventNameInputTx.clear();
        eventNameInputTx.sendKeys(name);
    };

    this.startDate = function (startdate) {
        var startdateInputBox = element(by.xpath(".//label[contains(text(), 'Start Date')]/following::td[1]/div/input[1]"));
        startdateInputBox.clear();
        startdateInputBox.sendKeys();

    };
    this.enDate = function (endate) {
        var enddateInputBox = element(by.xpath(".//label[contains(text(), 'End Date')]/following::td[1]/div/input[1]"));
        enddateInputBox.clear();
        enddateInputBox.sendKeys();
    };
    this.saveEvent = function () {
        var savBtn = element(by.xpath(".//span[.='Save']"));
        savBtn.click();
    };
    this.cancel = function () {
        var cancelBtn = element(by.xpath(".//span[.='Cancel']"));
        cancelBtn.click();
    };


};
module.exports = CreateEventPage;
