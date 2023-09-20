
// const Page = require('./page');

class SecurePage{

    get flashAlert() {
        return $('h2*=Capture Vitals for Patient');
    }
}

module.exports = new SecurePage();