const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Elon Musk",
  "Bernard Arnault",
  "Jeff Bezos",
  "Mark Zuckerberg",
  "Larry Ellison",
  "Larry Page",
  "Sergey Brin",
  "Warren Buffett",
  "Bill Gates",
  "Steve Ballmer",
];

const listItems = [];
let dragStartIndex;

createList();

// Insert List items to DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      console.log(person);
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
           <span class="number">${index + 1}</span>
           <div class="draggable" draggable="true">
               <p class="person-name">${person}</p>
               <i class="fas fa-grip-lines"></i>
           </div>
        `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
  addEventListeners();
}

function dragStart() {
  // console.log('Event :','dragStart');
  dragStartIndex = +this.closest("li").getAttribute("data-index");
  // console.log(dragStartIndex);
}

function dragOver(e) {
  // console.log('Event :','dragOver');
  e.preventDefault();
}

function dragEnter() {
  // console.log('Event :','dragEnter');
  this.classList.add("over");
}

function dragLeave() {
  // console.log('Event :','dragLeave');
  this.classList.remove("over");
}

function dragDrop() {
  // console.log('Event :','dragDrop');
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
}

// Swapping the item form fromIndex to toIndex
function swapItems(fromIndex, toIndex) {
  // console.log('Items');
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Checking the order of people
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();
    if (personName !== richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItem = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });
  dragListItem.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

check.addEventListener("click", checkOrder);
