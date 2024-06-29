var toolBar = document.querySelector(".toolbar");
var dropDown = document.querySelector(".dropdown");
var writeText = document.querySelector(".write-text");
var inpColor = document.querySelector("#inp-color");
var showDropDown = function () {
  dropDown.classList.toggle("show-dropbox");
};

var execCommand = function (cmd, color = null) {
  document.execCommand(cmd, false, color);
};

inpColor.addEventListener("input", function (e) {
  execCommand("foreColor", e.target.value);
});

toolBar.addEventListener("click", function (e) {
  //   console.dir(e.target);
  if (e.target.nodeName === "BUTTON" && e.target.id === "btn-file") {
    e.stopPropagation();
    showDropDown();
  }
  if (e.target.nodeName === "BUTTON" && e.target.id === "btn-bold") {
    execCommand("bold");
  }
  if (e.target.nodeName === "BUTTON" && e.target.id === "btn-underlined") {
    execCommand("underline");
  }
  if (e.target.nodeName === "BUTTON" && e.target.id === "btn-italic") {
    execCommand("italic");
  }
});
// var html2pdf = html2pdf();
// console.log(html2pdf);
dropDown.addEventListener("click", function (e) {
  console.log(e.target.id);
});

document.addEventListener("click", function () {
  if (dropDown.classList.contains("show-dropbox")) {
    dropDown.classList.remove("show-dropbox");
  }
});

document.addEventListener("keydown", function (e) {
  //   console.log(e.key);
  if (dropDown.classList.contains("show-dropbox") && e.key === "Escape") {
    dropDown.classList.remove("show-dropbox");
  }
});
