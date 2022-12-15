import { Page, Locator} from '@playwright/test'

export class LoginPage {  //Pascal case for naming Class
    //data modifiers 
    readonly page: Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator

    constructor(page: Page){
        this.page = page
        this.usernameField = page.locator('[name="j_username"]')
        this.passwordField = page.locator('[name="j_password"]')
        this.loginButton = page.locator('[id="signIn"]')
    }
} 