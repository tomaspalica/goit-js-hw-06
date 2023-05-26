const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const findIngridients = document.querySelector('#ingredients');



console.log(ingredients.forEach(el => {
  const ingridientsElement = document.createElement('li')
 ingridientsElement.textContent = `${el}`
return findIngridients.append(ingridientsElement)
}))