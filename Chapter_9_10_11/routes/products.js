const express = require("express");
const { getProducts } = require("../controller/productController");
const router = express.Router();

router.get("/", getProducts);

module.exports = router;
