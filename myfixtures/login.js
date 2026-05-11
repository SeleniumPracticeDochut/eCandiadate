import {test as base} from '@playwright/test'
import LoginPage from "../pom/login"
import commondata from "../testdata/commondata.json"

export const test=base.extend({

    doctorlogin: async ({page},use)=>{
        const lpage = new LoginPage(page)
        const url = commondata.url
        const usn = commondata.usn
        const pwd = commondata.pwd

        await page.goto(url)
        await lpage.loginToApp(usn, pwd)
        await use(page)

    },
    patientlogin: async ({page},use)=>{
        const lpage = new LoginPage(page)
        const url = commondata.url
        const usn = commondata.usn
        const pwd = commondata.pwd

        await page.goto(url)
        await lpage.loginToApp(usn, pwd)
        await use(page)

    },
    nurselogin: async ({page},use)=>{
        const lpage = new LoginPage(page)
        const url = commondata.url
        const usn = commondata.usn
        const pwd = commondata.pwd

        await page.goto(url)
        await lpage.loginToApp(usn, pwd)
        await use(page)

    }

})

