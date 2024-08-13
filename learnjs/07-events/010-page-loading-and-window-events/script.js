// window.onload = () => {
//   document.querySelector("h1").textContent = "Hello Sathi";
// };

window.addEventListener("load", () => {
  console.log("Loaded");
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM");
});

console.log("Fast");

window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).textContent = `Resize ${window.innerWidth} * ${window.innerHeight}`;
});

window.addEventListener("scroll", () => {
  console.log(`Scrolled: ${window.scrollX} * ${window.scrollY}`);

  document.querySelectorAll("p").forEach((e) => {
    if (window.scrollY > 70) {
      e.style.color = "white";
      e.style.backgroundColor = "#333";
    } else {
      e.style.color = "black";
      e.style.backgroundColor = "#fff";
    }
  });
});

window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "green";
  });
});

window.addEventListener('blur',()=>{
    document.querySelectorAll('p').forEach(p=>{
        p.style.color = 'White';
    })
})
