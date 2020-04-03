const express = require("express"),
  app = express();

//EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});


