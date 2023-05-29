function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const amount = document.querySelector("#controls input")
const btnCreate = document.querySelector("#controls button[data-create]")
const btnDestroy = document.querySelector("#controls button[data-destroy]")
const boxes = document.querySelector("#boxes")
const newAmount = Number(amount.textContent)
console.log(newAmount)
const createBoxes = (newAmount) =>{
  for(let i = 0; i < newAmount ;i++){
    const measurements = 30 + (i * 10)
    console.log(measurements)  
    const newBoxes = document.createElement('div')
    newBoxes.style.backgroundColor = getRandomHexColor();
    newBoxes.style.width = `${measurements}px` ;
    newBoxes.style.height =  `${measurements}px`;
   return boxes.insertAdjacentHTML("beforeend",newBoxes)
   
  }
  
}
const tryFunction = () => console.log(10)
btnCreate.addEventListener("click",createBoxes)
