import { expect, Page } from "@playwright/test";
export class LoginPage {
    constructor(private page: Page){}

    usernameInput = this.page.getByRole('textbox', {name: 'Username'});
    passwordInput = this.page.getByRole('textbox', {name: 'Password'});
    loginButton = this.page.getByRole('button', {name: 'Login'});
    logoutButton = this.page.getByRole('link', {name: 'Logout'});

    async login(username: string, password: string){

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async VerifyLoginMessage(){
        await expect(this.page.locator('#flash')).toContainText('You logged into a secure area!');
        }

    async logout(){
        await this.logoutButton.click();
    }

    async verifyLogoutMessage(){
        await expect(this.page.locator('#flash')).toContainText('You logged out of the secure area!');
    }
}