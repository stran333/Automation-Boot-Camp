import { test, expect } from '@playwright/test';
import { LoginPage } from './page-objects/login-page'

test('Test to log in Ballard Forecast', async ({ page }) => {
  //instatiate classes
  const loginPage = new LoginPage(page)

  //page doesn't exist yet
  await page.goto('http://forecast-ballard.twlab.int:8082/fc-BALLARD/default.do');

  //login page
  //await page.locator('[name="j_username"]').fill('stran');
  await loginPage.usernameField.fill('stran');

  //await page.locator('[name="j_password"]').fill('stran');
  await loginPage.passwordField.fill('stran');

  //await page.locator('[id="signIn"]').click();
  await loginPage.loginButton.click();

  //Ballard FC Homepage 
  await expect(page).toHaveURL('http://forecast-ballard.twlab.int:8082/fc-BALLARD/home/default.do');

 
});
