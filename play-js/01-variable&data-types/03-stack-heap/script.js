// variables store in stack
let name = "Ram";
let age = 90;


// data store in heap
let person = {
    nam:"Hari",
    country:"Nep",
}

let newName = name;
newName = "Ramey";

let newPerson = person;
newPerson.nam="Jack"


console.log(name,age,newName)
console.log(person,newPerson)