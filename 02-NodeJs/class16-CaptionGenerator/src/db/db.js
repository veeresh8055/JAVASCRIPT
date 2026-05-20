import mongoose  from "mongoose"
const connToDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("DB Connected..")
    })
}

export default connToDB;


