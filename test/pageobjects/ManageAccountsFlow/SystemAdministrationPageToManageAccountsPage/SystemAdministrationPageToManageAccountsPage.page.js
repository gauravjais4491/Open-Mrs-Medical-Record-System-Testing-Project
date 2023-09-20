const Page = require('./page')

class SystemAdministrationPageToManageAccountsPage extends Page{
    open (){
        return super.open().click() 
    }
}
module.exports = new SystemAdministrationPageToManageAccountsPage()