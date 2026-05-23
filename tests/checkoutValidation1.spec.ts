import { expect, test } from "@playwright/test";
test('Open SaurceDemo Website', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('.title')).toHaveText('Products');
    console.log('Product assertion True');

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    console.log('Checkout number assertion true');

    await page.locator('.shopping_cart_link').click();
    await page.locator('#checkout').click();

    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
    console.log('Checkout Assertion True');

    await page.locator('#first-name').fill('Shabi');
    await page.locator('#last-name').fill('Hind');

    await page.locator('#continue').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: Postal Code is required');
    await page.pause();

});