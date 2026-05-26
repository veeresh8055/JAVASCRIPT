const app = require('./src/app.js')
const connectToDb = require('./src/db/db.js')
require('dotenv').config()

connectToDb()

app.listen(3000,()=>{
    console.log("Server Started in port 3000")
})