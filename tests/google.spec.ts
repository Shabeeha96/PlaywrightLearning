import { test, expect } from '@playwright/test';
import loginData from '../test-data/loginData.json';
import { SauceLoginPage, CheckoutPage } from '../pages/sauceLoginPage';
import { openProduct, addProdcutToCart, openCart, checkout, checkoutContinue, paymentFinish, backHome } from '../utils/searchHelper';
import { ENV } from '../Cofig/env';

test ('Function+POM+TDM', async ({page}) => {
    await page.goto(ENV.baseURL);
    const sauceLoginPage = new SauceLoginPage(page);
    await sauceLoginPage.login(loginData.validUser, loginData.validPassword);
    
    await openProduct(page, loginData.product);
    await expect(page.locator('.inventory_details_name')).toContainText(loginData.product);
    console.log('Open Product Assertion True');

    await addProdcutToCart(page);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    console.log('Prodcut added to cart successfully');

    await openCart(page);

    await checkout(page);
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
    console.log('Checkout Asserttion True');

   const checkoutPage = new CheckoutPage(page);
   await checkoutPage.checkout(loginData.FirstName, loginData.LastName, loginData.ZipCode
   );

   await paymentFinish(page);
   await expect(page.getByRole('heading')).toContainText('Thank you for your order!');
   console.log('Order confirmation Assertion True');

   await backHome(page);
   await expect(page.locator('.title')).toHaveText('Products');
   console.log('Products Assertion True');


    await page.pause();
})