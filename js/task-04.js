let counterValue = 0;
const increment = document.querySelector(`[data-action="increment"]`);
const decrement = document.querySelector(`[data-action="decrement"]`);
const shownValue = document.querySelector("#value")

const adding = () => { shownValue.textContent = counterValue += 1}
const decresing = () => { shownValue.textContent = counterValue -= 1}


increment.addEventListener("click", adding)
decrement.addEventListener("click", decresing) 

