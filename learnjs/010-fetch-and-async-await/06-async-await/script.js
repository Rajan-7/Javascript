// Using regular Promise chaining
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Rock", address: "Miami" });
  }, 1000);
});

// promise.then((data)=>console.log(data))

// Using async await here

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

// APIS

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dat = await res.json();

  console.log(dat);
}

// getUsers();

const createPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  throw new Error("Internal server error");

  console.log(data);
};

createPosts().catch((error) => console.log(error));
