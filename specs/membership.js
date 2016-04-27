var LoginPage = require('../pageObject/loginPage.js');
var ConsoleHomePage = require('../pageObject/consoleHomePage.js');
var OverviewPage = require('../pageObject/overviewPage.js');
var MembershipCreateSelect = require('../pageObject/Membership/membershipCreateSelect.js');
var CreateAnIndividual = require('../pageObject/CRM/CreateAnIndividual.js');
var MembershipCreateSelectType = require('../pageObject/Membership/membershipCreateSelectType.js');
var MembershipCreateAdditionalOptions = require('../pageObject/Membership/membershipCreateAdditionalOptions.js');
var CreateAnOrder = require('../pageObject/createAnOrder.js');
var Individual360 = require('../pageObject/CRM/individual360');

describe('New Memberships', function () {

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        var login = new LoginPage();
        login.goTo();
        login.login("MattAutoTest", "MattAutoTest");
    });

    afterAll(function(){
        var ch = new ConsoleHomePage();
        ch.clickSignOut()
});

    it ('should process membership for new individual', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Members");

        expect(browser.getTitle()).toEqual('MemberSuite - Membership Overview');
        var op = new OverviewPage();
        op.do("Create a Member");

        expect(browser.getTitle()).toEqual('MemberSuite - Create a Member');
        var mcs = new MembershipCreateSelect();
        mcs.select("2");

        //expect(browser.getTitle()).toEqual('MemberSuite - Create an Individual - Enter  Information');
        var ci = new CreateAnIndividual();
        ci.enterBasicInfo("Matthew", "Christopher", "mchristopher+auto@membersuite.com");
        ci.clickSave();

        expect(browser.getTitle()).toEqual('MemberSuite - Create/Renew a Membership');
        var mcts = new MembershipCreateSelectType();
        mcts.clickContinue();

        expect(browser.getTitle()).toEqual('MemberSuite - Create/Renew a Membership');
        var mcao = new MembershipCreateAdditionalOptions();
        mcao.clickContinue();

        expect(browser.getTitle()).toEqual('MemberSuite - Create an Order');
        var co = new CreateAnOrder();
        co.clickProcessOrderBtn();

        var ind360 = new Individual360 ();
        ind360.waitForMessageBanner();

    });

});