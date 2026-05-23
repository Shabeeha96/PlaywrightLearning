import { expect, test } from "@playwright/test";
test('Open SauceDemo website', async({page}) => {
await page.goto('https://www.saucedemo.com');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

await expect(page.locator('.title')).toHaveText('Products');
console.log('Product assertion true');

await page.locator('#add-to-cart-sauce-labs-backpack').click();
await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
console.log('1 Assertion True');

await page.locator('.shopping_cart_link').click();

await page.locator('#checkout').click();
await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
console.log('checkout assertion true');

await page.locator('#first-name').fill('');
await page.locator('#last-name').fill('Hind');
await page.locator('#postal-code').fill('676304');

await page.locator('#continue').click();
await expect(page.locator('[data-test="error"]')).toHaveText('Error: First Name is required');
console.log('First name asserion true')


 await page.pause();
});