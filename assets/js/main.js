"use strict";

// Evento -> Uma ação que ocorre mediante um acontecimento ou condição
// DOM - Document Object Model

const menuHotDog = document.querySelector("#menu-hotdog");
const body = document.querySelector("body");

menuHotDog.addEventListener("click", () => {

    body.classList.toggle("open");

});