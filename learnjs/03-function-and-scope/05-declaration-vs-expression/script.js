// function declaration

helloUser("Ram");
function helloUser(user){
    console.log(`Hello ${user}`);
}


// Function expression

const helloUSer = function userInfo(user){
    console.log(`Name:${user.name},Id:${user.id}`);
}
helloUSer({
    id:77,
    name:"The York"
})
