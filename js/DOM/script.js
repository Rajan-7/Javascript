const body = document.body
const heading = document.getElementById('heading');
const para = document.getElementById("para")
const btn = document.querySelector('.btn')

heading.textContent = "Hello Content";

const p = document.createElement('p');
p.innerHTML = "This is new paragraph"

btn.addEventListener('click',()=>{
    alert("Heading Clicked")
})

heading.remove();
para.remove();

body.append(heading)
body.append(p)