import { Page, Locator} from '@playwright/test'

export class LoginPageDemo1 {  //Pascal case for naming Class
    //data modifiers 
    readonly page: Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator

    constructor(page: Page){
        this.page = page
        this.usernameField = page.locator('[data-test="username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
    }

    async submitLoginForm(username: string, password: string){
        await this.usernameField.fill(username);
        await this .passwordField.fill(password);
        await this.loginButton.click()
    }
} 