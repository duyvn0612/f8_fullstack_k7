console.log("************Bài 3************");
const data = [];

function handleRegister(name, password, email) {
  if (name !== undefined && password !== undefined && email !== undefined) {
    var user = {};
    user.name = name;
    user.password = password;
    user.email = email;
    user.role = "user";
    data.push(user);
    return console.log(data);
  }
  return console.log("Chưa nhập đủ thông tin user");
}

function handleLogin(email, password) {
  result = data.filter(function (value) {
    if (value.email === email && value.password === password) {
      return value;
    }
  });
  return result.length > 0 ? result : "Thông tin đăng nhập không hợp lệ";
}
console.log("Đăng kí user 1");
var dataRegister = handleRegister(
  "Nguyen Van A",
  "12345",
  "nguyenvana@email.com"
);
console.log("Đăng kí user 2");
var dataRegister = handleRegister(
  "Nguyen Van B",
  "12345",
  "nguyenvanb@email.com"
);
console.log(`Đăng nhập user: nguyenvanb@email.com, password: 12345`);
const dataLogin = handleLogin("nguyenvanb@email.com", "12345");
console.log(dataLogin);
