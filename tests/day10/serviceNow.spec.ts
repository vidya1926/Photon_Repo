import { faker } from '@faker-js/faker'
import test, { chromium } from '@playwright/test'

let sysId:any
test(`Service now create resource`,async({request})=>{

//    const browser= await chromium.launch()
//    const context=await browser.newContext()
//    const request= context.request

 const response= await request.post("https://dev348063.service-now.com/api/now/table/incident",
        {
        headers:{
            "Authorization":"Basic YWRtaW46a2hPeW8lNTdDJFFD",
            "Content-Type":"application/json"
        },
        data:{
            "description":"Laptop issue"
        }

 })
 //pm.response.json()
const responseBody=await response.json()
 console.log(response.status())
 console.log(response.statusText())
 //endpoint, add authorization, payload 
 sysId=responseBody.result.sys_id
 console.log(sysId)

})

test(`Service now fetch resource`,async({request})=>{

 const response= await request.get(`https://dev348063.service-now.com/api/now/table/incident/${sysId}`,
        {
        headers:{
            "Authorization":"Basic YWRtaW46a2hPeW8lNTdDJFFD",
            "Content-Type":"application/json"
        },
       })

 //pm.response.json()

  const responseBody=await response.json()
 console.log(response.status())
 console.log(response.statusText())
})

test(`Service now update resource`,async({request})=>{

 const response= await request.patch(`https://dev348063.service-now.com/api/now/table/incident/${sysId}`,
        {
        headers:{
            "Authorization":"Basic YWRtaW46a2hPeW8lNTdDJFFD",
            "Content-Type":"application/json"
        },
        data:{
            "short_description":faker.lorem.sentence(2),
            "location":"India"
        }
        
       })

 //pm.response.json()

const responseBody=await response.json()
 console.log(response.status())
 console.log(response.statusText())
 console.log(responseBody)
})

test(`Service now delete resource`,async({request})=>{

 const response= await request.delete(`https://dev348063.service-now.com/api/now/table/incident/${sysId}`,
        {
        headers:{
            "Authorization":"Basic YWRtaW46a2hPeW8lNTdDJFFD",
            "Content-Type":"application/json"
        },       
        
       })

 //pm.response.json()
//const responseBody=await response.json() not applicable
 console.log(response.status())
 console.log(response.statusText())
})









