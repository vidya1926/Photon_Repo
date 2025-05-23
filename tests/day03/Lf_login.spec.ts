import { chromium, expect,test } from "@playwright/test";

test(`login to salesforce`, async () => {
// Step 1: Launch the browser and load the URL

const browser=await chromium.launch({headless:false})
const context=await browser.newContext({
    recordVideo:{
        path:""
    }
})


await context.tracing.start()
await page.goto('https://login.salesforce.com/?locale=in')

let username= page.locator('#username');

await username.fill("vidyar@testleaf.com");

let password= page.locator('#password');

await password.fill("Sales@123");

await page.locator('#Login').click();

await page.waitForTimeout(2000)

let menuBar= page.locator('.slds-icon-waffle');

await menuBar.click();

await page.waitForTimeout(2000)

let viewAll= page.locator('button[aria-label="View All Applications"]');

await viewAll.click();

let search= page.locator('input[placeholder="Search apps or items..."]');

await search.fill("Marketing");

let marketing= page.locator('a[class="slds-text-heading_small"]');

await marketing.click();

await page.waitForTimeout(2000)

let leads= page.locator('a[title="Leads"]');

await leads.click();

await page.waitForTimeout(2000)

let newButton= page.locator('a[title="New"]');

await newButton.click();

await page.waitForTimeout(2000)

let salutation= page.locator('button[aria-label="Salutation"]');

await context.tracing.stop()
await salutation.click();

await page.waitForTimeout(2000)

let salutationText= page.locator('span[title="Mr."]');

await salutation.click();

let firstName= page.locator('input[placeholder="First Name"]');

await firstName.fill("Saranraj");

let lastName= page.locator('input[placeholder="Last Name"]');

await lastName.fill("Iyyanar");

let company= page.locator('input[name="Company"]');

await company.fill("Photon Interactive Ltd.");

let save= page.locator('button[name="SaveEdit"]');

await save.click();

await page.waitForTimeout(2000)

let success= page.locator('.slds-theme--success.slds-notify--toast.slds-notify.forceToastMessage');

await expect(success).toContainText(`Lead "Madhan Test" was created`);

// await page.waitForTimeout(20000)

//let leadName= page.locator('a[title="Saranraj Iyyanar"]')

//await leadName.click();

//await page.waitForTimeout(2000)

await page.locator("//*[text()='Submit for Approval']//following::lightning-primitive-icon").first().click();

//await page.locator("//*[text()='Convert']").click({timeout: 9000});

await page.locator("//*[text()='Convert']").click({timeout: 9000});

await page.locator("[title='Opportunity']").click({timeout: 9000});

await page.locator("//*[text()='Opportunity Name']//following::input").first().click({timeout: 5000});

await page.locator("//*[text()='Opportunity Name']//following::input").first().fill("Blendit");

await page.locator("//button[text()='Convert']").click();

await page.locator("//button[text()='Go to Leads']").click({timeout: 10000});

await page.locator('.slds-input').fill("Madhan", {timeout: 5000});

await page.locator('.slds-input').press("Enter", {timeout: 5000})

page.waitForTimeout(2000)

let leadName1 = await page.locator(`//*[text()='No items to display.']`).textContent();

console.log(leadName1)

expect(leadName1).toContain("No items to display.");

await page.locator('//*[text()="Opportunities"]').click();

await page.locator('.slds-input').fill("Test");

await page.locator('.slds-input').press("Enter");

await page.locator('//*[@title="Test"]').first().click()

});
