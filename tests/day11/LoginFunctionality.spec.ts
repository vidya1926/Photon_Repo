import test from "@playwright/test";
import { Login } from "./login";

test(`Login using class and Object`,async({page})=>{

    let lfLogin=new Login(page)
    await lfLogin.loadUrl()
    await lfLogin.enterCredentials()
    console.log(await lfLogin.clickLogin())
  
})