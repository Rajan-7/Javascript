// console.log("hello friends");

const { error, count } = require("console");
const { checkPrime } = require("crypto");
const { workerData } = require("worker_threads");

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
// 2
// console.log(false+false);
// 0
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

// var myFriends = 'Rose','Roman','Raz','Jhon'];
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
// splice(start,deleteindex,items)
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
// console.log(newArray);

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
// It is case sensative
// let myData = "My team is winning another team";
// let replaceData = myData.replace("team","member");
// console.log(replaceData);

// 👉 Extracting string character
// 🖍️ charat() method
// let str = "Hello friends";
// console.log(str.charAt(2));

// 🖍️ charCodeAt() method
// let str = "Hello friendS";
// const lastStr = str.indexOf('S');
// console.log(str.charCodeAt(lastStr));

// 🕹️ Return the unicode of the last character of the string
// let str = "HELLO WORLD";
// let last = str.length - 1;
// // let last = str.indexOf('D');
// console.log(str.charCodeAt(last));

// 👉 Property access
// let str = "Ram";
// console.log(str[0]);

// 👉 toUppercase() & toLowerCase()
// let myName ="Ram thapa";
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());

// 👉 concat()
// let first = "Ram";
// let last = "Thapa";
// console.log(`${first} ${last}`);
// console.log(first.concat(last));

// 👉String.trim()
// let str = "      Hello       Friends      ";
// console.log(str.trim());

// 👉Split() method
// let tr = "a,b,c | d,e";
// console.log(tr.split(","));
// console.log(tr.split(" "));
// console.log(tr.split("|"));

// 👨‍🔧👉 Date & Time methods: 1 Jan 1970
// 👉 Creating Date objects
// console.log(new Date());
// let newDate = new Date();
// console.log(newDate);
// console.log(new Date().toLocaleString());
// console.log(Date());
// console.log(Date.now());

// let date = new Date("Oct 13 2020 11:30:30");
// console.log(date.toLocaleString());

// let myDate = new Date();
// console.log(myDate.toLocaleString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());

// 👉 Time method
// let time = new Date();
// console.log(time.getTime());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());

// 🖍️ Challenge Time

// 👉 Javascript Math object
// console.log(Math.PI);
// let value = 10.97489;
// console.log(Math.round(value));
// let x = 2 , y= 3;
// console.log(Math.pow(x,y));
// let xx = 28;
// console.log(Math.sqrt(xx));
// let absValue = -77;
// console.log(Math.abs(absValue));
// console.log(Math.abs(-99));
// console.log(Math.abs(4-6));
// Math.ceil:return the highest value if it has decimal
// console.log(Math.ceil(4.1));

// Math.floor
// console.log(Math.floor(4.1));
// Math.max(),Math.min()
// console.log(Math.max(5,6,7,89,77,9));
// console.log(Math.min(5,6,7,89,77,9));

// Math.random()
// console.log(Math.floor(Math.random()*10));

// Math.trunc()
// console.log(Math.trunc(-6.77));

// 👉👉 DOM in javascript(Document object model)
// alert(location.href);
// if(confirm("Wnat to visit google?")){
//     location.href="https://www.youtube.com/watch?v=oiX-6Y2oGjI";
// }
// var num = 9;
// for(let i = 0 ; i <= 10; i++){
//    console.log(`${num} * ${i} = ${num * i}`);
// }

// var arr = [3,4,5,6];
// const sum = arr.reduce((acc,cur)=>{
//    return acc += cur;
// })
// console.log(sum);

// const arar = [4,5,6,7,9];
// const res = arar.filter((cur)=>{
//     return cur > 6;
// }).reduce((acc,cur)=>{
//     return acc += cur;
// })
// console.log(res);

// let nn = Number.NEGATIVE_INFINITY
// console.log(nn);

// function max(mm){
//     let nn = Number.NEGATIVE_INFINITY;
//     for(let n of mm){
//         if(n > nn){
//            nn = n;
//         }
//     }
//     return nn
// }
// console.log(max([4,5,6,7,8,9]));

// Find the index of "s" in sentence The snake is big
// let str = "The snake is big";
// console.log(str.indexOf("s"));

// Search whether the word "fox" is in the sentence
// let str1 = "The quick brown fox jump over the lazy dog";
// const words = str1.split(" ");
// console.log(str1.split(" "));
// let found = false;
// for(let word of words){
//     if(word === "fox"){
//         found = true;
//         break;
//     }
// }
// if(found){
//     console.log("Yes the word fox is present");
// }else{
//     console.log("No the word is not present");
// }

