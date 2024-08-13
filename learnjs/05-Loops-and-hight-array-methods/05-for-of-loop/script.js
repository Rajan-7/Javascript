// Loop through an Arrays

const names = ["Randy", "Jhon", "Undertaker", "Triple-H"];

const objects = [{ name: "Hardy" }, { name: "Brody" }, { name: "Roman" }];

for (const name of names) {
  console.log(name);
}

for(const object of objects){
    console.log(object.name)
}

// Loop through strings

const strings = "My Fortune";

for(const string of strings){
    console.log(string);
}

// Loop through map

let map = new Map();
map.set('name','Hari');
map.set('age','29');

for(const [key,value] of map){
    console.log(key,value)
}