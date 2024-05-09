var spans = document.querySelectorAll(".lesson-three");
var numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

function checkDuplicate(n, newArr) {
  for (var value of newArr) {
    if (+value === +n) return true;
  }
  return false;
}

newNumbers = [];

for (var number of numbers) {
  if (checkDuplicate(number, newNumbers) === false) {
    newNumbers[newNumbers.length] = number;
  }
}

spans[0].innerHTML = `[${numbers}]`;
spans[1].innerHTML = `[${newNumbers}]`;
