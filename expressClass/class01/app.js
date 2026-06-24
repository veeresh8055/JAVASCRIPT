// create server 
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
   res.send('server / route')
})

app.listen(3333,()=>{
    console.log('sever sratredd')
})