import { expect, test } from "@playwright/test";
test('Open SauceDemo Website', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('.title')).toHaveText('Products');
        console.log('Product assertion True');

    await page.locator('.product_sort_container').click();
    await page.selectOption('.product_sort_container', {label: 'Price (low to high)'});
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
    console.log('LowOricing Sort Assertion True');
        await page.pause();

    
});