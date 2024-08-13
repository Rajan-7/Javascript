const logo = document.querySelector("img");

const onClick = () => console.log("Click Event");

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

const onRightClick = () => {
  console.log("Right Click event");
};

const onMouseDown = () => {
  console.log("Mouse Down event");
};

const onMouseUp = () => console.log("Mouse Up event");
const onMouseWheel = () => console.log("Wheel Event");
const onMouseOver = () => console.log("Mouse over Event");
const onMouseOut = () => console.log("Mouse out Event");
const onDragStart = () => console.log("Drag start event");
const onDrag = () => console.log("Drag event");
const onDragEnd = () => console.log("Drag end event");

// Event Listener
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
logo.addEventListener("wheel", onMouseWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);
logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("drag", onDrag);
logo.addEventListener("dragend", onDragEnd);
