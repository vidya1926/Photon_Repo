import test, { expect } from '@playwright/test'
test(`visual regression Testing`,async({page})=>{
  await page.goto("http://www.testleaf.com")
 // const ss=await page.screenshot({path:"sanpshots/testleaf.png"})
  await expect(page).toHaveScreenshot()
})