"use strict";

const box = document.getElementById("boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create");
const destroyBtn = domument.querySelector("[data-destroy]")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount = 0;

input.addEventListener("input", (event) => {
  amount = Number(event.currentTarget.value);
});

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    box.append(newBox);
    let newSize = 20 + i * 10;
     newBox.style.width = `${newSize}px`;
    newBox.style.height = `${newSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.classList.add("marker");
  }
}

function destroyBoxes() {
  for (let i = 1; i <= amount; i++) {
    const newBox = document.querySelector(".marker");
    newBox.remove();
  }
  input.value = 0;
}