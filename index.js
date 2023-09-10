// console.log("hello friends");

const { Logger } = require("sass");

// values & variables
// var 1myNmae= "ahri";
// var _myMother = "God";
// var _myName__ = "Ram";
// var $my__Name = "Hello ";
// console.log(_myName__);

// Data types in java script

// var myData = "Data";
// var myAge = 20;
// console.log(myAge);

// typeof operator
// console.log(typeof(myAge));

// var isCorrect = true;
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
// var useLess = null;
// console.log(useLess);
// console.log(typeof(useLess));

// var standBy;
// console.log(standBy);
// console.log(typeof(standBy));

// NaN
// var isNumber = 9823242;
// if(!isNaN(isNumber)){
//     console.log("Great");
// }
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));

// expressions & operators

//1. assignment operator
// var x = 8;
// var y = 8;
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
// var num = 17;
// var newNum = --num + 3;
// console.log(num);
// console.log(newNum);

//3. comparison operator
// var a = 80;
// var b = 40;
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

// var a = 30;
// var b = 20;

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
// var a = 10;
// var b = 20;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("Value of A after swaping " + a);
// console.log("Value of B after swaping " + b);

// == vs === data value vs data type
// var num1 = 5;
// var num2 = "5";
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2 === num1);

// Control Statement
// if-else statement
// var value = "sunny";
//  if( value == 'sunny'){
//     console.log("Weather is sunny");
//  }
//  else{
//     console.log("Weather is not sunny");
//  }

// sol 
// var year = 2021;
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

// var age = 18;
// console.log((age >= 18) ? "You can vote" :"You cannot vote");

// Switch statement
// area of circle, traingle & rectangle
// var area = "circle";
// var pi = 3.142,
//   l = 5,
//   b = 4,
//   r = 7;

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
// var area = "traingle";
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
// var i = 0;
// block scope{}
// while(i <= 10){
//     console.log("Number "+ i);
//     i++;
// }
//🖍️ do-while statement
// execute atleast one statement whether the condition is satisfied or unsatisfied
// var i = 11;
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
// var num = 8;
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

// function myData() {
// const myName = "Roman";
// console.log(myName);
// if (true) {
// const myAge = "Seven";
// console.log("Inner "+ myName);
// console.log("Inner "+ myAge);
// }
// console.log("Outer "+ myAge);
// }
// console.log(myName);
// myData();

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

// var myFriends = ["Rose", "Roman", "Raz", "Jhon"];

// provide index number
// for (let elements in myFriends){
//   console.log(elements);
// }

// provide value of arrays
// for (let elements of myFriends){
//   console.log(elements);
// }

// 🖍️✍🏿 forEach loop

// myFriends.forEach(function(element, index,array){
//   console.log(element + " Index" + index + " "+array);
// })

// Using fat arrow function

// myFriends.forEach((element, index, array) => {
//   console.log(element + " Index" + index + " " + array);
// });

// 🖍️ Searching & filter in array
// 👉 Array.prototype.indexof()
// var myFriends = ["Rose", "Roman", "Raz", "Jhon","Sonam"];
// console.log(myFriends.indexOf("Sonam"));

// 👉 Find method: Only return first satisfy value
// const prices =[200,300,400,500,600,700];
// const currVal = prices.find((cur)=>cur < 400);
// console.log(currVal);

// console.log(prices.find((cur)=>cur > 1400));

// 👉 FindIndex method
// console.log(prices.findIndex((cur)=>cur > 1400));

// 🖍️ Filter mehtod
// const prices =[200,300,400,500,600,700];

// const filterPrice = prices.filter((elem,index)=>{
//   return elem > 1400;
// })
// console.log(filterPrice);

// 👉 Sorting array:sort() : Only work on string
// const alphabets = ['B','D','E','A','C'];
// console.log(alphabets.sort());
// const number = [1000,900,800,850,100,200];
// checks the initial number value
// console.log(number.sort());

// 🖍️ CRUD in array

// Array.push : return new length of an array & it add element at the end of an array
// const arrayOfAnimal = ['Dog','sheep','cow','pig'];
// const count = arrayOfAnimal.push('Chicken');
// arrayOfAnimal.push('Goat','buffalo');
// console.log(arrayOfAnimal);
// console.log(count);

// 👉 Array.unshift : add element at the very first index
// const arrayOfAnimal = ['Dog','sheep','cow','pig'];
// arrayOfAnimal.unshift('Chicken');
// arrayOfAnimal.unshift('Goat','buffalo');
// console.log(arrayOfAnimal);

// 2nd example
// const myNum = [1,2,3,4];
// myNum.unshift(7,8);
// console.log(myNum);

// 🖍️Array.pop() : remove the last element of an array & return that element
// const arrayOfString = ['new','world','of','javascript'];
// console.log(arrayOfString.pop());
// console.log(arrayOfString);

// 🖍️Array.shift():remove the first element of an array & return that element
// const arrayOfString = ['new','world','of','javascript'];
// console.log(arrayOfString.shift());
// console.log(arrayOfString);

// 🕹️ Challenge Time
// Challenge 1:Add dec at the end of an array
// const months = ['jan','march','april','june','july'];
// const returnType = months.splice(months.length,0,'Dec');
// console.log(months);

// Splice method return [] array when nothing is deleted as its output
// It returns the deleted elements as its output
// console.log(returnType);

