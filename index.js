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

// let i = 1;
// for (let li of carousel.querySelectorAll("li")) {
//   li.style.position = "relative";
//   li.insertAdjacentHTML(
//     "beforeend",
//     `<span style="position:absolute;left:0;top:0">${i}</span>`
//   );
//   i++;
// }

/* конфигурация */
let width = 410; // ширина картинки
let count = 1; // cдвигаемое количество изображений

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let padLeft = 0;

if (education_gallery.clientWidth <= 820) {
  padLeft = (education_gallery.clientWidth - width) / 2;
  listElems[0].style.paddingLeft = padLeft + "px";
} else if (education_gallery.clientWidth <= 1359) {
  padLeft = (education_gallery.clientWidth - width * 2) / 3;
  listElems[0].style.paddingLeft = padLeft + "px";
  listElems[0].style.paddingRight = padLeft + "px";
} else {
  padLeft = (education_gallery.clientWidth - width * 3) / 4;
  listElems[0].style.paddingLeft = padLeft + "px";
  listElems[0].style.paddingRight = padLeft + "px";
  listElems[1].style.paddingRight = padLeft + "px";
}

let position = 0; // положение ленты прокрутки
let currentNumber = 1;

function prev() {
  // сдвиг влево
  if (Math.abs(position) === 0) {
    position = -(listElems.length * width - width * count);
    currentNumber = 9;
  } else {
    position += width * count;
    currentNumber = currentNumber - 1;
  }

  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";

  if (education_gallery.clientWidth <= 820) {
    if (currentNumber === 9) {
      listElems[0].style.paddingLeft = 0;
      listElems[8].style.paddingLeft = padLeft + "px";
    } else {
      listElems[currentNumber].style.paddingLeft = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
    }
  } else if (education_gallery.clientWidth <= 1359) {
    if (currentNumber === 9) {
      listElems[0].style.paddingLeft = 0;
      listElems[0].style.paddingRight = 0;
      listElems[8].style.paddingLeft = padLeft + "px";
      listElems[8].style.paddingRight = padLeft + "px";
    } else {
      listElems[currentNumber].style.paddingLeft = 0;
      listElems[currentNumber].style.paddingRight = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
      listElems[currentNumber - 1].style.paddingRight = padLeft + "px";
    }
  } else {
    if (currentNumber === 9) {
      listElems[0].style.paddingLeft = 0;
      listElems[0].style.paddingRight = 0;
      listElems[1].style.paddingRight = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
    } else {
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
      listElems[currentNumber - 1].style.paddingRight = padLeft + "px";
      listElems[currentNumber].style.paddingLeft = 0;

      if (currentNumber < 8) {
        listElems[currentNumber + 1].style.paddingRight = 0;
      }
    }
  }

  // list.style.transform = "translateX(" + position + "px)";
}

function next() {
  // сдвиг вправо
  position -= width * count;
  currentNumber = currentNumber + 1;

  if (Math.abs(position) === listElems.length * width) {
    position = 0;
    currentNumber = 1;
  }

  if (education_gallery.clientWidth <= 820) {
    if (currentNumber === 1) {
      listElems[8].style.paddingLeft = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
    } else {
      padLeft = (education_gallery.clientWidth - width) / 2;
      listElems[currentNumber - 2].style.paddingLeft = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
    }
  } else if (education_gallery.clientWidth <= 1359) {
    if (currentNumber === 1) {
      listElems[7].style.paddingLeft = 0;
      listElems[7].style.paddingRight = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
      listElems[currentNumber - 1].style.paddingRight = padLeft + "px";
    } else {
      listElems[currentNumber - 2].style.paddingLeft = 0;
      listElems[currentNumber - 2].style.paddingRight = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
      listElems[currentNumber - 1].style.paddingRight = padLeft + "px";
    }
  } else {
    if (currentNumber === 1) {
      listElems[8].style.paddingLeft = 0;
      listElems[8].style.paddingRight = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
      listElems[currentNumber - 1].style.paddingRight = padLeft + "px";
      listElems[currentNumber].style.paddingRight = padLeft + "px";
    } else {
      listElems[currentNumber - 2].style.paddingLeft = 0;
      listElems[currentNumber - 2].style.paddingRight = 0;
      listElems[currentNumber - 1].style.paddingLeft = padLeft + "px";
      listElems[currentNumber - 1].style.paddingRight = padLeft + "px";
      if (currentNumber < 9) {
        listElems[currentNumber].style.paddingRight = padLeft + "px";
      }
    }
  }

  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
  // list.style.transform = "translateX(" + position + "px)";
}

carousel.querySelector(".prev").onclick = function () {
  prev();
};
carousel.querySelector(".prevMobile").onclick = function () {
  prev();
  carousel.querySelector(".number_image").textContent = currentNumber + "/9";
};

carousel.querySelector(".next").onclick = function () {
  next();
};
carousel.querySelector(".nextMobile").onclick = function () {
  next();
  carousel.querySelector(".number_image").textContent = currentNumber + "/9";
};

console.log("finish load js");
