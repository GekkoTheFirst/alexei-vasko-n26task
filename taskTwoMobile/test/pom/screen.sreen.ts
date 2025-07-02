export default class Screen {
	private get locatorAllowNotificationButton() {
		return $(
			'//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
		);
	}
	private get locatorDenyNotificationButton() {
		return $(
			'i//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]',
		);
	}

	async buttonPushNotification(option: boolean): Promise<void> {
		option
			? await this.locatorAllowNotificationButton.click()
			: await this.locatorDenyNotificationButton.click();
	}
}
