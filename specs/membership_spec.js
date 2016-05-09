var LoginPage = require('../pageObject/Common/loginPage.js');
var ConsoleHomePage = require('../pageObject/Common/consoleHomePage.js');
var OverviewPage = require('../pageObject/Common/overviewPage.js');
var MembershipCreateSelect = require('../pageObject/Membership/membershipCreateSelect.js');
var CreateAnIndividual = require('../pageObject/CRM/createAnIndividual.js');
var MembershipCreateSelectType = require('../pageObject/Membership/membershipCreateSelectType.js');
var MembershipCreateAdditionalOptions = require('../pageObject/Membership/membershipCreateAdditionalOptions.js');
var CreateAnOrder = require('../pageObject/Orders/createAnOrder.js');
var Individual360 = require('../pageObject/CRM/individual360');

describe('New Memberships', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();
        var login = new LoginPage();
        login.goTo();
        login.login("MattAutoTest", "MattAutoTest");
    });

    /*
    afterAll(function(){
        var ch = new ConsoleHomePage();
        ch.clickSignOut();
        browser.manage().deleteAllCookies();
    });
     */
    it ('should process membership for new individual', function () {
        var ch = new ConsoleHomePage();
        ch.goToModule("Members");
        var op = new OverviewPage();
        op.do("Create a Member");
        var mcs = new MembershipCreateSelect();
        mcs.select("2");
        var ci = new CreateAnIndividual();
        ci.enterBasicInfo("Matthew", "Christopher", "mchristopher+auto@membersuite.com");
        ci.clickSave();
        var mcts = new MembershipCreateSelectType();
        mcts.clickContinue();
        var mcao = new MembershipCreateAdditionalOptions();
        mcao.clickContinue();
        var co = new CreateAnOrder();
        co.paymentType("Credit Card");
        co.creditCardPayment("4111111111111111", "June", "2017", "123", false);
        co.processOrder();
        var ind360 = new Individual360 ();
        ind360.waitForMessageBanner();
        ind360.messageBannerContains("successfull");
    });

});