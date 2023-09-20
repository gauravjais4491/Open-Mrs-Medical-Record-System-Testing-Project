class EditRegistration {
    get demographicsDetails() {
        return $('#demographics-edit-link')
    }
    get givenName() {
        return $(`[name="givenName"]`)
    }
    get middleName() {
        return $(`[name="middleName"]`)
    }
    get familyName() {
        return $(`[name="familyName"]`)
    }
    get birthdayDate() {
        return $(`#birthdateDay-field`)
    }
    get nextBtn() {
        return $(`#next-button`)
    }
    get registrationSubmit() {
        return $('#registration-submit')
    }
    get relationship() {
        return $(`#relationships-info-edit-link`)
    }
    get relationshipType(){
        return $('#relationship_type')
    }
    get relationshipPersonName(){
        return $(`[class="person-typeahead ng-pristine ng-untouched ng-valid ng-empty"]`)
    }
    get contactInfo(){
        return $('#contactInfo-edit-link')
    }
    get address1() {
        return $(`#address1`)
    }
    get address2() {
        return $(`#address2`)
    }
    get phoneNumber(){
        return $(`[name="phoneNumber"]`)
    }
    async editDemographicsDetails(newGivenName, newMiddleName, newFamilyName, newBirthdayDate) {
        await this.demographicsDetails.click()
        await this.givenName.setValue(newGivenName)
        await this.middleName.setValue(newMiddleName)
        await this.familyName.setValue(newFamilyName)
        await this.nextBtn.click()
        await this.nextBtn.click()
        await this.birthdayDate.setValue(newBirthdayDate)
        await this.nextBtn.click()
        await this.registrationSubmit.click()
    }
    async editContactInfo(address1, address2, phoneNumber) {
        await this.contactInfo.click()
        await this.address1.setValue(address1)
        await this.address1.setValue(address2)
        await this.nextBtn.click() 
        await this.phoneNumber.setValue(phoneNumber)
        await this.nextBtn.click()
        await this.registrationSubmit.click()
    }
    async editRelationship(relationshipType,PersonName){
        await this.relationship.click();
        await this.relationshipType.click()
        await this.relationshipType.selectByVisibleText(relationshipType)
        await this.relationshipPersonName.setValue(PersonName) 
        await this.nextBtn.click()
        await this.registrationSubmit.click() 
    }
}
module.exports = new EditRegistration()