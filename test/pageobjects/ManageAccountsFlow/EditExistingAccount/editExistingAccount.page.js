class EditExistingAccount {
    get search(){
        return $('//*[@id="list-accounts_filter"]/label/input')
    }
    get user(){
        return $(`[class="icon-pencil edit-action"]`)
    }
    async selectUser(){
        await this.user.click()
    }
    get personDetails(){
        return $(`//*[@class="adminui-account-person-details"]/i`)
    }
    get FamilyName(){
        return $(`#adminui-familyName-field`)
    }
    get GivenName(){
        return $(`#adminui-givenName-field`)
    }
    get Gender(){
        return $(`#adminui-gender-1-field`)
    }
    get cancelToSave(){
        return $('#adminui-person-cancel')
    }
    get saveEditPersonDetails(){
        return $(`#adminui-person-save`)
    }
    get userAccountDetails(){
        return $(`//*[@id="adminui-users"]/div[1]/div[1]/i`)
    }
    get requestAppointment(){
        return $(`//*[@id="adminui-users"]/div[1]/div[2]/table/tbody/tr[7]/td[1]/input`)
        
    }
    get saveUserAccountDetails(){
        return $(`//*[@id="adminui-users"]/div[1]/div[2]/div[1]/button[2]`)
        
    }
    get providerDetails(){
        return $(`//*[@id="adminui-providers"]/div[1]/div[1]/i`)
    }
    get identifierName(){
        return $(`//*[@id="adminui-providers"]/div[1]/div[2]/div[2]/table/tbody/tr/td/p/input`)
    }
    get saveProviderDetails(){
        return $(`//*[@id="adminui-providers"]/div[1]/div[2]/div/button[2]`)
    }
    async searchUser(user){
        await this.search.setValue(user);
    }
    async editPersonDetails(newGivenName, newFamilyName){
        await this.personDetails.click() 
        await this.GivenName.setValue(newGivenName) 
        await this.FamilyName.setValue(newFamilyName) 
        await this.Gender.click()
        // await this.cancelToSave.click() 
        await this.saveEditPersonDetails.click() 
    }
    async editUserAccountDetails(){
        await browser.pause(3000)

        await this.userAccountDetails.click() 

        await this.requestAppointment.click() 
        await this.saveUserAccountDetails.click() 
    }
    async editProviderDetails(newIdentifierName){
        await browser.pause(3000)
        await this.providerDetails.click()
        await this.identifierName.setValue(newIdentifierName)
        await this.saveProviderDetails.click() 
    }
}
module.exports = new EditExistingAccount()