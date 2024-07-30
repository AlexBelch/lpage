import i18Obj from "./js/translate.js";

function getTranslate(lang) {
  const allFields = document.querySelectorAll("[data-i18]");

  allFields.forEach((currentValue, currentIndex, listObj) => {
    const currentNode = listObj.item(currentIndex);
    if (i18Obj[lang][currentNode.dataset.i18]) {
      if (currentNode.placeholder) {
        currentNode.placeholder = i18Obj[lang][currentNode.dataset.i18];
        currentNode.textContent = "";
      } else {
        currentNode.textContent = i18Obj[lang][currentNode.dataset.i18];
      }
    }
  });
}

// const myStorage = window.localStorage;

let activeLanguage = localStorage.getItem("activeLanguage");
if (!activeLanguage) {
  localStorage.setItem("activeLanguage", "ru");
  activeLanguage = "ru";
}

let wrap = document.querySelector(`#lang-${activeLanguage}`);
wrap.classList.add("language-active");
let wrap2 = document.getElementById("language-select");
wrap2.value = activeLanguage;
getTranslate(activeLanguage);

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

function toggleLanguage(event) {
  if (
    event.target.parentElement.classList.contains(
      "adaptive-menu__lang_wrap__btn_wrap"
    )
  ) {
    event.target.classList.add("language-active");

    let wrap = document.querySelector(`#lang-${activeLanguage}`);
    wrap.classList.remove("language-active");

    let wrap2 = document.getElementById("language-select");
    wrap2.value = event.target.id.substring(5);

    localStorage.setItem("activeLanguage", event.target.id.substring(5));
    activeLanguage = localStorage.getItem("activeLanguage");

    getTranslate(activeLanguage);
  }

  if (event.target.id === "language-select") {
    let wrap = document.querySelector(`#lang-${activeLanguage}`);
    wrap.classList.remove("language-active");

    let wrap2 = document.querySelector(`#lang-${event.target.value}`);
    wrap2.classList.add("language-active");

    localStorage.setItem("activeLanguage", event.target.value);
    activeLanguage = localStorage.getItem("activeLanguage");

    getTranslate(activeLanguage);
  }
}

const langEn = document.querySelector("#lang-en");
langEn.addEventListener("click", toggleLanguage);
const langRu = document.querySelector("#lang-ru");
langRu.addEventListener("click", toggleLanguage);
const langUa = document.querySelector("#lang-ua");
langUa.addEventListener("click", toggleLanguage);
const selectLang = document.getElementById("language-select");
selectLang.addEventListener("click", toggleLanguage);

console.log("finish load js");
