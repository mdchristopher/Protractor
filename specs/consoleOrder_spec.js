var LoginPage = require('../pageObject/Common/loginPage.js');
var ConsoleHomePage = require('../pageObject/Common/consoleHomePage.js');
var OverviewPage = require('../pageObject/Common/overviewPage.js');
var CreateAnOrderPage = require('../pageObject/Orders/createAnOrder.js');
var Payment360Page = require('../pageObject/payment360Page.js');


describe('Create an Order', function () {


    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var login = new LoginPage();
        login.goTo();
        login.login("khamilton", "khamilton");
    });
    it('should return the correct page title', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Orders");
        expect(browser.getTitle()).toEqual('MemberSuite - Orders Overview');

    });


    it('should allow a console user to process an order with a credit card payment and save cc information for future use ', function () {

        var ch = new ConsoleHomePage();
        ch.goToModule("Orders");
        var op = new OverviewPage();
        op.do("Process an Order");
        var co = new CreateAnOrderPage();
        co.billTo("Dwain");
        browser.sleep(3000);
        co.selectProduct("Anniversary Based");
        browser.sleep(3000);
        co.paymentType("Credit Card");
        co.creditCardPayment("4111111111111111", "June", "2017", "123", true);
        co.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");

    });
    it('should allow a console user to process an order with a credit card payment but not save cc information ', function () {

        var ch = new ConsoleHomePage();
        ch.goToModule("Orders");
        var op = new OverviewPage();
        op.do("Process an Order");
        var co = new CreateAnOrderPage();
        co.billTo("Dwain");
        browser.sleep(3000);
        co.selectProduct("Anniversary Based");
        browser.sleep(3000);
        co.paymentType("Credit Card");
        co.creditCardPayment("4111111111111111", "June", "2017", "123", false);
        co.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");

    });
    it('should allow a console user to pay on an order with a saved payment methon ', function () {

        var ch = new ConsoleHomePage();
        ch.goToModule("Orders");
        var op = new OverviewPage();
        op.do("Process an Order");
        var co = new CreateAnOrderPage();
        co.billTo("Dwain");
        browser.sleep(3000);
        co.selectProduct("Anniversary Based");
        browser.sleep(3000);
        co.paymentType("Saved Payment");
        co.savedPaymentMethod("Visa ending in xx1");
        co.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");

    });

});