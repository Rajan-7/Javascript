// console.log("hello friends");

// values & variables
// var 1myNmae= "ahri";
var _myMother = "God";
var _myName__ = "Ram";
var $my__Name = "Hello ";
// console.log(_myName__);

// Data types in java script

// var myData = "Data";
var myAge = 20;
// console.log(myAge);

// typeof operator
// console.log(typeof(myAge));

var isCorrect = true;
// console.log(isCorrect);
// console.log(typeof(isCorrect));

// practices
// concadinate
// console.log(10+"5");
// console.log(9-"5");
// console.log("java"+" script");
// console.log(" "+" ");
// console.log(" "+"0");
// console.log("Hari"-"Ram");
// 1 represent true , 0 represent false
// console.log(true+true);
// console.log(false+false);
// console.log(false-true);

//  null vs undefined
var useLess = null;
// console.log(useLess);
// console.log(typeof(useLess));

var standBy;
// console.log(standBy);
// console.log(typeof(standBy));

// NaN
var isNumber = 9823242;
// if(!isNaN(isNumber)){
//     console.log("Great");
// }
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));

// expressions & operators

//1. assignment operator
var x = 8;
var y = 8;
// console.log(`Is both x & y are equal : ${x === y}`);

// 2. arthmetic operator

// console.log("Remainder " + 26%5);

// increment & decrement operator

// postfix: work with original value
// var num = 11;
// var newNum = num-- + 1;
// console.log(num);
// console.log(newNum);

// prefix: work with updated value
var num = 17;
var newNum = --num + 3;
// console.log(num);
// console.log(newNum);

//3. comparison operator
var a = 80;
var b = 40;
// equal to
// console.log(a == b);

// not equal to
// console.log(a !== b);

// Greater than
// console.log(a > b);

// Greater than or equal to
// console.log(a >= b);

// less than
// console.log(a < b);

// less than or equal to
// console.log(a <= b);

// 4.Logical operator

var a = 30;
var b = 20;

// logical AND &&
// console.log(a > b && b > 25);

// Logical OR ||
// console.log(a > b || b > 25);

// Logical NOT !
// console.log(!(a > b));

// 5. String Conctenation operator (+)

// var firstName = "Jhon ";
// var lastName = "Cena"

// console.log(firstName + lastName);
// console.log(firstName + " Van");

// What happen when you add number & string
// console.log("Hello" + 10);

// Swapping two number
// var a=20;
// var b=40;

// var c = b;
//     b=a;
//     a=c;
// console.log("Value of A after swaping "+a);
// console.log("Value of B after swaping "+b);

// Swapping two number without using third variables
var a = 10;
var b = 20;

a = a + b;
b = a - b;
a = a - b;
// console.log("Value of A after swaping " + a);
// console.log("Value of B after swaping " + b);

// == vs === data value vs data type
var num1 = 5;
var num2 = "5";
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2 === num1);

// Control Statement
// if-else statement
var value = "sunny";
//  if( value == 'sunny'){
//     console.log("Weather is sunny");
//  }
//  else{
//     console.log("Weather is not sunny");
//  }

// sol 
var year = 2021;
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log("The year " + year + " is a leap year");
//     } else {
//       console.log("The year " + year + " is not a leap year");
//     }
//   } else {
//     console.log("The year " + year + " is a leap year");
//   }
// } else {
//   console.log("The year " + year + " is not a leap year");
// }

// truthy vs falsy value
// 0,"",undefined,NaN,null is falsy value
// if (score = 5){
//     console.log("😂 We score zero i.e game loss");
// }else{
//     console.log("😎 We won the game");
// }

// Conditional operator (Ternery operator)
// variable = (conditon) ?  value1 : value2;

var age = 18;
// console.log((age >= 18) ? "You can vote" :"You cannot vote");

// Switch statement
// area of circle, traingle & rectangle
var area = "circle";
var pi = 3.142,
  l = 5,
  b = 4,
  r = 7;

// if ((area = "circle")) {
//   console.log("Area of circle is " + pi * r ** 2);
// } else if ((area = "traingle")) {
//   console.log("Area of traingle is " + (l * b) / 2);
// } else if ((area = "rectangle")) {
//   console.log("Area of rectangle is " + l * b);
// } else {
//   console.log("Enter valid information");
// }

// Using switch
var area = "traingle";
// var pi = 3.142,
//   l = 5,
//   b = 4,
//   r = 7;

