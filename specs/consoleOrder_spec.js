var LoginPage = require('../pageObject/Common/loginPage.js');
var ConsoleHomePage = require('../pageObject/Common/consoleHomePage.js');
var OverviewPage = require('../pageObject/Common/overviewPage.js');
var CreateAnOrderPage = require('../pageObject/Orders/createAnOrder.js');
var Payment360Page = require('../pageObject/Financial/payment360Page.js');
var CreateAnIndividual = require('../pageObject/CRM/createAnIndividual.js');
var Individual360 = require('../pageObject/CRM/individual360');
var CreateAMemberPage = require('../pageObject/Membership/createAMemberPage');
var OrganizationDataEntry = require('../pageObject/CRM/organizationDataEntryPage');

describe('Create an Order', function () {


    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var login = new LoginPage();
        login.goTo();
        login.login("MattAutoTest", "MattAutoTest");
    });


    it('should return the correct page title', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Orders");
        expect(browser.getTitle()).toEqual('MemberSuite - Orders Overview');

    });
    it('should allow a console user to create an order for membership for a new Individual with no payment', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Members");

        var op = new OverviewPage();
        op.do("Create a Member");

        var cm = new CreateAMemberPage();
        cm.aNewIndividual();
        cm.continue();
        browser.sleep(5000);

        var ci = new CreateAnIndividual();
        ci.enterBasicInfo("Greg", "", "Johnson", "greg@johnson.com", "770-123-6458");
        ci.clickSave();
        browser.sleep(5000);
        cm.continue();

        browser.sleep(5000);
        cm.continue();

        var co = new CreateAnOrderPage();
        co.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");


    });
    it('should allow a console user to create an order for membership for a new orgaization  with no payment', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Members");

        var op = new OverviewPage();
        op.do("Create a Member");

        var cm = new CreateAMemberPage();
        cm.aNewOrganization();
        cm.continue();
        browser.sleep(5000);

        var createOrg = new OrganizationDataEntry();
        createOrg.enterBasicInformation("SuiteSoft", "", "770-123-4587");
        browser.sleep(5000);
        createOrg.save();

        browser.sleep(5000);
        cm.continue();
        browser.sleep(5000);
        cm.continue();

        var co = new CreateAnOrderPage();
        co.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");


    });

    it('should allow a console user to process an order with a credit card payment and save cc information for future use ', function () {

        var ch = new ConsoleHomePage();
        ch.goToModule("Orders");
        var op = new OverviewPage();
        op.do("Process an Order");
        var co = new CreateAnOrderPage();
        co.billTo("Zurzeres");
        browser.sleep(3000);
        co.selectProduct("Fundraising Product");
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
        co.billTo("Zurzeres");
        browser.sleep(3000);
        co.selectProduct("Fundraising Product");
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
        co.billTo("Zurzeres");
        browser.sleep(3000);
        co.selectProduct("Fundraising Product");
        browser.sleep(3000);
        co.paymentType("Saved Payment");
        co.savedPaymentMethod("Visa ending in xx1");
        co.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");

    });
    it('should allow a console user to pay on an order with a E-check', function () {

        var ch = new ConsoleHomePage();
        ch.goToModule("Orders");
        var op = new OverviewPage();
        op.do("Process an Order");
        var co = new CreateAnOrderPage();
        co.billTo("Zurzeres");
        browser.sleep(3000);
        co.selectProduct("Fundraising Product");
        browser.sleep(3000);
        co.paymentType("Electronic Check");
        co.electronicCheck("12345678910245", "12345678910245", "Savings", true);
        browser.sleep(3000); 
        co.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");

    });

});