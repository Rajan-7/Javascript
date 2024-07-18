// making the array of library objects
const library = [
  {
    title: "Guiding the Man with plan",
    author: "Mick",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Man with Consistency",
    author: "Mike",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "People with the Opportunity",
    author: "Michelle",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// setting the boolean values of reading and read to 'false' and own to 'true'

for (let i = 0; i < Object.keys(library).length; i++) {
  library[i].status.read = true;
}

console.log(library);

// Destructure the title form first book and rename to FirstBook

const { title:firstBook } = library[0];
console.log(firstBook);

// Converting into JSON String

const jsonString = JSON.stringify(library);
console.log(jsonString)
