// let options = {
//   width: 1366,
//   height: 768,
//   background: "red",
//   font: {
//     size: "16px",
//     color: "#fff",
//   },
// };
// let json = JSON.stringify(options);

// console.log(JSON.parse(json));

let inputRub = document.querySelector(".rub"),
  inputUsd = document.querySelector(".usd");

inputRub.addEventListener("input", () => {
  let request = new XMLHttpRequest();
  // request.open(method, url, async, login, password);
  request.open("GET", "./current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  //status
  //statusText
  //responseText / response - ответ сервера
  //readyState(0-4) - статус

  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);

      inputUsd.value = (inputRub.value / data.usd).toFixed(2);
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  });
});
