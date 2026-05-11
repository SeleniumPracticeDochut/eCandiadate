import { test, expect } from "@playwright/test"
import LoginPage from "../pom/login"
import HomePage from "../pom/home"
import commondata from "../testdata/commondata.json"

test("check home page elements",{tag:["@smoke","@darsh"]} ,async ({ page }) => {

    const lpage = new LoginPage(page)
    const hpage = new HomePage(page)

    const url = commondata.url
    const usn = commondata.usn
    const pwd = commondata.pwd

    await page.goto(url)
    await lpage.loginToApp(usn, pwd)

    await expect.soft(hpage.homeBtn).toBeEnabled()
    await hpage.homeBtn.click()

    let status = await hpage.signoutBtn.isVisible()
    await expect.soft(status).toBe(false)
    await expect.soft(hpage.signoutBtn).toBeHidden()

    await expect.soft(hpage.adminBtn).toBeVisible()
    console.log(" adminBtn its visible");


    await expect.soft(hpage.orgBtn).toBeEnabled()
    console.log(" orgBtn its enabled");

    await expect.soft(hpage.contactBtn).toBeEnabled()
    console.log(" contactBtn its enabled");


})
