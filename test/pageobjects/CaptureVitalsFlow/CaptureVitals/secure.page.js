class SecurePage{
    get flastAlert(){
        return $(`.dataTables_empty`)
    }
    get dataTablesInfo(){
        return $('#patient-search-results-table_info')
    }
    get flashNextPage(){
        return $(`#patient-search-results-table_next`)
    }
    get flashPatientStatus(){
        return $(`h1*=Is this the right patient?`)
    }
}
module.exports = new SecurePage()