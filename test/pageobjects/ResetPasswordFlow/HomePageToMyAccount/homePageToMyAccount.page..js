const Page = require('./page')

class HomePageToMyAccount extends Page{
    get myAccount() {
        return $(`[class="nav-item identifier"]`)
    }
    async openMyAccount(){
        await browser.pause(1000)
        await this.myAccount.click() 
        return super.openMyAccount().click() 
    }
}
module.exports = new HomePageToMyAccount()