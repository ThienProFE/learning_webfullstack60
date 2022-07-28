const express = require("express");
const router = express.Router();
const StudentModel = require("../model/listStudent");

//API get all students
router.get("/", (req, res) => {
  const studentName = req.query.name;
  StudentModel.find({ name: studentName }).exec((err, student) => {
    if (err) {
      res.send("Khong the lay thong tin hoc vien");
    } else {
      console.log("Lay thong tin thanh cong", student);
      res.json(student);
    }
  });
});

//API get a student by ID
router.get("/:id", (req, res) => {
  StudentModel.findOne({ _id: req.params.id }).exec((err, student) => {
    if (err) {
      res.send("Co loi xay ra");
    } else {
      res.json(student);
    }
  });
});

//API update a student by ID
router.put("/:id", (req, res) => {
  StudentModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
      },
    },
    { new: true },
    (err, student) => {
      if (err) {
        res.send("Co loi xay ra khi update");
      } else {
        res.json(student);
      }
    }
  );
});

//Update a student by phone number
router.put("/", (req, res) => {
  StudentModel.findOneAndUpdate(
    { _phoneNumber: req.params.phoneNumber },
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
      },
    },
    { new: true },
    (err, student) => {
      if (err) {
        res.send("Co loi xay ra khi update");
      } else {
        res.json(student);
      }
    }
  );
});

//Delete a student by ID
router.delete("/:id", (req, res) => {
  StudentModel.deleteOne({ _id: req.params.id }, (err, student) => {
    if (err) {
      res.send("Co loi xay ra khi delete");
    } else {
      res.json(student);
    }
  });
});

//API create a new Student
router.post("/", (req, res) => {
  const student = new StudentModel();
  student.name = req.body.name;
  student.age = req.body.age;
  student.address = req.body.address;
  student.gender = req.body.gender;
  student.phoneNumber = req.body.phoneNumber;
  student.email = req.body.email;
  student.save((err, studentObject) => {
    if (err) {
      console.log("Loi", err);
      res.send("Loi luu thong tin");
    } else {
      console.log("Luu thong tin hoc vien thanh cong", studentObject);
      res.send(student);
    }
  });
});

module.exports = router;
