const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((num) => num * 2);
// console.log(doubleNumbers);

// With forEach
const doublNumbers = [];
numbers.forEach((num) => {
  doublNumbers.push(num * 2);
});
// console.log(doublNumbers);

const companies = [
  { name: "Company One", category: "Finanace", start: 1988, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2007 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2009 },
  { name: "Company Four", category: "Retail", start: 1997, end: 2010 },
  { name: "Company Five", category: "Technoloy", start: 1990, end: 2017 },
  { name: "Company six", category: "Finanace", start: 1998, end: 2006 },
  { name: "Company Seven", category: "Auto", start: 1989, end: 1997 },
  { name: "Company Eight", category: "Technology", start: 1998, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1985, end: 1994 },
];

// Creating an array of company names

const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Creating an array with just company and category

const companyNameCategroy = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
// console.log(companyNameCategroy);

// Creating an array of objects with company name and length of each company in years

const companyYearLength = companies.map((company) => {
  let length = company.end - company.start + " years";
  return {
    name: company.name,
    length,
  };
});
// console.log(companyYearLength);

// Square and double:chaining the map

const squareAndDouble = numbers
  .map((num) => Math.sqrt(num))
  .map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
  .map(function (num) {
    return Math.sqrt(num);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (triple) {
    return triple * 3;
  });
// console.log(squareAndDouble);
// console.log(squareAndDouble2);

// Chaining multiple mehtod

const evenDouble = numbers.filter((num) => num % 2 === 0).map((eve) => eve * 2);
console.log(evenDouble);
