"use strict";


// HW13 - "Основи роботи з DOM - атрибути, властивості, події"
// Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом
// Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
// В початковому стані — на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// Після натиснення — на кнопці має бути текст 'Turn on', фон сторінки має стати темний. Під кнопкою має з'явитись текстове повідомлення 'Last turn off: {DD-MM-YYYY HH:MM:SS}', де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення
// Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// Під кнопкою має з'явитись текстове повідомлення 'Last turn on: {DD-MM-YYYY HH:MM:SS}', де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення
// Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки (localStorage).

const button = document.getElementById('toggleButton');
const message = document.getElementById('message');

// Визначення останнього стану кнопки з локального сховища
const lastState = localStorage.getItem('buttonState');
    if (lastState === 'on') {
    toggleButton();
}

button.addEventListener('click', toggleButton);

function toggleButton() {
    if (button.textContent === 'Turn off') {
        document.body.style.backgroundColor = '#222'; // темний фон
        button.textContent = 'Turn on';
        message.textContent = `Last turn off: ${getFormattedDate()}`;
        message.style.display = 'block';
        localStorage.setItem('buttonState', 'off');
    } else {
        document.body.style.backgroundColor = '#f0f0f0'; // світлий фон
        button.textContent = 'Turn off';
        message.textContent = `Last turn on: ${getFormattedDate()}`;
        message.style.display = 'block';
        localStorage.setItem('buttonState', 'on');
    }
}

function getFormattedDate() {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleDateString('en-GB', options);
}