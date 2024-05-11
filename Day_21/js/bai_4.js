var spans = document.querySelectorAll(".lesson-four");
var numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
// var numbers = [2, 5, 23, 8, 3, 10];
var numberAdd = 6;
var sortArr = [];
var newNumbers = [];

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] > arr[j]) {
        var tg = arr[i];
        arr[i] = arr[j];
        arr[j] = tg;
      }
    }
  }
  return arr;
}

(function () {
  for (var value of numbers) {
    sortArr[sortArr.length] = value;
  }
  sortArr = sortArray(sortArr);

  spans[0].innerHTML = numberAdd;
  spans[1].innerHTML = `[${numbers}]`;
  spans[2].innerHTML = `[${sortArr}]`;

  if (numberAdd <= sortArr[0]) {
    var lastSortArr = [numberAdd];
    for (var value of sortArr) {
      lastSortArr[lastSortArr.length] = value;
    }
    sortArr = lastSortArr;
    spans[3].innerHTML = `[${sortArr}]`;
  } else if (numberAdd >= sortArr[sortArr.length - 1]) {
    sortArr[sortArr.length] = numberAdd;
    spans[3].innerHTML = `[${sortArr}]`;
  } else {
    for (var index in sortArr) {
      if (numberAdd <= sortArr[index]) {
        var temp_sortArr = [];
        for (var index1 in sortArr) {
          if (index1 === index) {
            temp_sortArr[temp_sortArr.length] = numberAdd;
            temp_sortArr[temp_sortArr.length] = sortArr[index1];
          } else {
            temp_sortArr[temp_sortArr.length] = sortArr[index1];
          }
        }
        sortArr = temp_sortArr;
        break;
      }
    }
    // sortArr[sortArr.length] = numberAdd;
    // sortArr = sortArray(sortArr);
    spans[3].innerHTML = `[${sortArr}]`;
  }
})();
