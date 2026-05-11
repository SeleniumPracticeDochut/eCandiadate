class LoginPage{
     /** @param {import('@playwright/test').Page} page */

    constructor(page){

        this.usernameTf= page.locator("//input[@name='user_name']")
        this.passwordTf= page.locator("//input[@name='user_password']")
        this.loginBtn= page.locator("#submitButton")

    }

    async loginToApp(usn,pwd){

        await this.usernameTf.fill(usn)
        await this.passwordTf.fill(pwd)
        await this.loginBtn.click()

    }
}

export default LoginPage