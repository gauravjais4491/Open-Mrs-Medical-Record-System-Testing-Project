class VitalDetails {
    get nextButton() {
        return $(`#next-button`)
    }
    get height() {
        return $(`#w8`)
    }
    get weight() {
        return $(`#w10`)
    }
    get temperature() {
        return $(`#w12`)
    }
    get pulse() {
        return $(`#w14`)
    }
    get respiratoryRate() {
        return $(`#w16`)
    }
    get bloodPressureSystolic() {
        return $(`#w18`)
    }
    get bloodPreesureDiastolic() {
        return $(`#w20`)
    }
    get bloodOxygen() {
        return $(`#w22`)
    }
    get submitBtn() {
        return $(`button*=Save`)
    }

    async calculateBMI(height, weight) {
        await this.height.setValue(height)
        await this.nextButton.click()

        await this.weight.setValue(weight)
        await this.nextButton.click()
    }
    async addVitalsDetails(temperature, pulse, respiratoryRate, bloodPressureSystolic, bloodPreesureDiastolic, bloodOxygen) {
        await this.nextButton.click()
        
        await this.temperature.setValue(temperature)
        await this.nextButton.click()

        await this.pulse.setValue(pulse)
        await this.nextButton.click()

        await this.respiratoryRate.setValue(respiratoryRate)
        await this.nextButton.click()

        await this.bloodPressureSystolic.setValue(bloodPressureSystolic)

        await this.bloodPreesureDiastolic.setValue(bloodPreesureDiastolic)
        await this.nextButton.click()

        await this.bloodOxygen.setValue(bloodOxygen)
        await this.nextButton.click()

        await this.submitBtn.click()
    }
}
module.exports = new VitalDetails()