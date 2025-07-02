import { expect } from "@wdio/globals";
import OnboardingScreen from "../pom/onboarding.screen";

describe("E2E - Monify onboarding", () => {
	it("should successfully complete onboarding", async () => {
		await OnboardingScreen.completeOnboarding();
		const title = await OnboardingScreen.getTextStartTitle();
		await expect(title).toBe("Claim your one-time welcome offer");
	});
});
