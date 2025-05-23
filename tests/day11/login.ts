import { chromium, Page } from '@playwright/test'

export class Login {
   lpPage: Page

    constructor(page: Page) {
        this.lpPage = page
    }

    async loadUrl() {
        await this.lpPage.goto("http://leaftaps.com/opentaps/control/main")
    }

    async enterCredentials() {
        await this.lpPage.fill("#username", "demoCSR")
        await this.lpPage.fill("#password", "crmsfa")

    }

    async clickLogin() {
        await this.lpPage.click(".decorativeSubmit")
        return await this.lpPage.title()
    }

}

async function doLogin() {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    let loginInfo = new Login(page)
    await loginInfo.loadUrl()
    await loginInfo.enterCredentials()
    await loginInfo.clickLogin()
}

doLogin()