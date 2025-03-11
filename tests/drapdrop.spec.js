import{test,expect} from '@playwright/test'
test('Dragdrop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let drag=await page.locator("#draggable");
    let drop=await page.locator("#droppable");
    await drag.dragTo(drop);
})