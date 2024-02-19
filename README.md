# Sprint 7 project

# Description

- This project is a test for Urban Grocers API. The test suite includes tests for various types of HTTP requests (GET, POST, PUT, DELETE) to endpoints documented in the Urban Grocers API documentation.

## Technologies and Techniques Used

- JavaScript
- followed apiDoc documentation 
- Manual Testing with Postman
- ran request via terminal

## Running Tests

To run the tests for this project, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Run the tests by executing `npx jest -(filename)`

### Task 1: Tests for GET Requests

- Endpoint Tested: `/api/v1/kits/1`
- Description: Tests verify the response status code and ensure that the response body contains the expected data.

### Task 2: Tests for POST Requests

- Endpoint Tested: `/api/v1/orders`
- Description: Tests validate the response status code and confirm that the response body contains the expected data, particularly the courier service.

### Task 3: Tests for PUT Requests

- Endpoint Tested: `/api/v1/orders/16`
- Description: Tests check the response status code and verify that the response body reflects the updated order information, including product cost.

### Task 4: Tests for DELETE Requests

- Endpoint Tested: `/api/v1/kits/10`
- Description: Tests validate the response status code and ensure that the response body contains the expected boolean value indicating the success of the deletion.