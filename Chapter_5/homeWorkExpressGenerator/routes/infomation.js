const express = require("express");
const Joi = require("joi");
const router = express.Router();

router.post("/", (req, res) => {
  const { error } = validateInfomation(req.body);
  if (error) return res.render("index", { error: error });
  const { body } = req;
  res.render("infomation", { body });
});

function validateInfomation(info) {
  const schema = Joi.object({
    fname: Joi.string().pattern(new RegExp("^[a-zA-Z ]{3,}$")).required(),
    lname: Joi.string().pattern(new RegExp("^[a-zA-Z ]{3,}$")).required(),
    birthday: Joi.string().pattern(new RegExp("^[0-9]{4}$")).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
    phone: Joi.string().pattern(new RegExp("^[0-9]{10,12}$")).required(),
    gender: Joi.string().valid("Male", "Female").required(),
  });
  return schema.validate(info);
}

module.exports = router;
