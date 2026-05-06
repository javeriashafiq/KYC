export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://172.16.0.13/kyc/Account/Login');
  }

  async enterEmail(email) {
    const field = this.page.getByRole('textbox', { name: 'Email Address' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(email);
    await this.page.waitForTimeout(300);
  }

  async enterPassword(password) {
    const field = this.page.getByRole('textbox', { name: 'Password' });
    await field.waitFor({ state: 'visible', timeout: 5000 });
    await field.fill(password);
    await this.page.waitForTimeout(300);
  }

  async clickSignIn() {
    const btn = this.page.getByRole('button', { name: 'Sign In Securely' });
    await btn.waitFor({ state: 'visible', timeout: 5000 });
    await btn.click();
    await this.page.waitForTimeout(1000);
  }

  async login(email, password) {
    await this.goto();
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSignIn();
  }
}