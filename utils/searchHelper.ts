import { Page } from "@playwright/test";

export async function openProduct(page: Page, product: string) {
    await page.locator('.inventory_item_name ').filter({hasText: product}).click();
}

export async function addProdcutToCart(page: Page) {
    await page.getByRole('button', {name: 'Add to cart'}).click();
    
}

export async function openCart(page: Page) {
   await page.locator('.shopping_cart_link').click();
    
}


export async function checkout(page: Page) {
    await page.getByRole('button', {name: 'Checkout'}).click();
}

export async function paymentFinish(page: Page) {
    await page.getByRole('button', {name: 'Finish'}).click();
}

export async function backHome(page: Page) {
    await page.getByRole('button', {name: 'Back Home'}).click();
}

    
