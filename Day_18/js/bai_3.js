var NNumber = document.getElementById("idnNumber");
var resultS = document.getElementById("idResultS");
var btnCalcS = document.getElementById("idBtnCalcS");

function calcS(n) {
  var sumS = 0;
  for (let i = 1; i <= n; i++) {
    sumS += i * (i + 1);
  }
  resultS.innerHTML = `${sumS}`;
}

btnCalcS.addEventListener("click", () => {
  calcS(NNumber.valueAsNumber);
});
