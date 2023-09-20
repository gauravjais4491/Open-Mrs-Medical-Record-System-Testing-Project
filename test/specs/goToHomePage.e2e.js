const BasePaths = require('../pageobjects/Package/package')

const [{ HomePage }] = [BasePaths.getPagePaths()];
const [{ SecurePageForHomePage }] = [BasePaths.getSecurePath()];



module.exports = class GoToHomePage {
    static async goToHomePage() {
        await HomePage.goToHomePage()
        await expect(SecurePageForHomePage.flashAlert).toHaveTextContaining('Logged in as Gaurav Jaiswal (Gaurav) at Registration Desk.')
    }
}