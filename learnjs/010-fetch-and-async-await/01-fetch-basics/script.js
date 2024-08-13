// Fetching from the movies file
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//   Fetching from the text file
fetch("./text.txt")
  .then((response) => response.text())
  .then((text) => {
    console.log(text);
  });

//   Fetching from the API
fetch("https://api.github.com/users/bradtraversy")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.login));
