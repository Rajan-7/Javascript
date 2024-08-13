// 1 .String
let name = "ROse";

// 2 .Number
const mark = 87;

// 3 .Boolean
let isTrue = true;

// 4. Null
let roomNum = null;

// 5. Undefined
let score;

// 6. Symbol
let id = Symbol("unique_id");

// 7. BigInt
let num = 9798727492748917n;

// Reference type

let ar = [1, 2, 2, 2, 4];

let person = {
  name: "jack",
};

function getName() {
  console.log("Jacke");
}

const output = getName;

console.log(output, typeof output);
