const express = require("express")
const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("This is Home Page..!!")
})
app.get("/profile",(req,res)=>{
    res.send("This is Profile Page..!!")
})


app.listen(PORT , ()=>{
    console.log("Server Started")
})