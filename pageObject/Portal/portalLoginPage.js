/**
 * Created by office on 5/2/16.
 */
var PortalLoginPage = function () {


    this.goTo = function (portalurl) {
        browser.ignoreSynchronization = true;
        browser.get(portalurl);
    };


    this.login = function (username, password) {

       
        var userNameInput = element(by.id('PageContent_tbLoginID'));
        userNameInput.clear().sendKeys(username);

        var passwordTextBox = element(by.id('PageContent_tbPassword'));
        passwordTextBox.clear().sendKeys(password);

        var loginToMemberSuite = element(by.id('PageContent_btnLogin'));
        loginToMemberSuite.click();


    };


};
module.exports = PortalLoginPage;
