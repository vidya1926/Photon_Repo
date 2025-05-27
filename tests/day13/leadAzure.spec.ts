import test from "@playwright/test";
import { logIssueInAzure } from "./createissueInAzure";

test('Create a defect in Azure',async({page})=>{
     let password="#password"
     let pwdValue="crmsfa"
     await page.goto("http://leaftaps.com/opentaps/control/main")     
     await page.locator(".inputLogin[id=username]").fill("demoCSR")
     await page.fill(password,pwdValue)
     await page.locator(".decorativeSubmit").click()
     console.log(await page.title())
     await page.locator("text=CRM/SFA").click() 

     await page.locator("//a[text()='Lead']").click()
     console.log(await page.title()) 
         await page.goBack()  
              console.log(await page.title()) 

      await page.goForward()
              console.log(await page.title())
              await page.waitForTimeout(3000)
              


})

test.afterEach(`Log issue in Azure board`,async({},testinfo)=>{  
    await logIssueInAzure(String(testinfo.title),String(testinfo.error?.message))

})