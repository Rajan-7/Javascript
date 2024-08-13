// 1 Example

// function first(){
//     console.log("First...");
// }
// function second(){
//     console.log("Second...");
// }
// function third(){
//     console.log("Third...");
// }

// first();
// second();
// third();

// 2 Example

function first(){
    console.log("First...");
    second();
}
function second(){
    console.log("Second...");
    third();
}
function third(){
    console.log("Third...");
}
first();