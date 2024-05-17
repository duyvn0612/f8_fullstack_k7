var numberArr = [1, 2, 0];

function minNumber(arr = []) {
  for (let i = 1; ; i++) {
    if (!arr.includes(i)) return i;
  }
}
console.log(`Bài 3: numberArr = [${numberArr}]`);
console.log(
  `- Số nguyên dương nhỏ nhất không có trong nums: ${minNumber(numberArr)}`
);
