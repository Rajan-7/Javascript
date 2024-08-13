const form = document.querySelector("#form1");

const onSubmit = (e) => {
  e.preventDefault();
  const item = document.querySelector(".form-input").value;
  const priority = document.querySelector("#priority-input").value;
  if (item === "" || priority === "0") {
    alert("Please fill out the form");
    return;
  }
  console.log(item, priority);
};

const onSubmit2 = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  // const item = formData.get("item");
  // const priority = formData.get("priority");
  // console.log(item, priority);
  const entries = formData.entries();
  for(let entry of entries){
    console.log(entry[1])
  }
};

form.addEventListener("submit", onSubmit2);
