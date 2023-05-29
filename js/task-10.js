function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("#controls button[data-create]")
const btnDestroy = document.querySelector("#controls button[data-destroy]")
const boxes = document.querySelector("#boxes")
const amount = document.querySelector("#controls input")

const createBoxes = (event) =>{
  
  const newAmount = Number(amount.value)

  for(let i = 0; i < newAmount ;i++){
    const measurements = 30 + (i * 10)

    
    const newBoxes = document.createElement('div')
    newBoxes.style.backgroundColor = getRandomHexColor();
    newBoxes.style.width = `${measurements}px` ;
    newBoxes.style.height =  `${measurements}px`;
    boxes.appendChild(newBoxes)
   
  }
  
}
const destroyBoxes = () => {
boxes.innerHTML = "";
amount.value = ""
}
btnCreate.addEventListener("click",createBoxes)
btnDestroy.addEventListener("click", destroyBoxes)