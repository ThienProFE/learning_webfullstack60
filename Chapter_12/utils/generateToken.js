const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "min2019", {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
