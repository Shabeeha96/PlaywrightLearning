import { expect, test } from '@playwright/test';

test('Open SauceDemo Website', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('.title')).toHaveText('Products');
  console.log('Products assertion passed');

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  console.log('1 assertion passed');

  await page.locator('.shopping_cart_badge').click();
  await page.locator('#continue-shopping').click();

  await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  console.log('2 assertion passed');

  await page.locator('.shopping_cart_badge').click();
  await page.locator('#checkout').click();

  await page.locator('#first-name').fill('Shabeeha');
  await page.locator('#last-name').fill('Hind');
  await page.locator('#postal-code').fill('676304');
  await page.locator('#continue').click();
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  await page.locator('#finish').click();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  await page.pause();
});