// "use strict";

// HW9 - "Просунута робота з функціями (2)"
// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
// detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!

// detonatorTimer(delay) {
// 	// тут ваш код	
// }
// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
// detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!

// detonatorTimer(delay) {
// 	// тут ваш код	
// }
// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 
// Наприклад:
// let me = {
// 	name: 'Mykola',
// 	residency: 'Lviv',
// 	gender: 'male',
// 	age: 31,
// 	hobby: 'crafting',
// 	defaultMood: 'focused',
// 	currentMood: 'sleepy',
// 	introduce() {
// 		console.log(`My name is ${this.name} and I live in ${this.residency}`);
// 	},
// 	prognose() {
// 		console.log(`I hope that next year I'm gonna be ${this.age+1}`);
// 	},
// 	describeMyMood(){
// 		console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
// 	}
// }

// me.introduce();
// me.prognose();
// me.describeMyMood();
// Можете описати скільки хочете властивостей і не менше 2 методів.
// Не соромтесь)
// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
// Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
// let securedSelfIntroduce = // якийсь код
// let securedSelfPrognose = // якийсь код
// let securedSelfDescribeMyMood = *// якийсь код

// setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
// setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
// setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат
