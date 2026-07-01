const express = require("express");
const { dbConnection } = require("./config/db.js");
const contactModel = require('./model/contactSchema.js')
const env = require("dotenv");
const router = require("./routes/contactRouter.js");

env.config();
const app = express();
app.use(express.json())
//router 
app.use('/contact' , router)

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
