// function filter2()
Array.prototype.filter2 = function (callback) {
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      newArr[newArr.length] = this[i];
    }
  }
  return newArr;
};
