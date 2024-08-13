const newEl = document.createElement("li");
newEl.textContent = "AfterBanana";

const existingEl = document.querySelector("li:first-child");

function insertAfter(naya, existing) {
  // const ul = document.querySelector('ul');

  // ul.insertBefore(naya,existing.nextSibling);

  existing.parentNode.insertBefore(naya, existing.nextSibling);
}

insertAfter(newEl, existingEl);
