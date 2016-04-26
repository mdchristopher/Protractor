var MembershipCreateSelect = function () {
    'use strict';

    this.select = function (number) {
        // 0 to 3

        //need a better way to do this
        var Xpath = ".//*[@id='ctl00_body_rbAction_{0}']";
        var rdoBtn = element(by.xpath(Xpath.replace("{0}", number)));
        rdoBtn.click();

        var contiuneBtn = element(by.xpath(".//*[@id='ctl00_body_lb_Continue']/span"));
        contiuneBtn.click();

    };

};
module.exports = MembershipCreateSelect;