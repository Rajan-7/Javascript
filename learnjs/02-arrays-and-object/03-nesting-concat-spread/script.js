let x;

// Nesting

let names = ["Ram", "hari", "shyam"];
let fruits = ["apple", "banana", "orange"];

// names.push(fruits);

// x = names[3][0];

let allTogether = [names, fruits];

x = allTogether;

x = allTogether[1][2];

x = names.concat(fruits);

// Spread operator (...)
x = [...names, ...fruits];

// Flattening the array

let arr = [1, 2, [4, 5, 6], [7, 8, 9], 22, 21, [44, 55]];
x = arr.flat();

// Static methods on Array
x = Array.isArray(x);

x = Array.from("123");

let a = 7,
  b = 6,
  c = 9;

x = Array.of(a, b, c);

console.log(x);
