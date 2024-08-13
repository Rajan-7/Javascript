const div = document.createElement("li");

div.className = "my-div";
div.id = "div-id";
div.setAttribute("title", "my-title");

// div.innerText = "Papaya";

const text = document.createTextNode("Papaya");
div.appendChild(text);

const button = document.createElement('button');
button.className = "remove-item btn-link text-red";

const icon = document.createElement('i');
icon.className = "fa-solid fa-xmark";

button.appendChild(icon);

div.appendChild(button);

console.log(div);

// document.body.appendChild(div);

document.querySelector("ul").appendChild(div);
