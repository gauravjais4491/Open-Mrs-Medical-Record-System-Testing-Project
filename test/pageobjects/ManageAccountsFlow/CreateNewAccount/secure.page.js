class SecurePageForCreateNewAccount{
    get flashAlert(){
        return $(`h2*=Add New Account`)
    }
    get flashPasswordLessThanEightCharacter(){
        return $('span*=At least 8 character(s) are required')
    }
    get flashPasswordNotMatch(){
        return $(`td*=Passwords don't match`)
    }
    get savedNotification(){
    //     return $(`[class="toast-item-close"]+p`);
    // }
    // async flashSavedNotification(expectedText) { 
    //     let NotificationText = null;
    //     await browser.waitUntil(async () => {
    //         NotificationText = await this.savedNotification.getText()
    //         return NotificationText === expectedText
    //     },
    //     {
    //         timeout: 5000,
    //         timeoutMsg: 'Notification text did not match the expected text within the timeout',
    //     }
    //     );
    }
}
module.exports = new SecurePageForCreateNewAccount()