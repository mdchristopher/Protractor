var MembershipCreateSelectType = function () {
    'use strict';

    this.continueBtn = element(by.xpath(".//*[@id='ctl00_body_lb_Continue']/span"));

    this.clickContinue = function() {
        this.continueBtn.click();
    };

};
module.exports = MembershipCreateSelectType;