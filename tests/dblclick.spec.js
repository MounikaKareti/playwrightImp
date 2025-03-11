import{test,expect} from '@playwright/test'
test('dbl',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.dblclick("button[ondblclick='myFunction1()']");
    await page.waitForTimeout(3000);
})