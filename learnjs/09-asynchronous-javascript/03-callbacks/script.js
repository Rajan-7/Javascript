// function toggle(e) {
//   e.target.classList.toggle("danger");
// }
// document.querySelector("#btn").addEventListener("click", toggle);

const posts = [
  { title: "Post oNe", body: "This is the post One" },
  { title: "Post tWo", body: "This is the post Two" },
];

const createPost = (post, cb) => {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
};

const getPosts = () => {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> -${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  },4000);
};

createPost({title: "Post tHree", body: "This is the post Three"},getPosts)
