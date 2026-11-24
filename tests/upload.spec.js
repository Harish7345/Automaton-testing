import { test } from '@playwright/test';

test('UploadFile', async ({ page }) => {

    await page.goto("https://uploadnow.io/");

    await page.locator('//input[@type="file"]')
        .setInputFiles('C:\\Users\\write\\OneDrive\\Pictures\\image_3.jpg');

    console.log("Message adding file: " + await page.locator('.cards_overlay_title__zKqBS').innerText());

    await page.getByRole('button', { name: 'Validate and upload' }).click();

    await page.getByRole('heading', { name: 'All done!' }).waitFor({ state: "visible" });

});