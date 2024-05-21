console.log("************Bài 2************");
function createCustomers(customers) {
  return customers
    .sort(function (a, b) {
      return a.age - b.age;
    })
    .map(function (customer) {
      var shortNameArr = customer.name.split(" ");
      customer["shortName"] = `${shortNameArr[0]} ${shortNameArr.slice(-1)}`;
      return customer;
    });
}

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

console.log(createCustomers(customers));
