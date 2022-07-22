const express = require("express");
const app = express();

//B1. Tao 1 middleware co nhiem vu chan nguoi duong khong truy cap duoc
const checkRequesMiddleware = (req, res, next) => {
  if (req.url === "/admin") {
    //check data, check IP cua user co duoc phep truy cap hay khong
    res.send("Ban khong co quyen truy cap");
  } else {
    next();
  }
};

//B2. Sử dụng middleware vừa tạo
app.use(checkRequesMiddleware);

app.get("/", (req, res) => {
  res.send("Truy cap homepage thanh cong");
});

app.get("/shopping-cart", (req, res) => {
  //middleware sẽ được import vào chỗ này để chạy
  res.send("Truy cap gio hang thanh cong");
});

app.listen(5000);
