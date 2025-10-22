// JavaScript Document
console.log("hi");

let menuButton = document.querySelector("header section");
let hetMenu = document.querySelector("header nav");
let sluitButton = document.querySelector("header nav button");

menuButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);

function openMenu() {
  hetMenu.classList.add("menuZien");
}

function sluitMenu() {
  hetMenu.classList.remove("menuZien");
}
