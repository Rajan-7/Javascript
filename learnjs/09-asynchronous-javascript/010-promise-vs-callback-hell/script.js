function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

getData("./movies.json")
  .then((movie) => {
    console.log(movie);
    return getData("./directors.json");
  })
  .then((director) => {
    console.log(director);
    return getData("./actors.json");
  })
  .then((actor) => {
    console.log(actor);
  })
  .catch((error) => {
    console.log(error);
  });
