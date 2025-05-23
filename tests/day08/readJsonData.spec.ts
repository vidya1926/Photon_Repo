import test from '@playwright/test'
import loginInfo from '../../data/credentials.json'
import fs from 'fs'
import path from 'path'


for(const login of loginInfo){

test(`Read Json directly ${login.TestCaseId}`,async({page})=>{
 
    await page.goto("http://leaftaps.com/opentaps/control/main")
    const user=page.locator("input[id=username]")
    await user.fill(loginInfo[0].username)
    await page.locator("#password").fill(login.passowrd)
})
}

const loginCreds=JSON.parse(fs.readFileSync(path.resolve(__dirname,"../../data/credentials.json"),'utf-8'))

// loginCreds.forEach(element => {
//     console.log(element.TestCaseId)
// });

