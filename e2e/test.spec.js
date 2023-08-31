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

test('win game', async ({ page }) => {
  await page.goto('http://localhost:3000/test');
  await page.getByRole('button', { name: 'Start Game' }).click();
  await page.getByRole('button').locator('nth=4').click();
  await page.getByRole('button').locator('nth=5').click();
  await page.getByRole('button').locator('nth=6').click();
  await page.getByRole('button').locator('nth=7').click();
  await page.getByRole('button').locator('nth=9').click();
  await page.getByRole('button').locator('nth=11').click();
  await page.getByRole('button').locator('nth=12').click();
  await page.getByRole('button').locator('nth=13').click();
  await page.getByRole('button').locator('nth=14').click();
  await page.getByRole('button').locator('nth=15').click();
  await page.getByRole('button').locator('nth=16').click();
  await page.getByRole('button').locator('nth=17').click();
  await page.getByRole('button').locator('nth=18').click();
  await page.getByRole('button').locator('nth=19').click();
  await page.getByRole('button').locator('nth=20').click();
  await page.getByRole('button').locator('nth=21').click();
  await page.getByRole('button').locator('nth=22').click();
  await page.getByRole('button').locator('nth=23').click();
  await page.getByRole('button').locator('nth=25').click();
  await page.getByRole('button').locator('nth=26').click();
  await page.getByRole('button').locator('nth=28').click();
  await page.getByRole('button').locator('nth=29').click();
  await page.getByRole('button').locator('nth=30').click();
  await page.getByRole('button').locator('nth=31').click();
  await page.getByRole('button').locator('nth=32').click();
  await page.getByRole('button').locator('nth=33').click();
  await page.getByRole('button').locator('nth=34').click();
  await page.getByRole('button').locator('nth=35').click();
  await page.getByRole('button').locator('nth=36').click();
  await page.getByRole('button').locator('nth=38').click();
  await page.getByRole('button').locator('nth=39').click();
  await page.getByRole('button').locator('nth=40').click();
  await page.getByRole('button').locator('nth=41').click();
  await page.getByRole('button').locator('nth=42').click();
  await page.getByRole('button').locator('nth=44').click();
  await page.getByRole('button').locator('nth=45').click();
  await page.getByRole('button').locator('nth=46').click();
  await page.getByRole('button').locator('nth=47').click();
  await page.getByRole('button').locator('nth=48').click();
  await page.getByRole('button').locator('nth=49').click();
  await page.getByRole('button').locator('nth=51').click();
  await page.getByRole('button').locator('nth=52').click();
  await page.getByRole('button').locator('nth=53').click();
  await page.getByRole('button').locator('nth=54').click();
  await page.getByRole('button').locator('nth=55').click();
  await page.getByRole('button').locator('nth=56').click();
  await page.getByRole('button').locator('nth=57').click();
  await page.getByRole('button').locator('nth=58').click();
  await page.getByRole('button').locator('nth=60').click();
  await page.getByRole('button').locator('nth=61').click();
  await page.getByRole('button').locator('nth=62').click();
  await page.getByRole('button').locator('nth=63').click();
  await page.getByRole('button').locator('nth=64').click();
  await page.getByRole('button').locator('nth=65').click();

  await page.getByRole('button').locator('nth=3').click({ button: 'right' });
  await page.getByRole('button').locator('nth=8').click({ button: 'right' });
  await page.getByRole('button').locator('nth=10').click({ button: 'right' });
  await page.getByRole('button').locator('nth=24').click({ button: 'right' });
  await page.getByRole('button').locator('nth=27').click({ button: 'right' });
  await page.getByRole('button').locator('nth=37').click({ button: 'right' });
  await page.getByRole('button').locator('nth=43').click({ button: 'right' });
  await page.getByRole('button').locator('nth=50').click({ button: 'right' });
  await page.getByRole('button').locator('nth=59').click({ button: 'right' });
  await page.getByRole('button').locator('nth=66').click({ button: 'right' });

  const loseMessage = page.getByText('You Won!');
  await expect(loseMessage).toBeVisible();
});
