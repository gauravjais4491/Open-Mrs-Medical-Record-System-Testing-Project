class HomePage{
    get HomePage(){
        return $(`[class="icon-home small"]`)
    }

    async goToHomePage(){
        await this.HomePage.click()
    }
}
module.exports = new HomePage()