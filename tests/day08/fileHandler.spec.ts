import test from '@playwright/test'
import path from 'path'

test(`FileUpload`,async({page,browserName})=>{
  

    await page.goto("https://leafground.com/file.xhtml")

    // await page.locator(".card").filter({hasText:"Basic Upload"})
    //           .filter({hasText:"Choose"}).locator("//input").fill("")

    //  await page.locator("//h5[text()='Basic Upload']/following::input").nth(1)
    //              .setInputFiles("data/FileInfo.txt")
    //              await page.waitForTimeout(3000)
    

    const fileUpload=page.waitForEvent('filechooser')
    page.locator("//h5[text()='Basic Upload']/following::input").nth(1).click()
    const fileChooser=await fileUpload
    await fileChooser.setFiles(path.join(__dirname,"../../data/FileInfo.txt"))
   // await fileChooser.isMultiple()
   //await fileChooser.setFiles(["data/FileInfo.txt",""])

    await page.waitForTimeout(3000)

    })


    test.only(`File Download`,async({page})=>{
        await page.goto("https://leafground.com/file.xhtml")
        const download=page.waitForEvent('download')
        page.locator("//span[text()='Download']").click()
        const downloader=await download
        await downloader.saveAs("data/" +downloader.suggestedFilename())

    })