import test, { expect }  from '@playwright/test'
import { createResource, fetchResource, generateToken } from './apiUtility'
import { enpoints } from '../../data/enPoints'

let lastname:any
test(`Create Resource using api`,async({request})=>{
    //await generateToken(request)
    const status=await createResource(request,enpoints.leads)
    console.log(status)
    lastname=await fetchResource(request,enpoints.leads)
    console.log(lastname)
})




test(`Update field`,async({page})=>{
 //load the url
 await page.goto("http://login.salesforce.com")
 //login with the credentials
 await page.fill("#username","vidyar@testleaf.com")
 await page.fill("#password","Sales@123")
 await page.click("#Login")
 //click on applauncher
 await page.click(".slds-icon-waffle")
 //Leads
 await page.getByText("View All",{exact:true}).click()
 await page.getByPlaceholder("Search apps or items...").fill("Leads")
 await page.getByText("Leads",{exact:true}).click()
 //serchbox(lastname)
await page.getByPlaceholder("Search this list...").fill(lastname)
})