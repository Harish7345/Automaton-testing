import {test} from '@playwright/test';

test('Locators', async({page})=>{
    
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame = await page.frameLocator("//iframe[@src='https://www.globalsqa.com/trainings/']");

    await page.locator("//img[contains(@data-src,'JMeterTraining')]").click();
    

})