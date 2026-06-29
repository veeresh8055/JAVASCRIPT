const express = require("express");
const { dbConnection } = require("./config/db.js");
const {model } = require('./model/contactSchema.js')
// dotenv
const env = require("dotenv");
env.config();

const app = express();

dbConnection();
app.get("/", (req, res) => {
  res.send("Contact Aplication ...");
});

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`the server is running opn PORT : ${ process.env.PORT }`);
});

// contact App
// -> package.json
// -> basic server creation
// -> db connection
// -> protect the database
// -> CRUD data Operation
// -> Shema design
