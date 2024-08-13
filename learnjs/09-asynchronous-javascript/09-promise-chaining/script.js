const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Ronny", age: 21 });
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

promise.then((user) => {
  console.log(`Name : ${user.name} & Age : ${user.age}`);
  return user.name;
}).then((name)=>{
    console.log(name);
    return name.length;
}).then((nameLength)=>{
    console.log(nameLength)
}).catch((error)=>{
    console.log(error);
    return 1232;
}).then((x)=>{
    console.log('This block will execute no matter what',x);
})
