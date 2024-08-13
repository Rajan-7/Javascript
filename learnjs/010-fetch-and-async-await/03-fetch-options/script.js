/*
  COMMON FETCH OPTIONS
  -mehtod: HTTP method you want to use
  -body: Data you want to send. Usually to be put in a database
  -headers: Any HTTP headers you want to send
*/

function createPosts({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "ab$777",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPosts({
  title: "NewYork",
  body: "NewYork post with latest news contents",
});
