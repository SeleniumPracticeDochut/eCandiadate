import {test,expect} from "@playwright/test"
import LoginPage from "../pom/login"
import HomePage from "../pom/home"
import OrganizationPage from "../pom/org"
import commondata from "../testdata/commondata.json"
import excel from "exceljs"
import path from "path"
test("print org list", async ({page})=>{

    let lpage= new LoginPage(page)
    let hpage= new HomePage(page)
    let opage=new OrganizationPage(page)

    let url=commondata.url
    let usn=commondata.usn
    let pwd=commondata.pwd

    await page.goto(url)
    await lpage.loginToApp(usn,pwd)
    await hpage.homeBtn.click()
    await hpage.orgBtn.click()

    

    let allorg=[]

    while(true){

        await opage.orglist.first().waitFor()
        let pagedata=await opage.orglist.allTextContents()
        if (await opage.nextBtn.isDisabled()) {
        break;
    }

    // click next
    await opage.nextBtn.click();
    
    }









    let workbook= new excel.Workbook()
    const filePath = path.join(__dirname, "../testdata/OrgList.xlsx");

    await workbook.xlsx.readFile(filePath)

    let sheet= workbook.getWorksheet("Org")

    for(let text of data){
        let indexis= data.indexOf(text)
        sheet.getRow(indexis+1).getCell(1).value=text
    }

    await workbook.xlsx.writeFile(filePath)



    
    
    

})
