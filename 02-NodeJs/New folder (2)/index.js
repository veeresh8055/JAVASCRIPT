const express = require("express");
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')     


app.get("/",function (req,res){
    res.render("index")
});
app.get("/profile/:username/:city",function (req,res){
     let name =   req.params.username
     let city = req.params.city

    res.send(`Hey my name is ${name} and am from ${city}`)
})

app.listen(3000,function(){
    console.log("Server Running......")
})