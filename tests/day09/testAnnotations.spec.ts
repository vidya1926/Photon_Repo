import test from '@playwright/test'


test.skip(`Test annottion using only`,async({page})=>{

    await page.goto("https://www.google.com")

})

test(`Test annotation`,async({page})=>{

   await page.goto("http://leaftaps.com/opentaps/control/main")
    const user=page.locator("input[id=username]")
    await user.fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.click(".decorativeSubmit")

})



test.fixme(`Test annotation without any annotations`,async({page})=>{

   await page.goto("http://leaftaps.com/opentaps/control/main")
    const user=page.locator("input[id=username]")
    await user.fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.click(".decorativeSubmit")

})


test.fail(`Test annotation with fail`,async({page,browserName})=>{
    
    test.slow(browserName=="chromium",'slown the execution for chromium browser') 
   await page.goto("http://leaftaps.com/opentaps/control/main")
    const user=page.locator("input[id=username]")
    await user.fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.click(".decorativeSubmit")

})