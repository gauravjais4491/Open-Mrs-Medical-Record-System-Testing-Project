const BasePaths = require('../pageobjects/Package/package')
const [{ before, after, GoToHomePage, Login, HomePageToSystemAdministrationPage, SystemAdministrationPageToManageAccountsPage, CreateNewAccount, Logout }] = [BasePaths.getPagePaths()]

const [{ SecurePageForHomePageToSystemAdministrationPage, SecurePageForSystemAdministrationPageToManageAccountsPage, SecurePageForCreateNewAccount, Notification }] = [BasePaths.getSecurePath()]



before(async () => {
    try {
        await Login.login()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/LoginInCreateAccount---->${error}.png`)
        throw error;
    }
});

describe("Manage Accounts Flow For Create an Account", () => {
    it("should go to home page to syatem administration page", async () => {
        try {
            await HomePageToSystemAdministrationPage.open();

            await expect(SecurePageForHomePageToSystemAdministrationPage.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToSystemAdministrationPage.flashAlert).toHaveTextContaining('System Administration')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/HomePageToSystemAdministrationPageInCreateAccount---->${error}.png`)
            throw error;
        }

    });

    it('should go to system adminintration page to manage account page', async () => {
        try {
            await SystemAdministrationPageToManageAccountsPage.open()

            await expect(SecurePageForSystemAdministrationPageToManageAccountsPage.flashAlert).toBeExisting()
            await expect(SecurePageForSystemAdministrationPageToManageAccountsPage.flashAlert).toHaveTextContaining('Manage Accounts')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/SystemAdminintrationPageToManageAccountPageInCreateAccount---->${error}.png`)
            throw error;
        }

    });

    it('should go add new account page', async () => {
        try {
            await CreateNewAccount.open()

            await expect(SecurePageForCreateNewAccount.flashAlert).toBeExisting()
            await expect(SecurePageForCreateNewAccount.flashAlert).toHaveTextContaining('Add New Account')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/GoAddNewAccountPage---->${error}.png`)
            throw error;
        }

    });

    it('should add person/admin details', async () => {
        try {
            await CreateNewAccount.addPersonDetails('Bumrah', 'BoomBoom')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/AddPersonDetails---->${error}.png`)
            throw error;
        }

    });

    it('should add User Details', async () => {
        try {
            await CreateNewAccount.addUserAccountDetails('BoomBoom', "@BoomBoom123", '@BoomBoom123')

            // await expect(SecurePageForCreateNewAccount.flashPasswordNotMatch).toBeExisting()
            // await expect(SecurePageForCreateNewAccount.flashPasswordNotMatch).toHaveTextContaining(`Passwords don't match`)

            // await expect(SecurePageForCreateNewAccount.flashPasswordLessThanEightCharacter).toBeExisting()
            // await expect(SecurePageForCreateNewAccount.flashPasswordLessThanEightCharacter).toHaveTextContaining(`At least 8 character(s) are required`)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/AddUserDetails---->${error}.png`)
            throw error;
        }

    });

    it('should add the capablity to the user account', async () => {
        try {
            await CreateNewAccount.addCapablitiesToUserAccount()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/AddCapablities---->${error}.png`)
            throw error;
        }

    });

    it('should add provider details', async () => {
        try {
            await CreateNewAccount.addProviderDetails("Noob", "Clinical Doctor")
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/addProviderDetails---->${error}.png`)
            throw error;
        }

    });

    it('should save details', async () => {
        try {
            await CreateNewAccount.saveDetailsBtn()
            await browser.pause(3000)
            await Notification.flashNotification("Account Saved Successfully")
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/saveDetailsInCreateAccount---->${error}.png`)
            throw error;
        }

    })
});

after(async () => {
    try {
        await GoToHomePage.goToHomePage()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/GoToHomePageInCreateAccount---->${error}.png`)
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