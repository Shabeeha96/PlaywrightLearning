import { expect, test} from '@playwright/test';
test ('Open SauceDemo Website', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('.title')).toHaveText('Products');
    console.log('Products Assertion True');

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    console.log('Cart Counr- 2 Assertion True');

    await page.locator('.shopping_cart_link').click();
    await page.locator('#checkout').click();
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
    console.log('Checkout Assertion True');

    await page.locator('#first-name').fill('Shabi');
    await page.locator('#last-name').fill('Hind');
    await page.locator('#postal-code').fill('676304');
    await page.locator('#continue').click();

    await expect(page.locator('.title')).toHaveText('Checkout: Overview');
    console.log('Checkout overview assertion True');

    await expect(page.locator('.summary_subtotal_label')).toHaveText('Item total: $39.98');
    console.log('Item Total assertion true');

    await expect(page.locator('.summary_total_label')).toHaveText('Total: $43.18');
    console.log('Item total assertion true');

            await page.pause();

})