# Exploratory Testing Report: Monefy (Android)

**Date:** June 30, 2025;
**Author:** A.V., QA Engineer

## 1. Summary
This report summarizes the findings from a 90 minutes freestyle exploratory testing session on Monefy app for Android. The report focused on evaluating areas including user onboarding, core transaction, premium feature gateways, and categories.

## 2. Charters
I'd like to note that a few repeatable charters haven't been included in the report.

### ONBOARDING:

#### **1-Charter: The user onboarding experience with allowing push notifications**
* Author: A.V.
* Date: June 30, 2025
* Priority: High - Onboarding flow
* Test Environment:
    * App Version: 1.22.2.2218
    * Device: OnePlus (Android phone)
    * OS: Android version 15
* Objectives: Evaluating the user onboarding flow when allowing push notifications.
* Scope:
    * In Scope: User onboarding flow; Allowing push notifications.
    * Outside Scope: Following initial guides; Purchasing Premium feature.

#### Logs
| Step | Action | Expected Result | Actual | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Launch the app for the first time. | The app should present a welcome step. | The app opens on a welcome step. | Pass | The carousel UI element correlates with swiping functionality rather than next onboarding steps. |
| 2 | Swipe to the 2nd onboarding step. | The app should present a "Control your spend" screen. | The screen has the correct design and information. | Pass | |
| 3 | Swipe to the 3rd onboarding step. | The app should present an "Activate push notification" screen. | The screen has the correct design and information. | Pass | Misleading content when the app asks for push notification choice. |
| 4 | Tap "Allow" for push notifications. | The native OS dialog for push notifications should appear. After allowing, the in-app toggle should be enabled. | The native push notification dialog is presented, and after accepting, the toggle is enabled in settings. | Pass | |
| 5 | Swipe to the 4th onboarding step. | The app should present a "Together we will reach goals" screen. | The screen has the correct design and information. | Pass | |
| 6 | Finish the onboarding steps by promoting Premium subscription. | The app should present a Premium one-time offer screen. | The Premium one-time offer is presented. | Pass | The "Restore" functionality is misleading without further context. |

#### Potential Defects
* No functional defects were found. The primary finding is a lack of guided onboarding and content. There also is a potentially UX confusing with "Restore" button, which carries usability risks.

#### Recommendations & Next Steps
* Revisit the content for the push notification screen to make it clearer.
* Consider removing the "Restore" option from the onboarding flow or adding an informational tooltip explaining its purpose.

---

#### **2-Charter: The initial guides following user onboarding**
* Author: A.V.
* Date: June 30, 2025
* Priority: High - Onboarding flow
* Test Environment:
    * App Version: 1.22.2.2218
    * Device: OnePlus (Android phone)
    * OS: Android version 15
* Objectives: Evaluating the initial guides (tooltips) by following currency switch presented after onboarding.
* Scope:
    * In Scope: Initial guides (Expenses, Recurring records, Transfer, Currency switch); Switching currency.
    * Outside Scope: User onboarding flow; Push notifications; Core functionality of expenses and incomes; Transactions between accounts; Premium features.

#### Logs
| Step | Action | Expected Result | Actual | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | After onboarding, view the main dashboard. | The app should present an "Expense button" tooltip. | The tutorial tooltip is presented. | Pass | |
| 2 | Tap the expense button as guided. | The app should present a "Recurring records" tooltip. | The tutorial tooltip is presented. | Pass | |
| 3 | Return to the dashboard. | The app should present an "Expense category" tooltip. | The tutorial tooltip is presented. | Pass | |
| 4 | Visit the Category screen and return to the dashboard. | The app should present an "Account transfer" tooltip. | The tutorial tooltip is presented. | Pass | |
| 5 | Visit the Transfer screen and return to the dashboard. | The app should present a "Currency switch" tooltip. | The tutorial tooltip is presented. | Pass | Bad UX for changing currency because the app performs actions without the user's explicit interaction. |
| 6 | After the currency is auto-focused manually change it to USD. | The app should warn the user about converting existing values. | No warning was given and the currency symbol is changed, but the numeric values of existing value is not converted (e.g., €25.50 became $25.50). | Fail | Compromised data integrity due to unconfirmed switch. |

#### Potential Defects
* Issue: "Currency switch" guide automatically navigate the user to the currency switch. 
* Issue: "Currency switch" doesn't explain how the currency conversion will be performed. Simply changing the currency will lead to significant data integrity issues if a user has already recorded transactions in different currencies.

#### Recommendations & Next Steps
* Redesign the "Currency switch" guide. The tooltip should only point to the feature; it should not perform  action automatically.
* Implement a warning dialog that informs users about the currency change logic and consequences.

---

### EXPENSES & INCOMES

