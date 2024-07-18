let x = Math.floor(Math.random() * 100 + 1);

let y = Math.floor(Math.random() * 50 + 1);

let sum = x + y;

let sub = x - y;

let mul = x * y;

let quo = x / y;

let rim = x % y;

console.log(`${x} + ${y} = ${sum}`)
console.log(`${x} - ${y} = ${sub}`)
console.log(`${x} * ${y} = ${mul}`)
console.log(`${x} / ${y} = ${Math.ceil(quo)}`)
console.log(`${x} % ${y} = ${rim}`)
