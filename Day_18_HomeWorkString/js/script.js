var textPara = document.getElementById("idTextPara").innerText;
var textContent = document.getElementById("idTextPara");
var firstIndex = 0,
  index = 0,
  lastIndex = 0;

var contentTemp = textPara.trim();
var output = "",
  textHighLight = "";
var outputFirst = "",
  outputLast = "";
var id = setInterval(() => {
  index = contentTemp.indexOf(" ");
  firstIndex = lastIndex;
  lastIndex += index;
  contentTemp = textPara.slice(lastIndex).trim();
  outputFirst = textPara.slice(0, firstIndex);
  outputLast = textPara.slice(lastIndex);
  if (index === -1) {
    output =
      outputFirst +
      `<span>${textPara.slice(
        firstIndex,
        firstIndex + contentTemp.length
      )}</span>`;
    textContent.innerHTML = output;
    contentTemp = textPara.trim();
    index = 0;
    firstIndex = 0;
    lastIndex = 0;
    output = "";
    outputFirst = "";
    outputLast = "";
    // clearInterval(id);
  } else {
    output =
      outputFirst +
      `<span>${textPara.slice(firstIndex, lastIndex)}</span>` +
      outputLast;
    firstIndex++;
    lastIndex++;
    textContent.innerHTML = output;
  }
}, 500);

// console.log(outputFirst);
// console.log(outputLast);
// console.log(contentTemp);
// console.log(output);
// console.log("firstIndex: " + firstIndex);
// console.log("index: " + index);
// console.log("lastIndex: " + lastIndex);

// for (let i = 0; i <= textPara.length; i++) {
//   if (textPara[i] === " ") {
//     setTimeout(() => {
//       firstIndex = lastIndex; //0
//       let temp = i; //5
//       lastIndex = temp;
//       output =
//         textPara.slice(0, firstIndex) +
//         `<span>${textPara.slice(firstIndex, lastIndex)}</span>` +
//         textPara.slice(lastIndex);
//       textContent.innerHTML = output;
//       console.log(firstIndex, lastIndex);
//       // lastIndex++;
//     }, delay);
//     delay += 1000;
//   }
// }