#### **3-Charter: Core workflow of entering deposit via income button**
* Author: A.V.
* Date: June 30, 2025
* Priority: High - Core functionality
* Test Environment:
    * App Version: 1.22.2.2218
    * Device: OnePlus (Android phone)
    * OS: Android version 15
* Objectives: Evaluating the functionality of adding incomes via the main income button.
* Scope:
    * In Scope: Core workflow of entering income via income button; Initial guides (Date switch, "Carry over").
    * Outside Scope: Core workflow of entering income via category; Core workflow of editing and deleting; Large dataset performance testing.

#### Logs

| Step | Action | Expected Result | Actual | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Tap the income/+ button on the dashboard. | The "New Income" screen should appear. | The screen appeared as expected. | Pass | |
| 2 | Enter an amount of "500". | The amount should be displayed correctly. | "500" was displayed. | Pass | |
| 3 | Select the "Deposits" category. | The transaction should be saved, and the user returned to the dashboard, which should reflect the new balance. | The transaction was saved and the dashboard updated instantly | Pass | |


#### Potential Defects
* UI issue: Button labels inconsistency when the app launches, the main buttons display "Expense" and "Income". However, after some launches, these text of buttons changes to "-" and "+".
* UI issue: If an added sum includes thousands, the displayed UI sum becomes incorrect (different heights).

#### Recommendations & Next Steps
* Rework UI Elements by resolving the "Expense" / "Income" to "-" / "+" button label inconsistency and address the sum display discrepancy when numbers include thousands.

---

#### **4-Charter: Core workflow of creating a new account**
* Author: A.V.
* Date: June 30, 2025
* Priority: High - Core functionality
* Test Environment:
    * App Version: 1.22.2.2218
    * Device: OnePlus (Android phone)
    * OS: Android version 15
* Objectives: Evaluating the functionality of creating a new account with initial balance.
* Scope:
    * In Scope: Core workflow of creating a new account.
    * Outside Scope: Core workflow of editing and deleting accounts.

#### Logs
| Step | Action | Expected Result | Actual | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Navigate to Menu > Accounts. | A list of accounts should be displayed. | The list of accounts appeared. | Pass | |
| 2 | Tap on + button. | The new account form should appear. | The new account form appeared. | Pass | |
| 3 | Enter an account name - "Test". | The new account name appeared. | Pass | | 
| 4 | Enter an initial balance - "1000". | The new account balance appeared. | Pass | | 
| 5 | Select an image - "Cash". | The "Cash" image is highligted by green. | Pass | | 
| 6 | Add an account | The account should be created, and the user returned to the dashboard, which should reflect the new balance. | The account was added and the dashboard updated instantly | Pass | |

#### Potential Defects
* No functional defects were found. 

#### Recommendations & Next Steps
* No recommandations needed.

---

### PREMIUM

#### **5-Charter: Evaluating Premium gateway**
* Author: A.V.
* Date: June 30, 2025
* Priority: Medium - Premium functionality
* Test Environment:
    * App Version: 1.22.2.2218
    * Device: OnePlus (Android phone)
    * OS: Android version 15
* Objectives: Evaluating the user experience when features are locked behind the premium feature.
* Scope:
    * In Scope: Evaluating Premium gateways.
    * Outside Scope: The purchase flow; All non-premium features.

#### Logs
| Step | Action | Expected Result | Actual | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | In Settings, navigate to "Categories." | The user should be able to view existing categories. | The category list was displayed. | Pass | |
| 2 | Tap the "Add category" button. | The app should prompt the user to promote to Premium version. | A clear and concise upgrade prompt appeared. | Pass | |

#### Potential Defects
* No functional defects were found. The issue is business logic: the value of Premium is not clear until a user wants to use some functionality.

#### Recommendations & Next Steps
* Consider proactively labeling premium features with a "Premium" icon in the menus to better manage user expectations and clarify the value proposition.

---

#### **6-Charter: Resetting Premium offer timer after expiration**
* Author: A.V.
* Date: July 1, 2025
* Priority: Medium - Premium functionality
* Test Environment:
    * App Version: 1.22.2.2218
    * Device: OnePlus (Android phone)
    * OS: Android version 15
* Objectives: To evaluate if the special offer timer for the Premium subscription can be reset.
* Scope:
    * In Scope: Waiting for the offer timer; Observing the offer timer behavior.
    * Outside Scope: The actual purchase flow; All non-premium features.

#### Logs

| Step | Action | Expected Result | Actual | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | During onboarding, arrive at the Premium one-time offer screen. Note the timer. | A countdown timer (e.g., 10 hours) should be displayed. | The timer was displayed and counting down. | Pass | |
| 2 | Close the app. Return to the device in 10 hours | The offer should be expired upon relaunch. | The timer was reset to 24 hours. | Fail | Business logic flaw. |

