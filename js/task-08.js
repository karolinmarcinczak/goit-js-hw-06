"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", makeSubmit);
const loginData = {};

function makeSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, pasword },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all of the fields!");
    };

    loginData.email = email.value;
    loginData.password = password.value;
    console.log(loginData);
    event.currentTarget.reset();

}
