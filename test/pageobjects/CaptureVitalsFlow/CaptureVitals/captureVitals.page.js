class CaptureVirtals {
    get searchText() {
        return $(`.form-control`)
    }
    get PatientStatus(){
        return $(`//*[@id="patient-search-results-table"]/tbody/tr/td[1]`)
    }
    get RecordConfirmation(){
        return $(`#coreapps-vitals-confirm`)
    }

    async captureVirtals(searchText1) {
        await this.searchText.setValue(searchText1)
    }
    async SelectPatient(){
        await this.PatientStatus.click() 
    }
    async confirmRecord(){
        await this.RecordConfirmation.click() 
    }
}
module.exports = new CaptureVirtals()