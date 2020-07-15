"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");

  if (input !== null) {
    if (Number.isNaN(+input)) {
      console.log("Было введено не число, попробуйте еще раз");
      continue;
    }
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
