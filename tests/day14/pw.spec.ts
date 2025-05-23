import { test, expect } from "@playwright/test";
 
test("Assessment 3: Create dashboard and verify dashboard api", async ({
  page,
  request,
}) => {
  await page.goto("https://login.salesforce.com/");
 
  await page.fill("#username", "vidyar@testleaf.com");
  await page.fill("#password", "Sales@123");
  await page.locator("#Login").click();
  await page.waitForTimeout(3000);
 
  await page.locator(".slds-icon-waffle").click();
 
  await page.locator('button:has-text("View All")').click();
 
 await page.locator("//input[contains(@placeholder,'Search apps or items...')]").fill("Dashboards")
 
  //await page.locator("lightning-accordion-section p").click();
   await page.locator("//a[@data-label='Dashboards']").click()
  await page.locator("//div[@title='New Dashboard']").click();
 
  const frameEle = page.frameLocator("//iframe[@title='dashboard']");
  const dashboardNameTxtbox = frameEle.locator(
    "(//input[@class='slds-input'])[1]"
  );
  await dashboardNameTxtbox.fill("Om Dashboard");
 
  await frameEle.locator("#submitBtn").click();
  await page.waitForTimeout(3000);
 
  await frameEle.getByRole("button", { name: "Save" }).click(); // Example, update as needed
 
  await frameEle
    .locator("//div[@id='main']/div/div[1]/div[2]/div[2]/button")
    .click();
 
  const dashboardTitle = await frameEle
    .locator("h1>span.slds-page-header__title")
    .textContent();
  console.log(dashboardTitle);
 
  expect(dashboardTitle).toEqual("Om Dashboard");
  await page.waitForTimeout(3000);
 


})


  let accessToken: any;
  let domain: any;
  let tokenType: any;
 

  test.only(`Fetch Dashboard`,async({request})=>{
  const response = await request.post(
    `https://login.salesforce.com/services/oauth2/token`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      form: {
        grant_type: "password",
        client_id:
          "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
        client_secret:
          "149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
        username: "vidyar@testleaf.com",
        password: "Sales@123",
      },
    }
  );
  const tokenInfo = await response.json();
  console.log(tokenInfo);
  accessToken = tokenInfo.access_token;
  domain = tokenInfo.instance_url;
  tokenType = tokenInfo.token_type;
 
  //Get dashboard details
  const getResponse = await request.get(
    `${domain}/services/data/v59.0/sobjects/Dashboard`,
    {
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
        "content-Type": "application/json",
      },
    }
  );
  const dashboardInfo = await getResponse.json();

   const info=JSON.stringify(dashboardInfo)
  console.log(`"dashboardInfo:"${info}`);
  const dashboardId = dashboardInfo.recentItems[0].Id
  console.log(`"dashboardId:"${dashboardId}`);
 
//   })
//   //Delete dashboard
//   const deleteResponse = await request.delete(
//     `${domain}/services/data/v59.0/sobjects/Dashboard/${dashboardId}`,
//     {
//       headers: {
//         Authorization: `${tokenType} ${accessToken}`,
//         "content-Type": "application/json",
//       },
//     }
//   );
 
//   //const deleteResponseBody = await deleteResponse.json();
  
//  // console.log(deleteResponseBody);
//   const deleteStatus = deleteResponse.status();
  
// });

  })