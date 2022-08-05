const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Couldn't finded token in system'");
  try {
    //verify
    const checkToken = jwt.verify(token, "chuoibimatkhongduoctietlo");
    req.user = checkToken;
    next();
  } catch (error) {
    res.status(400).send("Token incorect - Permission denied");
  }
};
