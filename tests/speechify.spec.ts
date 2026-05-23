import { test, expect} from '@playwright/test';

test ('Speechify signup page' , async ({page}) =>{


    await page.goto('https://v2.onboarding.speechify.com/');
    await expect(page.locator('.text-center.text-2xl.glass-700')).toHaveText('Sign up');
    console.log('Signup Assertion True');

    await page.locator('#email').fill('Shabi@mail.com');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', {name: 'Sign Up'}).click();
     await page.pause();
})
