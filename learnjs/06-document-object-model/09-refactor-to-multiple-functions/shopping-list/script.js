function createNewItems(item) {
  const li = document.createElement("li");
  const text = document.createTextNode(`${item}`);

  li.appendChild(text);

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  return icon;
}

createNewItems("Cheese");
createNewItems("Salt");
