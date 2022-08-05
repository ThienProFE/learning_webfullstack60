var express = require("express");
var router = express.Router();
const {
  registerValidation,
  loginValidation,
} = require("../validation/validate");
const User = require("../model/user_model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const verifyUserMiddleware = require("../middleware/authMiddleware");

// 1. Viet API dang ky nguoi dung
// - Kiem tra email da ton tai trong he thong chua?
// - Ma hoa password
// - Tao new User
router.post("/register", async (req, res) => {
  //validate users
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Kiem tra email da ton tai hay chua
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res
      .status(400)
      .send("Email exist in database. please try another email");
  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Tao user moi
  const newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = hashPassword; // Phai xu ly hashPassword (Ma hoa password)
  try {
    const user = await newUser.save();
    res.send(user);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// 2. Viet 1 API login vao he thong
// - Kiem tra email co dung voi thong tin luu  trong he thong khong?
// - Kiem tra password co dung khong?
// - Generate ra chuoi token (Dua tren secret string)
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Kiem tra email co dung khong
  const userLogin = await User.findOne({ email: req.body.email });
  if (!userLogin)
    return res.status(400).send("Khong tim thay user trong he thong");
  //Kiem tra password co dung khong
  const passLogin = await bcrypt.compare(req.body.password, userLogin.password);
  if (!passLogin) return res.status(400).send("Password incorect");
  // Generate ra chuoi token TH nhap email va password true
  const token = jwt.sign({ _id: userLogin._id }, "chuoibimatkhongduoctietlo");
  res.header("auth-token", token).send(token);
});

// 3. Viet 1 API - tra ve 1 chuoi string HelloWorld
// - Neu API nay gan chuoi token duoc generate tu buoc  2, thi tra ve HelloWorld
// - Neu API nay gan chuoi token fake, thi tra ve khong the truy cap
// - Neu API khong gan chuoi token, thi tra ve khong co quyen truy cap
// Tao ra 1 ham dung de check 3 gach dau dong ben tren - gan vao middleware
router.get("/", verifyUserMiddleware, (req, res) => {
  res.send("HelloWorld");
});

module.exports = router;
