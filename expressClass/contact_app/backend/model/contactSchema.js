const {Schema , model } = require('mongoose')

const contactSchema = new Schema({
    fname :{
        type:String,
        required:true,
        minLengt:3
    },
    lname:{
        type:String,
        required:true
    },
    phoneNo :{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    location:{
        type:String,
        enum:["sim","phone","email"],
        default:"phone"
    }
})

module.exports = model('contacts',contactSchema)
