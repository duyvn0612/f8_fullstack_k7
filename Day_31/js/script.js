var progress = document.querySelector(".progress");
var progressBar = document.querySelector(".progress-bar");
var spanDrag = document.querySelector("span");
var progressWidth = progress.clientWidth;
var positionSpanDragDown = 0;
var positionSpanDragUp = 0;
var positionLastSpanDrag = 0;
var offsetX = 0;
// var clientXDrag = 0;
console.log(progressWidth);
function handlerProgressDown(e) {
  console.log("down");
  offsetX = e.offsetX;
  positionLastSpanDrag = offsetX;
  positionSpanDragUp = offsetX;
  positionSpanDragDown = e.clientX;
  console.log(positionSpanDragDown);
  var rate = (offsetX / progressWidth) * 100;
  progressBar.style.width = `${rate}%`;

  document.addEventListener("mousemove", handlerDrag);
}

function handlerDrag(e) {
  console.log("move");
  var clientXDrag = e.clientX;
  console.log(clientXDrag);
  positionLastSpanDrag =
    clientXDrag - positionSpanDragDown + positionSpanDragUp;
  //   console.log(positionLastSpanDrag);
  var rate = (positionLastSpanDrag / progressWidth) * 100;
  //   console.log(rate);
  if (rate < 0) rate = 0;
  if (rate > 100) rate = 100;
  progressBar.style.width = `${rate}%`;
}
function handlerMouseUp() {
  console.log("up");
  positionSpanDragUp = positionLastSpanDrag;
  document.removeEventListener("mousemove", handlerDrag);
}

progress.addEventListener("mousedown", handlerProgressDown);

spanDrag.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handlerDrag);
  positionSpanDragDown = e.clientX;
});
document.addEventListener("mouseup", handlerMouseUp);
