// JavaScript Document
console.log("hi");

let menuButton = document.querySelector("header button");
let hetMenu = document.querySelector("header nav");
let sluitButton = document.querySelector("header nav button");

menuButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);

function openMenu() {
  hetMenu.classList.add("toonMenu");
}

function sluitMenu() {
  hetMenu.classList.remove("toonMenu");
}
