let  { Schema , model  } = require("mongoose")

let postSchema = Schema({
    post:{
        type:String ,
        required:true
    },
    name:{
        type:String,
        required:true,
        minLength:3
    },
    description:{
        type:String,
        required:true,
        minLength:10
    },
    author:{
        type:String,
        required:true,
        minLength:3
    }
})

module.exports = model("posts" , postSchema)