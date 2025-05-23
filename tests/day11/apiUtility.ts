import { APIRequestContext } from "@playwright/test";
import { faker } from '@faker-js/faker'

let id: any
let accessToken: any
let tokenType: any
let instUrl: any
export async function generateToken(request: APIRequestContext) {

    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
                "client_secret": "149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
                "username": "vidyar@testleaf.com",
                "password": "Sales@123"
            }

        })

    const responseBody = await response.json()
    accessToken = responseBody.access_token
    instUrl = responseBody.instance_url
    tokenType = responseBody.token_type
    return {
        accessToken,
        instUrl,
        tokenType
    }
}
//for create a resourse

export async function createResource(request: APIRequestContext, endpoint: string) {
    await generateToken(request)
    const response = await request.post(`${instUrl}${endpoint}`, {
        headers: {
            "Authorization": `${tokenType} ${accessToken}`,
            "Content-Type": "application/json"
        },
        data: {
            "Lastname": faker.person.lastName(),
            "company": faker.company.buzzNoun()
        }
    })
    const leadInfo = await response.json()
    console.log(leadInfo)
    return id = leadInfo.id
}
export async function fetchResource(request: APIRequestContext, endpoint: string) {
    await generateToken(request)
    const response = await request.get(`${instUrl}${endpoint}${id}`, {
        headers: {
            "Authorization": `${tokenType} ${accessToken}`,
            "Content-Type": "application/json"
        },
    })
    const leadInfo = await response.json()
    return leadInfo.LastName

}