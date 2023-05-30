const validationInput = document.querySelector("#validation-input")
const validationNumber = validationInput.getAttribute("data-length")

validationInput.addEventListener("blur", (event) => {
    if(event.currentTarget.value == 0 ){
        validationInput.classList.remove("invalid")
        validationInput.classList.remove("valid")}
    else if(event.currentTarget.value.length < validationNumber || event.currentTarget.value.length > validationNumber){
 validationInput.classList.remove("valid")
    validationInput.classList.add("invalid")
} else if(event.currentTarget.value.length == validationNumber ) {  
validationInput.classList.remove("invalid")
    validationInput.classList.add("valid")
} 

})