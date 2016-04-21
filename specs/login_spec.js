var LoginPage = require('../pageObject/loginPage.js');
var LoginPage = require('../pageObject/consoleHomePage.js');
var LoginPage = require('../pageObject/Events/eventsOverview.js');

describe('Console Login Page', function () {
   
    it('should return the correct page title', function () {
        var login = new LoginPage();
        login.goTo();
        expect(browser.getTitle()).toEqual('MemberSuite - Login to MemberSuite');
    });
    
    it('should allow a user with valid credentials to login to the system', function (){
        var login = new LoginPage(); 
        login.goTo(); 
        login.login("MattAutoTest", "MattAutoTest");
        expect(browser.getTitle()).toEqual('MemberSuite - QA Test Automation Home');
    });

    //it('should something something', function () {
    //    var login = new LoginPage();
     //   login.goTo();
       // login.login("MattAutoTest", "MattAutoTest");
        //expect(browser.getTitle()).toEqual('MemberSuite - QA Test Automation Home');

     //   var consoleHome = new ConsoleHomePage();
      //  consoleHome.goToModule('Events');

      //  var eventsOverview = new EventsOverview();
      //  eventsOverview.clickCreateAnEvent();

   // });

});