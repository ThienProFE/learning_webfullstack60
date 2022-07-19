// Dùng express tạo ra 1 basic server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;
const mangaRoute = require("./router/mangaRouter");
const listUsers = require("./router/listUser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use("/api/manga", mangaRoute);
app.use("/api/user", listUsers);

app.listen(port, () => {
  console.log("Server running with port ", port);
});
