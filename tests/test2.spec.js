import {test} from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()


test("test1",()=>{
console.log(process.env.usn)
console.log(process.env.pwd)


})
