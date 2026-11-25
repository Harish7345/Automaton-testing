# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames2.spec.js >> Locators
- Location: tests\frames2.spec.js:3:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//img[contains(@data-src,\'JMeterTraining\')]')

```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | 
  3  | test('Locators', async({page})=>{
  4  |     
  5  |     await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
  6  |     const frame = await page.frameLocator("//iframe[@src='https://www.globalsqa.com/trainings/']");
  7  | 
> 8  |     await page.locator("//img[contains(@data-src,'JMeterTraining')]").click();
     |                                                                       ^ Error: locator.click: Target page, context or browser has been closed
  9  |     
  10 | 
  11 | })
```