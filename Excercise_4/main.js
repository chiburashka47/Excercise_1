"use strict";

let money, date;

function start() {
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
  date = prompt("Введите дату в формате YYYY-MM-DD");
}

start();

const appData = {
  budget: money,
  timeDate: date,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpences: function() {
    for (let i = 0; i < 2; i++) {
      let expensesName = prompt(
          "Введите обязательную статью расходов в этом месяце",
          ""
        ),
        expensesValue = +prompt("Во сколько обойдется?", "");

      if (
        typeof expensesName === "string" &&
        typeof expensesName != null &&
        typeof expensesValue != null &&
        expensesName != "" &&
        expensesValue != "" &&
        !isNaN(expensesValue) &&
        expensesName.length < 50
      ) {
        console.log("done");
        appData.expenses[expensesName] = expensesValue;
      } else {
        i--;
      }
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 4; i++) {
      let expensesName = prompt("Статья необязательных расходов?", "");
      if (
        typeof expensesName === "string" &&
        expensesName != "" &&
        expensesName.length < 50
      ) {
        console.log("done");
        // debugger;
        appData.optionalExpenses[i] = expensesName;
      } else i--;
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет " + appData.moneyPerDay);
  },

  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?", "");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseIncom: function() {
    for (let i = 1; i < 2; i++) {
      let items = prompt(
        "Что несет дополнительный доход? (Перечислите через запятую)"
      );
      if (typeof items == "string" && items != "") {
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function(item, index) {
          let n = index + 1;
          console.log(n + " - Способ доп. заработка: " + item);
        });
      } else i--;
    }
  },
  allData: function() {
    for (let key in appData) {
      console.log(
        "Наша программа включает в себя данные: " + key + ": " + appData[key]
      );
    }
  }
};
