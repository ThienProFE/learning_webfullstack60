//Viet code CRUD voi mongoDB su dung mongoose
//Create - Tao ra 1 cai oto
const express = require("express");
const router = express.Router();
const carModel = require("../model/car_model");

//API create new a car
router.post("/", (req, res) => {
  const car = new carModel();
  car.name = req.body.name;
  car.manufacture = req.body.manufacture;
  car.price = req.body.price;

  car.save((err, carObject) => {
    if (err) {
      res.send("Loi luu thong tin oto");
    } else {
      console.log("Luu thong tin oto thanh cong", carObject);
      res.send(car);
    }
  });
});

//API get all car ten chinh xac
router.get("/", (req, res) => {
  const carName = req.query.name;
  CarModel.find(
    { name: carName }.exec((err, cars) => {
      if (err) {
        res.send("Khong the lay thong tin car");
      } else {
        console.log("Lay thanh cong thong tin tat ca oto", cars);
        res.json(cars);
      }
    })
  );
});

//API get theo ID
router.get("/:id", (req, res) => {
  CarModel.findOne({
    _id: req.params.id,
  }).exec((err, car) => {
    if (err) {
      res.send("Co loi xay ra...");
    } else {
      res.json(car);
    }
  });
});

//API update car by ID
router.put("/", (req, res) => {
  CarModel.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: { name: req.body.name } },
    { upsert: true },
    (err, car) => {
      if (err) {
        res.send("Loi");
      } else {
        res.send(car);
      }
    }
  );
});

module.exports = router;
