import { Page } from '@playwright/test';
export async function login(page: Page, username: string, password: string) {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox', {name: 'Username'}).fill(username);
    await page.getByRole('textbox', {name: 'Password'}).fill(password);
    await page.getByRole('button', {name: 'Login'}).click();  
    }

export async function logout(page: Page) {
    await page.getByRole('link', {name: 'Logout'}).click();
}
