const Page = require('./page');
// const faker = require("@faker-js/faker")
class LoginPage extends Page {

    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get inputLocation() {
        return $("li*=Registration Desk")
    }

    get btnSubmit() {
        return $("#loginButton");
    }
    
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputLocation.click()
        await this.btnSubmit.click();
    }
    open() {
        return super.open();
    }
}

module.exports = new LoginPage();
