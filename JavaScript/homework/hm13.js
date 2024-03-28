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

// Перевірка та відновлення стану з localStorage при завантаженні сторінки
function restoreState() {
    const mode = localStorage.getItem('buttonState');
    const lastActionDate = localStorage.getItem('lastActionDate');
    if (mode === 'on') {
        document.body.style.backgroundColor = '#f0f0f0'; // Світлий фон
        button.textContent = 'Turn off';
        message.textContent = `Last turned on: ${lastActionDate}`;
    } else if (mode === 'off') {
        document.body.style.backgroundColor = '#222'; // Темний фон
        button.textContent = 'Turn on';
        message.textContent = `Last turned off: ${lastActionDate}`;
    }
    if (lastActionDate) {
        message.style.display = 'block';
    }
}

button.addEventListener('click', function() {
    const currentState = button.textContent.includes('Turn off') ? 'off' : 'on';
    const date = getFormattedDate();
    if (currentState === 'off') {
        document.body.style.backgroundColor = '#222';
        button.textContent = 'Turn on';
        message.textContent = `Last turned off: ${date}`;
        localStorage.setItem('buttonState', 'off');
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        button.textContent = 'Turn off';
        message.textContent = `Last turned on: ${date}`;
        localStorage.setItem('buttonState', 'on');
    }
    localStorage.setItem('lastActionDate', date);
    message.style.display = 'block';
});

function getFormattedDate() {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleDateString('en-GB', options);
}

// Відновлюємо попередній стан при завантаженні/оновленні сторінки
restoreState();
