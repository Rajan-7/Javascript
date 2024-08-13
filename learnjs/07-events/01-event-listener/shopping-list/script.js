const clearBtn = document.querySelector("#clear");

// function onClear() {
//   alert("Hello Clear");
// }

// Javascript Event Listener

// clearBtn.onclick = function () {
//   alert("Item Clear");
// };

// clearBtn.onclick = function () {
//   console.log("Item Clear");
// };

// addEventListener()

// clearBtn.addEventListener("click", () => alert("Items Clear"));
// clearBtn.addEventListener("click", onClear);
// setTimeout(() => clearBtn.removeEventListener("click", onClear), 6000);
// setTimeout(() => clearBtn.click(), 6000);

// Removing the ul items

function removeUl() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");
  //   itemList.innerHTML = "";
  //   itemList.remove();
  //   items.forEach((item) => item.remove());
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

clearBtn.addEventListener("click", removeUl);
