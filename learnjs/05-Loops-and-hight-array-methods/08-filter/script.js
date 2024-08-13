const numbers = [1,2,3,4,5,6,7,8,9,10];

// Normal Function

// const evenNum = numbers.filter(function (num){
//     return num % 2 === 0;
// })

// console.log(evenNum);

// Arrow fucntion or Short version

// const eveNum = numbers.filter(num => num % 2 === 0);

// console.log(eveNum);

// Same with the forEach

// let evNum = [];

// numbers.forEach(num => {
//     if(num % 2 === 0){
//        evNum.push(num);
//     }
// });

// console.log(evNum);

// Array of objects about companies

const companies = [
    {name:'Company One',category:'Finanace',start:1988,end:2004},
    {name:'Company Two',category:'Retail',start:1992,end:2007},
    {name:'Company Three',category:'Auto',start:1999,end:2009},
    {name:'Company Four',category:'Retail',start:1997,end:2010},
    {name:'Company Five',category:'Technoloy',start:1990,end:2017},
    {name:'Company six',category:'Finanace',start:1998,end:2006},
    {name:'Company Seven',category:'Auto',start:1989,end:1997},
    {name:'Company Eight',category:'Technology',start:1998,end:2016},
    {name:'Company Nine',category:'Retail',start:1985,end:1994},
]

// Only showing the Retail Company

const retailCompany = companies.filter(company => company.category === 'Retail');
// console.log(retailCompany);


// Company that started in or after 1980 and ended of before 2005

const companyOpenClose = companies.filter(company => company.start >= 1980 && company.end <= 2005);
console.log(companyOpenClose);

// Company that lasted ten years or more

const tenYearCompany = companies.filter(company => company.end - company.start >= 17);
console.log(tenYearCompany);
