import mongoose from "mongoose";


const postSchema = new mongoose.Schema({

    image:String , 
    caption:String ,
    user:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"user"
    } 
})

const postModel = mongoose.model("users" , postSchema)

export default postModel;