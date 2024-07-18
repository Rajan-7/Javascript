let x;

const name = "Ram";
const age = 44;

x = "Hello my name is " + name + " and age is" + age;

// Template literals ES-2015
x = `Hello my name is ${name} and age is ${age}`;

// String properties and method

const s = new String("Hello world");

x = typeof s

x = s.length;

x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(9);

x = s.indexOf('d')

// substirng(start,end)
x = s.substring(0,4);

x = s.substring(8);

x = s.slice(-11, -7);

x = "      My friend";

x = x.trim();

x = s.replace("Hello","My");

x = s.includes("Hell");

x = s.valueOf();

x = s.split('')

console.log(x);
