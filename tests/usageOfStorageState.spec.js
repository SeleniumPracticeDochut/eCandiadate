import {test} from "@playwright/test"

test.use({
    storageState: '.auth/p.json'
})

test("login as patient",async ({page})=>{

    await page.goto("http://106.51.82.61:9007/index.php?patient")
    await page.waitForTimeout(5000)

    console.log(await page.url())

})