
import {test} from '@playwright/test';

test('Locators', async({page})=>{

   await page.goto('https://demoqa.com/text-box');
   await page.locator('#userName').fill("Harish");
   await page.locator('#userEmail').fill("lakshminaryanan11@gmail.com");
   await page.locator('#currentAddress').fill("G1, salims enrich enclave, porur");
   await page.locator('#permanentAddress').fill("G1, salims enrich enclave, porur");
   await page.locator('#submit').click();
})