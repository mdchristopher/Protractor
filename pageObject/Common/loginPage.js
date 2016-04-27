var LoginPage = function () {


    this.goTo = function () {
        browser.ignoreSynchronization = true;
        browser.get('https://console.financial.membersuite.com/app/console/login');

    };


    this.login = function (username, password) {
        var userNameInput = element(by.id('ctl00_body_TextBox1'));
        userNameInput.sendKeys(username);

        var passwordTextBox = element(by.id('ctl00_body_TextBox2'));
        passwordTextBox.sendKeys(password);

        var loginToMemberSuite = element(by.id('ctl00_body_lb_Login'));
        loginToMemberSuite.click();


    };


};
module.exports = LoginPage;
