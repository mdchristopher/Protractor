var LoginPage = require('../pageObject/Common/loginPage.js');
var ConsoleHomePage = require('../pageObject/Common/consoleHomePage.js');
var OverviewPage = require('../pageObject/Common/overviewPage.js');
var CreateAnIndividual = require('../pageObject/CRM/createAnIndividual.js');
var Individual360 = require('../pageObject/CRM/individual360');
var CreateAnOrganization = require('../pageObject/CRM/createAnOrganization');

describe('CRM CRUD', function () {

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();
        var login = new LoginPage();
        login.goTo();
        login.login("MattAutoTest", "MattAutoTest");
    });

    afterAll(function () {
        var ch = new ConsoleHomePage();
        ch.clickSignOut();
        browser.manage().deleteAllCookies();
    });

    it('should create a new individual, edit the basic information, save, then delete', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("CRM");
        var op = new OverviewPage();
        op.do('Create an Individual');
        var ci = new CreateAnIndividual();
        ci.enterBasicInfo("Matthew", "David", "Christopher", "mchristopher+auto@membersuite.com", "678-327-6801");
        ci.clickSave();
        var ind360 = new Individual360();
        ind360.messageBannerContains("The operation was completed successfully.");
        ind360.clickEditThisIndividual();
        ci.enterBasicInfo("Matthew", "David", "Christopher", "mchristopher+auto@membersuite.com", "111-111-1111");
        ci.clickSave();
        ind360.messageBannerContains("The operation was completed successfully.");
        ind360.phoneNumberShouldEqual("(111) 111-1111");
        ind360.clickDeleteThisIndividual();
        browser.switchTo().alert().accept();
        browser.sleep(5000);
        expect(browser.getTitle()).toEqual('MemberSuite - QA Test Automation Home');
    });

    it('should create a new organization, edit the basic information, save, then delete', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("CRM");
        var op = new OverviewPage();
        op.do('Create an Organization');
        var co = new CreateAnOrganization();
        co.enterBasicInfo("MemberSuite", "123-456-7890");
        co.enterBillingInfo("Matthew Christopher", "678-327-6801", "mchristopher@membersuite.com");
        co.enterMainAddress("47 Perimeter Ctr E", "", "30346", "Roswell", "GA", "US");
        co.clickSave();
        browser.pause();
    });

});