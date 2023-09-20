const Page = require('./page')

class CreateNewAccount extends Page {
    get adminFamilyName() {
        return $(`#adminui-familyName-field`)
    }
    get adminGivenName() {
        return $(`#adminui-givenName-field`)
    }

    // ForMale
    get adminGenderMale() {
        return $(`#adminui-gender-0-field`)
    }

    // ForFemale
    get adminGenderFemale() {
        return $(`#adminui-gender-1-field`)
    }

    get addUserAccount() {
        return $(`#adminui-addUserAccount`)
    }
    get userName() {
        return $(`#adminui-username-field`)
    }
    get privilegeLevel() {
        return $(`#adminui-privilegeLevel-field`)
    }
    get password() {
        return $(`#adminui-password-field`)
    }
    get confirmPassword() {
        return $(`#adminui-confirmPassword-field`)
    }
    get administersSystem() {
        return $(`[id="adminui-capabilities-Application: Administers System"]`)
    }
    get configuresForms() {
        return $(`[id="adminui-capabilities-Application: Configures Forms"]`)
    }
    get editsExistingEncounters() {
        return $(`[id="adminui-capabilities-Application: Edits Existing Encounters"]`)
    }
    get entersVitals(){
        return $(`[id="adminui-capabilities-Application: Enters Vitals"]`)
    }
    get managesAtlas(){
        return $(`[id="adminui-capabilities-Application: Manages Atlas"]`)
    }
    get recordsPatients(){
        return $(`[id="adminui-capabilities-Application: Records Allergies"]`)
    }
    get requestsAppointments(){
        return $(`[id="adminui-capabilities-Application: Requests Appointments"]`)
    }
    get schedulesAppointments(){
        return $(`[id="adminui-capabilities-Application: Schedules Appointments"]`)
    }
    get usesCaptureVitalsApp(){
        return $(`[id="adminui-capabilities-Application: Uses Capture Vitals App"]`)
    }
    get writesClinicalNotes(){
        return $(`[id="adminui-capabilities-Application: Writes Clinical Notes"]`)
    }
    get configuresAppointmentScheduling(){
        return $(`[id="adminui-capabilities-Application: Configures Appointment Scheduling"]`)
    }
    get configuresMetadata(){
        return $(`[id="adminui-capabilities-Application: Configures Metadata"]`)
    }
    get enstersADTEvent(){
        return $(`[id="adminui-capabilities-Application: Enters ADT Events"]`)
    }
    get hasSuperUserPrivileges(){
        return $(`[id="adminui-capabilities-Application: Has Super User Privileges"]`)
    }
    get managesProviderSchedules(){
        return $(`[id="adminui-capabilities-Application: Manages Provider Schedules"]`)
    }
    get registersPatients(){
        return $(`[id="adminui-capabilities-Application: Registers Patients"]`)
    }
    get schedulesAndOverbooksAppointments(){
        return $(`[id="adminui-capabilities-Application: Schedules And Overbooks Appointments"]`)
    }
    get seesAppointmentSchedule(){
        return $(`[id="adminui-capabilities-Application: Sees Appointment Schedule"]`)
    }
    get usesPatientSummary(){
        return $(`[id="adminui-capabilities-Application: Uses Patient Summary"]`)
    }
    get providerDetails(){
        return $(`#adminui-addProviderAccount`)
    }
    get identifer(){
        return $(`#adminui-identifier-field`)
    }
    get providerRole(){
        return $(`#adminui-providerRole-field`)
    }
    get saveDetails(){
        return $(`#save-button`)
    }

    open() {
        return super.open().click()
    }

    async addPersonDetails(familyName, givenName) {
        await this.adminFamilyName.setValue(familyName)
        await this.adminGivenName.setValue(givenName)
        await this.adminGenderMale.click()
    }
    async addUserAccountDetails(givenName, password, confirmPassword) {
        await this.addUserAccount.click()

        await this.userName.setValue(givenName)

        await this.privilegeLevel.click()
        await this.privilegeLevel.selectByVisibleText('Full')

        await this.password.setValue(password)
        await this.confirmPassword.setValue(confirmPassword)

    }
    async addCapablitiesToUserAccount(){
        await this.administersSystem.click() 
        await this.configuresForms.click() 
        await this.editsExistingEncounters.click() 
        await this.entersVitals.click() 
        await this.managesAtlas.click() 
        await this.recordsPatients.click() 
        await this.requestsAppointments.click() 
        await this.schedulesAppointments.click() 
        await this.usesCaptureVitalsApp.click() 
        await this.writesClinicalNotes.click() 
        await this.configuresAppointmentScheduling.click() 
        await this.configuresMetadata.click() 
        await this.enstersADTEvent.click() 
        await this.hasSuperUserPrivileges.click() 
        await this.managesProviderSchedules.click() 
        await this.registersPatients.click() 
        await this.schedulesAndOverbooksAppointments.click() 
        await this.seesAppointmentSchedule.click() 
        await this.usesPatientSummary.click()  
    }
    async addProviderDetails(idenfier){
        await this.providerDetails.click()

        await this.identifer.setValue(idenfier) 
        await this.providerRole.click()
        await this.providerRole.selectByVisibleText('Clinical Doctor') 

    }
    async saveDetailsBtn(){
        await this.saveDetails.click() 
    }
}
module.exports = new CreateNewAccount()