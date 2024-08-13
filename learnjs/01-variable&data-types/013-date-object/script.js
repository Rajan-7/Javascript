let x;

d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("default", { month: "short" }).format(d);

x = d.toLocaleString(d);

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

console.log(x);
