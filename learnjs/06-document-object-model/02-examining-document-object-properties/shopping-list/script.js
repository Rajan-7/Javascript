let output;

output = document.all;
output = document.documentElement;
output = document.head;
output = document.body;
output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;

output = document.characterSet;
output = document.contentType;

// Forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;
// output = document.forms[0].id = "new-form"

// Links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = "https://www.instagram.com";
// output = document.links[0].id = "youtube-id";
// output = document.links[0].className = "youtube-class";
// output = document.links[0].classList;

// images

output = document.images;
output = document.images[0];
output = document.images[0].src;

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
