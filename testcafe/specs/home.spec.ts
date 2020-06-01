import { homePage, loginPage } from '../pages';
import { getBaseURL } from '../utils/config.helper';

fixture(`Home Page Test`).page(getBaseURL());

test('TC1: user validates home page is visible after successful login', async () => {
  await loginPage.launchLoginUrl();
  await loginPage.setUserName('tomsmith');
  await loginPage.setUserPassword('SuperSecretPassword!');
  await loginPage.clickLoginBtn();
  await homePage.checkLoginSuccess();
  await homePage.checkURLSecure();
});
