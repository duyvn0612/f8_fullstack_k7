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
