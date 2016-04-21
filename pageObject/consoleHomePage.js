var ConsoleHomePage = function () {
    'use strict';
    this.goToModule = function (modulename) {
        var moduleXpath = ".//span[.='{0}']";
        var moduleTab = element(by.xpath(moduleXpath.replace("{0}", modulename)));
        moduleTab.click();
    };
};
module.exports = ConsoleHomePage;