// 👉👉EVENTS in javascript
// 4 ways of writing EVENTS in javascript
// i. inline event use like onclick="alert()"
// ii. by calling a function like onclick = "myEventFunction()"
// iii. using DOM properties or by using reference
// iv. using addEventListener(type,callbackFunction) : event can be use multiple times

// KeyBoardEvent , MouseEvent, InputEvent

// 👉👉 TIMING events in javascript
// １SetTimeout(): setTimeout(function,milliseconds)
// 𝟐 SetInterval(): setInterval(function,milliseconds)
// 𝟹 clearInterval():clearInterval(ref) -> here ref is reference of setInterval
// 𝟺 clearTimeout():clearTimeout(ref) -> here ref is reference of setTimeout

// 👉OOP in javascript
// 👉Object literals
// Creating an object
// 𝟷 way
// let obj ={
//     name:"ram",
//     address:"ktm",
//     number:98567,
//     level:"bachelor",
//     age:49,
//     getData:function(){
//         console.log(`My name is ${obj.name}`);
//     }
// }
// obj.getData();

// 𝟸 Way
// let obj ={
//     name:"ram",
//     address:"ktm",
//     number:98567,
//     level:"bachelor",
//     age:49,
//     getData(){
//         console.log(`My name is ${obj.name}`);
//     }
// }
// obj.getData();

// 𝟛 Creating object inside object
// let obj ={
//     name:{
//         firstName:"Jhon",
//         lastName:"wick"
//     },
//     address:"ktm",
//     number:98567,
//     level:"bachelor",
//     age:49,
//     getData:function(){
//         console.log(`My name is ${obj.name}`);
//     }
// }
// console.log(obj.name.lastName);

// 👉WHAT IS this object?
// Ex 𝟷
// console.log(this.alert("Awww"));

// Ex 𝟸
// var name1 = "Jhon";
// function myName(){
//     console.log(this.name1);
// }
// myName();

//Ex 𝟹
// let obj ={
//     name:"roman",
//     getName(){
//         console.l𝟹og(this.name);
//     }
// }
// obj.getName();

//Ex 𝟺
// let obj ={
//     name:"roman",
//     getName:()=>{
//         console.log(this);
//     }
// }
// obj.getName();

// Ex 𝟻
// let obj = {
//   name: {
//     firstName: "Jhon",
//     lastName: "wick",
//   },
//   address: "ktm",
//   number: 98567,
//   level: "bachelor",
//   age: 49,
//   getData: function () {
//     console.log(`My name is ${this.name.firstName}`);
//   },
// };
// obj.getData();

// 👉👉 Destructuring in javascript

// ➡️➡️ Array Destructuring
// const bio = ['roman','wick',19];
// // Position should be exactly as same as actual array
// let [Fname,Lname,age]=bio;
// console.log(Lname);

// ➡👉 Object destructuring
// let bigData = {
//   fname: "jhon",
//   lname:"wick",
//   age:19
// };
// variable name should be same as actual object variable name
// let {fname,lname,age}=bigData;
// console.log(fname);

// 👉Object properties💢
// Dynamic data
// let name = "Roman";
// let obj={
//     [name]:"You're king",
//     [26-7]:"age"
// }
// console.log(obj);

// No need to write key & values if they are same
// let name = "Jack";
// let age = 19;
// const bio={
//     name:name,
//     age:age
// }
// console.log(bio);

// 👉🖍️ SPREAD operator / spread operator
// const animal = ['dog','cat','rabbit'];
// const newAnimal = [...animal,'cow','tiger','lion'];
// console.log(newAnimal);

// 🖍️ES7 (2016)
// １. array.includes(): return boolean result i.e true if present else false
// const animal = ['dog','cat','rabbit'];
// const isAvailable = animal.includes('dog');
// console.log(isAvailable);

// 𝟸. Exponential operator
// console.log(2 ** 2);g

//🖍️ES8
// 𝟷 padStart() & padEnd()
// const msg = "Hello";
// console.log(msg);
// console.log(msg.padStart(7));
// console.log(msg.padEnd(7));

//𝟸 object.values & object.entries:Both storre values into arrays
// const obj ={name:"Roman",age:19};
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// REST operator : return rest of the values of corresponding obj,string or array
// const arr = ['ram','hari','jack','roman','eags'];
//  [first,second,...others]=arr;
//  console.log(first);
//  console.log(second);
//  console.log(others);

