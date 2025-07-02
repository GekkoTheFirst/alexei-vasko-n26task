import { $ } from "@wdio/globals";
import Screen from "./screen.sreen";

class OnboardingScreen extends Screen {
	private get monefyApp() {
		return $("~Monefy");
	}
	private get selectorContinueButton() {
		return $("id:buttonContinue");
	}
	private get selectorClosePremiumButton() {
		return $("id:buttonClose");
	}
	private get selectorTitleText() {
		return $("id:textViewTitle");
	}

	async clickApp(): Promise<void> {
		await this.monefyApp.click();
	}

	async buttonPushNotification(option: boolean) {
		await super.buttonPushNotification(option);
	}

	async buttonContinue() {
		await this.selectorContinueButton.click();
	}

	async buttonClosePremium() {
		await this.selectorClosePremiumButton.click();
	}

	async completeOnboarding() {
		await this.buttonContinue(); // welcome sreen
		await this.buttonContinue(); // control screen
		await this.buttonContinue(); // notification screen
		await this.buttonPushNotification(true);
		await this.buttonContinue(); // start screen
	}

	async skipOnboarding() {
		await this.completeOnboarding();
		await this.buttonClosePremium();
		driver.implicitWait(1000);
		await this.clickApp();
	}

	async getTextStartTitle() {
		const title = await this.selectorTitleText.getText();
		return title;
	}
}

export default new OnboardingScreen();
