const generateTemp = () => {
  const tempValue = document.getElementById("value").value;
  const selectedValue = document.getElementById("optVl");
  const whichOne = selectedValue.value;

  const CelToFah = (val) => {
    let fah = Math.round((val * 9) / 5 + 32);
    return fah;
  };

  const FahToCel = (val) => {
    let cel = Math.round(((val - 32) * 5) / 9);
    return cel;
  };

  let res;
  if (whichOne == "cel") {
    res = CelToFah(tempValue);
    document.getElementById("result").innerHTML = `${res}℉`;
  } else {
    res = FahToCel(tempValue);
    document.getElementById("result").innerHTML = `${res}℃`;
  }
};
