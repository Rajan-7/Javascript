const x = 77;
var xx = 89;

if(1){
    let y = 7;
    console.log(x + y);
}

// console.log("Block scope varaible cann't be access from outside",y);

// Loop 
for(let i = 1;i<=10;i++){
    console.log(`2 * ${i} = ${2*i}`)
}

// console.log("Accessing 'i' variable",i);

// *But var can be accessed from outside even though it is inside the block scope
for(var i =7;i<=10;i++){
    console.log(i)
}
// console.log(i);

// *var is a function scope meaning it cann't be accessed from outside once it is declard in function scope
function myVar(){
    var yy = 88;
    console.log(yy)
}
myVar();
// console.log(yy)
