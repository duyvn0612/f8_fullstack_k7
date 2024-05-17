// Bài 2
// Cho hai mảng đã sắp xếp nums1 và nums2 có kích thước lần lượt là m và n, trả về trung vị của hai mảng đã sắp xếp đó.
var numArr1 = [2, 3, 11, 13];
var numArr2 = [17, 26, 34, 47];
var totalArr = [];
function median(arr1 = [], arr2 = []) {
  totalArr = totalArr.concat(arr1, arr2).sort(function (a, b) {
    return a - b;
  });
  var halfLength = Math.floor(totalArr.length / 2);
  return totalArr.length % 2 === 0
    ? (totalArr[halfLength] + totalArr[halfLength - 1]) / 2
    : totalArr[halfLength];
  //   if (totalArr.length % 2 === 0) {
  //     return (totalArr[halfLength] + totalArr[halfLength - 1]) / 2;
  //   }
  //   return totalArr[halfLength];
}

var numberMedian = median(numArr1, numArr2);

console.log(`Bài 2: numArr1 = [${numArr1}]; numArr2 = [${numArr2}]`);
console.log(
  `- Mảng sau khi hợp nhất và sắp xếp: [${totalArr}]
  \n- Trung vị của mảng sau khi hợp nhất: ${numberMedian}`
);
