"use strict";

const body = document.querySelector("body");
const btnColorChange = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

btnColorChange.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  body.style.backgroundColor = bgColor;
  spanColor.textContent = bgColor;
}
