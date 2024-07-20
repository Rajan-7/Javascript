console.log(30 > 10 && 40 > 39 && 1 > 0);
console.log(3 < 2 || 2 > 1);

// && -> Will return first falsy value or the last value
let a;

a = 10 && 30;
a = 10 && 0 && 40;
a = null && 0 && 40;
a = '' && 0 && 40;
a = '' && 0 && null;

console.log(a);

// About posts: Real Example
const arry = [];
arry.length > 0 && console.log(arry[0]);

// || -> Will return the first truthy value or the last value
let b;

b = 1 || 2;
b = '' || 2;
b = 0 || null || undefined;
b = 10 || '';
b = 0 || 10;

console.log(b)

// ?? -> Return the right side operand when the left id null or undefined
let c ;

c = 10 ?? 20;
c = null ?? 20;
c = '' ?? 22;
c = undefined ?? 22;
c = 0 ?? 11;

console.log(c)