// 🖍️ES2018
// const person = {name:"ram",age:18,degree:"MCA"};
// const newPerson = {...person};
// console.log(newPerson);

// 🖍️ES2019
//👉 flat() method/prototype
// const array = [
//   ["arr", "arr2"],
//   ["arr3", "arr4"],
//   ["arr5", "arr6",["ram","hari"]],
// ];
// const flatArray = array.reduce((acc,cE)=>{
//   return acc.concat(cE);
// })
// console.log(array.flat(2));

//👉 fromEntries() method : return the original vlaues of the object
// const oj = {name:"a",age:49};
// const obE = Object.entries(oj);
// console.log(obE);
// console.log(Object.fromEntries(obE));

// 🖍️ES2020
// １ BigInt
// let maxNum = Number.MAX_SAFE_INTEGER;
// console.log(maxNum);
// const numNum = 9007199254740991n + 12n;
// console.log(typeof(numNum));

// "use strict";
// x= 2.3;
// console.log(x);

// 🖍️👉ADVANCE JAVASCRIPT
// 1.Event propagation , event bubbling & event capturing
// Event capturing : Top-bottom approach
// Event bubbling: Botton-top approach
// Cature phase

// １HIgher order function : such kind of function which accepts other fucntions as its arguments is HOF
// 𝟸 Callback function : such function which acts as an arguments in another functions is CF

// Below calc is the HOF & add,sub are the CF
// const add = (a,b)=>{
//     return a+b;
// }
// const sub = (a,b)=>{
//     return Math.abs(a-b);
// }
// const calc = (num1,num2,func)=>{
//     return func(num1,num2);
// }
// console.log(calc(5,3,add));

// 👉🖍️ ASYNCHRONOUS JAVASCRIPT
// 👉Hoisting in Javascript : Hoisting is a mechanisms in javascript where variable & function declaration
// are moved to the top of their scope before code execution

// Example
// console.log(name1);
// var name1;
// name1="ram";

// 👉Scope chain & lexical scoping in Javascript
// Scope chain
// var name ="Ram";

// Lexical scoping : Inner scope get access to the variable of their parent scope but vice-versa not true

// １ Example of lexical scoping
// let a = "Hello ";
// const parent =()=>{
//     let b = "Hi ";
//     const child=()=>{
//         let c = "Namaste ";
//         console.log(a+b+c);
//     }
//     child();
//     console.log(a+c);
// }
// parent();

// 👉 Closure in javascript : It is created everytime functions is created
// １ Example
// const outerFun =(a)=>{
//     let b = 6;
//     const innerFun = ()=>{
//         let sum = a + b;
//         console.log(`Sum of ${a} and ${b} is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(10);

// 𝟸 Another example
// const outerFun =(a)=>{
//     let b = 6;
//     const innerFun = ()=>{
//         let sum = a + b;
//         console.log(`Sum of ${a} and ${b} is ${sum}`);
//     }
//     return innerFun;
// }
// const CheckClosure = outerFun(10);
// console.log(CheckClosure);

// 👉 Strict mode
// "use strict"
// let x = "name";
// console.log(x);

// 🖍️Synchronous js programming : One execution most complete before heading another execution
// 🖍️Asynchronous js programming : parallel execution
// 🖍️ Synchronous vs Asynchronous javascript
// １ Synchronous
// const funcOne = ()=>{
//     console.log("One function is called");
// }
// const funcTwo = () =>{
//     console.log("Two function is called");
//     funcOne();
//     console.log("Again Two is called");
// }
// funcTwo();

// 𝟸 Asynchronous
// Data of setTimeout is sent to Web API
// const funcOne = ()=>{
//     setTimeout(()=>{
//         console.log("One function is called");
//     },2000);
// }
// const funcTwo = () =>{
//     console.log("Two function is called");
//     funcOne();
//     console.log("Again Two is called");
// }
// funcTwo();

// 🖍️ Event loop
// 1. Execution context : When calling function , they get their execution context
// 2. Message queue : After the time in setTimeout is complete,it send its data to MQ
// 3. WEB api : callback 3000

// 👉 Function currying
// It doesn't take multiple but takes the first one & return a new functions until
// function sum(n1){
// console.log(n1);
//     return function(n2){
// console.log(n1,n2);
//         return function(n3){
//             console.log(n1+n2+n3);
//         }
//     }
// }
// sum(2)(3)(4);

