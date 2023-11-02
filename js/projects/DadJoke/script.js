

const display = document.getElementById("display");
const nextBtn = document.getElementById("btn")

const generatJoke = async()=>{

    try{
        const setHeader={
            headers:{
                Accept:"application/json",
            }
        };
        const res = await fetch("https://icanhazdadjoke.com/",setHeader);
        const data = await res.json();
        display.innerHTML = data.joke;
    }
    catch(err){
        throw err;
    }

}


nextBtn.addEventListener("click",generatJoke);
generatJoke();