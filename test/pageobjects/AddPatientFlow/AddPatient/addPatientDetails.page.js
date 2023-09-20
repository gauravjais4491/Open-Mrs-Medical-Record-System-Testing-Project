class AddPatient {
    notification(){
        return $(`[class="toast-item-close"]+p`);
    }
    get NextButton() {
        return $(`.fas.fa-chevron-right`)
    }
    get FirstName() {
        return $(`[name="givenName"]`)
    }
    get MiddleName() {
        return $(`[name="middleName"]`)
    }
    get FamilyName() {
        return $(`[name="familyName"]`)
    }
    get Gender() {
        return $(`option*=Male`)
    }
    get BirthdayDate() {
        return $("#birthdateDay-field")
    }
    get BirthdayMonth() {
        return $(`#birthdateMonth-field`)
    }
    get BirthdayYear() {
        return $(`#birthdateYear-field`)
    }
    get Address1() {
        return $(`#address1`)
    }
    get Address2() {
        return $(`#address2`)
    }
    get City() {
        return $(`#cityVillage`)
    }
    get State() {
        return $(`#stateProvince`)
    }
    get Country() {
        return $(`#country`)
    }
    get PostalCode() {
        return $(`#postalCode`)
    }
    get PhoneNumber(){
        return $(`[name="phoneNumber"]`)
    }
    get RelationshipType(){
        return $(`#relationship_type`)
    }
    get PersonName(){
        return $(`[class="person-typeahead ng-pristine ng-untouched ng-valid ng-empty"]`)
    }
    get Confirm(){
        return $(`#submit`)
    }
    get CancelSubmission(){
        return $(`#cancelSubmission`)
    }

    async addDetails(firstName, middleName, familyName, birthdateDate, birthdateMonth, birthdateYear, address1, address2, city, state, country, postalcode, phoneNumber, personName) {
        await this.FirstName.setValue(firstName);
        await this.MiddleName.setValue(middleName);
        await this.FamilyName.setValue(familyName);
        await this.NextButton.click()

        await this.Gender.click()
        await this.NextButton.click()

        await this.BirthdayDate.setValue(birthdateDate)
        await this.BirthdayMonth.click()
        await this.BirthdayMonth.selectByVisibleText(birthdateMonth)
        await this.BirthdayYear.setValue(birthdateYear)
        await this.NextButton.click()

        await this.Address1.setValue(address1)
        await this.Address2.setValue(address2)
        await this.City.setValue(city)
        await this.State.setValue(state)
        await this.Country.setValue(country) 
        await this.PostalCode.setValue(postalcode)
        await this.NextButton.click()

        await this.PhoneNumber.setValue(phoneNumber) 
        await this.NextButton.click()

        await this.RelationshipType.click()
        await this.RelationshipType.selectByVisibleText("Doctor") 
        await this.PersonName.setValue(personName) 
        await this.NextButton.click()

        await this.Confirm.click() 


    }
}

module.exports = new AddPatient()