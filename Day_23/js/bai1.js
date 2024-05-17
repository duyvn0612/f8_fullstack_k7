// Bài 1
// Cho một số nguyên n, trả về số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n.
var n = 108;
function isSymmetric(number) {
  var numArr = String(number).split("");
  //   console.log(numArr);
  //   console.log(Math.floor(numArr.length / 2));
  for (let i = 0; i < Math.floor(numArr.length / 2); i++) {
    // console.log(`${numArr[i]} - ${numArr[numArr.length - i - 1]}`);
    if (numArr[i] !== numArr[numArr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  } else {
    var isPrime = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = 0;
        break;
      }
    }
    if (isPrime === 0) {
      return false;
    } else {
      return true;
    }
  }
}

function symmetricPrime(number) {
  for (let i = number; ; i++) {
    if (isPrime(i) && isSymmetric(i)) {
      return i;
    }
  }
}

// console.log(isSymmetric(n));
// console.log(isPrime(n));
console.log(`Bài 1: number = ${n}`);
console.log(`- Số nguyên tố đối xứng nhỏ nhất: ${symmetricPrime(n)}`);
