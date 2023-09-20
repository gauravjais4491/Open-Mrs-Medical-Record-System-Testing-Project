
const Page = require("./page")
class HomePageToAddPatient extends Page{
    open() {
        return super.open().click() ;
    }
}
module.exports = new HomePageToAddPatient();