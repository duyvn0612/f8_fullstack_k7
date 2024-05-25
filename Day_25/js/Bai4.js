Array.prototype.reduce2 = function (callback, initialValue) {
  var prevValue;
  if (typeof callback !== "function") return;
  if (initialValue === undefined) {
    for (let i = 1; i < this.length; i++) {
      prevValue =
        i === 1
          ? callback(this[0], this[i], i, this)
          : callback(prevValue, this[i], i, this);
    }
    return prevValue;
  }
  prevValue = initialValue;
  for (let i = 0; i < this.length; i++) {
    prevValue = callback(prevValue, this[i], i, this);
  }
  return prevValue;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var size = 4;
var chuckArr = numbers.reduce2(
  function (prev, curr) {
    if (prev[prev.length - 1].length === size) {
      prev.push([curr]);
    } else {
      prev[prev.length - 1].push(curr);
    }
    return prev;
  },
  [[]]
);
console.log(chuckArr);
