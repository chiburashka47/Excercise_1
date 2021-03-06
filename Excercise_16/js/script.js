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
  let statusMessage = document.createElement("div"),
    formBtn = document.querySelectorAll(".popup-form__btn");
  // form = document.querySelector(".main-form"),
  // contactForm = document.querySelector("#form");

  statusMessage.classList.add("status");

  function sendForm(elem) {
    let input = elem.getElementsByTagName("input");

    elem.addEventListener("submit", function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);

      let formDate = new FormData(elem);

      let obj = {};
      formDate.forEach(function (value, key) {
        obj[key] = value;
      });

      formDate = JSON.stringify(obj);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open("POST", "server.php");
          request.setRequestHeader(
            "Content-Type",
            "application/json; charset=utf-8"
          );

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          };
          request.send(data);
        });
      }
      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = "";
        }
      }

      postData(formDate)
        .then(() => {
          statusMessage.innerHTML = message.loading;
        })
        .then(() => {
          statusMessage.innerHTML = message.success;
        })
        .catch(() => {
          statusMessage.innerHTML = message.failure;
        })
        .then(clearInput);
    });
  }

  formBtn.forEach((value) => {
    value.addEventListener("click", () => {
      sendForm(value.parentElement);
    });
  });

  // slider

  let slideIndex = 1,
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => {
      item.style.display = "none";
    });

    dots.forEach((item) => {
      item.classList.remove("dot-active");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
  next.addEventListener("click", () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener("click", (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains("dot") &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });

  // Calc

  let persons = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener("change", function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener("change", function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener("change", function () {
    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
});
