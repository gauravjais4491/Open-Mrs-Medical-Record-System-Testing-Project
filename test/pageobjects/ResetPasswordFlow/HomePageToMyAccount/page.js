module.exports = class Page {
    openMyAccount() {
        return $('//*[@id="user-account-menu"]/li/a')
    }
}