import{test,expect}from '@playwright/test'
test('mounse',async({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
   const button= await page.locator(".context-menu-one.btn.btn-neutral")
   await button.click({button:'right'});
   await page.waitForTimeout(4000);
})