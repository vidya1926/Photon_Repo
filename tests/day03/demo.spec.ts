import test, { chromium, expect, firefox } from  '@playwright/test'


test(`Launchin browser`,async({context,page})=>{
     await page.goto("https://www.tatacliq.com/")
    await page.locator("//div[text()='Brands']").hover()
    await page.locator("//div[text()='Watches & Accessories']").hover()
    const casio =  page.locator("//div[@class='DesktopHeader__featureBrands']//div[text()='Casio']")
    await casio.hover()
    await casio.click()
    await page.waitForTimeout(2000)

    const dropdown = page.locator(".SelectBoxDesktop__hideSelect")
    await dropdown.selectOption({label:"New Arrivals"})
    await page.locator("(//div[@class='Accordion__filterAccHolder']//following-sibling::div//div[@class='CheckBox__base'])[1]").click()
    const prices = page.locator("//div[@class='ProductDescription__priceHolder']//h3").allInnerTexts()
    console.log(prices)
    await page.waitForTimeout(1000)
    const newPage= context.waitForEvent('page')   
    await page.locator("(//div[@class='ProductModule__dummyDiv'])[1]").click()
    const newTab=await newPage
    await page.waitForTimeout(1000)
    await newTab.locator("(//div[@class='Button__base'])[3]").click()
    console.log(newTab.locator(".DesktopHeader__cartCount").innerText()) 
    await newTab.locator(".DesktopHeader__cartCount").click()
    await page.waitForTimeout(2000)
    await page.screenshot({ path: 'checkout_page.png', fullPage: true });
    const pages = context.pages();
    for (const page of pages) {
    await page.close(); 
    }

     
})

import loginInfo from '../../data/credentials.json'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'


test(`Launchin 2nd browser`,async({page})=>{

const loginCred=parse(fs.readFileSync("data/creds.csv",'utf8'),{
    columns:true
  
     })

for (const login of loginInfo) {
    
         
        await page.goto("https://login.salesforce.com/?locale=in")
        const user=page.locator("#username")
        await user.fill(login.username)
        await page.locator("#password").fill(login.passowrd)
        await page.locator("#Login").click()
        await page.waitForTimeout(3000)        
        await page.locator(`//span[text()='App Launcher']`).click()
        await page.locator("//button[text()='View All']").click()
        await page.waitForTimeout(3000)
        await page.locator("//input[contains(@placeholder,'Search apps or items...')]").fill("Contacts")
        await page.locator("//a[@data-label='Contacts']").click()

        await page.locator("//div[@title='New']").click()

        //Fill in the lead details
        const dropdown = page.locator("//button[@aria-haspopup='listbox'  and  @name='salutation']")
        dropdown.click()
        await page.locator("//span[text()='Mr.']").click()
        for (const user of loginCred) {
        const fName =  page.locator("//input[@name='firstName']")
        await fName.fill(user.Firstname)
        const lName =  page.locator("//input[@name='lastName']")
        await lName.fill(user.Lastname)
        const email =  page.locator("//input[@name='Email']")
        await email.fill(user.EmailId)
        }
        await page.locator("(//input[@aria-haspopup='listbox'])[1]").click()
        await page.waitForTimeout(1000)
        await page.locator("//span[@title='Credits']").click()
        await page.locator("//button[@name='SaveEdit']").click()
        await page.waitForTimeout(1000)

        const element =  await page.locator("//*[@slot='primaryField']").innerText()
        expect(element).toContain(`nandha`)
       }
    })


