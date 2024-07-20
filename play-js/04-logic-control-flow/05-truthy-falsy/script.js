// Falsy value
// - false
// - Null
// - 0
// - "",''(Empty string)
// - Undefined
// - NaN

//  *Truthy value
// - Everything that is not falsy
// - 'false'
// - ' '
// - true
// - '0'
// - {}
// - []
// function (){}->empty function

const x = 1;
if (x) {
  console.log("This is Truthy value");
} else {
  console.log("This is Falsy value");
}

// Area of confusion || caveats of Truthy and Falsy value

const children = 0;
if (children !== undefined && !isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log(`Please enter your number of children`);
}

// Empty array confusion

const arry = [];
if (arry.length !== 0 || arry.length > 0) {
  console.log(`You have items in Array`);
} else {
  console.log(`No item in array`);
}

// Empty object
const obj = {};
// console.log(Object.keys(obj).length);
if (Object.keys(obj).length > 0) {
  console.log(`Object have properties`);
} else {
  console.log(`No properties in object`);
}

// Loose equalities
console.log(false === 0);
console.log('' === 0);
console.log(undefined === null);
