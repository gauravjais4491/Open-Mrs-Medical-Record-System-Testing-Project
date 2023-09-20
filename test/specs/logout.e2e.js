const BasePaths = require('../pageobjects/Package/package')

const [{ LogoutPage }] = [BasePaths.getPagePaths()]
const [{ SecurePageForLogoutPage }] = [BasePaths.getSecurePath()]





module.exports = class Logout {
    static logout = async () => {
        await LogoutPage.logout()
        await expect(SecurePageForLogoutPage.flashAlert).toBeExisting()
        await expect(SecurePageForLogoutPage.flashAlert).toHaveTextContaining("LOGIN")
    }
}