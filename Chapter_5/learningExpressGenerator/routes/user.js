const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { body } = req;
  //   console.log("body-data", body);
  res.render("userInfo", { body });
});

module.exports = router;
