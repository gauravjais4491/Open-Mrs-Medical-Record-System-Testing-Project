class LogoutPage{
    get logoutBtn(){
        return $(`[class="icon-signout small"]`)
    }
    async logout(){
        await this.logoutBtn.click() 
    }
}
module.exports = new LogoutPage();