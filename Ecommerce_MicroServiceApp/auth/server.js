require('dotenv').config()
const app = require('./src/app.js')
const connectToDb = require('./src/db/db.js')

connectToDb()

app.listen(3000,()=>{
    console.log("Server Started in port 3000")
})
