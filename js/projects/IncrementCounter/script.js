const counters = document.querySelectorAll(".counter");

counters.forEach((current) => {
  current.innerHTML = 0;

  const updateCounter = () => {
    const targetCounter = +current.getAttribute("data-value");
    const startingValue = Number(current.innerHTML);
    const incr = targetCounter / 100;

    if (startingValue < targetCounter) {
      current.innerHTML = `${Math.round(startingValue + incr)}`;
      setTimeout(updateCounter, 9);
    }else{
        current.innerHTML=targetCounter;
    }
  };
  updateCounter();
});
