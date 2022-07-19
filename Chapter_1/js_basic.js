// 1. undefined
//case 1: Chưa assign giá trị cho biến
let a;
if (a === undefined) {
  console.log("a is undefined");
}

//case 2: Lấy 1 property không tồn tại trong object
let obj = { name: "Thien", age: 28 };
console.log(obj.sex);

//case 3: Lấy index không tồn tại trong mảng
let arr = [1, 2, 3];
console.log(arr[4]);

//case 4:
let sex = undefined;
console.log(sex);

// 2. null (!==NULL và Null)
// case 1: Chúng ta expected là object nhưng không trả về được
const element = document.getElementById("nguyenvanthien");
console.log("element", element);
console.log(typeof element);

//case 2: Gán bằng null: const number = null;

//3. Nan (Not a number)
//case 1: Sử dụng phép toán với chuỗi
const number1 = "abc" / 3;
console.log("number1 = NaN", number1);
//case 2: 0/0
const number2 = 0 / 0;
console.log("number2 = NaN", number2);
//case 3:
const number3 = -3 / 0;
console.log("number3 = Infinity", number3);

// 4. Khái niệm Coercion (Ép kiểu dữ liệu)
//case 1: So sánh number và String
console.log("so sánh number và string", 69 == "69"); //true
console.log("so sánh number và string", 69 == "abc"); //false do abc sẽ không convert được và trả về NaN

//case 2: So sánh kiểu boolean
console.log("compare boolean", "1" == true); //true

// 5. Object trong Javascript
// cách 1: Object literal
const person = {
  firstName: "Nguyen",
  lastName: "Thien",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// Cách 2: Object constructor
const psn = new Object();
psn.firstName = "Anh";
psn.lastName = "Nguyen Tuan";
psn.showName = function () {
  console.log(this.firstName + " " + this.lastName);
};

// 6. Prototype
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.showFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};
const singer = new Person("Linh", "Hoang Thuy");
console.log("Prototype-singer", singer);
singer.showFullName();
