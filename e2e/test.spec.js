import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Minesweeper/i);
});
