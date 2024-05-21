console.log("************Bài 1************");
const errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};
function getError(field) {
  var fieldArr = field.split(".");
  var result = errors;
  fieldArr.forEach(function (value) {
    result = result?.[value];
  });
  if (result && result.constructor.name === "String") {
    return result;
  }
  return result?.required;
}
console.log(getError("email.unique"));
