const express = require('express')

const app = express()
app.listen(3000,()=>{
    console.log("The Server Started...!")
})
app.get('/home' , (req, res)=>{
    res.send("Home Page ")
})
app.get('/About',(req, res)=>{
    res.send('About Page ')
})