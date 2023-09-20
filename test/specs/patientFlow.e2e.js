const BasePaths = require('../pageobjects/Package/package')

const [{ before, after, GoToHomePage, Login, HomePageToAddPatient, AddPatient, ScheduleAppointment, Logout }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePageToAddPatient, SecurePageForSechduleAppoinment, Notification }] = [BasePaths.getSecurePath()]




before(async () => {
    try {
        await Login.login()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/LoginInPatientFlow---->${error}.png`)
        throw error;
    }
});

describe("Add Patient Flow", () => {
    it("should go to add patient details page", async () => {
        try {
            await HomePageToAddPatient.open()
            await expect(SecurePageForHomePageToAddPatient.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToAddPatient.flashAlert).toHaveTextContaining('Register a patient');
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/GoTOAddPatientDetailsPage---->${error}.png`)
            throw error;
        }
    });

    it('should add patient details', async () => {
        try {
            await AddPatient.addDetails('Gaurav', 'Kumar', 'Jaiswal', '12', 'February', '2001', 'TestVagrant Technology', 'Near Mi Showroom', 'Banglore', 'Karnataka', 'India', '560008', '1234567890', "Noob")
            await Notification.flashNotification("Created Patient Record: Gaurav Kumar Jaiswal")
            await browser.pause(2000)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/AddPatientDetailsInPatientFlow---->${error}.png`)
            throw error;
        }

    });

    it("should schedule appointment", async () => {
        try {
            await ScheduleAppointment.open()
            await ScheduleAppointment.addAppointmentDetails('Infectious Disease (New Patient)')
            await expect(SecurePageForSechduleAppoinment.flashAlert).toBeExisting()
            await expect(SecurePageForSechduleAppoinment.flashAlert).toHaveTextContaining('Infectious Disease (New Patient)')
            await ScheduleAppointment.StartVisit()
            await browser.pause(3000)
            await Notification.flashNotification("Gaurav Kumar Jaiswal started a visit")
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ScheduleAppointment---->${error}.png`)
            throw error;
        }

    });
});

after(async () => {
    try {
        await GoToHomePage.goToHomePage()
    } catch (error) {
        await browser.saveScreenshot(`./Screenshots/GoToHomePageInPatientFlow---->${error}.png`)
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