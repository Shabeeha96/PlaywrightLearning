import { expect, test } from '@playwright/test';

test('Open SauceDemo Website', async ({ page }) => {
await page.goto('https://www.saucedemo.com');
await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
await page.getByRole('button', { name: 'Login' }).click();

await page.getByRole('button', { name: 'Add to cart' }).nth(0).click();
 await page.locator('.shopping_cart_link').click();
 await expect(page.locator('.title')).toHaveText('Your Cart');
 console.log('Your Cart Assertion True');
//await page.getByRole('button', { name: 'Checkout' }).click();

await page.getByRole('button', {name: 'Continue Shopping'}).click();

  await page.pause();

});