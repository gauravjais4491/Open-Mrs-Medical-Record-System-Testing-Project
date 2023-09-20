const Page = require('./page')

class HomePageToFindSearchRecord extends Page{
    async goToPatientSearchRecord(){
        return super.openPatientSearchRecord().click() 
    }
}
module.exports = new HomePageToFindSearchRecord()