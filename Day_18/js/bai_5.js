var triangleNumber = document.getElementById("idTriangleNumber");
var resultTriangle = document.getElementById("idResultTriangle");
var btnTriangle = document.getElementById("idBtnTriangle");

function triangle(n) {
  var count = 0;
  resultTriangle.innerText = "";
  for (let i = 0; i < n; i++) {
    count++;
    if (count === 1) {
      resultTriangle.innerHTML += `${count}`;
    } else {
      resultTriangle.innerHTML += `<br>${count} `;
    }

    for (let j = 0; j < i; j++) {
      count++;
      resultTriangle.innerHTML += `${count} `;
    }
  }
}

btnTriangle.addEventListener("click", () => {
  triangle(triangleNumber.valueAsNumber);
});
