var kmNumber = document.getElementById("idKmNumber");
var resultTaxi = document.getElementById("idResultTaxi");
var btnCalc = document.getElementById("idBtnCalc");
var price1 = 15000,
  price2 = 13500,
  price3 = 11000,
  perSent = 0.1;
var kmSale1 = 1,
  kmSale2 = 5,
  kmSale3 = 120;
var totalPrice = 0;
function priceTaxi(kmNumber) {
  if (kmNumber <= kmSale1) {
    totalPrice = price1;
  } else if (kmNumber > kmSale1 && kmNumber <= kmSale2) {
    totalPrice = price1 + (kmNumber - kmSale1) * price2;
  } else {
    totalPrice = price1 + 4 * price2 + (kmNumber - kmSale2) * price3;
    if (kmNumber > kmSale3) {
      totalPrice = totalPrice * (1 - perSent);
    }
  }
  console.log(kmNumber);
  console.log(totalPrice);
  resultTaxi.innerHTML = `${totalPrice}`;
}

btnCalc.addEventListener("click", () => {
  priceTaxi(kmNumber.valueAsNumber);
});
