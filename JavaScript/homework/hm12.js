"use strict";

// HW12 - "DOM дерево"

// Задача на селектори
// Для сторінки напишіть селектори для наступних елементів:
// для елементу з текстом 'Навігація по DOM дереву'
// для першого елементу <section>
// для елементу списку з текстом 'Пункт 5'
// для елементу з класом 'hatredLevelBlock'

// Приклад:

// let spanWithClass = document.querySelector('.hatredLevelCounter');

// для елементу з текстом 'Навігація по DOM дереву'
let navigation = document.getElementById('headerTwo');

// для першого елементу <section>
let firstSection = document.querySelector('section');

// для елементу списку з текстом 'Пункт 5'
let listItemFive = document.querySelector('.text:nth-of-type(4)');

// для елементу з класом 'hatredLevelBlock'
let hatredLevelBlock = document.querySelector('.hatredLevelBlock');
