var LoginPage = require('../pageObject/Common/loginPage.js');
var ConsoleHomePage = require('../pageObject/Common/consoleHomePage.js');
var OverviewPage = require('../pageObject/Common/overviewPage.js');
var ReceiveAPaymentPage = require('../pageObject/Financial/receiveAPayment.js');



describe('Console Receive a Payment', function () {

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        var login = new LoginPage();
        login.goTo();
        login.login("khamilton", "khamilton");
    });


    xit('should return the correct page title', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Financial");
        expect(browser.getTitle()).toEqual('MemberSuite - Financial Overview');

    });

    xit('should allow a console user to make a payment on an open invoice from the financial Overview Tab', function () {

        var ch = new ConsoleHomePage();
        ch.goToModule("Financial");
        var ov = new OverviewPage();
        ov.do("Receive a Payment");
        var rp = new ReceiveAPaymentPage();
        rp.getCustomer("Allyson");
        rp.selectAnInvoice();
        rp.processPayment();
    });

    it('should allow a console user to receive a payment ', function () {

        var qs = new QuickSearchPage();
        qs.Individual("Matt Smith");
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.titleContains('Individual 360'), 50000);
        var id = new Individual360Page();

    });

    xit('', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Financial");
        var ov = new OverviewPage();
        ov.do("Receive a Payment");
    });

});
