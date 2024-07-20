// Simple calculator wiht +,-,*,/

const calculator = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return "Invalid operator";
  }
};

console.log(calculator(5, 2, "+"));
console.log(calculator(5, 2, "-"));
console.log(calculator(5, 2, "*"));
console.log(calculator(5, 2, "/"));
console.log(calculator(5, 2, "&"));

const calculator1 = (n1, n2, op) => {
  if (op === "+") return n1 + n2;
  if (op === "-") return n1 - n2;
  if (op === "*") return n1 * n2;
  if (op === "/") return n1 / n2;
  else return "Invalid Operator 1";
};
console.log(calculator1(3, 4, ")"));
