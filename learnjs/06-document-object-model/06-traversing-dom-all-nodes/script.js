let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].innerText;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[7].style.color = "green";

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = "Hello last child";

// Parent Node from child

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding= "12px";

// Siblings
const secondChild = document.querySelector('.child:nth-child(2)');

output = secondChild.previousSibling;
output = secondChild.nextSibling;

console.log(output);
