function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
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

const moviesPromise = getData('./movies.json');
const directorsPromise = getData('./directors.json');
const actorsPromise = getData('./actors.json');

const justPromise = new Promise((resolve,reject)=>{
    resolve('Resolved?');
})

Promise.all([moviesPromise,directorsPromise,actorsPromise,justPromise]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
