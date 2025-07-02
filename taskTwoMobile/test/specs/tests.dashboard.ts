import { expect } from "@wdio/globals";
import DashboardScreen from "../pom/dashboard.screen";
import OnboardingScreen from "../pom/onboarding.screen";

describe("E2E - dashboard", () => {
	before("Skip onboarding", async () => {
		// To change the starting activity doesn't work and no further research is being performed due to time constraints
		// await driver.startActivity('com.monefy.app.lite', 'com.monefy.app.lite/com.monefy.activities.main.MainActivity_');
		await OnboardingScreen.skipOnboarding();
	});

	it("adds expenses using a category and the bottom button to verify negative sum, then verify the handling of negative balances", async () => {
		let expense;
		// Expense button
		await DashboardScreen.clickExpenseButton();
		await DashboardScreen.inputAmount(100);
		await DashboardScreen.clickChooseCategory();
		await DashboardScreen.clickExpenseCategory("Car");
		expense = await DashboardScreen.getTextExpense();
		expect(expense).toBe("$100.00");
		// Expense category image
		await DashboardScreen.clickExpensesCategoryImageByIndex(5);
		await DashboardScreen.inputAmount(99);
		await DashboardScreen.clickChooseCategory();
		expense = await DashboardScreen.getTextExpense();
		expect(expense).toBe("$199.00");
		// Balance
		const balance = await DashboardScreen.getTextBalanceAmount();
		expect(balance).toBe("Balance -$199.00");
	});

	it("adds $500 in income and $101 to verify calculations, then verify the final balance", async () => {
		// Income
		await DashboardScreen.clickIncomeButton();
		await DashboardScreen.inputAmount(500);
		await DashboardScreen.clickChooseCategory();
		await DashboardScreen.clickIncomeCategory("Deposits");
		const income = await DashboardScreen.getTextIncome();
		expect(income).toBe("$500.00");
		// Expense
		await DashboardScreen.clickExpensesCategoryImageByIndex(1);
		await DashboardScreen.inputAmount(101);
		await DashboardScreen.clickChooseCategory();
		const expense = await DashboardScreen.getTextExpense();
		expect(expense).toBe("$300.00");
		// Wait for the tiooltip to close overflow menu
        await DashboardScreen.waitForMoneyTooltip();
		await DashboardScreen.clickMenuOverflow();
		// Balance
		const balance = await DashboardScreen.getTextBalanceAmount();
		expect(balance).toBe("Balance $200.00");
	});
});
