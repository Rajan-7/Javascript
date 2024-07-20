// Using simple if statement
let age = 18;
if (age >= 18) {
  console.log(`You can Vote`);
} else {
  console.log(`You cann't Vote`);
}

// Using ternay operator

age >= 18 ? console.log(`You can Vote`) : console.log(`You cann't vote`);

// Assigning the conditional value to a variable

const isAge = age >= 18 ? true : false;
const isPermission = age >= 18 ? "You can vote" : "You cann't vote";

console.log(isAge, isPermission);

//  Multiple statement

const auth = false;

// let redirect;

// if(auth){
//     alert(`Welcome to Dashbord`);
//     redirect = '/dashbord';
// }else{
//     alert(`Access Denied`);
//     redirect = '/login';
// }

// const redirect = auth
//   ? (alert(`Welcome to Dashboard`), "/dashbord")
//   : (alert(`Access Denied`), "/login");

// console.log(redirect);

// Shorthand
auth ? console.log(`Welcome to our site`) : null;
auth && console.log(`welcome!`);