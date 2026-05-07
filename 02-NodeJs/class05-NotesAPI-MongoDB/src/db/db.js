
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

const MONGODB_URL = process.env.MONGODB_CONNECTION_STRING;

async function connToDB() {
    mongoose.connect(
           MONGODB_URL
        )
        .then(()=>{
            console.log("✅ Connected to MongoDB");

        })

   
}

module.exports = connToDB;