"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector("button.change-color");

const body = document.querySelector("body");

const spanHexColorValue = document.querySelector("span.color");

btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanHexColorValue.textContent = color;
});






