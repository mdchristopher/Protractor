var LoginPage = function () {

    this.userNameInput = element(by.id('ctl00_body_TextBox1'));
    this.passwordTextBox = element(by.id('ctl00_body_TextBox2'));
    this.keepMeLoggedIn = element(by.id('ctl00_body_CheckBox3'));
    this.loginToMemberSuite = element(by.id('ctl00_body_lb_Login'));

    this.goTo = function () {
        browser.ignoreSynchronization = true;
        browser.get('https://console.financial.membersuite.com/app/console/login');

    };
    this.login = function (username, password) {

        this.userNameInput.sendKeys(username);
        this.passwordTextBox.sendKeys(password);
        this.loginToMemberSuite.click();
    };


};
module.exports = LoginPage;
