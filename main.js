"use strict";

let money = +prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

console.log(money, "money");
console.log(date, "date");

const appData = {
  budget: money,
  timeDate: date,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
for (let i = 0; i < 2; i++) {
  let expensesName = prompt(
    "Введите обязательную статью расходов в этом месяце"
  );
  let expensesValue = +prompt("Во сколько обойдется?");
  appData.expenses[expensesName] = expensesValue;
  appData.budget = appData.budget - appData.expenses[expensesName];
}

alert(appData.budget / 30);