#### Potential Defects
* Issue: The special offer timer does not end until you make a purchase.

#### Recommendations & Next Steps
* The offer timer should rely on a server timestamp and must not be prolonged.
---

### FUNCTIONALITY

#### **7-Charter: Opening right overflow settings menu**
* Author: A.V.
* Date: June 30, 2025
* Priority: Medium - Menu functionality
* Test Environment:
    * App Version: 1.22.2.2218
    * Device: OnePlus (Android phone)
    * OS: Android version 15
* Objectives: Evaluating the possibility of opening Settings menu.
* Scope:
    * In Scope: Core workflow of opening menu.
    * Outside Scope: Evaluating available menu options.

#### Logs
| Step | Action | Expected Result | Actual | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | On the main dashboard, locate the overflow menu icon. | A standard three-dot icon should be clearly visible in the top-right corner. | The icon is present and clearly visible. | Pass | UI Note: The menu is typically located on the left side of the app. |
| 2 | Tap the overflow menu icon. | A dropdown or side menu should open smoothly, displaying a list of options. | The menu opens instantly. | Pass | |
| 3 | Verify the content of the menu. | The menu should contain key options: "Categories", "Accounts", "Currencies", and "Settings". | All expected options are present and clearly labeled. | Pass | |
| 4 | With the menu open, tap on the back arrow (<-). | The menu should close, and the user should be returned to the dashboard. | The click opens the left-side menu instead of closing the settings menu. | Fail | This defect should be logged in the issue tracking system. |
| 5 | Re-open the menu by tapping the icon again. | The menu should open again. | The menu opens correctly. | Pass | |
| 6 | With the menu open, tap on the three-dot icon. |  The menu should close, and the user should remain on the dashboard. | The menu closes correctly. | Pass | |

#### Potential Defects
* Issue: Tapping the back arrow (<-) within the right-side overflow menu results in unexpected behavior. Instead of closing the current menu and returning to the dashboard, it incorrectly opens a different, left-side menu, breaking the standard navigation flow and creating a confusing user experience.

#### Recommendations & Next Steps
* The development team should correct the back arrow's functionality within the right overflow menu. It should be programmed to close the menu and return the user to the dashboard screen

---

#### **8-Charter: Adding expense after removing available categories and disable the last one**
* Author: A.V.
* Date: June 30, 2025
* Priority: Low - Categories functionality
* Test Environment:
    * App Version: 1.22.2.2218
    * Device: OnePlus (Android phone)
    * OS: Android version 15
* Objectives: Evaluating the possibility of adding expenses if all categories are deleted or disabled.
* Scope:
    * In Scope: Core workflow of entering expense via category; Deleting categories; Enabling/Disabling categories.
    * Outside Scope: Evaluating Premium gateway.

#### Logs
| Step | Action | Expected Result | Actual | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Navigate to Menu > Categories. | The list of categories should be displayed. | The list appeared. | Pass | |
| 2 | Delete all but one expense category (e.g., "Food"). | All other categories should be removed. | Categories were deleted successfully. | Pass | |
| 3 | Tap the toggle to disable the last remaining category ("Food"). | The toggle should switch to the off position. | The toggle switched off. | Pass | |
| 4 | Return to the dashboard and tap the expense/- button. | The "New Expense" screen should appear, but it should be impossible to add an expense without a category. | The "New Expense" screen appeared, but with no categories visible and only Premium "Add" feature is available. | Fail | The user is soft-locked from adding expenses but is given no message explaining why. |

#### Potential Defects
* Issue: If all expense categories are disabled, the user is blocked from adding new expenses without any explanation, creating a confusing dead-end.

#### Recommendations & Next Steps
* If a user tries to add an expense when no categories are active, display a message saying "You must have at least one active expense category to add a transaction."
* Consider preventing the user from disabling the very last active expense category.


## 3. Identified Risks
High: 
* The most severe risk identified is the currency change performed without any warning or explanation. This action can corrupt a user's entire financial history without their consent or knowledge, leading to a complete loss of trust in the application.
* The unlimited "one-time" premium offer undercuts the offer's exclusivity and poses a significant risk to the premium conversion.

Medium: 
* The onboarding flow contains misleading or unclear information, and key features are not easily discoverable. This poses a risk of lower user engagement and feature adoption.
* Users can get into a state where they are unable to perform a core function (adding an expense) without any guidance on how to resolve it.

Low:
* The unexpected navigation behavior when using the back arrow presents an usability risk. By violating standard UI patterns, it can lead to user confusion and frustration.

## 4. Conclusion
This series of charter-based exploratory tests confirms that the Monefy application has a robust and efficient core functionality for tracking expenses and income. However, a few issues were identified in the surrounding user experience, data handling, and business logic.