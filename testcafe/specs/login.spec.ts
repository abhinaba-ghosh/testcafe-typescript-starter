import { loginPage } from '../pages';

fixture(`Getting Started`).page(`https://the-internet.herokuapp.com`);

test('TC1: user navigates to login page', async () => {
  await loginPage.launchLoginUrl();
  await loginPage.checkLoginPageOpened();
});
