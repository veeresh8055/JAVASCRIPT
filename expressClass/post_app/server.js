const express = require('express')
const { connectDb } = require('./config/db')
require('dotenv').config()

const app = express()

app.use(express.json())
connectDb()


app.listen(process.env.PORT , (err) => {
    if (err) throw err;
    console.log('server started at port :  ' + process.env.PORT)
})

