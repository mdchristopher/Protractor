var LoginPage = require('../pageObject/Common/loginPage.js');
var ConsoleHomePage = require('../pageObject/Common/consoleHomePage.js');
var OverviewPage = require('../pageObject/Common/overviewPage.js');
var FindAnEventPage = require('../pageObject/Events/findAnEventPage.js');
var RegisterForAnEventPage = require('../pageObject/Events/registerForAnEventPage');
var SelectFeePage = require('../pageObject/Events/selectFeePage');
var CreateAnOrderPage = require('../pageObject/Orders/createAnOrder.js');
var Payment360Page = require('../pageObject/Financial/payment360Page.js');
var CreateAnIndividual = require('../pageObject/CRM/createAnIndividual.js');
var Individual360 = require('../pageObject/CRM/individual360');
var CreateAMemberPage = require('../pageObject/Membership/createAMemberPage');
var OrganizationDataEntry = require('../pageObject/CRM/organizationDataEntryPage');

describe('Create an Event', function () {


    beforeAll(function () {
        var login = new LoginPage();
        login.consoleLogin();
    });

    it('should return the correct page title', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Events");
        expect(browser.getTitle()).toEqual('MemberSuite - Events Overview');

    });
    it('should allow a console user to create an event registration for a new individual', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Events");
        var overviewpage = new OverviewPage();
        overviewpage.do("Register Someone For an Event");
        var findeventpage = new FindAnEventPage();
        findeventpage.findEvent();
        findeventpage.selectEvent("Automation");
        var registerforanevent = new RegisterForAnEventPage();
        registerforanevent.aNewIndividual();
        registerforanevent.continue();
        var createindiviual = new CreateAnIndividual();
        createindiviual.enterBasicInfo("Joe", "", "Jackson", "Joe@jackson.com", "770-123-4561");
        createindiviual.clickSave();
        var selectfee = new SelectFeePage();
        selectfee.fee("Fee two");
        selectfee.continue();
        browser.sleep(3000);
        selectfee.continue();
        browser.sleep(3000);
        var createorder = new CreateAnOrderPage();
        createorder.paymentType("Credit Card");
        createorder.creditCardPayment("41111111111111111", "March", "2018", "412", false);
        browser.sleep(2000);
        createorder.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");


    });

    it('should allow a console user to create an event registration for a new Organization', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Events");
        var overviewpage = new OverviewPage();
        overviewpage.do("Register Someone For an Event");
        var findeventpage = new FindAnEventPage();
        findeventpage.findEvent();
        findeventpage.selectEvent("Automation");
        var registerforanevent = new RegisterForAnEventPage();
        registerforanevent.aNewOrganization();
        registerforanevent.continue();
        var neworg = new OrganizationDataEntry();
        neworg.enterBasicInformation("PC Industries", "PC Industries", "770-123-4567");
        neworg.save();
        var selectfee = new SelectFeePage();
        selectfee.fee("Fee two");
        selectfee.continue();
        browser.sleep(3000);
        selectfee.continue();
        browser.sleep(3000);
        var createorder = new CreateAnOrderPage();
        createorder.paymentType("Credit Card");
        createorder.creditCardPayment("41111111111111111", "March", "2018", "412", false);
        browser.sleep(2000);
        createorder.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");

    });

    it('should allow a console user to create an event registration for an Individual that exist in the system', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Events");
        var overviewpage = new OverviewPage();
        overviewpage.do("Register Someone For an Event");
        var findeventpage = new FindAnEventPage();
        findeventpage.findEvent();
        findeventpage.selectEvent("Automation");
        var registerforanevent = new RegisterForAnEventPage();
        registerforanevent.individualWhoAlreadyExist("blah blah");
        browser.sleep(2000);
        registerforanevent.continue();
        var selectfee = new SelectFeePage();
        selectfee.fee("Fee two");
        selectfee.continue();
        browser.sleep(3000);
        selectfee.continue();
        browser.sleep(3000);
        var createorder = new CreateAnOrderPage();
        createorder.paymentType("Credit Card");
        createorder.creditCardPayment("41111111111111111", "March", "2018", "412", false);
        browser.sleep(2000);
        createorder.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");

    });

    it('should allow a console user to create an event registration for an Organization that exist in the system', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Events");
        var overviewpage = new OverviewPage();
        overviewpage.do("Register Someone For an Event");
        var findeventpage = new FindAnEventPage();
        findeventpage.findEvent();
        findeventpage.selectEvent("Automation");
        var registerforanevent = new RegisterForAnEventPage();
        registerforanevent.organizationWhoAlreadyExist("Merzoirmur");
        browser.sleep(2000);
        registerforanevent.continue();
        browser.sleep(2000);
        var selectfee = new SelectFeePage();
        selectfee.fee("Fee two");
        selectfee.continue();
        browser.sleep(3000);
        selectfee.continue();
        browser.sleep(3000);
        var createorder = new CreateAnOrderPage();
        createorder.paymentType("Credit Card");
        createorder.creditCardPayment("41111111111111111", "March", "2018", "412", false);
        browser.sleep(2000);
        createorder.processOrder();
        var pp = new Payment360Page();
        expect(pp.isAt()).toContain("Order 360");

    });

});