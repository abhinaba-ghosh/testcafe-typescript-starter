import { loginPage } from '../pages';
import { getBaseURL } from '../utils/config.helper';

fixture(`Login Page Test`).page(getBaseURL());

test('TC2: user navigates to login page', async () => {
  await loginPage.launchLoginUrl();
  await loginPage.checkLoginPageOpened();
});
