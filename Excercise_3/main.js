"use strict";

let money, date;

function start() {
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
  date = prompt("Введите дату в формате YYYY-MM-DD");
}

// start();

const appData = {
  budget: money,
  timeDate: date,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpences() {
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
}

// chooseExpences();

function chooseOptExpenses() {
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
}

chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет " + appData.moneyPerDay);
}
// detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}
// detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?", ""),
      percent = +prompt("Под какой процент?", "");

    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}
// checkSavings();
