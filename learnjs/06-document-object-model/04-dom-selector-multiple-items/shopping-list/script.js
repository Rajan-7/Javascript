//  querySelectorAll()

const listItems = document.querySelectorAll(".item");
console.log(listItems[1].innerText);

// listItems[1].style.color = "green";

// listItems.forEach((item, index) => {
//   item.style.color = "green";
//   if (index === 3) {
//     item.remove();
//   }
//   if (index === 2) {
//     item.innerHTML = `Banana
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   }
// });

// getElementByClassName()

const listItems2 = document.getElementsByClassName("item");
console.log(listItems2[2].innerText);

const listItemsArr = Array.from(listItems2);

listItemsArr.forEach((item) => {
  console.log(item.innerText);
});

// getElementByTagName()

const listItems3 = document.getElementsByTagName("li");
console.log(listItems3);
