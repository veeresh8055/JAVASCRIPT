import app from './src/app.js'
import dotenv from 'dotenv/config'
import connectToDB from './src/db/db.js';



connectToDB()




app.listen(3000,()=>{
    console.log("Server started at port 3000")
})