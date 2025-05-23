import test from '@playwright/test'

test(`LoginFunctionality`, async ({ page }) => {

    test.info().annotations.push({type:"Author",description:"Vidya"},
        {type:"TestcaseName",description:"Leads Module"}
    )

    test.step("Loaded the url", async () => {
        await page.goto("http://leaftaps.com/opentaps/control/main")
    })
    test.step("Entered the credentials", async () => {
        const user = page.locator("input[id=username]")
        await user.fill("demoCSR")

        await page.locator("#password").fill("crmsfa")
    })

    test.step("Login button is clicked Suceessfully", async () => {
        
        await page.click(".decorativeSubmit")
    })

    console.log(test.info().status)
})
