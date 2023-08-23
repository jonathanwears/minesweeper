/* eslint-disable no-await-in-loop */
import { test, expect } from '@playwright/test';

test('expect title to be displayed', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Minesweeper/i);
});

test('lose Game', async ({ page }) => {
  await page.goto('http://localhost:3000/test');
  await page.getByRole('button', { name: 'Start Game' }).click();

  await page.getByRole('button').locator('nth=3').click();
  const loseMessage = page.getByText('aww you Lost!');
  await expect(loseMessage).toBeVisible();
});
