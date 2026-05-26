const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
     console.log("DB Connected ");

  } catch(err) {
    console.log("error in connecting DB.. ", err);
  }
}

module.exports = connectToDb;