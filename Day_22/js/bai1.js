// Bài 1 Lấy kết quả giao giữa 2 mảng
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var newArr = [];
function diff(arr1 = [], arr2 = []) {
  var tempArr = [];
  return arr1.forEach((v) => arr2.includes(v) && tempArr.push(v)), tempArr;
}
newArr = diff(arrA, arrB);
console.log(`Giao giữa 2 mảng: ${newArr}`);
