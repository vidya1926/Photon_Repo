import test, { chromium, firefox } from '@playwright/test'


// test(`Launch default mode`,async()=>{
//    const browser= await chromium.launch({headless:false})
//    const context=await browser.newContext()
//    const page=await context.newPage()
//    await page.goto("http://www.google.com")
//         await page.waitForTimeout(3000)

// })



test(`Persistent Context`,async()=>{
     const context=await chromium.launchPersistentContext("./userdataDir",{headless:false,
        httpCredentials:{
            username:"",
            password:""
        }
     })
     const allpage=context.pages()

          console.log(allpage.length)

          await allpage[0].goto("http://www.google.com")
          await allpage[0].waitForTimeout(3000)


})