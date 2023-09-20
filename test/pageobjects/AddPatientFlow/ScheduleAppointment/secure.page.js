const Page = require('./page');

class SecurePage extends Page {

    get flashAlert() {
        return $('li*=Infectious Disease (New Patient)');
    }
    // get notification(){
    //     return $(`[class="toast-item-close"]+p`);
    // }
    // async flashSavedNotification(expectedText) { 
    //     let NotificationText = null;
    //     await browser.waitUntil(async () => {
    //         NotificationText = await this.notification.getText()
    //         return NotificationText === expectedText
    //     },
    //     {
    //         timeout: 5000,
    //         timeoutMsg: 'Notification text did not match the expected text within the timeout',
    //     }
    //     );
    // }
}

module.exports = new SecurePage();
