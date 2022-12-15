import { test, expect } from '@playwright/test';
import { LoginPageDemo1 } from './page-objects/login-page-demo1';
import { ProductsPageDemo1 } from './page-objects/product-page-demo1';
import { URL, LOGINDATA, ITEMLABEL } from './data/constants';


test.describe('A group of tests that will be executed', () => {

  let loginPageD1: LoginPageDemo1
  let productsPageD1: ProductsPageDemo1
  
  test.beforeEach(async ({ page }) => {
    //instantiate classes
    loginPageD1 = new LoginPageDemo1(page)
    productsPageD1 = new ProductsPageDemo1(page)

  //page doesn't exist yet
  await page.goto(URL.baseUrl)

  // Login page:
  await loginPageD1.submitLoginForm(LOGINDATA.username, LOGINDATA.password)
  })

  test('Should log in successfully as standard_user @smoke', async ({ page }) => {

  //Expect page has 'Products' as title
  expect(productsPageD1.title).toBeVisible;

  //Expext page has item 'Sauce Labs Backpack'
  await expect(productsPageD1.inventory1).toContainText(ITEMLABEL.itemlabel1);
  
  //Expect page has item 'Sauce Labs Bike Light'
  await expect(productsPageD1.inventory2).toContainText(ITEMLABEL.itemlabel2);

   //Expect page has item 'Sauce Labs Bolt T-Shirt'
   await expect(productsPageD1.inventory3).toContainText(ITEMLABEL.itemlabel3);

    //Expect page has item 'Sauce Labs Fleece Jacket'
    await expect(productsPageD1.inventory4).toContainText(ITEMLABEL.itemlabel4);

     //Expect page has item 'Sauce Labs Bolt T-Shirt'
   await expect(productsPageD1.inventory5).toContainText(ITEMLABEL.itemlabel5);

    //Expect page has item 'Test.allTheThings() T-Shirt(Red)'
    await expect(productsPageD1.inventory6).toContainText(ITEMLABEL.itemlabel6);

  })  
 
});