import { Page } from "@playwright/test";
export class ProductPage {
    constructor(private page: Page) {}
     title = this.page.locator('.title');

     productByName(productName: string){
        return this.page.locator('.inventory_item').filter({hasText: productName});
     }

     async verifyProductPage(){
        await expect(this.title).toHaveText('Products');
     }

     async verifyProductVisible(productName: string){
        await expect(this.productByName(productName)).toBeVisible();

     }   
     
}