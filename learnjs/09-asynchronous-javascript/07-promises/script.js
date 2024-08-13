// Creating a new Promise
const promise = new Promise((resolve, reject) => {
  // do some async task here
  setTimeout(() => {
    console.log("Async task here!");
    resolve();
  }, 3000);
});

// promise.then(()=>{
//     console.log('Promise complete...?')
// })

const getUsers = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ name: "Rock", age: 43 });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});

getUsers
  .then((users) => console.log(`Name : ${users.name} and age : ${users.age}`))
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise got resolved or rejected?"));
