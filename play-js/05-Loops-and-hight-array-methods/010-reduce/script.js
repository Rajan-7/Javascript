const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// Short version

const sum2 = numbers.reduce((acc, cur) => acc + cur, 80);

// for loop

const sum3 = ()=>{
    let acc = 0;
    for(const cur of numbers){
        acc += cur;
    }
    return acc
}

console.log(sum3());

// Shopping cart


const cart = [
    {id:1,name:'product 1',price:150},
    {id:2,name:'product 2',price:250},
    {id:3,name:'product 3',price:350},
    {id:4,name:'product 4',price:450},
];

const total = cart.reduce((acc,cur)=>acc + cur.price,0);
console.log(total);

const sumOfProduct = cart.reduce(function(acc,product){
    return acc + product.price
},0);
console.log(sumOfProduct);