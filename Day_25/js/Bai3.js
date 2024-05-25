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

//1. 123
//2. 456

function buildHierarchy(categories, parentId = 0) {
  return categories
    .filter((category) => category.parent === parentId)
    .reduce((acc, category) => {
      // const children = buildHierarchy(categories, category.id);
      // // console.log(children);
      // if (children.length) {
      //   acc.push({ ...category, children });
      // } else {
      //   acc.push({ ...category });
      // }
      console.log(category);
      return acc;
    }, []);
}

// const categories = buildHierarchy(array);
// console.log(categories);
function convertNested(arr, parentId = 0) {
  var resultParent = arr.filter(function (item) {
    if (item.parent === parentId) {
      delete item["parent"];
      return item;
    }
  });
  // console.log(resultParent);
  var result = resultParent.reduce(function (prevV, item) {
    var children = convertNested(arr, item.id);
    if (children.length) {
      prevV.push({ ...item, children });
      // console.log(children);
    } else {
      prevV.push({ ...item });
    }
    return prevV;
  }, []);
  return result;
}
const categories = convertNested(array);
console.log(categories);
