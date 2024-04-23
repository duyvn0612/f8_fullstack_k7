var primeNumber = document.getElementById("idPrimeNumber");
var resultPrime = document.getElementById("idResultPrime");
var btnPrime = document.getElementById("idBtnPrime");

function prime(n) {
  if (n < 2) {
    resultPrime.innerHTML = "Không là số nguyên tố";
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
      resultPrime.innerHTML = "Không là số nguyên tố";
      return false;
    } else {
      resultPrime.innerHTML = "Là số nguyên tố";
      return true;
    }
  }
}

btnPrime.addEventListener("click", () => {
  prime(primeNumber.valueAsNumber);
});
