var express = require("express");
var router = express.Router();
const {
  registerUser,
  authLogin,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUserById,
  getUserById,
  updateUserById,
} = require("../controller/userController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

/* 1. Register a new user
//  @desc: User can login to system
//  @route: POST /api/users
//  @access: public - return token
*/
router.post("/", registerUser);
router.post("/login", authLogin);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.get("/", protect, isAdmin, getAllUsers);
router.get("/", protect, isAdmin, deleteUserById);
router.get("/:id", protect, isAdmin, getUserById);
router.put("/:id", protect, isAdmin, updateUserById);

module.exports = router;
