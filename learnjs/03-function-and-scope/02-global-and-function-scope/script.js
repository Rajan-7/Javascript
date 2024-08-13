// window.alert("Hey,there!")
// console.log(window.innerWidth)
// console.log(window.innerHeight)

const x = 7;
console.log("In Global scope", x);

function myScope(y) {
  console.log("In function scope", x);
}

myScope();

if (1) {
  console.log("In block scope", x);
}

function varibleShadowing(x, y) {
  x = 4;
  y = 10;
  console.log("In fucntion sope,sum is", x + y);
}

varibleShadowing();
