const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "matkhaumahoa", {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
