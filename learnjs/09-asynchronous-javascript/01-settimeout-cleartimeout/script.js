// setTimeout -> takes in a callback and a time to wait until that callback is executed
setTimeout(function () {
  console.log("Hello from setTiemout");
}, 3000);

// Naming the TimeOut function
setTimeout(makeTextChange, 4000);

function makeTextChange() {
  document.querySelector("h1").textContent = "Again,from the Callback";
}

// clearTimeout() clear the timer set by setTimeout
const timerId = setTimeout(makeTextChange,4000);
document.querySelector('#cancel').addEventListener('click',()=>{
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer cleared');
})
