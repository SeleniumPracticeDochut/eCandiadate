import {test} from "@playwright/test"
import LoginPage from "../pom/login"
import HomePage from "../pom/home"
import OrganizationPage from "../pom/org"
import ContactPage from "../pom/contact"
import commondata from "../testdata/commondata.json"
test("login only", async({page})=>{

    let lpage= new LoginPage(page)
    let hpage= new HomePage(page)
    let opage= new OrganizationPage(page)
    let cpage= new ContactPage(page)

    let urlis=commondata.url
    let usnis=commondata.usn
    let pwdis=commondata.pwd

    let randomNum = Math.floor(Math.random() * 1000);
    let orgname="githuborganization"+ randomNum
    let address="microsoft"
    let lastname= "microsoft"+randomNum

    await page.goto(urlis)
    await lpage.loginToApp(usnis,pwdis)
    await hpage.homeBtn.click()
    await hpage.orgBtn.click()
    await opage.createOrg(orgname,address)

    await hpage.contactBtn.click()
    await cpage.createContact(lastname,orgname)

})


