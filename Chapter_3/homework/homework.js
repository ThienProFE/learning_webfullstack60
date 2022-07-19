//Bài 1: In nội dung file json trong cmd bằng cách sử dụng nodejs
const querystring = require("node:querystring");

const info = require("./info.json");
const infoStudent = JSON.stringify(info);

const student = querystring.stringify(JSON.parse(infoStudent));
console.log(student);

//Bài 2: http
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/index") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Welcome to HomePage</h1>`);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>${student}</h1>`);
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>This link does not exist</h1>`);
    res.end();
  }
});
server.listen(8000);
