const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

 
input.addEventListener("input", (event) => {
 output.textContent = event.currentTarget.value
 if(event.currentTarget.value === ""){
    output.textContent = "Anonymous"}
})

// input.addEventListener("input", (event) => {
//     if(event.currentTarget.value === ""){
//     output.textContent = "Anonymous"}
// })
