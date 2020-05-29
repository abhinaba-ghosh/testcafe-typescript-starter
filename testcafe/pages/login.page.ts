import { Selector, t } from 'testcafe';

class LoginPage {
  private usernameField: Selector;
  private passwordField: Selector;
  private loginBtn: Selector;
  private loginPageHeader: Selector;
  private urlRoute: string;

  constructor() {
    this.urlRoute = '/login';
    this.usernameField = Selector('*[id="username"]');
    this.passwordField = Selector('*[id="password"]');
    this.loginBtn = Selector('*[id="login"] button');
    this.loginPageHeader = Selector('div[class="example"] h2');
  }

  public async launchLoginUrl() {
    await t.navigateTo(this.urlRoute);
  }

  public async checkLoginPageOpened() {
    await t.expect(this.loginPageHeader.textContent).contains('Login Page');
  }

  public async setUserName(userName: string) {
    await t.typeText(this.usernameField, userName);
  }

  public async setUserPassword(password: string) {
    await t.typeText(this.passwordField, password);
  }

  public async clickLoginBtn() {
    await t.click(this.loginBtn);
  }
}

export const loginPage: LoginPage = new LoginPage();
