import { test, expect } from '@playwright/test';

test('Open SauceDemo Website', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.title')).toHaveText('Products');

  await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  console.log('2 Assertion True');

  await page.locator('.product_sort_container')
    .selectOption({ label: 'Price (high to low)' });

  await page.locator('.inventory_item_name').first().click();

  await expect(page.getByRole('button', { name: 'Back to products' }))
    .toBeVisible();

  console.log('Back to Products assertion True');

  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('#logout_sidebar_link').click();

  await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
  console.log('Swag Labs Assertion true');

  await page.getByPlaceholder('Username').fill('standard_user123');
  await page.getByPlaceholder('Password').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');

  console.log('Error msg assertion true');
});