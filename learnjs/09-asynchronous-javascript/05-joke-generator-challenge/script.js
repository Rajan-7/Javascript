const jokeContainer = document.querySelector("#joke");
const jokeBtn = document.querySelector("#joke-btn");

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeContainer.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeContainer.innerHTML = `Something went wrong ! -_-`;
      }
    }
  };
  xhr.send();
};
jokeBtn.addEventListener("click", generateJoke);
