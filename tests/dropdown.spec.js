import { test } from '@playwright/test';

test('SimpleDropdown', async ({ page }) => {
    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.locator('//button[@data-target="simple-dropdown"]').click();
    await page.locator('#simple-dropdown select').selectOption({value: 'option2'});

});

test('MultiDropdown', async ({page})=>{

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByRole('button',{name: 'Multi-Select'}).click();
    await page.locator('#multi-select-dropdown select').selectOption(['option1', 'option2', 'option3']);

});