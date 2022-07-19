const express = require("express");
const listUsers = express.Router();

const users = [
  {
    id: 1,
    name: "Nguyen Van Thien",
    phoneNumber: "0346199449",
    email: "thienmitmin1@gmail.com",
    gender: "male",
    age: 28,
  },
  { id: 2, name: "Tran Minh Chinh" },
  { id: 3, name: "Nguyen Gia Khang" },
];
//Hoan thanh API - Tao 1 nmember moi
// - Su dụng postman -> POST
// - Validate:
// + name: Phải là string, ít nhất 15 ký tự, không được bao gồm số
// + phoneNumber: Phải là số, 10-12 ký tự
// +email: Đúng định dạng email ddd@g.
// +gender: Chỉ được truyền vào 3 loại: nam, nữ, không xác định
// + age: <200

listUsers.get("/", (req, res) => {
  res.send(users);
});

listUsers.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((listUsers) => listUsers.id === id);
  if (!user) {
    res.status(404).send("ID does not exist");
  }
  res.send(user);
});

listUsers.post("/", (req, res) => {
  const newUser = {
    id: parseInt(req.body.id),
    name: req.body.name,
  };
  users.push(newUser);
  res.send(users);
});

listUsers.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((listUsers) => listUsers.id === id);
  user.name = req.body.name;
  res.send(user);
});

listUsers.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((listUsers) => listUsers.id === id);
  let index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

module.exports = listUsers;
