// Normal Function
function add(x,y){
    console.log(x + y);
}
add("The sum is ",6,7);

// Arrow function
const addNums  = (x,y)=>{
    return x + y;
}
console.log(addNums(6,9));

// Shortening the arrow function in case of one sentence code or statement:Implicit return
const subTract = (x,y) => x - y;
console.log(subTract(7,3));

// One parameter doesn't need the parenthesis
const getMultiplyBy5 = x => x * 5;
console.log(getMultiplyBy5(6));

//forEach method
console.log("ForEach");
let numbers = [12,13,14,15,16,17];
numbers.forEach(function (n){
    console.log(n);
})

// Using arrow function
console.log("ForEach Arrow")
numbers.forEach(x=>console.log(x))
