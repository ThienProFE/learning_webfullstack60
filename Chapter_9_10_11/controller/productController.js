const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// https://localhost:5000/api/products?keyword=sac-iphone&pageNumber=2
const getProducts = asyncHandler(async (req, res) => {
  //Fix so luong san pham hien thi tren 1 trang
  const pageSize = 100;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword } }
    : {};
  const countProduct = await Product.countDocuments({ ...keyword });
  //Gia su co 20sp, dang o trang so 2, skip qua 10 sp dau, chi lay tu sp so 11 tro di
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
});

module.exports = { getProducts };
