const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Home page ");
});

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentsDb");
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

// schema creation
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
});
// create model
const stdModel = mongoose.model("students", studentSchema);

// insert data
stdModel.create({ name: "veeresh", age: 22 });

// find the data present in the database
async function findData() {
    await stdModel.find()

  .then((data) => console.log(data))
  .catch((err) => console.log(err));

}
findData()

app.listen(3000, () => {
  console.log("server started...!");
});
