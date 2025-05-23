import test from '@playwright/test'
test(`Using Playwright Locators`,async({context,page})=>{
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
    const prices = await page.locator("//div[@class='ProductDescription__priceHolder']//h3").allInnerTexts()
    console.log(prices)
    await page.waitForTimeout(1000)
    const newPage= context.waitForEvent('page')   
    await page.locator("(//div[@class='ProductModule__dummyDiv'])[1]").click()
    const newTab=await newPage
    await page.waitForTimeout(1000)
    await newTab.locator("(//div[@class='Button__base'])[3]").click()
    console.log(await newTab.locator(".DesktopHeader__cartCount").innerText()) 
    await newTab.locator(".DesktopHeader__cartCount").click()
    await page.waitForTimeout(2000)
    await page.screenshot({ path: 'checkout_page.png', fullPage: true });
    const pages = context.pages();
    for (const page of pages) {
    await page.close(); 
    }
   await context.close();
})