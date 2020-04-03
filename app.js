const express = require("express"),
  app = express();

// dotenv
require("dotenv").config();

//EJS
app.set("view engine", "ejs");

// Static Files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("The QuickBites Server is Running.....");
});
