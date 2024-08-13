// Traversing the DOM

let output;

const parent = document.querySelector(".parent");

output = parent.children;

output = parent.children[0].className;
output = parent.children[0].innerText;
output = parent.children[0].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "green";

parent.firstElementChild.style.color = "blue";
parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

// Get a parent Elements from a child

const child = document.querySelector(".child");

output = child.parentElement;

child.parentElement.style.border = "1px solid #333";
child.parentElement.style.padding = "10px";

// Sibling Elements

const secondChild = document.querySelector(".child:nth-child(2)");

output = secondChild;

output = secondChild.nextElementSibling;

secondChild.nextElementSibling.style.color = "purple";

output = secondChild.previousElementSibling;

secondChild.previousElementSibling.style.color = "red";

console.log(output);
