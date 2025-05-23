import test from '@playwright/test'


test(`Get frame count`, async ({ page }) => {
    await page.goto("https://www.oneindia.com/")
    await page.waitForLoadState('load')
    const allFrames = page.frames()
    console.log(allFrames.length)

    for (const frame of allFrames) {
        console.log(await frame.title())
    }

})

test(`Get frame count for leafground `, async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")
    await page.waitForLoadState('load')
    const allFrames = page.frames()
    console.log(allFrames.length)
    //allFrames[0] -->main page
    await allFrames[1].click("#Click")
    const frame1 = await allFrames[1].innerText("#Click")
    console.log(frame1)

    //nested frame
    await allFrames[4].click("#Click")
    const innerFrame = await allFrames[1].innerText("#Click")
    console.log(innerFrame)
})


test(`Handling frame using frameObject `, async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")
    const frmeElement = page.frame({ url: "https://leafgound.com/default.xhtml" })
    await frmeElement?.click("#Click")
    console.log(await frmeElement?.innerText("#Click"))


    //nested frame

    const outerFrame = page.frame({ url: "https://leafground.com/page.xhtml" })
    const allchildFrames = outerFrame?.childFrames()
    console.log(allchildFrames?.length)
    const innerframe = allchildFrames?.at(0)?.locator("#Click")
    console.log(await innerframe?.innerText())
    await innerframe?.click()
    console.log(await innerframe?.innerText())


    //if(!frameEle==null){click}else{null}
})


test(`Using frameLocator`, async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")

    const frameEle = page.frameLocator("(//h5[text()=' Click Me (Inside frame)']//following::iframe)[1]")
    const clicEle = frameEle.locator("#Click")
    console.log(await clicEle.innerText())
    await clicEle.click()
    console.log(await clicEle.innerText())

    const innerFrameEle = page.frameLocator("(//h5[text()=' Click Me (Inside Nested frame)']//following::iframe)[1]")
        .frameLocator("iframe")
    await innerFrameEle.locator("#Click").click()
    console.log(await innerFrameEle.locator("#Click").innerText())
})

test.only('handling alert', async ({ page }) => {

    
    page.once('dialog', async (dialog) => {
       await dialog.accept();
   });
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm', { timeout: 120000, waitUntil: 'domcontentloaded' });
    await page.frameLocator(`iframe[id='iframeResult']`).locator('//*[text()="Try it"]').click();
    await page.waitForTimeout(2000);
    const result = await page.frameLocator("iframe[id='iframeResult']").locator(`p[id="demo"]`).textContent()
    console.log(result);

});
