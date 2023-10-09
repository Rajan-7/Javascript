{/* <div id="joke" class="joke color">Here is one for you...</div>
<button id="jokeBtn" class="btn color">Hit Me😂</button> */}

// PROMISES : either resolve or reject, these are the two value that is return by promise
// fetch()
// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector("#jokeBtn");

const generateJoke=()=>{

    const setHeader={
         headers:{
            Accept:"application/json"
        }
    }
    fetch("https://icanhazdadjoke.com/",setHeader)
    .then((res)=>res.json())
    .then((data)=>{
        jokes.innerHTML=data.joke;
    })
    .catch((err)=>{
        throw err;
    })
}

jokeBtn.addEventListener('click',generateJoke);
generateJoke();
