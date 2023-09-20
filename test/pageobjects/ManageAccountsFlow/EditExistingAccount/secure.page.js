class SecurePageForEditExistingAccount{
    get flashAlert(){
        return $(`h2*=Edit Account`)
    }
    // get errorNotification(){
    //     return $(`[class="toast-item-close"]+p`)
    // }
    // async flashErrorNotification(expectedText){
    //     let NotificationText = null;
    //     await browser.waitUntil(async () => {
    //         NotificationText = await  this.errorNotification.getText()
    //         return NotificationText === expectedText
    //     },
    //     {
    //         timeout : 5000,
    //         timeoutMsg : 'Notification text did not match the expected text within the timeout',
    //     }
    //     )
    // }
}
module.exports = new SecurePageForEditExistingAccount()