class HomePage{
        /** @param {import('@playwright/test').Page} page */
    constructor(page){
        this.homeBtn= page.locator("//a[contains(@href,'Home')]")
        this.orgBtn=page.locator("//td[@class='tabUnSelected']/child::a[contains(.,'Organizations')]")
        this.contactBtn=page.locator("//td[@class='tabUnSelected']/child::a[contains(.,'Contacts')]")

        this.adminBtn= page.locator("//img[contains(@src,'user')]/parent::td")
        this.signoutBtn=page.locator("//a[text()='Sign Out']")
    }

    async logoutFromApp(){

        await this.adminBtn.hover()
        await this.signoutBtn.click()
        
    }
}

export default HomePage