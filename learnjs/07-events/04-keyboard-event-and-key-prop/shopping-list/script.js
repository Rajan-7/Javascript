const input = document.querySelector("#input-item");

const onKeyPress = (e) => {
  console.log("Keypress");
};

const onKeyUp = (e) => {
  console.log("Keyup");
};

const onKeyDown = (e) => {
  //   Key
  //   if(e.key === 'Enter'){
  //     alert("You press enter");
  //   }
  //   console.log(e.key);
  //   document.querySelector('h1').textContent = e.key;
  // KeyCode
  //   if(e.keyCode === 13){
  //     alert('You pressed Enter');
  //   }
  // Code
  //   if(e.code === 'Digit1'){
  //     console.log('You pressed one/1')
  //   }
  if (e.repeat) {
    console.log("You are holding down " + e.key);
  }
  console.log("Shift : " + e.shiftKey);
  console.log("Option : " + e.altKey);
  console.log("Control : " + e.ctrlKey);
};

// input.addEventListener("keypress", onKeyPress);
// input.addEventListener("keyup", onKeyUp);
input.addEventListener("keydown", onKeyDown);
