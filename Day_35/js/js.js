var toolBar = document.querySelector(".toolbar");
var dropDown = document.querySelector(".dropdown");
var writeText = document.querySelector(".write-text");
var inpColor = document.querySelector("#inp-color");
var nameFile = document.querySelector("#name-file");
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

var createPDF = function () {
  var opt = {
    margin: 1,
    filename: nameFile.value,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(writeText).save();
};
dropDown.addEventListener("click", function (e) {
  if (e.target.nodeName === "LI" && e.target.id === "pdf") {
    createPDF();
  }
  if (e.target.nodeName === "LI" && e.target.id === "txt") {
    var blob = new Blob([writeText.innerText], { type: "text/plain" });
    var aEl = document.createElement("a");
    aEl.download = `${nameFile.value}.txt`;
    aEl.href = window.URL.createObjectURL(blob);
    aEl.target = "_blank";
    aEl.style.display = "none";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }
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
