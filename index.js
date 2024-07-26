// import i18Obj from "./js/translate.js";

// function getTranslate(lang) {
//   const allFields = document.querySelectorAll("[data-i18]");

//   allFields.forEach((currentValue, currentIndex, listObj) => {
//     const currentNode = listObj.item(currentIndex);
//     if (i18Obj[lang][currentNode.dataset.i18]) {
//       if (currentNode.placeholder) {
//         currentNode.placeholder = i18Obj[lang][currentNode.dataset.i18];
//         currentNode.textContent = "";
//       } else {
//         currentNode.textContent = i18Obj[lang][currentNode.dataset.i18];
//       }
//     }
//   });
// }

const myStorage = window.localStorage;

let activeLanguage = localStorage.getItem("activeLanguage");
if (!activeLanguage) {
  localStorage.setItem("activeLanguage", "ru");
  activeLanguage = "ru";
}

// wrap = document.querySelector(`#lang-${activeLanguage}`);
// wrap.classList.add("language-active");
// getTranslate(activeLanguage);

const hamburger1 = document.querySelector("#hamburger-1");
const hamburger2 = document.querySelector("#hamburger-2");
const nav = document.querySelector("#nav-2");

function toggleMenu() {
  const adaptiveMenu = document.querySelector(".adaptive-menu");
  adaptiveMenu.classList.toggle("open");
}

function closeMenu(event) {
  if (event.target.classList.contains("nav-link")) {
    const adaptiveMenu = document.querySelector(".adaptive-menu");
    adaptiveMenu.classList.remove("open");
  }
}

hamburger1.addEventListener("click", toggleMenu);
hamburger2.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);

// const btnWinter = document.querySelector("#btn-winter");
// btnWinter.addEventListener("click", toggleSeason);

// function toggleLanguage(event) {
//   console.log("event=", event);
//   if (event.target.parentElement.classList.contains("language")) {
//     event.target.classList.add("language-active");

//     let wrap = document.querySelector(`#lang-${activeLanguage}`);
//     wrap.classList.remove("language-active");

//     localStorage.setItem("activeLanguage", event.target.id.substring(5));
//     activeLanguage = localStorage.getItem("activeLanguage");

//     getTranslate(activeLanguage);
//   }
// }

// const langEn = document.querySelector("#lang-en");
// langEn.addEventListener("click", toggleLanguage);
// const langRu = document.querySelector("#lang-ru");
// langRu.addEventListener("click", toggleLanguage);

console.log("finish load js");
