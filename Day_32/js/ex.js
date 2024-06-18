var t = [
    { product_id: 1, product_name: "Sản phẩm 1", product_price: 1e3 },
    { product_id: 2, product_name: "Sản phẩm 2", product_price: 2e3 },
    { product_id: 3, product_name: "Sản phẩm 3", product_price: 3e3 },
    { product_id: 4, product_name: "Sản phẩm 3", product_price: 4e3 },
  ],
  e = 0;
t.forEach(function (t) {
  var r = "<tr>";
  (r +=
    "<td>" +
    ++e +
    "</td><td>" +
    t.product_name +
    "</td><td>" +
    t.product_price +
    "</td>" +
    ('<td><input type="number" id="quantity_' +
      t.product_id +
      '" value="1" style="width: 90%; display: block; margin: 0 auto;"><button type="button" style="width: 100%;" id="add_to_cart_') +
    t.product_id +
    '">Th\xeam v\xe0o giỏ</button></td></tr>'),
    (document.querySelector("#product_table").innerHTML += r);
});
var r = document.querySelectorAll("#product_table button");
if (r.length > 0)
  for (var n = 0; n < r.length; n++)
    r[n].onclick = function () {
      var t = this.parentElement.querySelector("input").id,
        e = t.replace("quantity_", "");
      e = parseInt(e);
      var r = document.querySelector("#" + t).value;
      r < 1 && (r = 1);
      var n = sessionStorage.getItem("cart");
      if (null == (n = JSON.parse(n))) {
        var o = { product_id: e, quantity: r };
        (n = []).push(o);
      } else {
        var c = !1;
        if (
          (n.forEach(function (t, a) {
            if (e == t.product_id) {
              var o = parseInt(t.quantity);
              (o += parseInt(r)),
                (n[a] = { product_id: e, quantity: o }),
                (c = !0);
            }
          }),
          !1 == c)
        ) {
          var o = { product_id: e, quantity: r };
          n.push(o);
        }
      }
      var d = JSON.stringify(n);
      sessionStorage.setItem("cart", d), a();
    };
function a() {
  var e = sessionStorage.getItem("cart");
  if (null !== (e = JSON.parse(e)) && e.length > 0) {
    var r = `<table cellpadding="0" cellspacing="0" width="100%" border="1" id="cart_table">
    <thead>
        <tr>
            <th width="5%">STT</th>
            <th>T\xean sản phẩm</th>
            <th width="20%">Gi\xe1</th>
            <th width="20%">Số lượng</th>
            <th width="20%">Th\xe0nh tiền</th>
            <th width="5%">Xo\xe1</th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>
    </table><hr/>
    <button type="button" id="update_cart">Cập nhật giỏ h\xe0ng</button>
    <button type="button" id="delete_cart">Xo\xe1 giỏ h\xe0ng</button>
    `;
    document.querySelector("#cart_data").innerHTML = r;
    var n = 0,
      o = 0,
      c = 0;
    if (
      (e.forEach(function (e) {
        n++;
        var r,
          a,
          d =
            ((r = e.product_id),
            t.forEach(function (t) {
              t.product_id == r && (a = t);
            }),
            a),
          i = parseInt(d.product_price) * parseInt(e.quantity);
        (c += parseInt(i)), (o += parseInt(e.quantity));
        var u =
          `<tr>
                <td>` +
          n +
          `</td>
                <td>` +
          d.product_name +
          `</td>
                <td>` +
          d.product_price +
          `</td>
                <td><input type="number" class="quantity" data-id="` +
          e.product_id +
          '" value="' +
          e.quantity +
          `"></td>
                <td>` +
          i +
          `</td>
                <td><button type="button" class="delete-item">Xo\xe1</button></td>
            </tr>`;
        document.querySelector("#cart_table").innerHTML += u;
      }),
      n > 0)
    ) {
      var d =
        `<tr>
                <td colspan="3">Tổng</td>
                <td>` +
        o +
        `</td>
                <td colspan="2">` +
        c +
        `</td>
            </tr>`;
      document.querySelector("#cart_table").innerHTML += d;
    }
    (document.querySelector("#cart_data #update_cart").onclick = function () {
      var t = document.querySelectorAll("#cart_table tbody .quantity");
      null !== t &&
        t.length > 0 &&
        (t.forEach(function (t) {
          var e = parseInt(t.value),
            r = parseInt(t.getAttribute("data-id")),
            n = sessionStorage.getItem("cart");
          (n = JSON.parse(n)).forEach(function (t, a) {
            r == t.product_id &&
              (e > 0
                ? (n[a] = { product_id: r, quantity: parseInt(e) })
                : n.splice(a, 1));
          });
          var a = JSON.stringify(n);
          sessionStorage.setItem("cart", a);
        }),
        alert("Cập nhật giỏ h\xe0ng th\xe0nh c\xf4ng"),
        a());
    }),
      document.querySelectorAll(".delete-item").forEach(function (t) {
        t.onclick = function () {
          if (confirm("Are you sure?")) {
            var t = this.parentElement.parentElement
              .querySelector(".quantity")
              .getAttribute("data-id");
            t = parseInt(t);
            var e = sessionStorage.getItem("cart");
            (e = JSON.parse(e)).forEach(function (r, n) {
              t == r.product_id && e.splice(n, 1);
            });
            var r = JSON.stringify(e);
            sessionStorage.setItem("cart", r),
              alert("Xo\xe1 sản phẩm th\xe0nh c\xf4ng"),
              a();
          }
        };
      }),
      (document.querySelector("#delete_cart").onclick = function () {
        confirm("Are you sure?") &&
          (sessionStorage.removeItem("cart"),
          alert("Xo\xe1 giỏ h\xe0ng th\xe0nh c\xf4ng"),
          a());
      });
  } else
    document.querySelector("#cart_data").innerHTML =
      "Giỏ h\xe0ng kh\xf4ng c\xf3 sản phẩm";
}
a(); //# sourceMappingURL=index.e86dab70.js.map

//# sourceMappingURL=index.e86dab70.js.map
