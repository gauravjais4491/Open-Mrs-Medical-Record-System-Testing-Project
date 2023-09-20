const Page = require('./page');

class SecurePage extends Page {

    get flashAlert() {
        return $('h2*=Register a patient');
    }
}

module.exports = new SecurePage();
