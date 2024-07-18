// Default params

function helloUser(user = "Bot") {
  return `Hello, there ${user} !`;
}

console.log(helloUser());

// Rest params

function sum(...num) {
  let total = 0;
  for (let n of num) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3));

// Object as params

function userDetail(user) {
  return `Name:${user.name},Id:${user.id},Address:${user.address}`;
}
const user = {
  id: 777,
  name: "The Rock",
  address: "New York",
};

console.log(userDetail(user));
console.log(
  userDetail({
    id: 888,
    name: "Jhon Cena",
    address: "Miami",
  })
);

// Array as params

function randomNumber(arr){
    let randInd = Math.floor(Math.random() * arr.length);
    let num = arr[randInd];
    return num;
}

console.log(randomNumber([1,2,3,4,5,6,7,8,9,10]))
