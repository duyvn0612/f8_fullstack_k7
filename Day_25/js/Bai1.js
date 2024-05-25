// ***************** Bài 1 *****************
// Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

function sum(...args) {
  console.log(args);
  var total = 0;
  for (var value of args) {
    if (!(typeof value === "number")) {
      return "Dữ liệu không hợp lệ !";
    }
    total += value;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

Object.prototype.getCurrency = function (callback) {
  var num = +this;
  if (!(num.constructor.name === "Number")) {
    return "Dữ liệu không hợp lệ";
  }
  var monneyArr = String(this).split("");
  var newArr = [];
  monneyArr.reverse().forEach(function (value, index) {
    if (index % 3 === 0 && index !== 0) {
      newArr.push(",");
    }
    newArr.push(value);
  });
  monneyArr = newArr;
  return monneyArr.reverse().join("") + " " + callback;
};

var price = "12000000";
console.log(price.getCurrency("đ"));
