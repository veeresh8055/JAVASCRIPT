import mongoose from "mongoose";


const postSchema = new mongoose.Schema({

    image:String , 
    caption:String ,
    user:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"user"
    } 
})

const postModel = mongoose.model("user" , userSchema)

export default postModel;