"use strict";

window.addEventListener("DOMContentLoaded", function () {
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }
  info.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadline = "2020-04-03";

  function getTimeRemaining(endtime) {
    let t = Date.parse(deadline) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);
    function updateClock() {
      let t = getTimeRemaining(endTime);

      function addZero(number) {
        if (number < 10) {
          number = "0" + number;
        } else {
          number = number;
        }
        return number;
      }

      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }
  setClock("timer", deadline);

  // modal

  let moreBtn = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    descriptionBtn = document.querySelector(".description-btn"),
    closeBtn = document.querySelector(".popup-close");

  function modalShow() {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  }

  moreBtn.addEventListener("click", function () {
    modalShow.bind(this)();
  });
  descriptionBtn.addEventListener("click", function () {
    modalShow.bind(this)();
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    moreBtn.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

  // form callback

  let message = {
    loading: "Загрузка...",
    success: "Спасибо! Мы скоро с Вами свяжемся!",
    failure: "Что-то пошло не так...",
  };
  let form = document.querySelector(".main-form"),
    input = form.getElementsByTagName("input"),
    statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    let formDate = new FormData(form);

    let obj = {};
    formDate.forEach(function (value, key) {
      obj[key] = value;
    });

    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("readystatechange", function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status === 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  });

  //form contact

  let contactForm = document.querySelector("#form"),
    contactFormInput = contactForm.getElementsByTagName("input");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactForm.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    let formDate = new FormData(contactForm);

    let obj = {};
    formDate.forEach(function (value, key) {
      obj[key] = value;
    });

    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("readystatechange", function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status === 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < contactFormInput.length; i++) {
      contactFormInput[i].value = "";
    }
  });
});
