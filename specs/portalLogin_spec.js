/**
 * Created by office on 5/2/16.
 */

var PortalLoginPage = require('../pageObject/Portal/portalLoginPage.js');


describe('Console Login Page', function () {

    it('should return the correct page title', function () {
        var plp = new PortalLoginPage();
        plp.goTo("https://customer255600e24.portal.financial.membersuite.com/Login.aspx");
        expect(browser.getTitle()).toEqual('Login to QA Test Automation');
    });

    it('should allow a user with valid credentials to login to the system', function () {
        var plp = new PortalLoginPage();
        plp.goTo("https://customer255600e24.portal.financial.membersuite.com/Login.aspx");
        plp.login("MattAutoTest", "MattAutoTest");
        expect(browser.getTitle()).toEqual('Login to QA Test Automation');
    });

});