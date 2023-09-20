
const BasePaths = require('../pageobjects/Package/package')
const [{ before, after, GoToHomePage, Login, HomePageToFindSearchRecord, FindSeachRecords, PatientDetailsPageToEditRegistrationInformation, EditRegistration, Logout }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePageToFindSearchRecord, SecurePageForFindSearchRecords, SecurePageForPatientDetailsPageToEditRegistrationInformation, Notification }] = [BasePaths.getSecurePath()]


before(async () => {
    try {
        await Login.login()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/LoginInEditRegistration---->${error}.png`)
        throw error;
    }
});

describe('Edit Registration Information', () => {
    it('should go to search patient record', async () => {
        try {
            await HomePageToFindSearchRecord.goToPatientSearchRecord()
            await expect(SecurePageForHomePageToFindSearchRecord.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToFindSearchRecord.flashAlert).toHaveTextContaining('Find Patient Record')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/GoToSearchPatientRecord---->${error}.png`)
            throw error;
        }
    });

    it('should search patient', async () => {
        try {
            await FindSeachRecords.searchPatient("100HNY")
            await expect(SecurePageForFindSearchRecords.dataTablesInfo).toHaveTextContaining('Showing 1 to 1 of 1 entries')
            await FindSeachRecords.selectPatient()
            await expect(SecurePageForFindSearchRecords.flashAlert).toBeExisting()
            await expect(SecurePageForFindSearchRecords.flashAlert).toHaveTextContaining('Edit Registration Information')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/SearchPatientRecordInEditRegistration---->${error}.png`)
            throw error;
        }
    });

    it('should go to edit registration information', async () => {
        try {
            await PatientDetailsPageToEditRegistrationInformation.openEditRegistrationInformation()
            await expect(SecurePageForPatientDetailsPageToEditRegistrationInformation.flashAlert).toBeExisting()
            await expect(SecurePageForPatientDetailsPageToEditRegistrationInformation.flashAlert).toHaveTextContaining('General Actions')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/EditRegistrationInformation---->${error}.png`)
            throw error;
        }
    });

    it('should edit registration information of DemoGraphics', async () => {
        try {
            await EditRegistration.editDemographicsDetails('Noob', '', 'Hacker', '27')
            await Notification.flashNotification(`Saved changes in Demographics for: Noob Hacker`)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/EditRegistrationInformationOfDemoGraphics---->${error}.png`)
            throw error;
        }
    });

    it('should edit registration information of contact info', async () => {
        try {
            await EditRegistration.editContactInfo('a', 'a', '1')
            await Notification.flashNotification(`Saved changes in contact info for: Noob Hacker`)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/EditRegistrationInformationOfContactInfo---->${error}.png`)
            throw error;
        }
    })

    it('should edit registration information of relationship type', async () => {
        try {
            await EditRegistration.editRelationship('Child', 'Hacker')
            await Notification.flashNotification(`Saved changes in Relationships for: Noob Hacker`)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/EditRegistrationInformationOfRelationshipType---->${error}.png`)
            throw error;
        }
    })
});

after(async () => {
    try {
        await GoToHomePage.goToHomePage()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/GoToHomePageInEditRegistration---->${error}.png`)
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