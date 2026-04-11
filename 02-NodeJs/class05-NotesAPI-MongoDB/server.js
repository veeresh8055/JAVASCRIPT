const express = require("express");
const connToDB = require("./src/db/db.js");

const app = express();
app.use(express.json());

async function startServer() {
  try {
    await connToDB();
    app.listen(3000, () => {
      console.log("server started in port 3000");
    });
  } catch {
    process.exit(1);
  }
}

startServer();
