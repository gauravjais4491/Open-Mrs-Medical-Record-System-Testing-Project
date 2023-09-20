class Notification {
    get notification() {
        return $(`[class="toast-item-close"]+p`);
    }
    async flashNotification(expectedText) {
        let NotificationText = null;
        await browser.waitUntil(async () => {
            NotificationText = await this.notification.getText()
            return NotificationText === expectedText
        },
        {
            timeout: 5000,
            timeoutMsg: 'Notification text did not match the expected text within the timeout',
        }
        );

    }
}
module.exports = new Notification()