import {test} from '@playwright/test'

test.only("storage state patient",async ({page})=>{

    await page.goto("http://106.51.82.61:9007/")
    await page.getByPlaceholder("Email").fill("patient556677@gmail.com")
    await page.getByPlaceholder("Password").fill("patient556677@gmail.com")
    await page.getByRole('button' , {name: "Login"}).click()

    await page.waitForURL("http://106.51.82.61:9007/index.php?patient")

    await page.context().storageState({
        path:'.auth/p.json'
})

})

test("storage state doctor",async ({page})=>{

    await page.goto("http://106.51.82.61:9007/")
    await page.getByPlaceholder("Email").fill("patient556677@gmail.com")
    await page.getByPlaceholder("Password").fill("patient556677@gmail.com")
    await page.getByRole('button' , {name: "Login"}).click()

    await page.waitForURL("http://106.51.82.61:9007/index.php?patient")

    await page.context().storageState({
        path:'.auth/p.json'
    })

console.log("how are you")
console.log("how are you2")

})