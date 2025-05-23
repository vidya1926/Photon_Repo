import test from "@playwright/test";

test(`StorageState`,async({page})=>{    
    await page.goto("http://leaftaps.com/opentaps/control/main")
    const user=page.locator("input[id=username]")
    await user.fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.click(".decorativeSubmit")
    await page.context().storageState({path:"data/lf_login.json"})
   })