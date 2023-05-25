import { test, expect } from '@playwright/test';

test('expect title to be displayed', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Minesweeper/i);
});
