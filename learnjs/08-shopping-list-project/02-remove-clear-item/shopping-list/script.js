const itemForm = document.querySelector("#item-form");
const inputItem = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector("#clear");

const addItems = (e) => {
  e.preventDefault();
  const newItem = inputItem.value;
  if (newItem === "") {
    alert("Please add the item");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-btn btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  inputItem.value = "";
};

const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
};

const removeItems = (e) => {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
};

const clearItems = (e) => {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
};

// Event Handlers
itemForm.addEventListener("submit", addItems);
itemList.addEventListener("click", removeItems);
clearBtn.addEventListener("click", clearItems);
