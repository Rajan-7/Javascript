function fetchUser() {
  showSpinner();
  fetch("https://randomuser.me/api")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Connection Failed");
      }
      return res.json();
    })
    .then((users) => {
      hideSpinner();
      displayUsers(users.results[0]);
    })
    .catch((error) => {
      hideSpinner();
      document.querySelector("#user").innerHTML = `
      <p class="text-xl text-center text-red-500 mb-5">${error}</p>
      `;
    });
}

function displayUsers(user) {
  const userContainer = document.querySelector("#user");
  if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccApurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }
  userContainer.innerHTML = `
    <div class="flex justify-between">
          <div class="flex">
            <img
              src="${user.picture.large}"
              alt="Random User"
              class="w-48 h-48 rounded-full mr-8"
            />
            <div class="space-y-3">
              <div class="text-xl">
                <span class="font-bold">Name : </span> ${user.name.first} ${user.name.last}
              </div>
              <div class="text-xl">
                <span class="font-bold">Email : </span> ${user.email}
              </div>
              <div class="text-xl">
                <span class="font-bold">Phone : </span> ${user.phone}
              </div>
              <div class="text-xl">
                <span class="font-bold">Location : </span> ${user.location.city}
              </div>
              <div class="text-xl">
                <span class="font-bold">Age : </span> ${user.dob.age}
              </div>
            </div>
          </div>
        </div>
  `;
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}

document.querySelector("#generate").addEventListener("click", fetchUser);

fetchUser();
