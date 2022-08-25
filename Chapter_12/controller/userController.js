const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const { hashPassword } = require("../utils/hashPassword");
const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const passwordHash = hashPassword(password);
  await UserModel.findOne({ email: email })
    .then((data) => {
      if (data) {
        res.status(400).json("User already exists");
      } else {
        return UserModel.create({
          name: name,
          email: email,
          password: passwordHash,
        });
      }
    })
    .then((data) => {
      res.status(200).json({
        success: "Register Success",
        token: generateToken(data._id),
      });
    })
    .catch((err) => {
      res.status(400).json("Connect server failed");
    });
});

const authLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  await UserModel.findOne({ email: email })
    .then(function (data) {
      if (data) {
        if (bcrypt.compareSync(password, data.password)) {
          res
            .status(200)
            .json({ success: "Login Success", token: generateToken(data._id) });
        } else {
          res.status(400).json("Password is wrong");
        }
      } else {
        res.status(400).json("Email don't exist");
      }
    })
    .catch((err) => {
      res.status(400).json("Connect server failed");
    });
});

const getUserProfile = asyncHandler(async (req, res) => {
  await UserModel.findById({ _id: req.user._id })
    .then((data) => {
      res.status(200).json({
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
      });
    })
    .catch((err) => {
      res.status(400).json("Info User not found");
    });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const passwordHash = hashPassword(password);
  await UserModel.findById({ _id: req.user._id })
    .then((data) => {
      UserModel.findOne({ email: email }).then((newdata) => {
        if (newdata) return res.status(400).json("Email is exist");
        data.name = name;
        data.email = email;
        data.password = passwordHash;
        data.save();
        res.status(200).json({
          success: "Update Success",
          name: data.name,
          email: data.email,
          token: generateToken(data._id),
        });
      });
    })
    .catch((err) => {
      res.status(400).json("Info User not found");
    });
});

const getAllUser = asyncHandler(async (req, res) => {
  await UserModel.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json("Server is wrong");
    });
});

const deleteUser = asyncHandler(async (req, res) => {
  await UserModel.findByIdAndDelete({ _id: req.query.id })
    .then((data) => {
      res.status(200).json("Complete delete");
    })
    .catch((err) => {
      res.status(400).json("Server is wrong");
    });
});

module.exports = {
  registerUser,
  authLogin,
  getUserProfile,
  updateUserProfile,
  getAllUser,
  deleteUser,
};
