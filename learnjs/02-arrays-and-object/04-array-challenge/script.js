// Challenge 1

let x;

let arr = [1, 2, 3, 4, 5];

x = arr.push(6);

x = arr.unshift(0);

x = arr.reverse();

console.log(x);

// Challenge 2

let y;

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9, 10];

// solution 1

arr1.splice(4, 1);

y = arr1.concat(arr2);

console.log(y);

// solution 2

let a1 = arr1.slice(0, 4).concat(arr2);

console.log(a1);

// solution 3

let combineArray = [...arr1, ...arr2];

combineArray.splice(4, 1);

console.log(y);
