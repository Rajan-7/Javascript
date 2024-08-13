// Challenge 1 : To print the youngPeople

const people = [
  {
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhondoe@gmail.com",
    phone: "111-111-111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "sara@gmail.com",
    phone: "444-444-444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "koe",
    email: "jose@gmail.com",
    phone: "555-555-555",
    age: 20,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((young) => {
    return {
      name: young.firstName + " " + young.lastName,
      email: young.email,
    };
  });

console.log(youngPeople);

// Challenge 2: Sum of positive numbers in an array

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((num) => num > 0)
  .reduce((acc, cur) => acc + cur);
console.log(positiveSum);


// const _posArr = [];
// const _negArr = [];

// numbers.forEach((nn) => {
//   if (nn < 0) {
//     _negArr.push(nn);
//   } else {
//     _posArr.push(nn);
//   }
// });

// const sum = _posArr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// Challenge 3: To capitalize the first letter of word in an array

const words = ['coder','programmer','developer'];

// let capitalizeWords = [];

// words.forEach(word=>{
//     return word.toUpperCase
//     capitalizeWords.push(word);
// })

// console.log(words)

// console.log(capitalizeWords)

const capitalizeWords = words.map((word)=>{
    return word[0].toUpperCase() + word.substring(1)
})

const capitalizeWords1 = words.map((word)=>{
    return word[0].toUpperCase() + word.slice(1,word.length)
})

console.log(capitalizeWords)
console.log(capitalizeWords1)