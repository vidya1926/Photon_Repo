import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('demoSalesmanager');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#label')).toContainText('CRM/SFA');
  await page.getByRole('link', { name: 'CRM/SFA' }).click();
  

});