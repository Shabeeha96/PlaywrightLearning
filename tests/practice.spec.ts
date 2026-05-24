import {test, expect} from '@playwright/test';
test('Google search Page', async ({page}) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
    console.log('Google page search');
});