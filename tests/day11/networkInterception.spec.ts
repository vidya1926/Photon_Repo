import test from '@playwright/test'


test(`Managing API`,async({page})=>{

    page.on('request',request=>{
        console.log("##---Request---##", request.url(),request.postData(),request.headers())
    })

    page.on('response',res=>{
        console.log("##---Response---##",res.url(),res.status())
    })
  await page.goto("http://login.salesforce.com")
 //login with the credentials
 await page.fill("#username","vidyar@testleaf.com")
 await page.fill("#password","Sales@123")
 await page.click("#Login")
 //click on applauncher
})

test(`abort some api's`,async({page})=>{
    await page.route("***/**.{jpeg,png,svg,img}",route=>route.abort())
    await page.goto("https://www.salesforce.com/")
    await page.waitForTimeout(5000)

})

test.only(`Mocking api's`,async({page})=>{
   await page.goto("http://login.salesforce.com")
   await page.route("***/**.{jpeg,png,svg,img}",
    (route,request)=>{
      console.log(request.url())
       console.log(request.postData())
       console.log(request.headers())
    //  delete Headers['data']

    //mock the request
    route.continue({
        headers:{
             'accept-language': 'en',
        }
     })
     
     console.log(request.headers())

    })
 //login with the credentials
 await page.fill("#username","vidyar@testleaf.com")
 await page.fill("#password","Sales@123")
 await page.click("#Login")
 await page.waitForTimeout(6000)
})