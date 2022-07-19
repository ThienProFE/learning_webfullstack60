const express = require("express");
const Joi = require("joi");
const listStudent = express.Router();

const students = [
  {
    id: 1,
    name: "Nguyen Van Thien",
    phoneNumber: "0346199449",
    email: "thienmitmin1@gmail.com",
    gender: "male",
    age: 28,
  },
  {
    id: 2,
    name: "Nguyen Thi Hue",
    phoneNumber: "0386434716",
    email: "thienmitmin2@gmail.com",
    gender: "female",
    age: 26,
  },
];

listStudent.get("/", (req, res) => {
  res.send(students);
});

listStudent.post("/", (req, res) => {
  const { error } = validateStudents(req.body);
  console.log("error", error);
  if (error) return res.status(400).send(error.details[0].message);
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
  };
  students.push(newStudent);
  res.send(students);
});

function validateStudents(student) {
  const schema = Joi.object({
    name: Joi.string().pattern(new RegExp("^[a-zA-Z ]{15,}$")).required(),
    phoneNumber: Joi.string().pattern(new RegExp("^[0-9]{10,12}$")).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
    gender: Joi.string().valid("male", "female", "unspecified").required(),
    age: Joi.number().integer().min(0).max(199).required(),
  });
  return schema.validate(student);
}

module.exports = listStudent;
