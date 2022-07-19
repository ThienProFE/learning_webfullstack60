const querystring = require("node:querystring");
const info = { name: "Thien", children: ["com", "ngo"], age: 28 };
console.log(querystring.stringify(info));

