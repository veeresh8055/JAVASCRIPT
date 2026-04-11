const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.send("Welcome to Main Page")
})

app.get('/home',(req,res)=>{
  res.send("Welcome to Home Page")
})


app.get('/about',(req,res)=>{
  res.send("Welcome to About Page")
})

app.listen(3000,()=>{
    console.log('Server started Expresssss...')
})
