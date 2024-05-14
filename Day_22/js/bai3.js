// Bài 3: Tách phần tử trong mảng theo đúng kiểu dữ liệu
var arr1 = [
  ["1", 2, false],
  ["a", 1, true],
  ["b", 2, false],
  [8, 5],
  [true, true],
];

var tempArr = [];
var typeArr = [];
function flat(arr = []) {
  arr.forEach((value) => {
    Array.isArray(value) ? flat(value) : tempArr.push(value);
  });
  return tempArr;
}

function classify(arr = []) {
  var _arrT = [],
    _arrF = [];
  arr.forEach((value, index) => {
    if (typeof value === typeof arr[0]) {
      _arrT.push(value);
    } else {
      _arrF.push(value);
    }
  });
  arr1 = _arrF;
  typeArr.push(_arrT);
  if (arr1.length > 0) {
    classify(arr1);
  }
  return typeArr;
}

console.log("Tách phần tử trong mảng:");
console.log(classify(flat(arr1)));
