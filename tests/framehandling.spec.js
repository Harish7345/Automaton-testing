import { test } from '@playwright/test';

test('Launch Flipkart', async ({ page }) => {

    await page.goto("https://practice-automation.com/iframes/");
    const frame = await page.frameLocator("#iframe-1");

    await frame.locator("//a[text()='MCP']").click();
    await frame.locator("//span[text()='Installation']").click();

    const frame1 = await page.frameLocator("#iframe-2");
    await frame1.locator("//span[text()='Documentation']").click();
    await frame1.locator("#m-documentationwebdriver").click();

})
