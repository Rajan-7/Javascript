const myObject = {
  id: 1,
  name: "Object one",
  isAdmin: "false",
};

// Converting to JSON

const str = JSON.stringify(myObject);
console.log(str.id);

// Parse JSON

const newObj = JSON.parse(str);
console.log(newObj.id);

const myObjects = [
  {
    id: 1,
    name: "Object one",
    isAdmin: "false",
  },
  {
    id: 2,
    name: "Object Two",
    isAdmin: "false",
  },
  {
    id: 3,
    name: "Object Three",
    isAdmin: "false",
  },
];

const str2 = JSON.stringify(myObjects);

console.log(str2);
