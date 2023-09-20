const BasePaths = require('../pageobjects/Package/package')

const [{ before, after, GoToHomePage, Login, HomePageToMyAccount, MyAccountToChangePassword, ChangePassword, Logout }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePageToMyAccount, SecurePageForMyAccountToChangePassword, Notification }] = [BasePaths.getSecurePath()]





before(async () => {
    try {
        await Login.login()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/LoginInResetPassword---->${error}.png`)
        throw error;
    }
});

describe('Reset Password', () => {
    it('should go to home page to my account', async () => {
        try {
            await HomePageToMyAccount.openMyAccount()
            await expect(SecurePageForHomePageToMyAccount.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToMyAccount.flashAlert).toHaveTextContaining('My Account')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/GoToHomePageToMyAccount---->${error}.png`)
            throw error;
        }
    });

    it('should go to my account to change password', async () => {
        try {
            await MyAccountToChangePassword.openChangePassword()
            await expect(SecurePageForMyAccountToChangePassword.flashAlert).toBeExisting()
            await expect(SecurePageForMyAccountToChangePassword.flashAlert).toHaveTextContaining('Change Password')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/GoToMyAccountToChangePassword---->${error}.png`)
            throw error;
        }
    });

    it('should reset passowrd', async () => {
        try {
            await ChangePassword.changePassword('@Gaurav123', 'Gaurav123', 'Gaurav123')
            await ChangePassword.saveChanges()
            await Notification.flashNotification('Password Changed Successfully')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ResetPassword---->${error}.png`)
            throw error;
        }
    });

});

after(async () => {
    try {
        await GoToHomePage.goToHomePage()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/GoToHomePageInResetPassword---->${error}.png`)
        throw error;
    }
});

after(async () => {
    try {
        await Logout.logout()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/LogoutInCaptureVitals---->${error}.png`)
        throw error;
    }
})