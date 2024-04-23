var triangleNumber = document.getElementById("idTriangleNumber");
var resultTriangle = document.getElementById("idResultTriangle");
var btnTriangle = document.getElementById("idBtnTriangle");

function triangle(n) {
  var count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      count++;
      console.log(count);
    }
  }
}

btnTriangle.addEventListener("click", () => {
  triangle(triangleNumber.valueAsNumber);
});
