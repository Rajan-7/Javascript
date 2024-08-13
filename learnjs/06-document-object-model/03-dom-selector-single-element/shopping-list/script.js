// *getElementById()
// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));

// *setting Attributes
// document.getElementById('app-title').id = "new-di";
// document.getElementById('app-title').title = "List";
// console.log(document.getElementById('app-title').innerText);
// document.getElementById('app-title').setAttribute('class','hello');


// Get/Change content

const title = document.getElementById('app-title');

// console.log(title.textContent);
// title.textContent = "Hello World";
// title.innerText = "New World";
// title.innerHTML = '<strong>Dynamic World</strong>';

// Change style

// title.style.color='blue';
// title.style.backgroundColor='#ccc';
// title.style.padding="10px";
// title.style.borderRadius="10px";

// *document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(3)').innerText);

const secondItem = document.querySelector('li:nth-child(3)');
secondItem.innerText = 'Orange Juice';
secondItem.style.color= "green";

const list = document.querySelector('ul');
console.log(list);
const firstList = list.querySelector('li:nth-child(2)');
firstList.style.color = "red"
