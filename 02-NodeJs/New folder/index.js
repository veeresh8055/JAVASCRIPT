const express = require("express");
const app = express();
const os = require("os");


console.log(os.hostname())
console.log(os.freemem());
console.log(os.totalmem());




app.use(function (req , res ,next){
    console.log('Its a middleware ')
    next();
})

app.use( function (req,res,err,next){
    console.error('its an error ');
    res.status(500).send("something broke")
});

app.get("/",function (req , res){
    res.send("hello its main route")
})


app.get("/profile",function (req , res){
    res.send("hello its profile route")
})



app.listen(3000,function(){
    console.log("server Running")
})
