// create server 
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.listen(3000,(err)=>{
    if(err) throw err ;
    console.log('server started at port 3000')
})