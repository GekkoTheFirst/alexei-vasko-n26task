## Monefy mobile E2E test automation
This repository contains an end-to-end (E2E) mobile test automation framework designed to perform s few test of Monefy Android application. The framework is built using WebdriverIO, Appium, and TypeScript, and it follows Page Object Model (POM) design pattern for maintainability and scalability.

### Getting started
This test suite automates several key user scenarios, including the onboarding flow, managing transactions by adding both income and expenses with specific categories like *Car* or *Food*, and verifying that all balance calculations are correct.

### Prerequisites
Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [Appium Server](https://appium.io/docs/en/2.0/intro/)
- [Android Studio](https://developer.android.com/studio) to setup Android Virtual Device (AVD) or a physical Android device
    - [Android SDK](https://developer.android.com/studio) comes pre-installed with Android studio.
- Java JDK (v11 or higher)

#### Installation
Follow these steps to set up and run the test suite.

1. Clone the repository.
2. install the required npm dependencies.
    ```
    npm install
    ```

#### Prepare APK
Let's just say this APK's journey here involved a bit of creativity..., and it's our little secret. Once downloaded, please place it in `./apks/` directory of the project.

#### Start Appium server
Open a new terminal window and start the Appium server before running the tests.
```
appium
```

#### Running device/emulator
Before running the tests, you must have either:
- An **Android Virtual Device (AVD)** running via Android Studio or Android SDK.
- A **physical Android device** connected to your computer with USB debugging enabled.

The test suite will automatically detect and use the available device or emulator.

### Running tests
To execute the entire test suite, run the following command from the project's directory:

*Note: `wdio.conf.ts` is configured to look for the app*
```
npx wdio run ./wdio.conf.ts

or

npm run wdio
```

This command will automatically compile the TypeScript code, launch Appium driver, install the app on your connected device/emulator, and run all the E2E tests defined in the `specs` directory.

### Viewing test report
This project uses Allure reporter to generate detailed and interactive HTML reports. After the test run is complete, this command needs to be executed in order to build html report.
```
npx allure generate ./allure-test-reports --clean
```
To view the last report, open the `index.html` file located in the `/allure-report` directory, or use the Allure command-line tool to serve it:
```
npx allure open
```
This will open the comprehensive HTML report in your default web browser, where you can analyze test results, view steps, and see screenshots of any failures.

### Possible Docker solution
For enhanced portability and consistency, the entire test environment could be containerized using Docker. This approach would involve creating a Dockerfile to build an image that includes Node.js, Android SDK, Appium, and all necessary test dependencies. However, this setup would require a real device for execution, as maintaining an emulator within the container would require further research.

### Approach and tech stack choices
This project utilises Appium and WebdriverIO (WDIO), following POM design pattern. The chosen technology stack was carefully selected to create a robust testing environment and there are reasons behind:

* WDIO serves as the core test runner, valued for its powerful features and excellent integration with Appium. Appium is the industry standard for mobile automation, enabling tests to be written effectively against native Android applications (as well on iOS). TypeScript was chosen as it's my current language, ensuring consistency and type safety. Allure Reporter was selected for its ability to generate beautiful, interactive, and detailed HTML reports, which are invaluable for debugging and communicating test results.

* POM is an architectural pattern that separates UI interaction logic from test case logic. In this framework, each application screen (rather than 'page,' which is typically used for web contexts) such as `OnboardingScreen` or `DashboardScreen`, has its own class file dedicated to locating elements and defining methods to interact with them. This strategy offers significant benefits: it improves maintainability because UI changes only require updates to the relevant page object class, not the test scripts themselves. It also promotes reusability by encapsulating common actions into methods that can be used across multiple tests. Finally, it enhances readability, making test cases cleaner and more descriptive by expressing them in terms of user actions rather than direct element interactions.