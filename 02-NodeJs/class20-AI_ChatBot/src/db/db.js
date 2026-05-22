import mongoose from "mongoose";

async function connectToDB(){
  try{

      await mongoose.connect(process.env.MONGODB_URI)
      
      console.log("DB Connected..")

    }catch(err){
        console.log("Error in connecting DB  "+err)
    }
}

export default connectToDB;