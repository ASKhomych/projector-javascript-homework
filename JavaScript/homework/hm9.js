// "use strict";

// HW9 - "Просунута робота з функціями (2)"
// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
// detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!

function detonatorTimer(delay) {
    let intervalId = setInterval(() => {
        console.log(`Залишилось ${(delay--)}`);

        if (delay === 0){
            clearInterval(intervalId);
            console.log('BOOM')
        };
    }, 1000);
}

detonatorTimer(3);

// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
// detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!


function detonatorTimer(delay) {
    if (delay === 0) {
        console.log('BOOM!');
    } else {
        console.log(`Залишилось ${delay}`);
        setTimeout(() => detonatorTimer(delay - 1), 1000);
    }
}

detonatorTimer(3);

// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 
// Наприклад:

let me = {
	name: 'Adrii',
	residency: 'Zhytomyr',
	gender: 'male',
	age: 30,
	hobby: 'football',
	defaultMood: 'focused',
	currentMood: 'sleepy',
    introduce() {
        console.log(`I hope that next year I'm gonna be ${this.age + 1},`);
    },
    prognose() {
        console.log(`Happy birthday! I'm now ${this.age + 1} years old.`);
    },
    describeMyMood(newMood) {
		this.currentMood = newMood;
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
};

me.introduce();
me.prognose();
me.describeMyMood('energetic');


// Можете описати скільки хочете властивостей і не менше 2 методів.
// Не соромтесь)

// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
// Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(() => securedSelfDescribeMyMood('easy'), 3000); // виведе коректний результат

