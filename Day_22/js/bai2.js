// Bài 2 Làm phẳng array sau (Chuyển về mảng 1 chiều) Không được sử dụng flat()
var arr1 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12, [11, 12]]]]];
var tempArr = [];
function flat(arr = []) {
  arr.forEach((value) => {
    Array.isArray(value) ? flat(value) : tempArr.push(value);
  });
  return tempArr;
}
console.log(`Làm phẳng array: ${flat(arr1)}`);
