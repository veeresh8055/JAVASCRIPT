import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    lastActivity:{
        type:Date,
        default:Date.now
    }

},{
    timestamps:true
})

const chatModel = mongoose.model("chat",chatSchema)

export default chatModel ;