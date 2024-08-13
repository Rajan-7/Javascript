let x ;

let arr = [2,3,4,5,6,7,8,9];

arr.push(7);

arr.pop();

arr.unshift(7);

arr.shift();

// arr.reverse();

x = arr.includes(54);

x = arr.indexOf(22);

x = arr.slice(1,3);

// x = arr.splice(1,3);

// x = arr.splice(1,1);

x  = arr.splice(1,5).reverse().toString().charAt(0)


console.log(x);

console.log(arr)