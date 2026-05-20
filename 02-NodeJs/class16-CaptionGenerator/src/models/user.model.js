import mongoose from "mongoose";

//creating the user Schema 
const userSchema = new mongoose.Schema({
    username:{type:String , unique:true },
    password:{type:String}
})

//creating the uderModel 
const userModel = mongoose.model("user" , userSchema)


export default userModel ; 
