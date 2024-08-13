// FizzBuzz challenge:
// Print number from 1 - 100
// For multiples of three print "Fizz"
// For multiples of five print "Buzz"
// For multiples of three and five print "FizzBuzz"

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`Buzz`);
//   } else {
//     console.log(`${i}`);
//   }
// }

// Using while loop

let i = 1;
while (i <= 100) {
  if (i % 15 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
  i++;
}
