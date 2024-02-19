"use strict";

// HW6 - "Основи роботи з функціями"
// 1. Задача про ітерацію
// Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
// Приклад:
//  function iterativeOddSumTo(number) {
//     let sum = 0;
//     for(let i = 1; i <= number; i += 2) {
//         sum += i;
//     }
//    return sum;
//  }

// console.log(iterativeOddSumTo(1)) // 1
// console.log(iterativeOddSumTo(9)) // 25
// console.log(iterativeOddSumTo(10)) // 25

// 2. Задача про рекурсію
// Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
// Приклад:
// function recursiveOddSumTo(number) {
//  if (number <= 0) {
//     return 0;
//  } else if (number % 2 === 0 ) {
//     return recursiveOddSumTo(number - 1)
//  } else {
//     return number + recursiveOddSumTo(number - 2)
//  }
// };

// console.log(recursiveOddSumTo(1)) // 1
// console.log(recursiveOddSumTo(9)) // 25
// console.log(recursiveOddSumTo(10)) // 25

