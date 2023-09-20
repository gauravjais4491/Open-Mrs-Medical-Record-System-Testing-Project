class SecurePageForHomePageToMyAccount{
    get flashAlert(){
        return $(`#breadcrumbs`)
    }
}
module.exports = new SecurePageForHomePageToMyAccount()