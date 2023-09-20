const BasePaths = require('../pageobjects/Package/package')

const [{ LoginPage }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePage }] = [BasePaths.getSecurePath()]



module.exports = class Login {
    static login = async () => {
            await LoginPage.open()
            await LoginPage.login('Gaurav', '@Gaurav123')
            await expect(SecurePageForHomePage.flashAlert).toBeExisting()
            await expect(SecurePageForHomePage.flashAlert).toHaveTextContaining('Logged in as Gaurav Jaiswal (Gaurav) at Registration Desk.')
            // await expect(SecurePageForHomePage.flashAlert).toHaveTextContaining('Logged in as Super User (admin) at Registration Desk.')
    }
}

