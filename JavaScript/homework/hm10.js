"use strict";

// HW10 - “Об'єкт Date. Set та Map”
// 1. Задача про обчислення різниці часу
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days', 'hours', 'minutes', 'seconds')
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

function durationBetweenDates(startDateStr = '1970-01-01', endDateStr = '1970-01-01', unit = 'seconds') {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    let diff = Math.abs(endDate - startDate);

    switch (unit) {
        case 'days':
            return Math.floor(diff / (1000 * 60 * 60 * 24));
        case 'hours':
            return Math.floor(diff / (1000 * 60 * 60));
        case 'minutes':
            return Math.floor(diff / (1000 * 60));
        case 'seconds':
            return Math.floor(diff / 1000);
        default:
            return 'Invalid unit';
    }
}

console.log(durationBetweenDates('2020-06-01', '2024-10-01', 'seconds')); 
console.log(durationBetweenDates('2022-01-31', '2021-02-03', 'days'));


// 2. Масив унікальних значень
// Напишіть функцію яка відфільтрує масив унікальних значень
// Рішення має працювати незалежно від конкретних значень в масиві імен

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    return [...new Set(array)];
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

