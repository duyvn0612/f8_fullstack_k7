var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var wrapperItemList = carouselInner.children;
var carouselNext = document.querySelector(".carousel .next");
var carouselPrev = document.querySelector(".carousel .prev");
var carouselAction = document.querySelector(".carousel-action");
var carouselActionList = document.querySelectorAll(
  ".carousel-action label input"
);

// Tính kích thước 1 item - chiều rộng
var itemWidth = carouselInner.clientWidth;
// console.log(itemWidth);
// tính tổng kích thước các item - chiều rộng
var totalWidth = wrapperItemList.length * itemWidth;
// console.log(wrapperItemList.length);
carouselInner.style.width = `${totalWidth}px`;
var itemWidth_temp = 0;
var rdoAction = {};

// fnc load action
(function () {
  var carouselActionInner = "";
  for (var index = 0; index < wrapperItemList.length; index++) {
    if (index === 0) {
      carouselActionInner += `<label><input type="radio" name="action" value = "${index}" checked hidden/></label>`;
    } else {
      carouselActionInner += `<label><input type="radio" name="action" value = "${index}" hidden/></label>`;
    }
    rdoAction[`${index * itemWidth}`] = index;
  }
  carouselAction.innerHTML = carouselActionInner;
  carouselActionList = carouselActionList = document.querySelectorAll(
    ".carousel-action label input"
  );
  // console.log(carouselActionList);
  // console.log(rdoAction);
})();
// fnc btn next
function handlerBtnNext() {
  itemWidth_temp =
    itemWidth_temp === totalWidth - itemWidth
      ? itemWidth_temp
      : (itemWidth_temp += itemWidth);
  carouselInner.style.translate = `${-itemWidth_temp}px`;
  Array.from(carouselActionList)[rdoAction[itemWidth_temp]].checked = true;
}
// fnc btn Prev
function handlerBtnPrev() {
  itemWidth_temp = itemWidth_temp === 0 ? 0 : (itemWidth_temp -= itemWidth);
  carouselInner.style.translate = `${-itemWidth_temp}px`;
  Array.from(carouselActionList)[rdoAction[itemWidth_temp]].checked = true;
}
// fnc radio checked
function handlerRdoCheck(e) {
  if (e.target.type === "radio") {
    itemWidth_temp =
      totalWidth - itemWidth * (wrapperItemList.length - e.target.value);
    carouselInner.style.translate = `${-itemWidth_temp}px`;
  }
}

// fnc handlerDragUp
function handlerDragUp(e) {}
// fnc handlerDragDown
var position = 0;
var clientXLast = 0;
function handlerDragDown(e) {
  console.log("down");
  carouselInner.style.cursor = "move";
  carouselInner.classList.add("transition-none");
  clientXLast = e.clientX;
  document.addEventListener("mousemove", handlerDragMove);
}
// fnc handlerDragMove
function handlerDragMove(e) {
  console.log("move");
  // console.log(itemWidth_temp);
  position = e.clientX - clientXLast;
  carouselInner.style.translate = `${position - itemWidth_temp}px`;
  if (Math.abs(position) > itemWidth / 4) {
    if (position < 0) {
      handlerBtnNext();
      carouselInner.classList.remove("transition-none");
    }
    if (position > 0) {
      handlerBtnPrev();
      carouselInner.classList.remove("transition-none");
    }
    document.removeEventListener("mousedown", handlerDragDown);
    document.removeEventListener("mousemove", handlerDragMove);
    carouselInner.style.translate = `${-itemWidth_temp}px`;
  } else {
    document.addEventListener("mouseup", function () {
      carouselInner.classList.remove("transition-none");
      carouselInner.style.cursor = "";
      carouselInner.style.translate = `${-itemWidth_temp}px`;
      document.removeEventListener("mousedown", handlerDragDown);
      document.removeEventListener("mousemove", handlerDragMove);
    });
  }
}

carouselNext.addEventListener("click", handlerBtnNext);
carouselPrev.addEventListener("click", handlerBtnPrev);
carouselAction.addEventListener("click", handlerRdoCheck);
carouselInner.addEventListener("mousedown", handlerDragDown);
