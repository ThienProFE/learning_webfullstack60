// ES6
// 1. Arrow Function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Cách viết cũ
const odd = numbers.filter(function (n) {
  return n % 2 === 1;
});
console.log("odd", odd);
//Cách viết ES6
const oddArrow = numbers.filter((n) => n % 2 === 1);
console.log("oddArrow", oddArrow);

// 2. Default parameters
//Cách viết cũ
function multiply(a, b) {
  //   const b = typeof b !== undefined ? b : 1;
  return a * b;
}
//Cách sử dụng ES6
function multiplyArrow(a, b = 2) {
  return a * b;
}
console.log("multiplyArrow", multiplyArrow(5));

// 3. Destructuring (Phân rã)
//Array
const numbersArr = ["one", "two", "three"];
//Cách viết cũ
const one = numbersArr[0];
const two = numbersArr[1];
const three = numbersArr[2];
//Cách ES6
const [oneArrow, twoArrow, threeArrow] = numbersArr;
//Object
const obj = { firstName: "Thien", lastName: "Nguyen" };
//Cách cũ
const firstName = obj.firstName;
const lastName = obj.lastName;
//Cách ES6
const { firstNameDest, lastNameDest } = obj;

// 4. Spread syntax (operator)
//Array
const oldArray = [1, 2, 3];
//Cách cũ
const newArray = [oldArray, 4, 5];
//Cách ES6
const newArraySpread = [...oldArray, 4, 5];
console.log("New Array", newArraySpread);
//Object
const oldObj = { name: "Thien" };
//Cách cũ
const newObj = { oldObj, age: 28 };
//Cách ES6
const newObjSpread = { ...oldObj, age: 28 };
console.log("new Obj", newObjSpread);

//5. Rest Parameter (Tham số còn lại) - Là tham số đại diện cho những tham số không được khai báo
function numbersRest(num1, num2, ...numOther) {
  console.log("x", num1);
  console.log("y", num2);
  console.log("Other Number", numOther);
}
numbersRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//6. Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + "Dang phat ra am thanh");
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + "Dang sua");
  }
}
//Thuc hanh
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `Tốc độ của xe ${this.make} sau khi tăng tốc là: ${this.speed} km/h`
    );
  }
  brake() {
    this.speed -= 5;
    console.log(
      `Tốc độ của xe ${this.make} sau khi tăng tốc là: ${this.speed} km/h`
    );
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
let BMW = new Car("BMW", 120);
BMW.accelerate();
BMW.brake();
BMW.speedUS = 50;
console.log("BMW", BMW);

// 7. Template String
//Cách cũ
const name1 = "Thien";
const time = "today";
console.log("Hello" + " " + name1 + " " + time);
//Cách mới
console.log(`Hello ${name1} ${time}`);
