const logo = document.querySelector("img");

function onClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // e.target.style.backgroundColor = 'green';
  // console.log(e.type);
  // console.log(e.timeStamp);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.pageX);
  // console.log(e.pageY);
  console.log(e.screenX);
  console.log(e.screenY);
}

function onDrag(e) {
  document.querySelector("h1").textContent = `X ${e.screenX} Y ${e.screenY}`;
}

logo.addEventListener("click", onClick);
logo.addEventListener("drag", onDrag);

// document.body.addEventListener('click',function(e){
//     console.log(e.target);
//     console.log(e.currentTarget);
// })

// document.querySelector('a').addEventListener('click',(e)=>{
//   e.preventDefault();
//   console.log('Link Was clicked');
// })

// target -> current element
// currentTarget -> buuble upto its parent element
// clienX/Y -> position relative to window
// offsetX/Y -> position relative to element
// pageX/Y -> position relative to page
// screenX/Y -> position relative to screen
