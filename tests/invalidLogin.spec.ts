import { expect,  test} from "@playwright/test";
test ('Open SauceDemo website', async ({page}) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('wrg pwd');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    console.log('Error message shown for invalid Login');
})