
import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

const loginInfo=parse(fs.readFileSync(path.join(__dirname,"../../data/login.csv"),'utf8'),{
   columns:true   
    })

// for(const login of loginInfo){
//     test(`Read csv data ${login.TestCaseId}`,async({page})=>{     
//         await page.goto("http://leaftaps.com/opentaps/control/main")
//         const user=page.locator("input[id=username]")
//         await user.fill(login.username)
//         await page.locator("#password").fill(login.passowrd)
//     })
//     }


// loginInfo.forEach(element => {
//     console.log(element.TestcaseId)
// });