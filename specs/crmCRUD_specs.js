var LoginPage = require('../pageObject/Common/loginPage.js');
var ConsoleHomePage = require('../pageObject/Common/consoleHomePage.js');
var OverviewPage = require('../pageObject/Common/overviewPage.js');
var CreateAnIndividual = require('../pageObject/CRM/createAnIndividual.js');
//var Individual360 = require('../pageObject/CRM/individual360');

describe('New Memberships', function () {

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

    it('should create a new Individual', function () {

        var ch = new ConsoleHomePage();
        ch.goToModule("Members");
        expect(browser.getTitle()).toEqual('MemberSuite - CRM Overview');

        var op = new OverviewPage();
        op.do('Create an Individual');
        expect(browser.getTitle()).toEqual('MemberSuite - Create an Individual - Enter  Information');

        var ci = new CreateAnIndividual();
        ci.enterBasicInfo("Matthew", "David", "Christopher", "mchristopher+auto@membersuite.com");
        ci.clickSave();

    });

});