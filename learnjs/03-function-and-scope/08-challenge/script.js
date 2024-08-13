// Challenges
// 1. Fahrenheit to celsius

// using regular function
console.log("Using regular function -_-")
function getCelsius1(f) {
  return ((f - 32) * 5) / 9;
}
console.log(`The temperature is ${getCelsius1(40)}\xB0C`)

// Using arrow function
console.log("Using arrow function -_-")
const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temperature is ${getCelsius(42)}\xB0C`);

//2. To return min and max value
const minMax = (...arr)=>{
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return {min,max};
}
console.log(minMax(1,2,3,3,4,5,6,7,8,9));

// 3. To console area of rectangle as soon as the page load using IIFE
console.log("Arrow Function '-'");
((l,w)=>{
   console.log(`The area of rectangle with length ${l} and width ${w} is ${l*w}`)
})(10,5);

// Using function
console.log("Normal Function '-'");
(function (l,w){
    console.log(`The area of rectangle with length ${l} and width ${w} is ${l*w}`);
})(10,10);
