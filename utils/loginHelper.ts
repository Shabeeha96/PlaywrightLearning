import {Page} from '@playwright/test';

export async function login(page: Page) {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox', {name: 'Username'}).fill('tomsmith');
    await page.getByRole('textbox', {name: 'Password'}).fill('SuperSecretPassword!');
    await page.getByRole('button', {name: 'Login'}).click();

}