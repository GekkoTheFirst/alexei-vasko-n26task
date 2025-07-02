import { $ } from "@wdio/globals";
import Screen from "./screen.sreen";

class DashboardScreen extends Screen {
	private get selectorExpenseButton() {
		return $("id:expense_button");
	}
	private get selectorIncomeButton() {
		return $("id:income_button");
	}
	private get selectorBalanceAmount() {
		return $("id:balance_amount");
	}
	private get selectorExpenseSum() {
		return $("id:expense_amount_text");
	}
	private get selectorIncomeSum() {
		return $("id:income_amount_text");
	}
	private get selectorChoosecategoty() {
		return $("id:keyboard_action_button");
	}
	private get selectorMenuOverflow() {
		return $("id:overflow");
	}
	private get locatorMoneyTooltip() {
		return $("//android.widget.FrameLayout[@index='1' and @clickable='true']/android.widget.TextView[@index='0']");
	}

	private async clickCalculator(amount: number) {
		const amountAsString = amount.toString();
		const digits = amountAsString.split("");
		for (const digit of digits) {
			// selectorNumericKeyboardPad
			const selector = `id:buttonKeyboard${digit}`;
			await driver.$(selector).click();
		}
	}

	private async selectorCategory(categoryName: string) {
		return `//android.widget.TextView[@text='${categoryName}']/ancestor::android.widget.FrameLayout[@clickable='true']`;
	}

	private async selectorDashboardImageCategory(index: number) {
		return `(//android.widget.FrameLayout[@resource-id='com.monefy.app.lite:id/piegraph']//android.widget.ImageView)[${index}]`;
	}

	async inputAmount(amount: number) {
		await this.clickCalculator(amount);
	}

	async clickExpenseButton() {
		await this.selectorExpenseButton.waitForDisplayed({ timeout: 3000 });
		await this.selectorExpenseButton.click();
	}

	async clickIncomeButton() {
		await this.selectorIncomeButton.waitForDisplayed({ timeout: 3000 });
		await this.selectorIncomeButton.click();
	}

	async clickChooseCategory() {
		await this.selectorChoosecategoty.click();
	}

	async clickExpenseCategory(categoryName: string = "Bills") {
		const selector = await this.selectorCategory(categoryName);
		await driver.$(selector).click();
	}

	async clickIncomeCategory(categoryName: string = "Deposits") {
		const selector = await this.selectorCategory(categoryName);
		await driver.$(selector).click();
	}

	async clickExpensesCategoryImageByIndex(index: number = 1) {
		if (index <= 0) {
			console.error("Image index cannot be less than 1");
			return;
		}
		const selector = await this.selectorDashboardImageCategory(index);
		await driver.$(selector).click();
	}

	async clickMenuOverflow() {
		await this.selectorMenuOverflow.click();
	}

	async getTextExpense() {
		const expense = await this.selectorExpenseSum.getText();
		return expense;
	}

	async getTextIncome() {
		const income = await this.selectorIncomeSum.getText();
		return income;
	}

	async getTextBalanceAmount() {
		const amount = await this.selectorBalanceAmount.getText();
		return amount;
	}

	async waitForMoneyTooltip() {
		await this.locatorMoneyTooltip.waitForDisplayed({ timeout: 3000 });
	}
}

export default new DashboardScreen();
