var numberEx2 = document.getElementById("idNumberEx2");
var btnResultReverse = document.getElementById("idBtnResultReverse");
var numberReverseText = document.getElementById("idNumberReverseText");
function reverse_Number(n) {
  if (n >= 0 && n % 1 === 0) {
    var arr = [];
    var count = 0;
    var total = 0;
    var len = String(n).length;
    for (let i = len - 1; i >= 0; i--) {
      total += (n % 10) * 10 ** i;
      n = Math.floor(n / 10);
    }
    numberReverseText.innerHTML = `${total}`;
    console.log(total);
  } else {
    alert("Nhập lại n !!");
  }
}

btnResultReverse.addEventListener("click", () => {
  reverse_Number(numberEx2.valueAsNumber);
});

// btnResultReverse.addEventListener("mou")
