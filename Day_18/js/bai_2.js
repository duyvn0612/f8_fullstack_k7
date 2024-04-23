var eNumber = document.getElementById("idENumber");
var resultEMoney = document.getElementById("idResultEMoney");
var btnCalcE = document.getElementById("idBtnCalcEMoney");

var priceLevel = [0, 1678, 1734, 2014, 2536, 2834, 2927];
var levelCalc = [0, 50, 100, 200, 300, 400];
var totalPrice = 0;
function priceElectric(eNb) {
  if (eNb >= levelCalc[0] && eNb <= levelCalc[1]) {
    //Level 1
    totalPrice = eNb * priceLevel[1];
  } else if (eNb > levelCalc[1] && eNb <= levelCalc[2]) {
    //Level 2
    totalPrice =
      levelCalc[1] * priceLevel[1] + (eNb - levelCalc[1]) * priceLevel[2];
  } else if (eNb > levelCalc[2] && eNb <= levelCalc[3]) {
    //Level 3
    totalPrice =
      levelCalc[1] * priceLevel[1] +
      levelCalc[1] * priceLevel[2] +
      (eNb - levelCalc[2]) * priceLevel[3];
  } else if (eNb > levelCalc[3] && eNb <= levelCalc[4]) {
    //Level 4
    console.log("Bac 4");
    totalPrice =
      levelCalc[1] * priceLevel[1] +
      levelCalc[1] * priceLevel[2] +
      levelCalc[2] * priceLevel[3] +
      (eNb - levelCalc[3]) * priceLevel[4];
  } else if (eNb > levelCalc[4] && eNb <= levelCalc[5]) {
    //Level 5
    totalPrice =
      levelCalc[1] * priceLevel[1] +
      levelCalc[1] * priceLevel[2] +
      levelCalc[2] * priceLevel[3] +
      levelCalc[2] * priceLevel[4] +
      (eNb - levelCalc[4]) * priceLevel[5];
  } else {
    //Level 6
    totalPrice =
      levelCalc[1] * priceLevel[1] +
      levelCalc[1] * priceLevel[2] +
      levelCalc[2] * priceLevel[3] +
      levelCalc[2] * priceLevel[4] +
      levelCalc[2] * priceLevel[5] +
      (eNb - levelCalc[5]) * priceLevel[6];
  }
  resultEMoney.innerHTML = `${totalPrice}`;
}

btnCalcE.addEventListener("click", () => {
  priceElectric(eNumber.valueAsNumber);
});
