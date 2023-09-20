class SecurePage {
    get flashcalculatedBMI() {
        return $(`#calculated-bmi`)
    }
}

module.exports = new SecurePage()