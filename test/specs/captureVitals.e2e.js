// Dcumentation Link: https://docs.google.com/spreadsheets/d/1MPYygVpzb01u_9VDY0nupzhfka7T4z5h_XyDx3HgtFk/edit#gid=0


const BasePaths = require('../pageobjects/Package/package')

const [{ before, after, GoToHomePage, Login, HomePageToCaptureVitals, CaptureVirtals, VitalsDetails, Logout }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePageToCaptureVitals, SecurePageForCaptureVitals, SecurePageForVitalsDetails }] = [BasePaths.getSecurePath()]


before(async () => {
    try {
        await Login.login()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/LoginInCaptureVitals---->${error}.png`)
        throw error;
    }
});


describe("Capture Vitals Flow", async () => {
    it("should go to capture vitals page", async () => {
        try {
            await HomePageToCaptureVitals.open()
            await expect(SecurePageForHomePageToCaptureVitals.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToCaptureVitals.flashAlert).toHaveTextContaining('Capture Vitals for Patient')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/HomePageToCaptureVitals---->${error}.png`)
            throw error;
        }

    });

    it.skip("should search Patient by name or id and should not match the result", async () => {
        await CaptureVirtals.captureVirtals("Gaurav")

        await expect(SecurePageForCaptureVitals.patientSearchResults).toBeExisting()

        await expect(SecurePageForCaptureVitals.flastAlert).toBeExisting()
        await expect(SecurePageForCaptureVitals.flastAlert).toHaveTextContaining('No matching records found')
    });

    it('should search Patient by name or id and should match the result', async () => {
        try {
            await CaptureVirtals.captureVirtals("100HM1")
            await expect(SecurePageForCaptureVitals.dataTablesInfo).toHaveTextContaining('Showing 1 to 1 of 1 entries')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/SearchPatient---->${error}.png`)
            throw error;
        }
    });

    it.skip("should test if patient with same name is more than 15", async () => {

        await expect(SecurePageForCaptureVitals.flashNextPage).toBeExisting()
        await expect(SecurePageForCaptureVitals.flashNextPage).toHaveTextContaining('Next')

        await SecurePageForCaptureVitals.flashNextPage.click()
    });

    it("should test Patient Status", async () => {
        try {
            await CaptureVirtals.SelectPatient()

            await expect(SecurePageForCaptureVitals.flashPatientStatus).toBeExisting()
            await expect(SecurePageForCaptureVitals.flashPatientStatus).toHaveTextContaining("Is this the right patient?");
            await CaptureVirtals.confirmRecord()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/PatientStatus---->${error}.png`)
            throw error;
        }

    });

    it("should test calculated BMI", async () => {
        try {
            await VitalsDetails.calculateBMI('15', "85")

            await expect(SecurePageForVitalsDetails.flashcalculatedBMI).toBeExisting()
            await expect(SecurePageForVitalsDetails.flashcalculatedBMI).toHaveTextContaining("3777.8")

            await VitalsDetails.addVitalsDetails('34', '120', '90', '123', '123', '90')

            // await Notification.flashNotification(`Entered Vitals for Gaurav Kumar Jaiswal`)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/calculateBMI---->${error}.png`)
            throw error;
        }

    });

});

after(async () => {
    try {
        await GoToHomePage.goToHomePage()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/GoToHomePageInCaptureVitals---->${error}.png`)
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
