import { Page, Locator } from '@playwright/test'

export class ProductsPageDemo1{
    // data modifiers
    readonly page: Page
    readonly title: Locator
    readonly inventory1: Locator
    readonly inventory2: Locator
    readonly inventory3: Locator
    readonly inventory4: Locator
    readonly inventory5: Locator
    readonly inventory6: Locator

    constructor(page: Page){
        this.page = page;
        this.title = page.locator('text=Products');
        this.inventory1 = page.locator('xpath=//*[@id="item_4_title_link"]/div');
        this.inventory2 = page.locator('xpath=//*[@id="item_0_title_link"]');
        this.inventory3 = page.locator('xpath=//*[@id="item_1_title_link"]/div');
        this.inventory4 = page.locator('xpath=//*[@id="item_5_title_link"]/div');
        this.inventory5 = page.locator('xpath=//*[@id="item_2_title_link"]/div');
        this.inventory6 = page.locator('xpath=//*[@id="item_3_title_link"]/div');
    }
}