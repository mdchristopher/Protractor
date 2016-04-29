var LoginPage = require('../pageObject/Common/loginPage.js');
var ConsoleHomePage = require('../pageObject/Common/consoleHomePage.js');
var OverviewPage = require('../pageObject/Common/overviewPage.js');
var CreateAnIndividual = require('../pageObject/CRM/createAnIndividual.js');
var Individual360 = require('../pageObject/CRM/individual360');

describe('CRM CRUD', function () {

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var login = new LoginPage();
        login.goTo();
        login.login("MattAutoTest", "MattAutoTest");
    });

    afterAll(function () {
        var ch = new ConsoleHomePage();
        ch.clickSignOut()
    });

    /*
    it('should create a new Individual', function () {
        var ch = new ConsoleHomePage();
     ch.goToModule("CRM");
        var op = new OverviewPage();
        op.do('Create an Individual');
        var ci = new CreateAnIndividual();
     ci.enterBasicInfo("Matthew", "David", "Christopher", "mchristopher+auto@membersuite.com", "678-327-6801");
        ci.clickSave();
     var ind360 = new Individual360();
     ind360.waitForMessageBanner();
    });
     */

    it('should create a new individual, edit, then save.', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("CRM");
        var op = new OverviewPage();
        op.do('Create an Individual');
        var ci = new CreateAnIndividual();
        ci.enterBasicInfo("Matthew", "David", "Christopher", "mchristopher+auto@membersuite.com", "678-327-6801");
        ci.clickSave();
        var ind360 = new Individual360();
        ind360.waitForMessageBanner();
        ind360.clickEditThisIndividual();
        ci.enterBasicInfo("Matthew", "David", "Christopher", "mchristopher+auto@membersuite.com", "111-111-1111");
        ci.clickSave();
        ind360.waitForMessageBanner();

        //expect(ind360.getPhoneNumberValue()).toContain("(111) 111-1111");
        ind360.phoneNumberShouldEqual("(111) 111-1111");
    });

});