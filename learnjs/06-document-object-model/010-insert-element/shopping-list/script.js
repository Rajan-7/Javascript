// insertAdjacentElement

function inserElement() {
  const filter = document.querySelector(".filter");

  const h2 = document.createElement("h2");
  h2.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h2);
  filter.insertAdjacentElement("afterend", h2);
}

// insertAdjacentText

function insertText() {
  const item = document.querySelector("li:first-child");
  // item.insertAdjacentText("afterbegin", "AdjacentText");
  item.insertAdjacentText("beforebegin", "AdjacentText");
  //   item.insertAdjacentText("beforeend", "AdjacentText");
  //   item.insertAdjacentText("afterend", "AdjacentText");
}

// insertAdjacentHTML

function insertHtml() {
  const btn = document.querySelector("#clear");
  btn.insertAdjacentHTML("afterend", "<h2>All item clear</h2>");
}

// insertBefore

function insertBeforeItem() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.textContent = "Before";

  const lastItem = document.querySelector("li:last-child");

  ul.insertBefore(li, lastItem);
//   ul.insertBefore(lastItem, li);
}

inserElement();
insertText();
insertHtml();
insertBeforeItem();
