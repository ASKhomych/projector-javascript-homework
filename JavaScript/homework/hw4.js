"use strict";

// 1. Задача на розворот числа:

// Для вирішення цієї задачі вам буде потрібно згадати про перетворення у рядочкі та числа, а також використати декілька методів масивів, які ми розбирали на вебінарі:

// const currentMaxValue = 4589;

// let reverseMaxValue = Number(String(currentMaxValue).split('').reverse().join(''));

// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'


// 2. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

// const resultsArray = [1, 2, [3, [4]]];
// let flattenArray = resultsArray.flat(Infinity)
// let productOfArray = 1;
// for (let product of flattenArray){
//     productOfArray *= product;
// }

// console.log(productOfArray); // 24 
// console.log(typeof productOfArray);