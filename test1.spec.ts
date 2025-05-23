import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
});