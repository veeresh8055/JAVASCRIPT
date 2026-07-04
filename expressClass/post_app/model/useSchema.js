const {Schema , model } = require('mongoose')

let userSchema = Schema({
    username: {
        type:String ,
        required:true,
        minLength:3
    },
    password:{
        type:String,
        required:true,
        minLength:3
    }
})

module.exports = model("users" , userSchema )