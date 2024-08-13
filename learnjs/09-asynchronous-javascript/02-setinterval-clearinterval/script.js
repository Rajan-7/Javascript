// const interval = setInterval(myCallback,'2000','Time');
// function myCallback(a){
//     console.log(a,Date.now());
// }

let intervalId;

const startColorChange = () => {
  // Check if an interval has already been set up
  if (!intervalId) {
    intervalId = setInterval(randomColor, 2000);
  }
};

// function changeColor() {
//   if (document.body.style.backgroundColor !== "black") {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// }

function randomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopColorChange(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);
