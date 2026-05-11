class SelectOrgPage{
            /** @param {import('@playwright/test').Page} page */

    constructor(page){
        this.page=page
        this.enterOrgnameTf=page.locator("//input[@id='search_txt']")
        this.searchBtn=page.locator("//input[@name='search']")
        
    }
    async clickonOrg(orgname){
         await this.enterOrgnameTf.fill(orgname)
         await this.searchBtn.click()
         await this.page.locator("//a[text()='"+orgname+"']").click()
    }

}

export default SelectOrgPage

   

