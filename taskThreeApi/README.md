# Task 3 - RESTful API Test Automation

This repository contains an automated API testing suite built with Playwright, designed to ensure the reliability and correctness of API endpoints. The project adheres to Page Object Model (POM) design pattern, enhancing test maintainability and readability.

### Getting started
This project's automated tests are designed and executed against the public Swagger Petstore API. You can explore the API documentation at [Swagger Petstore API](https://github.com/swagger-api/swagger-petstore). Specifically, the tests focus on comprehensive CRUD operations for a chosen domain: **PET** within this API. 

This solution leverages Playwright's capabilities for reliable and fast test execution and uses POM for an organized test structure. Furthermore, it includes Docker support for seamless execution of tests within a Dockerized environment, ensuring consistent results across different setups, and generates detailed automated reports for quick analysis of test runs.

### Prerequisites
Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
* [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
* [Docker](https://www.docker.com/get-started) (if you plan to run tests via Docker)

### Installation
1. Clone the repository:
    ```
    git clone <repository_url>
    cd <repository_name>
    ```
    replace `<repository_url>` and `<repository_name>` with the real repository details.

2. Install dependencies:
    ```
    npm install
    ```

### Running Tests
#### Standard Execution with Playwright
To run all API tests, use the following command: ```npx playwright test```

You can also run specific tests or configure Playwright as needed (check [Playwright documentation](https://playwright.dev/docs/running-tests#running-tests)).

#### Running Tests with Docker
For a consistent and isolated test environment, you can run the tests using Docker. This command will build the Docker image, execute the tests, and output the test reports to a reports directory on your host machine.
```docker build --output=./reports --target=artifacts .```

where 
* *--output=./reports* specifies that the build output that includes the test reports should be copied to the reports directory in your current working directory on the host machine.
* *--target=artifacts* ensures that the Docker build process targets the stage responsible for generating and collecting test artifacts (reports).
* *.* refers to the current directory as the build context.

### Reporting
After a test run (either standard or Dockerized), the latest test report will be available in *reports* directory at the root of the project. This report provides a detailed overview of the test execution results. To view the Playwright HTML report, navigate to the reports directory and open the index.html file in your web browser.

### Approach and Tech Stack Choices
This project utilizes Playwright for API testing, following POM design pattern. Next I will list some points why this approach and tech stack were chosen:

* Playwright is commonly known for browser automation, however Playwright offers robust capabilities for making HTTP requests and handling responses, making it an excellent choice for API testing. Its built-in assertions, test runners, and reporting features streamline the testing process. It provides a unified API for different browsers and environments.

* POM abstracts API endpoints and request/response structures into dedicated "page objects" ("API objects" in this context). POM enhances maintainability by centralizing changes to API contracts in one place, rather than across multiple test files. It also improves reusability by encapsulating common API interactions into easily callable methods, and boosts readability as tests interact with high-level methods rather than raw HTTP requests.

* Zod is a TypeScript schema declaration and validation library, used in this solution to ensure data integrity by validating the structure and types of API request payloads and response bodies. This improves reliability by preventing tests from passing due to incorrect data formats.

* The combination of Playwright's efficiency, POM's structured approach, and Zod's validation ensures scalability of this project. The test suite can easily scale as API grows in complexity and the number of endpoints increases. New tests can be added with minimal impact on existing ones, and maintaining the suite remains manageable.

* Dockerization ensures that the test environment is consistent across all machines like workmachines and CI/CD pipelines.