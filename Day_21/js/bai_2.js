var spans = document.querySelectorAll(".lesson-two");
var numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

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

(function () {
  var totalPrime = 0;
  var numbersPrime = [];
  for (var number of numbers) {
    if (isPrime(number) === true) {
      totalPrime += number;
      numbersPrime[numbersPrime.length] = number;
    }
  }

  spans[0].innerHTML = `[${numbers}]`;
  spans[1].innerHTML = `[${numbersPrime}]`;
  spans[2].innerHTML = +totalPrime / +numbersPrime.length;
})();
