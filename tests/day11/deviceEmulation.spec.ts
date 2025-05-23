import test, { devices } from '@playwright/test'
// test.use({
//         ...devices['BlackBerry Z30 landscape']})
test(`emulate the device`, async ({page}) => {
    await page.goto("https://www.google.com")   
    await page.waitForTimeout(4000)
})