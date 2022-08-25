const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

// 1. Kiem tra token
const protect = asyncHandler(async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith("Bearer")) {
    //Check xem token co hop le hay khong
    // Bearer abcdddf.xdffdt.xfcdfd -> ['Bearer', 'abcdddf.xdffdt.xfcdfd'];
    const token = req.headers.authorization.split(" ")[1];
    const userVerify = jwt.verify(token, "min2019");
    await UserModel.findById({ _id: userVerify.id })
      .select("-password")
      .then((data) => {
        req.user = data;
        next();
      })
      .catch((err) => {
        res.status(500).json("Server is wrong");
      });
  } else {
    res.status(400).json("Not authorization or no token or token invalid");
  }
});

// 2. Kiem tra xem token co phai admin hay khong
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Member is not admin");
  }
};

module.exports = { protect, isAdmin };
