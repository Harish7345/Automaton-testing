import {test} from '@playwright/test';

test('Locators', async({page})=>{

   await page.goto('https://www.amazon.in/');
   await page.locator('#twotabsearchtextbox').fill("Iphone 18 promax");
   await page.locator('#nav-search-submit-button').click();
})