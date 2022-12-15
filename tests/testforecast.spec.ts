import { test, expect } from '@playwright/test';

test('Test to log in Ballard Forecast', async ({ page }) => {
  await page.goto('http://forecast-ballard.twlab.int:8082/fc-BALLARD/default.do');
  await page.locator('[name="j_username"]').fill('stran');
  await page.locator('[name="j_password"]').fill('stran');
  await page.locator('[id="signIn"]').click();
  await expect(page).toHaveURL('http://forecast-ballard.twlab.int:8082/fc-BALLARD/home/default.do');
  

  /*
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
  */
 
});
