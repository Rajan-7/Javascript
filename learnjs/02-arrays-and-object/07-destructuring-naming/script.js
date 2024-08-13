const fName = "Ram";
const lName = "Chaudhary";
const age = 67;

const person = {
  fName,
  lName,
  age,
};

console.log(person.fName);

// Destructuring

const todo = {
  id: 1,
  title: "Run the program",
  user: {
    name: "Jhon",
    agee: 90,
  },
};

const {
  id: todoId,
  title,
  user: { name: userName, agee },
} = todo;

console.log(todo);

// Destructuring the array

const fruits = [
  "apple",
  "mango",
  "banana",
  "guava",
  "strawberry",
  "pineapple",
  "peach",
];

const [first, second, ...rest] = fruits;

console.log(first, second, rest);
