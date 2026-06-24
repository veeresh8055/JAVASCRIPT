const express = require("express");

const app = express();

//application level middleware : every router req this middleware run
app.use((req, res, next) => {
  console.log("application middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get(
  "/about",
  // router level middleware
  (req, res, next) => {
    console.log("router middleware");
    next();
  },
  (req, res) => {
    res.send("About page");
  },
);

app.get("/login", (req, res) => {
  res.send("Login page ");
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("server started");
});
