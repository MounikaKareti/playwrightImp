import{test,expect}from '@playwright/test'
test('click',async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
   const right= await page.locator("//span[@class='context-menu-one btn btn-neutral']")
   await right.click({button:'right'});
  
})
