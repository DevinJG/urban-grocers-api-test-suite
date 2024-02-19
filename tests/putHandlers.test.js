// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

test('Should return status code 200 ok', async () => {
let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/16`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
                actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
         expect(actualStatusCode).toBe(200);
});

test('Response body should show product cost', async () => {
    let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/16`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
                actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
         expect(actualResponseBody["productsCost"]).toBe(11);
});
