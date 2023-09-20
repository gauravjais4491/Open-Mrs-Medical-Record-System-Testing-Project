class SecurePageForEditRegistration{
    get flashAlert(){
        return $('div*=Edit Registration Information')
    }
    get dataTablesInfo(){
        return $('#patient-search-results-table_info')
    }
}
module.exports = new SecurePageForEditRegistration()
