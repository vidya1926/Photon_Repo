
import test from '@playwright/test'

import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

let loginInfo:any
test.beforeAll(`Reading data from CSV`,async()=>{

 loginInfo=parse(fs.readFileSync(path.join(__dirname,"../../data/login.csv"),'utf8'),{
   columns:true   
    })
  
})
test.use({storageState:"data/lf_login.json"})
test.beforeEach(`LoginFunctionality`,async({page})=>{  
    await page.goto("http://leaftaps.com/opentaps/control/login")
    //https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home
    await page.locator('text=CRM/SFA').click()
})

test(`CreateLead`,async({page})=>{
 
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
})


test(`Create Account`,async({page})=>{

    await page.locator("//a[text()='Accounts']").click()
    await page.locator("//a[text()='Create Account']").click()
})


test.afterEach(`Test status`,async()=>{
   console.log(test.info().status)
})

test.afterAll(`Log defect in jira`,async()=>{
    console.log("upload the attachments in jira")
})