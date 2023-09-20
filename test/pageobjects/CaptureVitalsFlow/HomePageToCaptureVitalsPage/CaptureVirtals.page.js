const Page = require("./page")

class HomePageToCaptureVitals extends Page {
    open(){
        return super.open().click() 
    }
}
module.exports = new HomePageToCaptureVitals() 