// switch (area) {
//   case "circle":
//     console.log("Area of circle is " + pi * r ** 2);
//     break;
//   case "traingle":
//     console.log("Area of traingle is " + (l * b) / 2);
//     break;
//   case "circle":
//     console.log("Area of rectangle is " + pi * r ** 2);
//     break;
//   default:
//     console.log("Enter valid information");
//     break;
// }

//🖍️while statement
// Execute only if the test condition is true
// Check condition & only enter into BLOCKS SCOPE
var i = 0;
// block scope{}
// while(i <= 10){
//     console.log("Number "+ i);
//     i++;
// }
//🖍️ do-while statement
// execute atleast one statement whether the condition is satisfied or unsatisfied
var i = 11;
// do{
//     // console.log(""+ i);
//     i++;
// }while(i <= 100);

// 🖍️ For loop
// var i = 0;
// for (i=0;i<=10;i++){
//     debugger;
//     console.log("Ankka " + i);
// }

// Challenge
var num = 8;
// for (var i = 1; i <= 10;i++){
//     console.log(num + " * "+ i +" = " + num * i);
// }

// ✍🏿Function in javascript
// Function Definition
// function functionName(){
// }

// function sum() {
//   var x = 4, y= 8;
//   var result = x+y;
//   return result;
// }
// console.log(sum());

// 🖍️ Function parameters vs Function arguments
// function sum(x, y) {
//   var result = x + y;
//   console.log(result);
//   // return result;
// }
// sum(1,1);
// sum(2,2);

// console.log(8 - 'St');

// Why functions? : resusablility i.e define it once & use it multiple times
// It support DRY => DONOT REPEAT YOURSELF

// Function expression => assigning function into a variables
// When function reach return statement , it stop executing

// function sum(x, y) {
//   return result = x + y;
// }
// var functionExp = sum(6,1);
// console.log("sum of two number is "+functionExp);

// 🖍️ anonymous Function
// var funcExp = function(x,y){
//   return result = x+y;
// }
// var sum = funcExp(4,5);
// console.log(sum);

// Modern Javascript ECMAscript13

// 🖍️ Let vs var vs const

// var => function scope
// let & const => Block scope

// var myName = "Roman";
// console.log(myName);

// myName = "Roman Change";
// console.log(myName);

// let myName = "Roman";
// console.log(myName);

// myName = "Roman Change";
// console.log(myName);

// const myName = "Roman";
// console.log(myName);

// myName = "Roman Change";
// console.log(myName);

function myData() {
  const myName = "Roman";
  // console.log(myName);
  if (true) {
    const myAge = "Seven";
    // console.log("Inner "+ myName);
    // console.log("Inner "+ myAge);
  }
  // console.log("Outer "+ myAge);
}
// console.log(myName);
myData();

// function checkLet(){
//   let name = "Raj";
//   if(name === "Raj"){
//     let address = "Ktm";
//     console.log("Inner "+ name);
//     console.log("Inner "+ address);
//   }
//   console.log(address);
// }
// checkLet();

// 🖍️ Template literals
// var num = 8;
// for (var i = 1; i <= 10;i++){
//     // console.log(num + " * "+ i +" = " + num * i);
//     console.log(`${num} * ${i} = ${num * i}`);
// }

// 🖍️ Default parameter
// function add(a,b=9){
//   return a+b;
// }
// console.log(add(4));

// 🖍️ Fat arrow function

// function sum() {
//   let x = 6,
//     y = 7;
//   let sum = x + y;
//   return `The sum of two number is ${sum}`;
// }
// console.log(sum());

// Using fat arrow function

// const sum = () =>  `The sum of two number using arrow function is ${(x=9)+(y=9)}`
// console.log(sum());

// 🖍️ Arrays in Javascript
// Start with 0 index
// First element = lower index/lower boundary
// Last element = upper index/upper Boundary

// ✍🏿 Traversal in Arrays

// var myFriends = ['Rose','Roman','Raz','Jhon'];
// console.log(myFriends[myFriends.length - 1]);

// 🖍️ For in loop
// var myFriends = ['Rose','Roman','Raz','Jhon'];

// for (var i = 0; i<myFriends.length;i++){
//   console.log(myFriends[i]);
// }

// 😎Using For in loop & For of loop

var myFriends = ["Rose", "Roman", "Raz", "Jhon"];

// provide index number
// for (let elements in myFriends){
//   console.log(elements);
// }

// provide value of arrays
// for (let elements of myFriends){
//   console.log(elements);
// }

// ✍🏿 forEach loop

// myFriends.forEach(function(element, index,array){
//   console.log(element + " Index" + index + " "+array);
// })

// Using fat arrow function

myFriends.forEach((element, index, array) => {
  console.log(element + " Index" + index + " " + array);
});
