//read the data 
//process.env.username

console.log(process.env.username)
import test from '@playwright/test'
import dotenv from 'dotenv'

const filename=process.env.file || 'prod'
dotenv.config({path:`data/${filename}.env`})

console.log(process.env.LT_Username)



test(`Read Env data `,async({page})=>{
   
    await page.goto("http://leaftaps.com/opentaps/control/main")
    const user=page.locator("input[id=username]")
    await user.fill(process.env.LT_Username as string)
    await page.locator("#password").fill(process.env.LT_Password as string)
    await page.click(".decorativeSubmit")

})
