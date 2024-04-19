// ----------------Variable Bai 1---------------------
const btnSwap = document.getElementById("idRunSwap");
var ab1 = document.getElementById("idNumber_a");
var bb1 = document.getElementById("idNumber_b");
// ----------------Variable Bai 1---------------------
// ----------------Variable Bai 2---------------------
var ab3 = document.getElementById("idNumber_ab3");
var bb3 = document.getElementById("idNumber_bb3");
var cb3 = document.getElementById("idNumber_cb3");
var btnMax = document.getElementById("idRunMax");
// ----------------Variable Bai 2---------------------
// ----------------Variable Bai 4---------------------
var ab4 = document.getElementById("idNumber_ab4");
var bb4 = document.getElementById("idNumber_bb4");
var btnDifferent = document.getElementById("idRunTestDifferent");
// ----------------Variable Bai 4---------------------
// ----------------Variable Bai 5---------------------
var ab5 = document.getElementById("idNumber_ab5");
var bb5 = document.getElementById("idNumber_bb5");
var cb5 = document.getElementById("idNumber_cb5");
var btnSort = document.getElementById("idRunSort");
// ----------------Variable Bai 5---------------------
// ----------------function---------------------------
function swap(a, b) {
  if (a.value === "" && b.value === "") {
    alert("Nhập a, b !");
  } else {
    console.log(`noswap:\n a = ${a}\n b = ${b}`);
    a = a.valueAsNumber;
    b = b.valueAsNumber;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`swap:\n a = ${a}\n b = ${b}`);
    document.getElementById("idText_a").innerHTML = `${a}`;
    document.getElementById("idText_b").innerHTML = `${b}`;
  }
}

function max(a, b, c) {
  if (a.value === "" && b.value === "" && c.value === "") {
    alert("Nhập a, b, c !");
  } else {
    a = a.valueAsNumber;
    b = b.valueAsNumber;
    c = c.valueAsNumber;
    var maxNumber = a > b ? (a > c ? a : c) : b > c ? b : c;
    document.getElementById("idMaxNumber").innerHTML = `${maxNumber}`;
  }
}

function different(a, b) {
  if (a.value === "" && b.value === "") {
    alert("Nhập a, b !");
  } else {
    a = a.valueAsNumber;
    b = b.valueAsNumber;
    // var result = (a * b) > 0 ? "Cùng dấu" : "Khác dấu";
    document.getElementById("idResultDifferent").innerHTML = `${
      a * b >= 0 ? "Cùng dấu" : "Khác dấu"
    }`;
  }
}

function sort(a, b, c) {
  if (a.value === "" && b.value === "" && c.value === "") {
    alert("Nhập a, b, c !");
  } else {
    a = a.valueAsNumber;
    b = b.valueAsNumber;
    c = c.valueAsNumber;
    const arr = [a, b, c];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j <= arr.length; j++) {
        if (arr[i] > arr[j]) {
          var tg = arr[i];
          arr[i] = arr[j];
          arr[j] = tg;
        }
      }
    }
    // console.log(arr);
    document.getElementById("idResultSort").innerHTML = `${arr}`;
    // arr = [0];
  }
}
// ----------------function---------------------------

// swap(ab1.valueAsNumber, bb1.valueAsNumber);
btnSwap.addEventListener("click", () => {
  swap(ab1, bb1);
});
// // -----------------Bai 2---------------------
var s = 10 + 20 + (5 ^ 10) / 2;
document.getElementById("text_S").innerHTML = `${s}`;
// -----------------Bai 3---------------------
// sort(ab3.valueAsNumber, bb3.valueAsNumber, cb3.valueAsNumber);
btnMax.addEventListener("click", () => {
  max(ab3, bb3, cb3);
});
// -----------------Bai 4---------------------
btnDifferent.addEventListener("click", () => {
  different(ab4, bb4);
});
//------------------Bai 5---------------------
btnSort.addEventListener("click", () => {
  sort(ab5, bb5, cb5);
});
