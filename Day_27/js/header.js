var loginBtn = document.querySelector(".btn-login");
var dantriHeader = document.querySelector(".head-dantri");
var formLoginAndRegister = document.querySelector(".form-login-register");
var body = document.querySelector("body");
var loginInps = document.querySelectorAll(".info-login-inp label input");
function checkFocus(inp) {
  inp.addEventListener("focus", function () {
    // console.log("focus");
    return true;
  });
  return false;
}

// console.log(document.hasFocus());

// body.addEventListener("click", function () {
//   console.log("focus");
// });

Array.from(loginInps).forEach(function (loginInp) {
  loginInp.addEventListener("blur", function () {
    console.log("out focus");
  });
  // if(loginInp.checkFocus)
});
