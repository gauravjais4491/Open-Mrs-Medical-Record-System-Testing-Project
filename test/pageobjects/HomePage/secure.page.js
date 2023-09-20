class SecurePageForHomePage {

    get flashAlert() {
        return $('h4*=Logged in as Gaurav Jaiswal (Gaurav) at Registration Desk.');
        // return $('h4*=Logged in as Super User (admin) at Registration Desk.');
    }
}

module.exports = new SecurePageForHomePage();
