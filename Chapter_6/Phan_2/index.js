const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

//Su dung third party middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Su dung middleware - register public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(4000, () => {
  console.log("We starting success on port 4000");
});
