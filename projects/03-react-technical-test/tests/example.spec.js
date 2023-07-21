// @ts-check
import { expect, test } from '@playwright/test'
// import { URL_LOCAL } from "../src/const/const";

const URL_LOCAL = 'http://localhost:5173/'

test('app show random phrase and image of cats', async ({ page }) => {
  await page.goto(URL_LOCAL)

  await expect(page).toHaveTitle(/Gatitos/)
})
