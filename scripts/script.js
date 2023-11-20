//  PLUS button
const plusButton = document.querySelector(".add-button");
const deDialog = document.querySelector("dialog");


function openDialog() {
    deDialog.showModal();
}

plusButton.addEventListener("click", openDialog);



// MENU button
const menuButton = document.querySelector("header button");
const hetMenu = document.querySelector(".hoofdmenu");

function openMenu() {
    hetMenu.classList.toggle("open");
}

menuButton.addEventListener("click", openMenu);

// Niet zelf geschreven/

const menuButton2 = document.querySelector("header button");
const hetMenu2 = document.querySelector(".hoofdmenu");
const button2 = document.querySelector(".button2");

function toggleMenu() {
    hetMenu.classList.toggle("open");
}


