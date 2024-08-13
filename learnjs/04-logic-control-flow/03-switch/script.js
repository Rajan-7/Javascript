const d = new Date(2024, 2, 25, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Match Not Found");
    break;
}

switch (hour) {
  case hour < 12:
    console.log("Morning!");
    break;
  case hour < 18:
    console.log("Afternoon!");
    break;
  default:
    console.log("Night!")
    break;
}
