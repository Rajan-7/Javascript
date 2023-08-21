// console.log("hello friends");

// values & variables
// var 1myNmae= "ahri";
var _myMother = "God";
var _myName__ = "Ram";
var $my__Name = "Hello ";
// console.log(_myName__);

// Data types in java script

var myData = "Data";
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
if (score = 5){
    console.log("😂 We score zero i.e game loss");
}else{
    console.log("😎 We won the game");
}
