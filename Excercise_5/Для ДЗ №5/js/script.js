let navMenu = document.querySelectorAll(".menu-item"),
  navMenuElement = document.createElement("div"),
  navContainer = document.querySelector(".menu"),
  body = document.querySelector("body"),
  title = document.querySelector("#title"),
  advertising = document.querySelector(".adv"),
  columnContainer = document.querySelectorAll(".column"),
  opinionContainer = document.querySelector("#prompt");

navContainer.insertBefore(navMenu[2], navMenu[1]);
navMenuElement.classList.add("menu-item");
navMenuElement.textContent = "Пятый пункт";
navContainer.appendChild(navMenuElement);

body.style.background = "url(../img/apple_true.jpg)";

title.textContent = "Мы продаем только подлинную технику Apple";

columnContainer[1].removeChild(advertising);

setTimeout(() => {
  let opinionText = prompt("Ваше отношение к технике Apple?", "");
  if (
    opinionText != "" &&
    typeof opinionText == "string" &&
    opinionText.length < 50
  ) {
    opinionContainer.textContent = opinionText;
  }
}, 500);
