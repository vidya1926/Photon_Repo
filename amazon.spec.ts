import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('textbox', { name: 'Type characters' }).click();
  await page.getByRole('textbox', { name: 'Type characters' }).fill('ULNMMA');
  await page.getByRole('textbox', { name: 'Type characters' }).press('Enter');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('textbox', { name: 'Type characters' }).click();
  await page.getByRole('textbox', { name: 'Type characters' }).fill('RCPTPB');
  await page.getByRole('textbox', { name: 'Type characters' }).press('Enter');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('Mobiles');
  await page.getByRole('button', { name: 'mobiles', exact: true }).click();
  await page.getByRole('link', { name: 'Sponsored Ad - SAMSUNG Galaxy' }).first().click();
  await page.goto('https://www.amazon.com/SAMSUNG-Smartphone-Processor-ProScaler-Manufacturer/dp/B0DP3D88NF/ref=sr_1_1_sspa?crid=1ZPNQ81RTPL7H&dib=eyJ2IjoiMSJ9.FfGnFXMXJRGGonSHFEzA0xyQvw6EW1wDNHChpuNHHOsNx473I-P4mVCKa7Hq2SNTlaDwGtyN-1e8KOW_XS0kGm4EADoHzOUxZGi9kNc0KKmf8vIrB5Pj2KAJ5nsnS7UUbUwrgHGmtSD6nGeUdeZoGHzc5Guy3QqY110c3fTT-PJcdBb5PW6zgkx_2SXHhj6FcJaipGRxTTwPI1pirh7CcKAFwTmLHLlVyVioSz7QZRTY84iG19xduwqjOAAYHrrdUr_FdhxqcaD7BwTaQsOKyAQ-n9kn2Bh4vj6-jeebhrM.lGzZbX7LVJMjfpvRpJWphJCv5PbYGEESXKaACt4BsKY&dib_tag=se&keywords=mobiles&qid=1747391849&sprefix=Mobiles%2Caps%2C338&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
  await page.getByRole('heading', { name: 'SAMSUNG Galaxy S25+ Cell' }).locator('#productTitle').click();
  await page.getByRole('heading', { name: 'SAMSUNG Galaxy S25+ Cell' }).locator('#productTitle').click();
  await page.getByRole('heading', { name: 'SAMSUNG Galaxy S25+ Cell' }).locator('#productTitle').click();
  await page.getByRole('heading', { name: 'SAMSUNG Galaxy S25+ Cell' }).locator('#productTitle').click();
  await page.goto('https://www.amazon.com/s?k=mobiles&crid=1ZPNQ81RTPL7H&sprefix=Mobiles%2Caps%2C338&ref=nb_sb_ss_ts-doa-p_2_7');
  await page.getByRole('link', { name: 'SAMSUNG Galaxy A16 5G A Series Cell Phone, Unlocked Android Smartphone, Large AMOLED Display, Durable Design, Super Fast Charging, Expandable Storage, US Version, 2025, Blue Black', exact: true }).click();
  await page.goto('https://www.amazon.com/SAMSUNG-Unlocked-Smartphone-Charging-Expandable/dp/B0DLHNWHRF/ref=sr_1_5?crid=1ZPNQ81RTPL7H&dib=eyJ2IjoiMSJ9.FfGnFXMXJRGGonSHFEzA0xyQvw6EW1wDNHChpuNHHOsNx473I-P4mVCKa7Hq2SNTlaDwGtyN-1e8KOW_XS0kGm4EADoHzOUxZGi9kNc0KKmf8vIrB5Pj2KAJ5nsnS7UUbUwrgHGmtSD6nGeUdeZoGHzc5Guy3QqY110c3fTT-PJcdBb5PW6zgkx_2SXHhj6FcJaipGRxTTwPI1pirh7CcKAFwTmLHLlVyVioSz7QZRTY84iG19xduwqjOAAYHrrdUr_FdhxqcaD7BwTaQsOKyAQ-n9kn2Bh4vj6-jeebhrM.lGzZbX7LVJMjfpvRpJWphJCv5PbYGEESXKaACt4BsKY&dib_tag=se&keywords=mobiles&qid=1747391950&sprefix=Mobiles%2Caps%2C338&sr=8-5&th=1');
});