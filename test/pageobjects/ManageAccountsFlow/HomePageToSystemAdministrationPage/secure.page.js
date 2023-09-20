class SecurePageForHomePageToSystemAdministrationPage{
    get flashAlert(){
        return $(`#breadcrumbs`)
    }
}
module.exports = new SecurePageForHomePageToSystemAdministrationPage()