// In one line
// const sum = (n1)=>(n2)=>(n3)=>console.log(n1+n2+n3);
// sum(2)(3)(4);

// 👉Callback hell
// setTimeout(()=>{
//     console.log("Work 1");
//     setTimeout(()=>{
//         console.log("Work 2");
//         setTimeout(()=>{
//             console.log("Work 3");
//             setTimeout(()=>{
//                 console.log("Work 4");
//                 setTimeout(()=>{
//                     console.log("Work 5");
//                     setTimeout(()=>{
//                         console.log("Work 6");
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// Event loop example

// const fun2 = ()=>{
//     setTimeout(()=>{
//         console.log("IM 2");
//     },2000);
// }

// const fun1 =()=>{
//     console.log("IM 1");
//     fun2();
//     console.log("IM AGAIN 1");
// }
// fun1();

// Promise in js
// const promiseData = new Promise((resolve,rejects)=>{
//     const data = {message:"Data fetch successfully"};
//     resolve(data);
//     rejects(new Error("Failed to fetch data"));
// })
// promiseData.then((res)=>{
//     console.log(res.message);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise in js
// const promiseSet = new Promise((resolve,rejects)=>{
//     setTimeout(()=>{
//         resolve("This is way of creating promise");
// rejects(new Error("Fail to make promise"));
//     },2000)
// })
// promiseSet.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.error(error.message);
// })

// Simple event loop
// console.log("First time");
// setTimeout(()=>{
//     console.log("Event");
// },2000);
// console.log("Second time");

// Function currying
// const sum=(a)=>{
//    return function(b){
//     return function(c){
//        console.log(a,b,c);
//     }
//    }
// }
// sum(4)(5)(4);

// const func = (a)=>(b)=>(c)=>console.log(a+b+c);
// func(7)(8)(9);

// null vs undefined
// let him;
// let sum=null;
// console.log(sum);
// console.log(him);

// Map
// const arr = [3, 4, 5, 6, 7, 9];
// const sum = arr.map((cur,ind) => {
//     return cur*2
// }).filter((cur)=>{
//     return cur > 10
// });
// console.log(sum);

// const arr = [3, 4, 5, 6, 7, 9];
// const res = arr.map((cur)=>{
//     return cur > 5
// })
// console.log(res);

// 👉🖍️ JSON : javascript object notation
// 👉 JSON.Stringify: convert javascript object into JSON text & store that text in string
// const obj = {key1:"hari",key2:true,Key3:5};
// const toJson = JSON.stringify(obj);
// console.log(toJson);

// 👉JSON.parse() :convert JSON text into normal js object
// const jsonObj = '{"key1":"hari","key2":true,"key3":5}';
// const toNorObj = JSON.parse(jsonObj);
// console.log(toNorObj);

// ES8 :async await

// function currying

// const addNumberThree = (n1) => {
//   return function (n2) {
//     return function (n3) {
//       console.log(n1 + n2 + n3);
//     };
//   };
// };

// addNumberThree(4)(5)(6);

// const sum=(n1)=>(n2)=>(n3)=>(console.log(n1+n2+n3));
// sum(6)(7)(7);

// simple event loop
// console.log("First time");
// setTimeout(()=>{
//   console.log("Am I the loop ?");
// },2000);
// console.log("Second time?");

// promise in js
// const promiseJs = new Promise((resolve,rejects)=>{
//   const data = {message:"Promise fulfilled successfully"};
//   resolve(data);
//   rejects(new Error("Fail to fulfilled the promise"))
// })
// promiseJs.then((res)=>{
//   console.log(res.message);
// }).catch((err)=>{
//   console.log(err);
// })

// const newPromise = new Promise((resolve, rejects) => {
//   setTimeout(() => {
//     const data = { messag: "Hello new way!!" };
//     resolve(data);
//     rejects(new Error("This is hard to keep promise"));
//   }, 2000);
// });
// newPromise
//   .then((res) => {
//     console.log(res.messag);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ? CallBack Hell

// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//       setTimeout(() => {
//         console.log("4");
//         setTimeout(() => {
//           console.log("5");
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// * Synchronous vs Asynchronous JS in simple example

// sync
// const funOne = ()=>{
//   console.log("IM function one");
// }

// const funTwo = ()=>{
//   console.log("Im function two ");
//   funOne();
//   console.log("Again function two");
// }
// funTwo();

