const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
// 1. Kiem tra xem token co hop le hay khong
// Client co gui kem token len hay khong

const protect = asyncHandler(async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith("Bearer")) {
    //Check tiep xem token co thuc su hop le hay khong
    try {
      const token = req.headers.authorization.split(" ")[1];
      const userVerify = jwt.verify(token, "matkhaumahoa");
      req.user = await User.findById(userVerify.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Token invalid");
    }
  } else {
    res.status(401);
    throw new Error("Not authorization or no token or token invalid");
  }
});

//2. Kiem tra user dang gui len token co phai la admin hay khong?
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Member is not admin");
  }
};

module.exports = { protect, isAdmin };
