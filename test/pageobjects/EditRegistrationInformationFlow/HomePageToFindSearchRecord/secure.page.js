class SecurePageForHomePageToFindSearchRecord{
    get flashAlert(){
        return $(`//*[@id='content']/h2`)
    }
}

module.exports = new SecurePageForHomePageToFindSearchRecord()