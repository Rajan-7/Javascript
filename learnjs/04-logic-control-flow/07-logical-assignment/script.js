// ||= assigns the right side value only if the left is a falsy value

let a = 21;

if(!a){
    a = 20;
}
// a = a || 10;
a ||= 22;


console.log(a);

// &&= assigns the right side value only if the left is a truthy value

let b = 7;

if(b){
    b = 21;
}
b = b && 21;
b &&= 21;

console.log(b)

// ??= assighns the right side value only if the left is null or undefined

let c = null;

if(c === null || c === undefined){
    c = 21;
}

c = c ?? 21;
c ??= 21;

console.log(c);