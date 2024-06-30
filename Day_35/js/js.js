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

var createTXT = function () {
  var blob = new Blob([writeText.innerText], { type: "text/plain" });
  var aEl = document.createElement("a");
  aEl.download = `${nameFile.value}.txt`;
  aEl.href = window.URL.createObjectURL(blob);
  aEl.target = "_blank";
  aEl.style.display = "none";
  document.body.appendChild(aEl);
  aEl.click();
  document.body.removeChild(aEl);
};
// down load pdf, txt
dropDown.addEventListener("click", function (e) {
  if (e.target.nodeName === "LI" && e.target.id === "new") {
    writeText.textContent = "";
    document.querySelector("#countChar").innerText = 0;
    document.querySelector("#countWord").innerText = 0;
    nameFile.value = "untitled";
  }
  if (e.target.nodeName === "LI" && e.target.id === "pdf") {
    createPDF();
  }
  if (e.target.nodeName === "LI" && e.target.id === "txt") {
    createTXT();
  }
});

document.addEventListener("click", function () {
  if (dropDown.classList.contains("show-dropbox")) {
    dropDown.classList.remove("show-dropbox");
  }
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (dropDown.classList.contains("show-dropbox") && e.key === "Escape") {
    dropDown.classList.remove("show-dropbox");
  }
  if (e.key === "Control" && e.key === "u") {
    execCommand("underline");
  }
  if (e.key === "Control" && e.key === "i") {
    execCommand("italic");
  }
  if (e.key === "Control" && e.key === "b") {
    execCommand("bold");
  }
});

//
writeText.addEventListener("input", function () {
  var text = writeText.innerText.trim();
  var countCharacter = String(text).split(/\s+/).join("").length;
  var countWord = String(text)
    .split(/\s+/)
    .filter(function (w) {
      return w.length > 0;
    }).length;
  document.querySelector("#countChar").innerText = +countCharacter;
  document.querySelector("#countWord").innerText = +countWord;
});

nameFile.addEventListener("focus", function (e) {
  nameFile.select();
});
