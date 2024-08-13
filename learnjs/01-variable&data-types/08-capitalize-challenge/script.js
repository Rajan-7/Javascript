let myString = "developer";

let myNewString;

// solution 1
myNewString = myString[0].toUpperCase() + myString.slice(1);

// solution 2

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// solution 3

myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;

// solution 4

myNewString = myString.split(" ");

for (let i = 0; i <= 8; i++) {
  x = myNewString[0][i].toUpperCase();
  console.log(x);
}
console.log(myNewString);
