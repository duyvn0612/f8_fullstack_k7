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
