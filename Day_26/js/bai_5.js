var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function createSelectHTML(arr, quantityChild = 0) {
  var resultOpt = "";
  // console.log(quantityChild);
  arr.forEach(function (item) {
    var str = "";
    for (let i = 0; i < quantityChild; i++) {
      str += "--|";
    }
    resultOpt += `<option value = ${item.id}>${str}${item.name}</option>`;
    if (item.children) {
      resultOpt += createSelectHTML(item.children, quantityChild + 1);
    }
  });
  return resultOpt;
}

var resultOptHTML = createSelectHTML(categories);

// console.log(resultHTML);

document.write(`<select name="categories" id="categories">
<option value="0">Chọn chuyên mục</option>
${resultOptHTML}
</select>`);
