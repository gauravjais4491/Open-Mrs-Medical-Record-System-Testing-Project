
const BasePaths = require('../pageobjects/Package/package')
const [{ before, after, GoToHomePage, Login, HomePageToSystemAdministrationPage, SystemAdministrationPageToManageAccountsPage, EditExistingAccount, Logout }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePageToSystemAdministrationPage, SecurePageForSystemAdministrationPageToManageAccountsPage, SecurePageForEditExistingAccount, Notification }] = [BasePaths.getSecurePath()]




before(async () => {
    try {
        await Login.login()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/LoginInEditAnAccount---->${error}.png`)
        throw error;
    }
});

describe('Manage Accounts Flow For Edit an Account', () => {

    it("should go to home page to syatem administration page", async () => {
        try {
            await HomePageToSystemAdministrationPage.open();
            await expect(SecurePageForHomePageToSystemAdministrationPage.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToSystemAdministrationPage.flashAlert).toHaveTextContaining('System Administration')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/HomePageToSystemAdministrationPageInEditAccount---->${error}.png`)
            throw error;
        }

    });

    it('should go to system adminintration page to manage account page', async () => {
        try {
            await SystemAdministrationPageToManageAccountsPage.open()
            await expect(SecurePageForSystemAdministrationPageToManageAccountsPage.flashAlert).toBeExisting()
            await expect(SecurePageForSystemAdministrationPageToManageAccountsPage.flashAlert).toHaveTextContaining('Manage Accounts')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/SystemAdminintrationPageToManageAccountPageInEditAccountDetails---->${error}.png`)
            throw error;
        }

    });

    it('should select User', async () => {
        try {
            await EditExistingAccount.searchUser('Kuldeep Yadav')
            await EditExistingAccount.selectUser()
            await expect(SecurePageForEditExistingAccount.flashAlert).toBeExisting()
            await expect(SecurePageForEditExistingAccount.flashAlert).toHaveTextContaining('Edit Account')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/SelectUserInEditAccountDetails---->${error}.png`)
            throw error;
        }
    });

    it('should edit person details', async () => {
        try {
            await EditExistingAccount.editPersonDetails('Mayank', 'Wadhwani')
            await EditExistingAccount.editUserAccountDetails()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/EditPersonDetailsInEditAccountDetails---->${error}.png`)
            throw error;
        }
    });

    it('should edit user account details', async () => {
        try {
            await EditExistingAccount.editUserAccountDetails()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/EditUserDetailsInEditAccountDetails---->${error}.png`)
            throw error;
        }
    });

    it.skip('should edit provider details', async () => {
        try {
            await EditExistingAccount.editProviderDetails('Hacker')
            await Notification.flashNotification("Failed to Save")
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/EditProviderDetailsInEditAccountDetails---->${error}.png`)
            throw error;
        }

    });
});

after(async () => {
    try {
        await GoToHomePage.goToHomePage()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/GoToHomePageInEditAnAccount---->${error}.png`)
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