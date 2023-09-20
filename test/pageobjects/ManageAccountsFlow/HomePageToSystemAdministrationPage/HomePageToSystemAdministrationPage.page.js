const Page = require('./page')

class HomePageToSystemAdministrationPage extends Page{
    open(){
        return super.open().click() 
    }
}
module.exports = new HomePageToSystemAdministrationPage()