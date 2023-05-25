const mainUl = document.querySelector('#categories')
const liItems = document.querySelectorAll(".item")
console.log(`Number of categories: ${liItems.length}`)
const h2 = document.querySelectorAll('h2')


liItems.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`) ;
    console.log(`Elements ${el.querySelectorAll('li').length}`)
})
