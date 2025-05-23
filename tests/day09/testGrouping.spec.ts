import test from '@playwright/test'


test.describe(`Group:1`,{tag:"@group1"},async()=>{ 

test.describe.configure({mode:"serial",retries:1})

    test(`LoginFunctionality`,{tag:"@regression"},async({page})=>{
    
    test.step("Loaded the url",async()=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    })

     
    test.step("Entered the credentials",async()=>{
    const user=page.locator("input[id=username]")
    await user.fill("demoCSR")
  
    await page.locator("#password").fill("crmsfa")
      })

       test.step("Login button is clicked Suceessfully",async()=>{
    await page.click(".decorativeSubmit")
       })
    })
         
    test(`CreateLead`,{tag:"@smoke,@regression"},async({page})=>{

    
    await page.goto("http://leaftaps.com/opentaps/control/main")
    const user=page.locator("input[id=username]")
    await user.fill("demoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.click(".decorativeSubmit")
    await page.locator("text=CRM/SFA").click()
    await page.locator("//a[text()='Leads']").click()

    })

})


// test.describe(`Group:2`,async()=>{ 

//     test.describe.configure({mode:"parallel"})
//     test(`Login Functionality_grp2`,async({page})=>{
//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     const user=page.locator("input[id=username]")
//     await user.fill("demoCSR")
//     await page.locator("#password").fill("crmsfa")
//     await page.click(".decorativeSubmit")

//     })
         
//     test(`CreateLead_grp2`,async({page})=>{
//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     const user=page.locator("input[id=username]")
//     await user.fill("demoCSR")
//     await page.locator("#password").fill("crmsfa")
//     await page.click(".decorativeSubmit")
//     await page.locator("text=CRM/SFA").click()
//     await page.locator("//a[text()='Leads']").click()

//     })

// })

