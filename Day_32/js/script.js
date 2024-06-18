var tblProduct = document.querySelector(".tbl-product");
var tblCart = document.querySelector(".tbl-cart");
var tblListProduct = tblProduct.lastElementChild;
var cart = document.querySelector(".cart");
var setLocalStorage = function (nameLocal, arr) {
  localStorage.setItem(nameLocal, JSON.stringify(arr));
};
var listProduct = [
  {
    idProduct: 0,
    nameProduct: "Sản phẩm 1",
    Price: 1000,
  },
  {
    idProduct: 1,
    nameProduct: "Sản phẩm 2",
    Price: 2000,
  },
  {
    idProduct: 2,
    nameProduct: "Sản phẩm 3",
    Price: 3000,
  },
  {
    idProduct: 3,
    nameProduct: "Sản phẩm 4",
    Price: 4000,
  },
];

var listProductInCart = [];
if (localStorage.getItem("listProductCart")) {
  listProductInCart = JSON.parse(localStorage.getItem("listProductCart"));
} else {
  setLocalStorage("listProductCart", listProductInCart);
}
// show cart
var showCart = function () {
  setLocalStorage("listProductCart", listProductInCart);
  if (listProductInCart.length === 0) {
    return (cart.innerText = "Không có sản phẩm nào trong giỏ hàng.");
  }
  var totalPrice = 0;
  var totalQuantity = 0;
  var tblHeadCartEl = `<table class="tbl-cart">
        <thead>
          <tr>
            <th style="width: 5%;">STT</th>
            <th>Tên sản phẩm</th>
            <th style="width: 10%;">Giá</th>
            <th style="width: 10%;">Số lượng</th>
            <th style="width: 10%;">Thành tiền</th>
            <th style="width: 5%;">Xóa</th>
          </tr>
        </thead>
        <tbody>`;
  var tblBodyCartEl = ``;
  listProductInCart.forEach(function (prod, index) {
    totalPrice += prod.quantity * prod.Price;
    totalQuantity += prod.quantity;
    tblBodyCartEl += `
        <tr>
          <td>${++index}</td>
          <td>${prod.nameProduct}</td>
          <td>${prod.Price}</td>
          <td><input style="width: 90%;" type="number" class = "inp-quantity-cart" id = "${
            prod.idProduct
          }" min = '0' value = '${prod.quantity}'></td>
          <td>${prod.quantity * prod.Price}</td>
          <td>
            <button  style="width: 100%;"  class = "delete-product" id="${
              prod.idProduct
            }">Xóa</button>
          </td>
        </tr>`;
  });

  var tblFootCartEl = `</tbody>
    <tfoot>
      <tr>
        <th colspan="3">Tổng</th>
        <th>${totalQuantity}</th>
        <th colspan="2">${totalPrice}</th>
      </tr>
    </tfoot>
  </table>
  <button class = "update-cart" style="margin-top: 1rem;">Cập nhật giỏ hàng</button>
  <button class = "delete-cart" style="margin-top: 1rem;">Xóa giỏ hàng</button>`;
  cart.innerHTML = tblHeadCartEl + tblBodyCartEl + tblFootCartEl;
};

// function show cart
showCart();
listProduct.forEach(function (item, index) {
  var dataEl = `<tr>
    <td>${++index}</td>
    <td>${item.nameProduct}</td>
    <td>${item.Price}</td>
    <td><input type="number" min = '0' value = '1'><button>Thêm vào giỏ</button></td>
    </tr>`;
  tblListProduct.innerHTML += dataEl;
});

var listBtnAddProduct = document.querySelectorAll(".tbl-product button");

// Add Product
listBtnAddProduct.forEach(function (btnAdd, index) {
  btnAdd.addEventListener("click", function () {
    var quantity = +btnAdd.previousElementSibling.value;
    var prod = listProduct.find(function (prod) {
      return +prod.idProduct === +index;
    });

    var prodCart = listProductInCart.find(function (prod) {
      return +prod.idProduct === +index;
    });
    if (prodCart) {
      prodCart.quantity += quantity;
    } else {
      // operator Spread ...
      listProductInCart.push({ ...prod, quantity: +quantity });
    }
    showCart();
  });
});

cart.addEventListener("click", function (e) {
  // delete cart
  if (
    e.target.nodeName === "BUTTON" &&
    e.target.className === "delete-product"
  ) {
    // console.dir(e.target);
    var textWarning = "Bạn chắc chắn muốn xóa sản phẩm này ?";
    if (confirm(textWarning)) {
      var idxClear = listProductInCart.findIndex(function (prod) {
        return +prod.idProduct === +e.target.id;
      });
      if (idxClear >= 0) {
        alert("Xóa sản phẩm thành công !");
        listProductInCart.splice(idxClear, 1);
      } else {
        alert("Xóa sản phẩm không thành công !");
      }
      showCart();
    }
  }
  // update cart
  if (e.target.nodeName === "BUTTON" && e.target.className === "update-cart") {
    var listInpQuantityCart = document.querySelectorAll(".inp-quantity-cart");
    listInpQuantityCart.forEach(function (inp) {
      if (inp.value > 0) {
        listProductInCart[
          listProductInCart.findIndex(function (prod) {
            return +prod.idProduct === +inp.id;
          })
        ].quantity = +inp.value;
      } else {
        listProductInCart.splice(
          listProductInCart.findIndex(function (prod) {
            return +prod.idProduct === +inp.id;
          }),
          1
        );
      }
    });
    alert("Cập nhật giỏ hàng thành công !");
    showCart();
  }
  // delete cart
  if (e.target.nodeName === "BUTTON" && e.target.className === "delete-cart") {
    var textWarning = "Bạn chắc chắn xóa giỏ hàng ?";
    if (confirm(textWarning)) {
      listProductInCart.length = 0;
      alert("Xoá sản phẩm thành công");
      showCart();
    }
  }
});
