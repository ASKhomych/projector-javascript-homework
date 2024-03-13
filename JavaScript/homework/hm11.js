 "use strict";

// HW11 - “Воркшоп Parsing function”
// 1. Напишіть функцію яка буде використовуватись для сортування масиву фільмів
// Функція буде приймати два аргумента:
// властивість за якою треба посортувати
// опцію напрямку сортування (зростання чи спадання)

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

function byProperty(property, direction) {
    if (direction === '>') {
        return function(a, b) {
            let comparison = 0;
            if (a[property] > b[property]) {
                comparison = 1;
            } else if (a[property] < b[property]) {
                comparison = -1;
            }
            return comparison;
        };
    } else if (direction === '<') {
        return function(a, b) {
            let comparison = 0;
            if (a[property] < b[property]) {
                comparison = 1;
            } else if (a[property] > b[property]) {
                comparison = -1;
            }
            return comparison;
        };
    };
};

 console.log(movies.sort(byProperty('releaseYear', '<'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
 console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку


// 2. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.

function someFunction(arg1, arg2) {
    return arg1 + arg2;
}

function slower(func, seconds) {
    return function (...args) {
        console.log(`Chill out, you will get your result in 5 seconds.`);
        setTimeout(() => {
            const result = func(...args);
            console.log('Result:', result);
        }, seconds * 1000);
    };
}

let slowedSomeFunction = slower(someFunction, 5);
slowedSomeFunction(5, 11);

// // виведе в консоль "Chill out, you will get you result in 5 seconds
// //...через 5 секунд виведе результат роботи 'someFunction'
