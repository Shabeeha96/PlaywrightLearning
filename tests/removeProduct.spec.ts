import { expect, test } from '@playwright/test';

test('Open SauceDemo Website', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('.title')).toHaveText('Products');
   console.log('Product assertion shown');

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
   console.log('1 assertion shown');

  await page.locator('#remove-sauce-labs-backpack').click();
  await expect(page.locator('.shopping_cart_badge')).toBeHidden();
   console.log('1 assertion hidden');


  await page.pause();
  });