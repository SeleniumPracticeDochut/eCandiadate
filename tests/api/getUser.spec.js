
import { test, expect } from '@playwright/test';

test.only('Login API', async ({ playwright  }) => {
    const request = await playwright.request.newContext({
    ignoreHTTPSErrors: true
  });


  const response = await request.post('https://www.shoppersstack.com/shopping/users/login', {
    data: {
      email: "testingshopperccount@gmail.com",
      password: "Shopper@2025",
      role: "SHOPPER"
    }
  });

  // Validate status
  expect(response.status()).toBe(200);

  // Convert response
  const body = await response.json();

  // Validate token
  
  console.log(body);
});