// Async
// const AsynOne = ()=>{
//   setTimeout(()=>{
//     console.log("Async one");
//   },2000)
// }

// const AsynTwo = () =>{
//   console.log("Async ONe");
//   AsynOne();
//   console.log("I wanna go first");
// }

// AsynTwo()

// console.log("A"-6);
// let n;
// let n1 = null;
// console.log(n);
// console.log(n1);

// ! Map

// const arr = ["Ram","Hari","Eagle","Helmepo"];
// const result = arr.map((curElm)=>{
//   return curElm
// })
// console.log(result);

// * for in loop return the index number of the array datas
// for(let elem in arr){
//   console.log(elem);
// }

// * for of loop return the values of the array datas

// for(let el of arr){
//   console.log(el);
// }

// console.log("Multiple of 8");
// let n = 8;
// for (let i = 1; i<=10;i++){
//   console.log(`${n} * ${i} = ${n*i}`);
// }

// const array = [
//   ["arr", "arr2"],
//   ["arr3", "arr4"],
//   ["arr5", "arr6",["ram","hari"]],
// ];
// const flatArray = array.reduce((acc,cE)=>{
//   return acc.concat(cE);
// })
// console.log(array.flat(2));

// const arr = [0,2,3,4,6];
// const sum = arr.reduce((cr,elem)=>{
//   return cr+elem;
// })
// console.log(sum);

// find method
// const prices =[200,300,400,500,600,700];
// const currVal = prices.find((cur)=>cur > 400);
// console.log(currVal);\

// console.log(a);
// var a ;
// a = "Hello";

// const fun1 = ()=>{
//     setTimeout(()=>{
//         console.log("Hello friends");
//     },)
// }

// const fun2 = ()=>{
//     console.log("Im 2");
//     fun1();
//     console.log("Again");
// }

// fun2();

// const fun1 = () => {
//   setTimeout(() => {
//     console.log("Im function one");
//   }, 4000);
// };

// const fun2 = () => {
//   console.log(`IM function ${1 + 1}`);
//   fun1();
//   console.log("Again 2 Is here");
// };
// fun2();

// console.log(7-"eight");

// console.log("s"-"t");
// let a = 'Hi';
// const BigFunc = ()=>{
//     let b = "Hello";
//     const MidFunc = ()=>{
//         let c = "Konichiwa";
//         const SmallFunc = ()=>{
//             console.log(a+" "+ b+" "+ c);
//         }
//         SmallFunc();
//     }
//     MidFunc();
// }
// BigFunc();

// const addNumber = (a) => {
//   let b = 9;
//   const addMidNum = () => {
//     let c = 10;
//     const addLowNum = () => {
//       console.log(a + b + c);
//     };
//     addLowNum();
//   };
//   addMidNum();
// };
// addNumber(20);

// closure in js
// const func = (a) =>(b)=>(c)=>console.log(a+b+c);
// func(7)(9)(10);

// function funA(aa){
//   bb = 7;
//      function funB(){
//       cc= 8;
//       function funC(){
//          console.log(aa+bb+cc);
//       }
//       funC()
//     }
//     funB()
// }
// funA(7)

// prime number in js

// let num = 29;
// let isPrime = true;
// if (num == 1) {
//   console.log("It is neither prime or odd");
// } else if (num > 2) {
//   for (let i = 2; i <= num; i++) {
//     if (num % 2 == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`${num} is prime`);
//   } else {
//     console.log(`${num} is not prime`);
//   }
// }

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i <=Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function fromToRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// fromToRange(20, 30);

