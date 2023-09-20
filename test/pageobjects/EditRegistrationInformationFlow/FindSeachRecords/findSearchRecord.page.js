class FindSeachRecords{
    get patientSearch(){
        return $('#patient-search')
    }
    get patient(){
        return $('//*[@id="patient-search-results-table"]/tbody/tr/td[1]')
    }
    
    // patient-search-results-table_info
    async searchPatient(patientId){
        await this.patientSearch.setValue(patientId) 
    }
    async selectPatient(){
        await this.patient.click() 
    }
}

module.exports = new FindSeachRecords()