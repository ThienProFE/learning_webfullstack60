const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Lop WebFullStack 60" });
});

module.exports = router;
