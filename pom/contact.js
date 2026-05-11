import SelectOrgPage from './selectOrg'

class ContactPage{
            /** @param {import('@playwright/test').Page} page */
    constructor(page){

        this.page=page
        this.addContactBtn= page.locator("//img[contains(@title,'Create Contact')]")
        this.lastNameTf=page.locator("//input[@name='lastname']")
        this.selectOrgBtn=page.locator("//td[contains(.,'Organization Name')]/following-sibling::td/child::img[@title='Select']")
        this.saveBtn=page.locator("(//input[@title='Save [Alt+S]'])[1]")

    }   


    async createContact(lastname, orgname){

        await this.addContactBtn.click()
        await this.lastNameTf.fill(lastname)
        let [page2]= await Promise.all([
            this.page.waitForEvent('popup'),
            this.selectOrgBtn.click()
        ])

        let selorg= new SelectOrgPage(page2)
        await selorg.clickonOrg(orgname)
        await this.saveBtn.click()

    }
}
export default ContactPage