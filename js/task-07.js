"use strict";

const slidebar = document.querySelector("input");
slidebar.value = 16;

const changingFont = document.getElementById("text");

slidebar.addEventListener("input", (ev) => {
  changingFont.style.fontSize = `${ev.currentTarget.value}px`;
});