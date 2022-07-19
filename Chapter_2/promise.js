//1. Ban đầu khởi tạo Promise
const promisePending = new Promise((resolve, reject) => {});
console.log("1. Trạng thái Promise ban đầu: ", promisePending);
//2. Khi resolve được gọi
const promiseFulfilled = new Promise((resolve, reject) => {
  resolve();
});
console.log("2. Trạng thái Promise khi resolve được gọi: ", promiseFulfilled);
//3. Khi reject được gọi
const promiseRejected = new Promise((resolve, reject) => {
  reject();
});
console.log("3. Trạng thái Promise khi reject được gọi: ", promiseRejected);
//4. Khi resolve được gọi có data
const promiseFulfilledWithData = new Promise((resolve, reject) => {
  resolve(123);
});
console.log(
  "4. Trạng thái Promise khi resolve được gọi và trả về dât: ",
  promiseFulfilledWithData
);
//5. Promise Method
const promiseMethod = new Promise((resolve, reject) => {
  //   const jsonData = {
  //     name: "Thien",
  //     age: 28,
  //     job: "banker",
  //   };
  //   const arrayData = [
  //     { name: "Thien", age: 28, job: "banker" },
  //     { name: "Hue", age: 26, job: "Du học sinh" },
  //   ];
  //   //   resolve(jsonData);
  //   resolve(arrayData);
  const errorObject = {
    errorCode: 403,
    message: "Bạn không có quyền truy cấp",
  };
  reject(errorObject);
});
console.log("promiseRejectWithErrorMessage", promiseMethod);

// promiseMethod
//   .then(function (data) {
//     console.log("5. Promise được gọi khi gọi tới resole: ", data);
//   })
//   .catch(function () {
//     console.log("5. Promise được gọi khi gọi tới reject: ", "failure");
//   })
//   .finally(function () {
//     console.log("5. Promise được gọi khi gọi tới cả 2 đưỢc gọi: ", "DONE");
//   }); //Có thể thêm hoặc không thêm
