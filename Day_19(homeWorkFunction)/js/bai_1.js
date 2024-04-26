var numberEx1 = document.getElementById("idNumberEx1");
var btnResultFibonacci = document.getElementById("idBtnResultFibonacci");
var ex01 = document.querySelector(".ex-01");
function fibonacci(n) {
  if (n > 0 && n % 1 === 0) {
    var fb1 = 0;
    var fb2 = 1;
    var fa = fb1 + fb2;
    var isContainer = ex01.contains(document.querySelector(".container-ex01"));
    if (isContainer === true) {
      let div = document.querySelector(".container-ex01");
      div.replaceChildren();
    } else {
      let div = document.createElement("div");
      div.className = "container-ex01";
      ex01.appendChild(div);
    }
    const container = document.querySelector(".container-ex01");
    if (n === 1) {
      const span = document.createElement("span");
      span.innerHTML = `1`;
      container.appendChild(span);
    } else if (n === 2) {
      const span = `<span>1</span><span>1</span>`;
      container.innerHTML = span;
      // const span = document.createElement("span");
      // span.innerHTML = `1 1`;
      // container.appendChild(span);
    } else {
      const span = `<span>1</span><span>1</span>`;
      container.innerHTML = span;
      for (let i = 3; i <= n; i++) {
        fb1 = fb2;
        fb2 = fa;
        fa = fb1 + fb2;
        const span = document.createElement("span");
        span.innerHTML = `${fa}`;
        container.appendChild(span);
      }
    }
  } else {
    alert("Nhập lại n !");
  }
}

btnResultFibonacci.addEventListener("click", (e) => {
  fibonacci(numberEx1.valueAsNumber);
});
