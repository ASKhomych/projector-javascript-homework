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


function detonatorTimer(delay, count) {
    console.log(`Залишилось ${count}`);
    if (count === 1) {
        setTimeout(() => console.log('BOOM'), delay);
    } else {
        setTimeout(() => detonatorTimer(delay, count - 1), delay);
    }
}

detonatorTimer(1000, 3);

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
		console.log(`My name is ${this.name} and I live in ${this.residency}`);
	},
	prognose(newAge) {
		console.log(`I hope that next year I'm gonna be ${this.age + 1}, but I wanna be ${newAge}`);
	},
	describeMyMood(tomorrowMood) {
		console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}, but tomorrow I will be ${tomorrowMood}`);
	}
};

me.introduce.bind(me);
me.prognose.call(me, 18);
me.describeMyMood.apply(me, ['energetic']);

// Можете описати скільки хочете властивостей і не менше 2 методів.
// Не соромтесь)

// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
// Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

let securedSelfIntroduce = () => setTimeout(() => me.introduce(), 1000);
let securedSelfPrognose = () => setTimeout(() => me.prognose(18), 2000);
let securedSelfDescribeMyMood = () => setTimeout(() => me.describeMyMood('energetic'), 3000);

securedSelfIntroduce();
securedSelfPrognose();
securedSelfDescribeMyMood();
