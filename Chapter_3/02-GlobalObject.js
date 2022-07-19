/* Global Object: những đối tượng chung nodejs đã tạo sẵn
- Tham khảo: https://nodejs.org/api/globals.html
*/
// console.log("fileName: ", __filename);
// console.log("dirName: ", __dirname);

// function printHelloWorld() {
//   console.log("Hello World!!!");
// }
// setTimeout(printHelloWorld, 2000);

// Bài 1: Viết chương trình in ra các số chẵn duy nhất trong mảng
// [1,2,3,4,5,6,6,7,7,8,8,9,10]
const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10];
const arr2 = Array.from(new Set(arr.filter((e) => e % 2 === 0)));
console.log(arr2);

