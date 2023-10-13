const newBtn = document.querySelector("#add");

const generateNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

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
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // Deleting the node
    delButton.addEventListener('click',()=>{
        note.remove();
    })

    // Toggle the mainDiv & textarea
    editButton.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change',(event)=>{
        const userValue = event.target.value;
        console.log(userValue);
    })

};

newBtn.addEventListener("click", () => generateNewNote());
