const createModules1 = require("./04-create-module-1");
console.log("=====Modules được import");
// console.log(createModules1);
// console.log("modules2-content", module);

const myDateTime = createModules1.getMyDateTime();
const myDir = createModules1.getDirName();
const myAge = createModules1.myAge;
// console.log(myDateTime);
// console.log(myDir);
// console.log(myAge);

const total = createModules1.AuthorInfo.Sum(10, 20);
console.log(total);
