var LoginPage = require('../pageObject/loginPage.js');
var ConsoleHomePage = require('../pageObject/consoleHomePage.js');
var OverviewPage = require('../pageObject/overviewPage.js');
var ReceiveAPaymentPage = require('../pageObject/receiveAPayment.js');



describe('Console Receive a Payment', function () {

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        var login = new LoginPage();
        login.goTo();
        login.login("MattAutoTest", "MattAutoTest");
    });

    it('should return the correct page title', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Financial");
        expect(browser.getTitle()).toEqual('MemberSuite - Financial Overview');
    });

    it('should allow a console user to make a payment on an open invoice from the financial Overview Tab', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Financial");

        var ov = new OverviewPage();
        ov.do("Receive a Payment");

        var rp = new ReceiveAPaymentPage();
        rp.getCustomer("Allyson");
        rp.selectAnInvoice();
        rp.processPayment();
    });

});
