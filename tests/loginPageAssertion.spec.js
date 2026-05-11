import {test,expect} from "@playwright/test"
import LoginPage from "../pom/login"
import commondata from "../testdata/commondata.json"
test("smoketest",async({page})=>{

    const lpage=new LoginPage(page)

    const url= commondata.url

    await page.goto(url)

    await expect(lpage.usernameTf).toBeEnabled()
    console.log("usernameTf is enable for testing");
    await expect( lpage.passwordTf).toBeEnabled()
    console.log("passwordTf is enable for testing");
    await  expect(lpage.loginBtn).toContainText("Login")
    await  expect(lpage.loginBtn).toBeEnabled()
    console.log("loginBtn is enable for testing");
    

     


    

})