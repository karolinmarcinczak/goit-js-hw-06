"use strict"; 

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
 ];

 const ingredientsList = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  ingredientsList.append(item);
};
