import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('Visual comparison', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page).toHaveScreenshot();
});

test('Visual comparison 2', async ({ page }) => {
  await page.goto('http://localhost:4200/comp-two');
  await expect(page).toHaveScreenshot();
});

test('Visual comparison 3', async ({ page }) => {
  await page.goto('http://localhost:4200/comp-three');
  await expect(page).toHaveScreenshot();
});
