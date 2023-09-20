
const Page = require('./page');


class ScheduleAppointment extends Page {
    open() {
        return super.open().click();
    }
    get AppointmentType() {
        return $(`#appointment-type`)
    }
    get SuggessionItem() {
        return $(`[class="ng-scope ng-binding"]`)
    }
    saveAppointment() {
        return $(`#save-button`)
    }
    get startVisit(){
        return $(`div*=Start Visit`)
    }
    get VisitConfirm(){
        return $(`#start-visit-with-visittype-confirm`)
    }
    
    async addAppointmentDetails(appointmentType) {
        await this.AppointmentType.setValue(appointmentType)
        await this.SuggessionItem.click()
        await this.saveAppointment().click()
    }
    async StartVisit(){
        await this.startVisit.click()
        await this.VisitConfirm.click() 
    }
}
module.exports = new ScheduleAppointment()