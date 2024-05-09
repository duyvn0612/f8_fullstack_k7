var spans = document.querySelectorAll(".lesson-one");
// console.log(spans);

function checkIndexValue(arr, n) {
  var indexArr = [];
  for (var index in arr) {
    if (+arr[index] === +n) {
      indexArr[indexArr.length] = index;
    }
  }
  return indexArr;
}

(function () {
  var myArray = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 10)
  );
  var min = myArray[0],
    indexMin = [];
  var max = myArray[0],
    indexMax = [];
  for (var index in myArray) {
    if (myArray[index] > max) {
      max = myArray[index];
      indexMax = index;
    }
    if (myArray[index] < min) {
      min = myArray[index];
      indexMin = index;
    }
  }

  spans[0].innerHTML = `[${myArray}]`;
  spans[1].innerHTML = max;
  spans[2].innerHTML = checkIndexValue(myArray, max);
  spans[3].innerHTML = min;
  spans[4].innerHTML = checkIndexValue(myArray, min);
})();
