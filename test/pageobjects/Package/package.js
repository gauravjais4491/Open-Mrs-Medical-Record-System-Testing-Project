class BasePaths {
    static getPagePaths() {
        return {
            GoToHomePage: require('../../specs/goToHomePage.e2e'),
            before: require('mocha').before,
            after: require('mocha').after,
            Login: require('../../specs/login.e2e'),
            LogoutPage : require(`../LogoutPage/logout.page`),
            LoginPage: require('../Login/login.page'),
            HomePage: require('../HomePage/home.page'),
            HomePageToAddPatient: require("../AddPatientFlow/HomePageToAddPatient/goToPatientDetails.page"),
            AddPatient: require("../AddPatientFlow/AddPatient/addPatientDetails.page"),
            ScheduleAppointment: require("../AddPatientFlow/ScheduleAppointment/scheduleAppointment.page"),
            HomePageToCaptureVitals: require("../CaptureVitalsFlow/HomePageToCaptureVitalsPage/CaptureVirtals.page"),
            CaptureVirtals: require('../CaptureVitalsFlow/CaptureVitals/captureVitals.page'),
            VitalsDetails: require('../CaptureVitalsFlow/VitalDetails/vitalDetails.page'),
            HomePageToSystemAdministrationPage: require('../ManageAccountsFlow/HomePageToSystemAdministrationPage/HomePageToSystemAdministrationPage.page'),
            SystemAdministrationPageToManageAccountsPage: require('../ManageAccountsFlow/SystemAdministrationPageToManageAccountsPage/SystemAdministrationPageToManageAccountsPage.page'),
            CreateNewAccount: require('../ManageAccountsFlow/CreateNewAccount/createNewAccount.page'),
            EditExistingAccount: require('../ManageAccountsFlow/EditExistingAccount/editExistingAccount.page'),
            HomePageToMyAccount: require('../ResetPasswordFlow/HomePageToMyAccount/homePageToMyAccount.page.'),
            MyAccountToChangePassword: require('../ResetPasswordFlow/MyAccountToChangePassword/myAccountToChangePassword.page'), ChangePassword: require('../ResetPasswordFlow/ChangePassword/changePassword.page'),
            HomePageToFindSearchRecord: require('../EditRegistrationInformationFlow/HomePageToFindSearchRecord/homePageToFindPatientRecord.page'),
            FindSeachRecords: require('../EditRegistrationInformationFlow/FindSeachRecords/findSearchRecord.page'),
            PatientDetailsPageToEditRegistrationInformation: require('../EditRegistrationInformationFlow/PatientDetailsPageToEditRegistrationInformation/patientDetailsPageToEditRegistrationInformation.page'),
            EditRegistration: require('../EditRegistrationInformationFlow/EditRegistration/editRegistration.page'),
            Logout : require('../../specs/logout.e2e')
        }
    }
    static getSecurePath() {
        return {
            Notification: require('../Notification/notification'),
            SecurePageForHomePage: require('../HomePage/secure.page'),
            SecurePageForHomePageToAddPatient: require("../AddPatientFlow/HomePageToAddPatient/secure.page"),
            SecurePageForAddPatient: require('../AddPatientFlow/AddPatient/secure.page'),
            SecurePageForSechduleAppoinment: require("../AddPatientFlow/ScheduleAppointment/secure.page"),
            SecurePageForHomePageToCaptureVitals: require("../CaptureVitalsFlow/HomePageToCaptureVitalsPage/secure.page"),
            SecurePageForCaptureVitals: require('../CaptureVitalsFlow/CaptureVitals/secure.page'),
            SecurePageForVitalsDetails: require('../CaptureVitalsFlow/VitalDetails/secure.page'),
            SecurePageForHomePageToSystemAdministrationPage: require('../ManageAccountsFlow/HomePageToSystemAdministrationPage/secure.page'),
            SecurePageForCreateNewAccount: require('../ManageAccountsFlow/CreateNewAccount/secure.page'),
            SecurePageForSystemAdministrationPageToManageAccountsPage: require('../ManageAccountsFlow/SystemAdministrationPageToManageAccountsPage/secure.page'),
            SecurePageForEditExistingAccount: require(`../ManageAccountsFlow/EditExistingAccount/secure.page`),
            SecurePageForHomePageToMyAccount: require('../ResetPasswordFlow/HomePageToMyAccount/secure.page'),
            SecurePageForMyAccountToChangePassword: require('../ResetPasswordFlow/MyAccountToChangePassword/secure.page'),
            SecurePageForHomePageToFindSearchRecord: require('../EditRegistrationInformationFlow/HomePageToFindSearchRecord/secure.page'),
            SecurePageForFindSearchRecords: require('../EditRegistrationInformationFlow/FindSeachRecords/secure.page'),
            SecurePageForPatientDetailsPageToEditRegistrationInformation: require('../EditRegistrationInformationFlow/PatientDetailsPageToEditRegistrationInformation/secure.page'),
            SecurePageForLogoutPage : require('../LogoutPage/secure.page')
        }
    }
}
module.exports = BasePaths;