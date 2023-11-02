const addButton = document.querySelector("#btn");


const localStorageFun = () =>{
  const textData = document.querySelectorAll("textarea");
  const notes = [];
  textData.forEach((cur)=>{
    return notes.push(cur.value);
  })
  localStorage.setItem("noteid",JSON.stringify(notes))
}

const generateNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  console.log(note);

  const htmlData = `
     <div class="option">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${ text ? "" : "hidden"}"></div>
      <textarea class="${ text ? "hidden" : ""}"></textarea>
     `;

  note.insertAdjacentHTML("afterbegin", htmlData);
  document.body.appendChild(note);
  console.log(note);

  // refernce of the edit,delete,main,textarea
  const editBtn = note.querySelector(".edit");
  const delBtn = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  // deleting the node
  delBtn.addEventListener("click",()=>{
    note.remove();
    localStorageFun();
  })

  // toggle main div & textarea
  textArea.value = text;
  mainDiv.innerHTML = text;

  editBtn.addEventListener('click',()=>{
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  })
  
  textArea.addEventListener('change',(event)=>{
    const value = event.target.value;
    mainDiv.innerHTML = value;
    localStorageFun();
  })
};

const note = JSON.parse(localStorage.getItem("noteid"));

if(note){
  note.forEach((val)=>generateNote(val));
}


addButton.addEventListener("click", () => generateNote());
