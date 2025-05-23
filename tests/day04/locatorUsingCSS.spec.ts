import test from "@playwright/test";

test('Basic css',async({page})=>{
     let password="#password"
     let pwdValue="crmsfa"
     await page.goto("http://leaftaps.com/opentaps/control/main")     
     await page.locator(".inputLogin[id=username]").fill("demoCSR")
    //await page.locator(".inputLogin[id=password]").fill("crmsfa")
     await page.fill(password,pwdValue)
     await page.locator(".decorativeSubmit").click()
     console.log(await page.title())
     await page.locator("text=CRM/SFA").click()
     await page.locator("//a[text()='Leads']").click()
    console.log(await page.title())

     
})
