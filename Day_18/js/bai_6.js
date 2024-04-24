var btnCreateChess = document.getElementById("idBtnCreateChess");
var drawChess = document.getElementById("idDrawChess");
var count = 0,
  count1 = 0;
function createChess() {
  for (let i = 0; i < 8; i++) {
    console.log(count1++);
    for (let j = 0; j < 8; j++) {
      console.log(count++);
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          const span = document.createElement("span");
          span.style.background = "white";
          drawChess.append(span);
        } else {
          const span = document.createElement("span");
          span.style.background = "black";
          drawChess.append(span);
        }
      } else {
        if (j % 2 === 0) {
          const span = document.createElement("span");
          span.style.background = "black";
          drawChess.append(span);
        } else {
          const span = document.createElement("span");
          span.style.background = "white";
          drawChess.append(span);
        }
      }
    }
  }
}

btnCreateChess.addEventListener("click", () => {
  createChess();
});
