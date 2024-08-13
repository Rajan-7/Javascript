// Simple test
try {
  console.log(x);
} catch (error) {
  console.log("Error : " + error);
}

// Using a function

function doubleNumber(number) {
  if (isNaN(number)) {
    throw new Error(`${number} is not a number`);
  }
  return number * 3;
}

try {
  const nn = doubleNumber("Number");
  console.log(nn);
} catch (error) {
  console.log(error);
}
