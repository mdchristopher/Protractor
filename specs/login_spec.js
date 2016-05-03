var LoginPage = require('../pageObject/Common/loginPage.js');

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

});