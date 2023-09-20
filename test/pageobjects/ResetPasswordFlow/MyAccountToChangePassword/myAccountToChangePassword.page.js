const Page = require('./page')

class MyAccountToChangePassword extends Page{
    async openChangePassword(){
        return super.openChangePassword().click() 
    }
}
module.exports = new MyAccountToChangePassword()