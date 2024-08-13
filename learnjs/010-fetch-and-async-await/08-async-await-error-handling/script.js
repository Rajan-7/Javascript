const getUsers = async () => {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await fetch("https://jsonplaceholder.typicode.com/201");
    const data = await response.text();
    if (!response.ok) {
      throw new Error("Request Failed");
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await fetch("https://jsonplaceholder.typicode.com/404");
  const data = await response.text();
  if (!response.ok) {
    throw new Error("Request failed");
  }
  console.log(data);
};

// getUsers();
getPosts().catch((error) => console.log(error));
