import { expect } from '@playwright/test'

class OrganizationPage{
        /** @param {import('@playwright/test').Page} page */

    constructor(page){

        this.createOrgBtn= page.locator("//img[@title='Create Organization...']")
        this.orgnameTf= page.locator("//input[@name='accountname']")
        this.shippaddressTf= page.locator("//textarea[@name='ship_street']")
        this.saveBtn=page.locator("(//input[contains(@value,'Save')])[1]")
        this.createdOrg= page.locator("//span[@class='dvHeaderText']")
        this.orglist= page.locator("//span[@vtfieldname='accountname']/preceding-sibling::a")
        this.nextBtn= page.locator("(//a[@alt='Next'])[1]")

    }

    async createOrg(orgname,address){
       await this.createOrgBtn.click()
       await this.orgnameTf.fill(orgname)
       await this.shippaddressTf.fill(address)
       await this.saveBtn.click()

       await expect(this.createdOrg).toContainText(orgname)
       console.log(await this.createdOrg.innerText());
       
    }

}

export default OrganizationPage