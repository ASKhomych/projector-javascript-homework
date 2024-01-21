"use strict";

// HW2 - "Перетворення примітивних типів, примітивні типи даних в деталях"
// 1. Перетворення типів
// Створіть змінну довільного типу. Проведіть наступні перетворення з нею:
// a. перетворіть її на рядок
// b. перетворіть її на число
// c. перетворіть її на булеве значення
// Результат виконання кожного перетворення вивести через console.log
// Під час виконання завдання необхідно використовувати “use strict”
// 2. Конвертер валют
// Написати програму, яка конвертує гривні (UAH) в долари (USD). Спочатку задайте змінну rate, яка буде відображати поточний курс долара до гривні. Потім отримайте від користувача суму гривень (можна використати prompt який розбирали на занятті), яку він хоче конвертувати, і виведіть відповідний результат у доларах в консоль.
// 3. Обчислення вартості бензину
// Користувач вводить кількість літрів бензину, яку він хоче купити, та ціну за літр. Програма обчислює вартість та виводить суму, округлену до сотих.

// 1. Перетворення типів
//a
let apples = 34;
let cartUser = String(apples);
console.log(cartUser)
console.log(typeof cartUser)

//b 
let users = Number(cartUser)
console.log(users)
console.log(typeof users)

//c
let hasAccess = Boolean(users)
console.log(hasAccess)
console.log(typeof hasAccess)

// 2. Конвертер валют

let rate = 38.40;
let enterSum = prompt("Ведіть потрібну суму в грн для конвертації  ");
let resultConversion = enterSum / rate;
console.log(`Ви отримуєте: ${+resultConversion.toFixed(2)} $`)

// let rate = 38.40;
// let enterSum = prompt("Ведіть потрібну суму в грн для конвертації  ");
// console.log(`Ви отримуєте: ${Math.round((enterSum / rate) * 100) / 100} $`)

// 3. Обчислення вартості бензину

let enterAmountGasoline = prompt("Ведіть потрібну кількість літрів  ");
let enterPriceGasoline = prompt("Ведіть ціну за літр ");
let totalSum = enterAmountGasoline * enterPriceGasoline;
console.log(`До сплати потрібно внести: ${+totalSum.toFixed(2)} грн.`)
