"use strict";

let startCalculationButton = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalexpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  inputField = document.getElementsByClassName("expenses-item"),
  approveBtn = document.getElementsByTagName("button")[0],
  optionalApproveBtn = document.getElementsByTagName("button")[1],
  calculateBtn = document.getElementsByTagName("button")[2],
  optionalExpensesInput = document.querySelectorAll(".optionalexpenses-item"),
  incomeInput = document.querySelector(".choose-income"),
  checkBoxSavings = document.querySelector("#savings"),
  sumValue = document.querySelector(".choose-sum"),
  percentValue = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

let money, date;

const appData = {
  budget: money,
  timeDate: date,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  getBudjet: function() {
    while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?");
    }
    date = prompt("Введите дату в формате YYYY-MM-DD");
  },
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
