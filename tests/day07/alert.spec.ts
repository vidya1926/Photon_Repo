import test from '@playwright/test'


test(`PW Auto-dismiss feature`, async ({ page }) => {
    await page.goto("https://leafground.com/alert.xhtml")
    await page.click("(//span[text()='Show'])[1]")
    const innerText = await page.locator("#simple_result").innerText()
    console.log(innerText)

    //clicking on confirm alertbox
    await page.click("(//span[text()='Show'])[2]")
    const confirmText = await page.locator("#result").innerText()
    console.log(confirmText)

})


test("Handling alerts once", async ({ page }) => {


    page.once('dialog', alertName => {
        const alertType = alertName.type()
        console.log(alertType)
        alertName.accept()
    })

    await page.goto("https://leafground.com/alert.xhtml")

    await page.click("(//span[text()='Show'])[1]")
    const innerText = await page.locator("#simple_result").innerText()
    console.log(innerText)

    page.once('dialog', alertName => {
        const alertType = alertName.type()
        console.log(alertType)
        alertName.accept("Vidya")
    })
    //prompt alert
    await page.click("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]")
    const confirmText = await page.locator("#confirm_result").innerText()
    console.log(confirmText)
})
test("Handling alerts for all commonly", async ({ page }) => {
    await page.goto("https://leafground.com/alert.xhtml")
    page.on('dialog', alertName => {
        const alertType = alertName.type()
        console.log(alertType)
        console.log("The alert message is " + alertName.message())
        if (alertType == "prompt") {
            alertName.accept("User")
        }
        else {
            alertName.dismiss()
        }
    })
    //simple alert
    await page.click("(//span[text()='Show'])[1]")
    const innerText = await page.locator("#simple_result").innerText()
    console.log(innerText)

    //confirmation alert
    await page.click("(//span[text()='Show'])[2]")
    const confirmText = await page.locator("#result").innerText()
    console.log(confirmText)

    //prompt alert
    await page.click("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]")
    const promptText = await page.locator("#confirm_result").innerText()
    console.log(promptText)

    //sweet alert
    await page.click("(//h5[text()='Sweet Alert (Simple Dialog)']/following::span[text()='Show'])[1]")
    //dismiss message box
    await page.click("//span[text()='Dismiss']")
    //sweet modal dialog
    await page.click("(//h5[text()='Sweet Modal Dialog']/following::span[text()='Show'])[1]")
    //close the  sweet modal dialog
    await page.click("//span[text()='Modal Dialog (Sweet Alert)']/following::a")

    await page.waitForTimeout(3000)
})

test.only(`iob`,async({page})=>{
await page.goto("https://www.snapdeal.com/")
await page.hover(`//span[text()="Men's Fashion"]`)
})