"use strict";

let startCalculationButton = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesInputValue = document.getElementsByClassName("expenses-value")[0],
  optionalexpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
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

startCalculationButton.addEventListener("click", () => {
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
  date = prompt("Введите дату в формате YYYY-MM-DD");
  appData.budget = money;
  appData.timeDate = date;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(date)).getFullYear();
  monthValue.value = new Date(Date.parse(date)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(date)).getDate();
  appData.activeProg = true;
});

approveBtn.addEventListener("click", () => {
  if (appData.activeProg == true) {
    let sum = 0;

    for (let i = 0; i < inputField.length; i++) {
      let expensesName = inputField[i].value,
        expensesValue = +inputField[++i].value;

      if (
        typeof expensesName === "string" &&
        typeof expensesName != null &&
        typeof expensesValue != null &&
        expensesName != "" &&
        expensesValue != "" &&
        !isNaN(expensesValue) &&
        expensesName.length < 50
      ) {
        appData.expenses[expensesName] = expensesValue;

        sum += +expensesValue;
      } else {
        i--;
      }
      appData.expensesSum = sum;
    }
    expensesInputValue.textContent = sum;
  }
});

optionalApproveBtn.addEventListener("click", () => {
  if (appData.activeProg == true) {
    optionalexpensesValue.textContent = "";
    for (let i = 0; i < optionalExpensesInput.length; i++) {
      let expensesName = optionalExpensesInput[i].value;
      if (
        typeof expensesName === "string" &&
        expensesName != "" &&
        expensesName.length < 50
      ) {
        appData.optionalExpenses[i] = expensesName;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
      }
    }
  }
});

calculateBtn.addEventListener("click", () => {
  if (appData.activeProg == true) {
    if (appData.budget != undefined) {
      appData.moneyPerDay = (
        (appData.budget - appData.expensesSum) /
        30
      ).toFixed();
      daybudgetValue.textContent = appData.moneyPerDay;
      if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Минимальный уровень достатка.";
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка.";
      } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень достатка.";
      } else {
        levelValue.textContent = "Произошла ошибка.";
      }
      if (appData.budget != undefined) {
      }
    } else {
      daybudgetValue.textContent = "Произошла ошибка";
    }
  }
});

incomeInput.addEventListener("input", () => {
  if (appData.activeProg == true) {
    let items = incomeInput.value;
    if (typeof items == "string" && items != "") {
      appData.income = items.split(", ");
      incomeValue.textContent = appData.income;
    }
  }
});

checkBoxSavings.addEventListener("click", () => {
  if (appData.activeProg == true) {
    if (appData.savings == true) {
      appData.savings = false;

      monthSavingsValue.textContent = "";
      yearSavingsValue.textContent = "";
      sumValue.value = " ";
      percentValue.value = " ";
    } else {
      appData.savings = true;
    }
  }
});

sumValue.addEventListener("input", () => {
  if (appData.activeProg == true) {
    if (appData.savings == true) {
      let sum = +sumValue.value,
        percent = +percentValue.value;

      appData.monthIncome = (sum / 100 / 12) * percent;
      appData.yearIncome = (sum / 100) * percent;

      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
  }
});

percentValue.addEventListener("input", () => {
  if (appData.activeProg == true) {
    if (appData.savings == true) {
      let sum = +sumValue.value,
        percent = +percentValue.value;

      appData.monthIncome = (sum / 100 / 12) * percent;
      appData.yearIncome = (sum / 100) * percent;

      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
  }
});

const appData = {
  budget: money,
  timeDate: date,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  activeProg: false,

  allData: function() {
    for (let key in appData) {
      console.log(
        "Наша программа включает в себя данные: " + key + ": " + appData[key]
      );
    }
  }
};
 