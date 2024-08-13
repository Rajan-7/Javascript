let x;

const person = {
    name:"Ram",
    age:30,
    isAdmin:true,
    address:{
        city:"Ktm",
        street:"Banshi Marg",
        state:"BG"
    },
    sports:['football','cricket']
}

x = person.name;
x = person['age'];
x = person.address.city;
x = person.address["state"]

person.name = "Hari";
person['isAdmin'] = false

delete person.sports;

person.height = 172
person.info = function(){
    console.log(`Hello my name is ${this.name} and I live in ${this.address.city}`)
}

person.info();


x = person

console.log(x)

