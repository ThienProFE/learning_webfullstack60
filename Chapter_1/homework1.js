// 1. Sử dụng 1 constructor function để tạo 1 hàm tên Car. Một chiếc oto có 2 property là: make và speed
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// 2. Tạo ra 1 method là 'accelerate' để tăng tốc độ của Car lên 10. Hiển thị tốc độ bằng lệnh console.
Car.prototype.accelerate = function () {
  console.log(
    `Tốc độ hiện tại của xe ${
      this.make
    } sau khi tăng lên 10 là: ${(this.speed += 10)} km/h`
  );
};

// 3. Tạo ra 1 method là 'brake' để giảm tốc độ của Car đi 5. Hiển thị tốc độ bằng lệnh console.
Car.prototype.brake = function () {
  console.log(
    `Tốc độ hiện tại của xe ${
      this.make
    } sau khi giảm đi 5 là: ${(this.speed -= 5)} km/h`
  );
};

// 4. Tạo ra 2 đối tượng xe oto và gọi các method 'accelerate' và 'brake' nhiều lần trên mỗi đối tượng trên.
let car1 = new Car("BMW", 120);
let car2 = new Car("Mercedes", 95);
function increaseSpeed() {
  car1.accelerate();
  car2.accelerate();
}

function decreaseSpeed() {
  car1.brake();
  car2.brake();
}
