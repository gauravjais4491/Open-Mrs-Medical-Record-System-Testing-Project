class ChangePassword{
    get oldPassword(){
        return $('#oldPassword-field')
    }
    get newPassword(){
        return $('#newPassword-field')
    }
    get confirmPassword(){
        return $('#confirmPassword-field')
    }
    get saveBtn(){
        return $(`[class="confirm right"]`)
    }
    async changePassword(oldPassowrd, newPassword,confirmPassword){
        await this.oldPassword.setValue(oldPassowrd) 
        await this.newPassword.setValue(newPassword) 
        await this.confirmPassword.setValue(confirmPassword)
    }
    async saveChanges(){
        await this.saveBtn.click() 
    }
    
}
module.exports = new ChangePassword()