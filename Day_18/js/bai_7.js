var multiplicationTable = document.getElementById("idDrawMultiplicationTable");
var btnCreateTable = document.getElementById("idBtnCreateTable");

function createTable() {
  var count = 0;
  multiplicationTable.replaceChildren();
  for (let i = 1; i <= 10; i++) {
    const newTable = document.createElement("div");
    multiplicationTable.append(newTable);
    for (let j = 1; j <= 10; j++) {
      // var reult = i *
      const span = document.createElement("span");
      span.innerHTML = `${j} x ${i} = ${i * j}`;
      newTable.append(span);
    }
  }
}

btnCreateTable.addEventListener("click", () => {
  createTable();
});
