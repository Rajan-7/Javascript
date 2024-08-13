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

// getData("./movies.json")
//   .then((movies) => {
//     console.log(movies);
//     return getData("./directors.json");
//   })
//   .then((directors) => {
//     console.log(directors);
//     return getData("./actors.json");
//   })
//   .then((actor) => console.log(actor))
//   .catch((err) => console.log(err));

const getDataWithAwait = async () => {
  const movies = await getData("./movies.json");
  const direcotor = await getData("./directors.json");
  const actor = await getData("./actors.json");
  console.log(movies, direcotor, actor);
};

const getDataWithFetch = async () => {
  const moviesRes = await fetch("./movies.json");
  const movies = await moviesRes.json();

  const dirRes = await fetch("./directors.json");
  const directors = await dirRes.json();

  const actRes = await fetch("./actors.json");
  const actors = await actRes.json();

  console.log(movies, directors, actors);
};

const promiseAllData = async () => {
  const [moviesRes, dirRes, actRes] = await Promise.all([
    fetch("./movies.json"),
    fetch("./directors.json"),
    fetch("./actors.json"),
  ]);

  const movie = await moviesRes.json();
  const dir = await dirRes.json();
  const act = await actRes.json();

  console.log(movie, dir, act);
};

const promiseAllData2 = async () => {
  const [movie, director, actor] = await Promise.all([
    fetch("./movies.json").then((res) => res.json()),
    fetch("./directors.json").then((res) => res.json()),
    fetch("./actors.json").then((res) => res.json()),
  ]);

  console.log(movie, director, actor);
};

// getDataWithAwait();
// getDataWithFetch();
// promiseAllData();
promiseAllData2();
