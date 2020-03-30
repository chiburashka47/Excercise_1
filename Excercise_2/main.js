"use strict";

let money = +prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

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

//Цикл while
// let i = 0;
// while (i < 2) {
//   let expensesName = prompt(
//       "Введите обязательную статью расходов в этом месяце",
//       ""
//     ),
//     expensesValue = +prompt("Во сколько обойдется?", "");

//   if (
//     typeof expensesName === "string" &&
//     typeof expensesName != null &&
//     typeof expensesValue != null &&
//     expensesName != "" &&
//     expensesValue != "" &&
//     !isNaN(expensesValue) &&
//     expensesName.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[expensesName] = expensesValue;
//   } else {
//     i--;
//   }
//   i++;
// }

//Цикл do
// let i = 0;
// do {
//   let expensesName = prompt(
//       "Введите обязательную статью расходов в этом месяце",
//       ""
//     ),
//     expensesValue = +prompt("Во сколько обойдется?", "");

//   if (
//     typeof expensesName === "string" &&
//     typeof expensesName != null &&
//     typeof expensesValue != null &&
//     expensesName != "" &&
//     expensesValue != "" &&
//     !isNaN(expensesValue) &&
//     expensesName.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[expensesName] = expensesValue;
//   } else {
//     i--;
//   }
//   i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
