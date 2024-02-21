"use strict";

// HW7 - "Просунута робота з масивами"
// 1. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
// Для рішення задачі необхідно використовувати тільки методи масивів!
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce(
    (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(productOfArray); // 24

// 2. Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
// Для рішення задачі необхідно використовувати методи масивів та Object.entries/Object.fromEnties методи
// Приклад:
// // приклад об'єкту

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
}

function optimizer(data) {
    let updatedPriceData = {};
    for (const [key, value] of Object.entries(data)) {
        updatedPriceData[key.toLowerCase()] = parseFloat(value).toFixed(2);
    }
    return updatedPriceData;
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// 3. Задача на фільтрування масиву
// Реалізуйте фільтрування імен які починаються з голосної двома способами:
// через умовну конструкцію всередині методу перебора
// через вбудований метод масивів для фільтрації
// Рішення має працювати незалежно від конкретних значень в масиві імен

// Пепший варіант
const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];
for (const userName of userNames) {
    const firstLetter = userName[0].toLowerCase();
    if (['а', 'е', 'и', 'і', 'о', 'у', 'я', 'ю', 'є', 'ї'].includes(firstLetter)) {
        filteredNames.push(userName);
    }
}

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// Другий ваірант

const userNamesTwo = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNamesTwo = userNamesTwo.filter(userName => {
    const firstLetter = userName[0].toLowerCase();
    return ['а', 'е', 'и', 'і', 'о', 'у', 'я', 'ю', 'є', 'ї'].includes(firstLetter);
});

console.log(filteredNamesTwo); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']


// 4. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
// Рішення має працювати незалежно від конкретних значень в масиві імен
// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map(userName => {
    const nameComponents = userName.split(' ');
    const firstLetter = nameComponents.map(component => component.charAt(0));
    return firstLetter.join('');
});

initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

