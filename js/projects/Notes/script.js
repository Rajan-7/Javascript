const newBtn = document.querySelector("#add");

// localstorage function
const updateLocalStorage = () => {
  const textAreaData = document.querySelectorAll("textarea");
  console.log(textAreaData);
  const notes = [];
  console.log(notes);
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });

  localStorage.setItem("noteid", JSON.stringify(notes));
};

const generateNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  
  // html data
  const htmlData = `
    <div class="tools">
         <button class="edit"><i class="fas fa-edit"></i></button>
         <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea> `;

  note.insertAdjacentHTML("afterbegin", htmlData);
  document.body.appendChild(note);

  //   Reference of edit & delete,div & textarea
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  // Deleting the node
  delButton.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });

  // Toggle the mainDiv & textarea
  textArea.value = text;
  mainDiv.innerHTML = text;

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    const userValue = event.target.value;
    mainDiv.innerHTML = userValue;
    updateLocalStorage();
  });
};

const notes = JSON.parse(localStorage.getItem("noteid"));
if (notes) {
  notes.forEach((note) => generateNewNote(note));
}

newBtn.addEventListener("click", () => generateNewNote());
