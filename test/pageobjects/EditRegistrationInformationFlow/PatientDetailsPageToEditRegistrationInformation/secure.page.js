class SecurePageForPatientDetailsPageToEditRegistrationInformation{
    get flashAlert(){
        return $(`h3*=General Actions`)
    }
}
module.exports = new SecurePageForPatientDetailsPageToEditRegistrationInformation()