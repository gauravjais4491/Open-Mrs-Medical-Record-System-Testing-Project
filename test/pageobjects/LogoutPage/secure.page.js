class SecurePageForLogoutPage{
    get flashAlert(){
        return $(`[class="w-auto"]`)
    }
}

module.exports = new SecurePageForLogoutPage();
