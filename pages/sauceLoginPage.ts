import { Page } from "@playwright/test";
export class SauceLoginPage {
    constructor(private page: Page) {}

    usernameInput = this.page.getByRole('textbox', {name: 'Username'});
    passwordInput = this.page.getByRole('textbox', {name: 'Password'});
    loginButton = this.page.getByRole('button', {name: 'Login'});

    async login(username: string, password: string ){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        
    }
}

export class CheckoutPage {
    constructor(private page: Page) {}
    firstNameInput = this.page.getByRole('textbox', {name: 'First Name'});
    lastNameInput = this.page.getByRole('textbox', {name: 'Last Name'});
    ZipCodeInput = this.page.getByRole('textbox', {name: 'Zip/Postal Code'});
    continueButton = this.page.getByRole('button', {name: 'Continue'});

async checkout(firstname: string, lastname: string, zip: string){
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.ZipCodeInput.fill(zip);
    await this.continueButton.click();

}

}