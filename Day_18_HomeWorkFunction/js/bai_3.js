var numberEx3 = document.getElementById("idNumberEx3");
var btnResultConvert = document.getElementById("idBtnResultConvert");
var numberConvertText = document.getElementById("idNumberConvertText");
var arrNumberToText = {
  0: "Không",
  1: "một",
  2: "hai",
  3: "ba",
  4: "bốn",
  5: "năm",
  6: "sáu",
  7: "bảy",
  8: "tám",
  9: "chín",
};
function oneNumber(n) {
  numberConvertText.innerHTML = `${arrNumberToText[n]}`;
}
function twoNumber(n) {
  // console.log(n);
  if (n[0] === "1") {
    if (n[1] === "0") {
      numberConvertText.innerHTML = `mười`;
    } else if (n[1] === "5") {
      numberConvertText.innerHTML = `mười lăm`;
    } else {
      numberConvertText.innerHTML = `mười ${arrNumberToText[n[1]]}`;
    }
  } else if (n[1] === "0") {
    numberConvertText.innerHTML = `${arrNumberToText[n[0]]} mươi`;
  } else {
    if (n[1] === "5") {
      numberConvertText.innerHTML = `${arrNumberToText[n[0]]} mươi lăm`;
    } else {
      numberConvertText.innerHTML = `${arrNumberToText[n[0]]} mươi ${
        arrNumberToText[n[1]]
      }`;
    }
  }
}

function threeNumber(n) {
  console.log(n);
  if (n[1] === "0") {
    if (n[2] === "0") {
      numberConvertText.innerHTML = `${arrNumberToText[n[0]]} trăm`;
    } else {
      numberConvertText.innerHTML = `${arrNumberToText[n[0]]} trăm linh ${
        arrNumberToText[n[2]]
      }`;
    }
  } else if (n[1] === "1") {
    if (n[2] === "0") {
      numberConvertText.innerHTML = `${arrNumberToText[n[0]]} trăm mười`;
    } else if (n[2] === "5") {
      numberConvertText.innerHTML = `${arrNumberToText[n[0]]} trăm mười lăm`;
    }
  } else {
    if (n[2] === "5") {
      numberConvertText.innerHTML = `${arrNumberToText[n[0]]} trăm ${
        arrNumberToText[n[1]]
      } mươi lăm`;
    } else {
      numberConvertText.innerHTML = `${arrNumberToText[n[0]]} trăm ${
        arrNumberToText[n[1]]
      } mươi ${arrNumberToText[n[2]]}`;
    }
  }
}

function fourNumber(n) {
  console.log(n);
  if (n[1] === "0" && n[2] === "0" && n[3] === "0") {
    numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn`;
  } else {
    if (n[2] === "0") {
      if (n[3] === "0") {
        numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn ${
          arrNumberToText[n[1]]
        } trăm`;
      } else {
        numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn ${
          arrNumberToText[n[1]]
        } trăm linh ${arrNumberToText[n[3]]}`;
      }
    } else if (n[2] === "1") {
      if (n[3] === "0") {
        numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn ${
          arrNumberToText[n[1]]
        } trăm mười`;
      } else if (n[3] === "5") {
        numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn ${
          arrNumberToText[n[1]]
        } trăm mười lăm`;
      } else {
        numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn ${
          arrNumberToText[n[1]]
        } trăm mười ${arrNumberToText[n[3]]}`;
      }
    } else {
      if (n[3] === "0") {
        numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn ${
          arrNumberToText[n[1]]
        } trăm ${arrNumberToText[n[2]]} mươi`;
      } else if (n[3] === "5") {
        numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn ${
          arrNumberToText[n[1]]
        } trăm ${arrNumberToText[n[2]]} mươi lăm`;
      } else {
        numberConvertText.innerHTML = `${arrNumberToText[n[0]]} nghìn ${
          arrNumberToText[n[1]]
        } trăm ${arrNumberToText[n[2]]} mươi ${arrNumberToText[n[3]]}`;
      }
    }
  }
}

function convertText(n) {
  var len = String(n).length;
  var arr = String(n).split("", len);
  switch (len) {
    case 1:
      oneNumber(arr);
      break;
    case 2:
      twoNumber(arr);
      break;
    case 3:
      threeNumber(arr);
      break;
    case 4:
      fourNumber(arr);
      break;
    default:
      break;
  }
}

btnResultConvert.addEventListener("click", () => {
  console.log(numberEx3.valueAsNumber);
  if (!isNaN(numberEx3.valueAsNumber)) {
    convertText(numberEx3.valueAsNumber);
  } else {
    alert("Nhập lại !!");
  }
});
