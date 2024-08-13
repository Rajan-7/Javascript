// Using replaceWith
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First";

  firstItem.replaceWith(li);
}

// Using outerHTML
function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");
  secondItem.outerHTML = "<li>Replaced Second</li>";
}

// Using forEach to replaceAll
function replaceAllItems() {
  const lis = document.querySelectorAll("li");
  //   lis.forEach((item,index) => {
  //     // item.outerHTML = "<li>All Replace</li>";
  //     if (index === 1) {
  //       item.innerHTML = "Second";
  //     } else {
  //       item.innerHTML = "All replace";
  //     }
  //   });
  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? "<li>Second</li>" : "<li>Item</li>")
  );
}


// Using replaceChild
function changeHeading(){
   const parent = document.querySelector('header');
   const h1 = document.querySelector('header h1');

   const h2 = document.createElement('h2');
   h2.setAttribute('id','app-title');
   h2.textContent = "Shopping LisT";

   parent.replaceChild(h2,h1);
}


replaceSecondItem();
replaceFirstItem();
replaceAllItems();
changeHeading();
