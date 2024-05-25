var array = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function convertNested(arr, parentId = 0) {
  return arr
    .filter(function (item) {
      if (item.parent === parentId) {
        delete item["parent"];
        return item;
      }
    })
    .reduce(function (prevV, item) {
      var children = convertNested(arr, item.id);
      if (children.length) {
        item.children = children;
        prevV.push(item);
        // prevV.push({ ...item, children });
        // console.log(children);
      } else {
        prevV.push(item);
        // prevV.push({ ...item });
      }
      return prevV;
    }, []);
}
console.log(convertNested(array));
