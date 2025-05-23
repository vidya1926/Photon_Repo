import { faker } from '@faker-js/faker'
import test from '@playwright/test'

let accessToken:any
let domain:any
let tokenType:any
let leadId:any
test(`generateToken`, async ({ request }) => {

    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
                "client_secret":"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
                "username": "vidyar@testleaf.com",
                "password": "Sales@123"
            }

        }  )

        const tokenInfo=await response.json()
        console.log(tokenInfo)
        accessToken=tokenInfo.access_token
        domain=tokenInfo.instance_url
        tokenType=tokenInfo.token_type

})
test(`Create account `,async({request})=>{
         const response=await request.post(`${domain}/services/data/v63.0/sobjects/Lead`,{
            headers:{
                "Authorization":`${tokenType} ${accessToken}`,
                "Content-Type":"application/json"
            },
            data:{
                "Lastname":faker.person.lastName(),
                "company":faker.company.buzzNoun()
            }
         })
         const accountsInfo=await response.json()
         leadId=accountsInfo.id
})



test(`Fetch account `,async({request})=>{
         const response=await request.get(`${domain}/services/data/v63.0/sobjects/Lead/${leadId}`,{
            headers:{
                "Authorization":`${tokenType} ${accessToken}`,
                "Content-Type":"application/json"
            },
          
         })
         const accountsInfo=await response.json()
         console.log(accountsInfo)

})