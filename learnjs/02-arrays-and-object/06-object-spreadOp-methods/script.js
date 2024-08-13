let x;

const myTask = new Object();

myTask.id = 1;
myTask.fruit = "Apple";
myTask.isCompleted = false;

x = myTask;

const person = {
  addres: {
    cord: {
      lat: 76.667,
      lng: 56.77,
    },
  },
};

x = person.addres.cord.lat;

const obj1 = { a: 7, b: 8 };
const obj2 = { a: 8, d: 9 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

const todo = [
    {id:1,task:"Buy Apple"},
    {id:2,task:"Code Javascript"},
    {id:3,task:"Daily yoga"}
];


x = todo[0].task;

x = Object.keys(myTask);

x = Object.keys(todo).length;

x = Object.values(todo[0])

x = Object.values(myTask)

x = Object.entries(myTask);

x = myTask.hasOwnProperty('fruit')

console.log(x);
