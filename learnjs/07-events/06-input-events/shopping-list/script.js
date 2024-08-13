const inputItem = document.querySelector("#input-item");
const priorityList = document.querySelector("#priority-input");
const checkBox = document.querySelector("#checkbox");
const heading = document.querySelector("h1");

const onInput = (e) => {
  heading.textContent = e.target.value;
};

const onChecked = (e) => {
  // console.log(e.target.checked);
  heading.textContent = e.target.checked === true ? "Checked" : "Not Checked";
};

const onFocus = (e) => {
  console.log("Input field is focus");
  inputItem.style.outlineStyle = "solid";
  inputItem.style.outlineWidth = "1px";
  inputItem.style.outlineColor = "blue";
};

const onBlur = (e) => {
  console.log("Input field is not focus");
  inputItem.style.outlineStyle = "none";
};

inputItem.addEventListener("input", onInput);
priorityList.addEventListener("change", onInput);
checkBox.addEventListener("input", onChecked);
inputItem.addEventListener("focus", onFocus);
inputItem.addEventListener("blur", onBlur);
