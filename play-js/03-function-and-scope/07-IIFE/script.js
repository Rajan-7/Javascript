// To avoid global scope pollutin, IIFE is used
(function () {
  const name = "Shyam";
  console.log("From script:", name);
  const hello = () => console.log("Hello World from IIFE");
  hello();
})();

// Simple IIFE 
(function myName(name){
    console.log("My name is",name);
})("Unbeatable");

// Naming
(function helper(){
    console.log("I'm Helper from IIFE")
})()
