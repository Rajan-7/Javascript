// Else if statement
const d = new Date(7,25,2024,20,0,0);
const hour = d.getHours();

if(hour < 12){
    console.log("Good Morning");
}else if(hour < 18){
    console.log("Good afternoon");
}else{
    console.log("Good Night");
}

// Nested If
if(hour < 12){
    console.log("Good Morning");
    if(hour === 4){
        console.log("Wake up...")
    }
}else if(hour < 18){
    console.log("Good afternoon");
}else{
    console.log("Good Night");
    if(hour >= 20){
        console.log("zzzzz")
    }
}

// Logic
if(hour > 7 && hour < 15){
    console.log("Work hard!!")
}

if(hour === 6 || hour === 20){
    console.log("Exercise...")
}