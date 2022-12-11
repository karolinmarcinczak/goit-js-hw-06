"use strict"; 

let counterValue = 0;
const plusButton = document.querySelector("[data-action=increment]");
const minusButton = document.querySelector("[data-action=decrement]");

plusButton.addEventListener("click", () => {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
});

minusButton.addEventListener("click", () => {
    counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
});