import test, { Page } from '@playwright/test'


test(`Handling window`, async ({context, page }) => {

    await page.goto("https://www.amazon.in/")
    const searchBox = page.locator("#twotabsearchtextbox")
    await searchBox.fill("Mobiles")
    await searchBox.press("Enter")
//create a promise 
//act on the element
//resolve the promise
//sequential approach
    const newPage= context.waitForEvent('page')
    page.locator("(//span[contains(text(),'Samsung')])[1]").click()   
    const newTab=await newPage

   console.log(await newTab.locator(".a-price-whole").first().innerText())

   await page.bringToFront() // to get back to the required page
   await searchBox.clear()
   await searchBox.fill("Bluetooth")
})

test(`Handling Window with concurrent approach`,async({context,page})=>{

    await page.goto("https://leafground.com/window.xhtml")

    const[multiplePromises]=await Promise.all([
        context.waitForEvent('page'),
        page.getByText("Open Multiple",{exact:true}).click()
        //context.waitForEvent('page')
        //ele.click()
    ])
    //[]=[pro1,pr2,pr3]

    const allPages= multiplePromises.context().pages()
    console.log(allPages.length)

    await page.waitForTimeout(3000)
    console.log(await allPages[1].title())
    await page.waitForTimeout(4000)
    let tab:any

     for(let i=0;i<allPages.length;i++){
          const title= await allPages[i].title()
                  if(title==="Dashboard"){
            tab=allPages[i]
          }
     }
     await tab.locator("#email").fill("Vidya@gmail.com")
     await tab.waitForTimeout(3000)
})


test.only(`Using handler`,async({context,page})=>{


    await page.goto("https://leafground.com/window.xhtml")

     let alltabs:Page[]=[];

    context.on('page',newPage=>{
        alltabs.push(newPage)
    })
   await page.getByText("Open Multiple",{exact:true}).click()
   console.log(alltabs.length)

   console.log(await alltabs[0].title())
   console.log(await alltabs[1].title())

   await page.waitForTimeout(4000)


})