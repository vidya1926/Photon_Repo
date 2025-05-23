import test, { chromium, devices } from '@playwright/test'

test(`Mock the location`, async () => {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext(
        {
            geolocation: {
                latitude: 56.2639,
                longitude: 9.5018
            },permissions:['geolocation']
            
        })
    const page= await context.newPage()
    await page.goto("https://www.google.com/maps")
    await page.click("#sVuEFc")
    await page.waitForTimeout(4000)
})


test.use({
    geolocation:{
         latitude: 56.2639,
                longitude: 9.5018
            },permissions:['geolocation']  ,
            ...devices['Galaxy Note 3'] 
})
test.only(`Mock the location using test.use`, async ({page}) => {
    await page.goto("https://www.google.com/maps")
    await page.click("#sVuEFc")
    await page.waitForTimeout(4000)
})