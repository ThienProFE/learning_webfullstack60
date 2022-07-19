//4. Có 2 cách tạo 1 modules
//+ Sử dụng module.exports
//+ Sử dụng exports

//Cách 1:
module.exports.getMyDateTime = function () {
  return Date();
};
//Cách 2:
exports.getDirName = function () {
  return __dirname;
};

// console.log("modules1-content", module);
const MY_AGE = 31;
exports.myAge = MY_AGE;

const sum = function (a, b) {
  return a + b;
};
const AuthorInfo = {
  Age: MY_AGE,
  Sum: sum,
};
module.exports.AuthorInfo = AuthorInfo;