// Counting the prime number between 20-40

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function rangeTo(start, end) {
//   let count = 0;
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//       count++;
//     }
//   }
//   return count;
// }
// let start = 10;
// let end = 100;
// let primeCount=rangeTo(start, end);
// console.log(`The number of prime number between ${start} and ${end} is ${primeCount}`);

// Closure in js: Find the sum of this function sum(2)(4)(6)

// const sum = (a) => (b) => (c) => console.log(a + b + c);
// sum(2)(4)(6);

// const grand = (a) => {
//   let b = 7;
//   const parent = () => {
//     let c = 8;
//     const children = () => {
//       console.log(a + b + c);
//     };
//     children();
//   };
//   parent();
// };
// grand(5);

// * Promise in js

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = 22;
//     const isError = false;
//     if (!isError) {
//       resolve(data);
//     } else {
//       reject(new Error("An error occur"));
//     }
//   }, 2000);
// });

// newPromise
//   .then((data) => {
//     console.log("Our data :", data);
//   })
//   .catch((error) => {
//     console.error("Error", error.message);
//   });

// const myPromise = new Promise((resolve, reject) => {
//   let promiseData = "Everything Is Going To Be Alright";
//   let isError = false;
//   setTimeout(() => {
//     if (!isError) {
//       resolve(promiseData);
//     } else {
//       reject(new Error("Promise Wasn't Fulfilled"));
//     }
//   }, 3000);
// });

// myPromise
//   .then((promiseData) => {
//     console.log("Hear This Out =>", promiseData);
//   })
//   .catch((error) => {
//     console.error("Error", error.message);
//   });

// Event Loop

// let functOne = () => {
//   setTimeout(() => {
//     console.log("HappyHappy");
//   }, 3000);
// };

// let functTwo = () => {
//   console.log("Im One+One Function");
//   functOne();
//   setTimeout(() => {
//     console.log("Great Happiness😎");
//   }, 4000);
// };

// functTwo();

// Counting words in a sentence
// let countWords = (sentence) => {
//   sentence = sentence.trim();
//   let words = sentence.split(" ");
//   return words.length;
// };
// let sentenceData = "Quick Brown Fox Jump Over The Lazy Dog";
// let data = countWords(sentenceData);
// console.log(data);

// let sentence = "hello hello hello Hello hello hello hello";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.length);

// * Variable shadowing in js -> Variable declared  in the local scope has the same name as variable in a outer scope
// let x = 20;
// function myFunct() {
//   let x = 10;
//   console.log(x);
// }
// myFunct()
// console.log(x);

// Hoisting -> Variable & Function declaration are move to the top of their containing scope during the compile phase

// console.log(xs);
// var xs=10;
// console.log(xs);

// Undefined & Null: Primitive data type
// let xx;
// console.log(xx);
// let xy = null;
// console.log(xy);

// Non-primitive data typw
// const time = {
//     hours:4,
//     minute:45,
//     second:60
// }
// console.log(time.hours,time.minute);

// Spread Operator
// function sum(a,b,c){
//     return a+b+c
// }
// let numbers = [2,4,6];
// const res = sum(...numbers);
// console.log(res);

// USing Object
// let obj1 = {a:1,b:2};
// let obj2 = {c:3,d:4};
// let cc = {...obj1,...obj2};
// console.log(cc);

// * MAP 
// const nums = [2,3,4,5,6];
// const mulRes = nums.map((elem)=>elem * 2);
// console.log(mulRes);

// const student ={
//     name:"hari"
// }
// console.log(student);


// Event Loop
// console.log("Start The Loop");
// setTimeout(()=>{
//     console.log("Low Queue");
// },1000)

// Promise.resolve().then(()=>{
//     console.log("High Queue");
// })

// console.log("End the Loop");

// let x;
// function myFunc(){
//     var x= 4;
//     console.log(x);
// }

// myFunc();
// console.log(x);

// 1440, 1280, 768, 375

// Spread operator in js
// Coping the Array
// let ra = [1,2,3.2];
// let copiedRa = [...ra];
// console.log(copiedRa);

// Merging the array
// let ra1 = [1,2,2.2];
// let ra2 = [1.2,2.3,2.5];
// let copied2Ra = [...ra1,...ra2];
// console.log(copied2Ra);

// Coping the object
// let obj = {name:"Roman",age:142};
// let copyObj = {...obj};
// console.log(copyObj);

// Merging the object
// let obj1 = {name:"Jkovic",age:21};
// let obj2 = {location:"Colorado",company:"xyz"};
// let combineObj = {...obj,...obj2};
// let combine2Obj = {...obj1,...obj2};
// console.log(combineObj);
// console.log(combine2Obj);

// Adding element to array
// let rray = [2.6,11.2,10];
// let newRray = [...rray,2.77,77];
// console.log(newRray);

// Finding the max & min in array
// let rray1 = [2.6,11.2,10];
// let max = Math.max(...rray1);
// let min = Math.min(...rray1);
// console.log(max);
// console.log(min);


// Array in js
let corr = [1,2,3,4,5];
let sum = 0;
let result = corr.map((ind)=>{
     sum = ind + sum;
     return sum
})

let sum1 = corr.reduce((acc,cur)=> acc+cur)

let fil = corr.filter((fi)=>{
    return fi > 2
})

console.log(result,fil,sum1);






