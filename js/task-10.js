function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("#controls button[data-create]")
const btnDestroy = document.querySelector("#controls button[data-destroy]")
const boxes = document.querySelector("#boxes")
const amount = document.querySelector("#controls input")
let width = 30
let height = 30
const createBoxes = (event) =>{
  
  const newAmount = Number(amount.value)

  for(let i = 0; i < newAmount ;i++){
    

    
    const newBoxes = document.createElement('div')
    newBoxes.style.backgroundColor = getRandomHexColor();
    newBoxes.style.width = `${width}px` ;
    newBoxes.style.height =  `${height}px`;
    boxes.appendChild(newBoxes)
    width +=  10
    height += 10
   
  }
  
}
const destroyBoxes = () => {
boxes.innerHTML = "";
amount.value = ""
width = 30
height = 30
}
btnCreate.addEventListener("click",createBoxes)
btnDestroy.addEventListener("click", destroyBoxes)