var express = require("express");
var router = express.Router();
const { protect, isAdmin } = require("../middleware/authMiddleware");
const {
  registerUser,
  authLogin,
  getUserProfile,
  updateUserProfile,
  getAllUser,
  deleteUser,
} = require("../controller/userController");

// 1.Register a new user
// @desc: Register a new user
// @route: POST /api/users
// @access: Public - return token
router.post("/register", registerUser);

// 2. Login
// @desc: User can login to system
// @route: POST /api/users/login
// @access: Public - return token
router.post("/login", authLogin);

// 3. Get Profile user
// @desc: Get user profile
// @route: GET /api/users/profile
// @access: Private - Su dung token
router.get("/profile", protect, getUserProfile);

// 4.Update Profile user
// @desc: update user profile
// @route: PUT /api/users/profile
// @access: Private
router.put("/update", protect, updateUserProfile);

// 5. Get all users
// @desc: Get all users
// @route: GET /api/users
// @access: Private/admin
router.get("/", protect, isAdmin, getAllUser);

// 6. Delete user
// @desc: Delete user
// @route: DELETE /api/users/:id
// @access: Private/admin
router.delete("/", protect, isAdmin, deleteUser);

module.exports = router;
