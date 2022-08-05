var express = require("express");
var router = express.Router();
const { registerUser } = require("../controller/userController");

/* 1. Register a new user
//  @desc: User can login to system
//  @route: POST /api/users
//  @access: public - return token
*/

router.post("/", registerUser);

module.exports = router;
