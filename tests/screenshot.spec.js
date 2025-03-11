import{test,expect}from '@playwright/test'
test('first',async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.screenshot({path:'tests//screenshots'+Date.now()+'Fullpage.png',fullPage:true});
    await page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]").screenshot({path:'tests//screenshots'+Date.now()+'Element.png'});
    
    
})