//Success
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response;
  })
  .then(() => console.log("Success"));

//The issue with this is 'Success' status/message show and catch() does not/NOT run for the error/issues like 404 or 500
fetch("https://jsonplaceholder.typicode.com/404")
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log("Success1");
  })
  .then((error) => {
    console.log(error);
  });

//catch only runs on a network error
fetch("http://hello123.net")
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log("Success2");
  })
  .catch((error) => {
    console.log(error);
  });

//Testing with response.ok
fetch("https://jsonplaceholder.typicode.com/404")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Connection Failed3");
    }
    return response;
  })
  .then(() => {
    console.log("Success3");
  })
  .catch((error) => {
    console.log(error);
  });

//Checking for specific CODES
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("Server Failed");
    } else if (response.status !== 200) {
      throw new Error("Connection Failed");
    }
  })
  .then(() => {
    console.log("Success 31");
  })
  .catch((error) => {
    console.log(error);
  });
