
const Page = require('./page')

class PatientDetailsPageToEditRegistrationInformation extends Page{
    openEditRegistrationInformation(){
        return super.open().click()
    }
}
module.exports = new PatientDetailsPageToEditRegistrationInformation()