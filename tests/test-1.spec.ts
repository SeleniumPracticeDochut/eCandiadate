import {test} from '@playwright/test'

test("slider",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

let left = page.locator("//div[@id='slider-range']/span[1]")
let right = page.locator("//div[@id='slider-range']/span[2]")
let amount= page.locator("//input[@id='amount']")
console.log(await amount.inputValue())

await left.click()
for(let i=0;i<25;i++){
  await page.keyboard.press('ArrowRight')
}

await right.click()
for(let i=0;i<100;i++){
  await page.keyboard.press('ArrowRight')
}

await page.waitForTimeout(2000)

console.log(await left.getAttribute("style"))
console.log(await right.getAttribute("style"))



})

test.only("handling alerts",async({page})=>{

await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")
await page.waitForLoadState()

})