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
    location:{
        type:String,
        required:true,
        enum:["sim","phone","email"]
    }
})

module.exports = model('contacts',contactSchema)