// Challenge 3:update march to March
// const indexOfMarch = months.indexOf('march');
// if(indexOfMarch != -1){
//   const updateMonth = months.splice(indexOfMarch,1,'March');
// }else{
//   console.log("No such data");
// }
// months.splice(1,1,'March');
// console.log(months);

// Challenge 4: Delete june
// const indexOfJune = months.indexOf('june');
// if(indexOfJune != -1){
//   const updateMonth = months.splice(indexOfJune,1,);
//   console.log(updateMonth);
// }else{
//   console.log("No such data");
// }
// console.log(months);

// const indexOfMonth = months.indexOf('april');
// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,2);
//   console.log(updateMonth);
// }else{
//   console.log("No such data");
// }
// console.log(months);

// 🖍️🖍️ Map & Reduce in Array
// 👉 Array.map(): returns a new array containing the results of calling functions
// Map method are chainable i.e it can chain with filter,reduce
// const arrayNumber = [1,4,9,16,25];
// Find number which are greater than 9
// const newArray = arrayNumber.map((curElem,index,arr)=>{
//    return curElem > 9;
// })

// const newArr1 = arrayNumber.map((curE,ind,array)=>{
//   return curE > 4;
// })

// const newArr2 = arrayNumber.map((curE,index,array)=>{
//   return curE > 16
// })
// console.log(arrayNumber);
// console.log(newArray);

// let arrayNew = arrayNumber.map((curElm, index, array)=>{
//   return `The value ${curElm} index number is ${index} belongs to ${array}`
// })
// console.log(arrayNew);

// 🕹️ Challenge time
// Challenge 1: Find square root of each elements (sol:Math.sqrt())
// let arr = [25,36,49,64,81];
// let sqrArr = arr.map((curElem)=>{
//   return Math.sqrt(curElem)
// })
// console.log(sqrArr);

// Challenge 2: Multiply numbers by 2 & return only those which are greater than 10
// let arr = [2,3,4,6,8];
// let multiArrayTwo = arr.map((curElem)=>{
//   return curElem * 2
// }).filter((curElem)=>{
//   return curElem > 10
// })
// console.log(multiArrayTwo);

// 🖍️ Reduce Method : convert 3D or 2D array into single dimensional array
// 👉 It takes four arguments : accumulator , initial value, initial index, source array
//✍🏿 let arr = [5,6,2];
// let sum = 0
// let i = 0 ;
// while ( i < arr.length){
//    sum  = sum +  arr[i]
//    i ++
// }
// console.log(sum);

//✍🏿 let arr = [5,6,2];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//   sum += arr[i];
// }
// console.log(sum);

// let arr = [5,6,2];
// const sum = arr.reduce((acc,curElm,index,array)=>{
//   return acc += curElm;
// },8)
// console.log(sum);

// let arr = [2,3,4,5];
// let sum = arr.map((curElem)=>curElem * 2).filter((curElem)=>curElem > 4).reduce((acc,curElem)=>{
//   return acc += curElem;
// })
// console.log(sum);

// let ar = [2,3,4];
// const sum = ar.reduce((acc,cur)=>{
//     return acc += cur;
// });
// console.log(sum);

// 🖍️ Fattening an array
// const array = [
//   ["arr", "arr2"],
//   ["arr3", "arr4"],
//   ["arr5", "arr6"],
// ];

// const flatArray = array.reduce((acc,cE)=>{
//   return acc.concat(cE);
// })
// console.log(flatArray);

// 🖍️👉 String in javascript
// Something that is written insides the quotes

// 🖍️ Escape character
// let char1 = 'my name \'Eagle\'';
// console.log(char1);

// 👉Finding a string in string
// let myData = "Hello my friends , how are you ?";
// console.log(myData.indexOf("f",10));

// let myData = "Hello my friends , how are you ?";
// console.log(myData.lastIndexOf("f",10));

// 🖍️👉 Searching string in a string
// search() method cann't take second arguments as start position as indexOf
// let myData = "My name is Roman";
// let searchData = myData.search("name");
// console.log(searchData);

// 👉Extracting string parts
// 🖍️Slice () methods:it select the start arguments but doesn't select the last arguments
// let str = "Apple , banana, mango";
// let sliceRes = str.slice(8,-1);
// console.log(sliceRes);

// 🕹️Only display 280 characters

// let myTweet = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laboriosam dignissimos repudiandae nisi voluptates quod dolores ipsum quaerat fugit aperiam ab officia a enim perferendis perspiciatis, ex deserunt omnis expedita? . It is so very frustrating to hear people say that nothing can be done without doing nothing , but people never try to do such thing that actually make changes to the world.";
// let onlyTwoEighty = myTweet.slice(0,280);
// console.log(onlyTwoEighty);
// console.log(onlyTwoEighty.length);

// 🖍️ Substring() methods:It cann't take negative index
// let str = "Apple , banana, mango";
// let res = str.substring(9,-5);
// console.log(res);

// 🖍️Substr() methods 
// let str = "Apple , banana, mango";
// let res = str.substr(-5);
// console.log(res);

// 👉 Replacing string contents:replace() methods replace the data which occurs at the beginning of the string or sentence or paragraph
let myData = "My team is winning another team";
let replaceData = myData.replace("team","member");
console.log(replaceData);

