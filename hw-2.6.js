function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('simple_arithmetic').addEventListener('click', function () {

    function randomTask() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let num1, num2, question, answer;

        if (operation === '/') {
            num2 = getRandomInt(1, 20);
            answer = getRandomInt(1, 10);
            num1 = num2 * answer;
            question = `${num1} / ${num2}`;
        } else {
            num1 = getRandomInt(1, 20);
            num2 = getRandomInt(1, 20);
            question = `${num1} ${operation} ${num2}`;
            switch (operation) {
                case '+':
                    answer = num1 + num2;
                    break;
                case '-':
                    answer = num1 - num2;
                    break;
                case '*':
                    answer = num1 * num2;
                    break;
            }
        }
        return { question, answer };
    }

    const task = randomTask();

    let userAnswer = prompt(` Сколько будет :  ${task.question}`);
    if (userAnswer === null) {
        alert('Игра прервана');
        return;
    } else if (Number(userAnswer) !== task.answer) {
        alert(`Неправильно! Правильный ответ: ${task.answer}`);
    } else {
        alert('Правильно!');
    }
});

// Задание 1

const task1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < task1.length; i++) {
    console.log(task1[i]);
    if (task1[i] === 10) {
        break;
    }
}

// Задание 2

let index = task1.indexOf(4);
console.log(index);

// Задание 3

const task3 = [1, 3, 5, 10, 20];

console.log(task3.join(' '));

// Задание 4

const task4 = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    task4.push(row);
}

console.log(task4);

// Задание 5
const task5 = [1, 1, 1];
task5.push(2, 2, 2);
console.log(task5);

// Задание 6

const task6 = [9, 8, 7, 'a', 6, 5];
const filteredTask6 = task6.filter(item => typeof item === 'number');
filteredTask6.sort((a, b) => a - b);
console.log(filteredTask6);

// Задание 7
const task7 = [9, 8, 7, 6, 5];

let userNumber = prompt('Введите число от 1 до 10:');

while (userNumber > 1 && userNumber < 10) {
    if (task7.includes(Number(userNumber))) {
        alert('Вы угадали!');
        break;
    }
    else {
        alert('Вы не угадали, попробуйте еще раз!');
        userNumber = prompt('Введите число от 1 до 10:');
    }
};

// Задание 8
let str = 'abcdef';
let reversed = str.split('').reverse().join('');
str = reversed;
console.log(str);

// Задание 9
const task9 = [[1, 2, 3],[4, 5, 6]];
console.log(task9.flat());

// или как в подсказке
const Task9Spread = [...task9[0], ...task9[1]];
console.log(Task9Spread);

// Задание 10
const task10 = [1, 5, 7, 4, 9];

for (let i = 0; i < task10.length - 1; i++) {
    console.log(task10[i] + task10[i + 1]);
}

// Задание 11
const task11 = [1, 2, 3, 4, 5];
function getSquares(arr) {
   return arr.map(num => num * num);
}
console.log(getSquares(task11));

// Задание 12

function stringLength(arr) {
    return arr.map(str => str.length);
}

const task12 = ['apple', 'banana', 'kiwi'];
console.log(stringLength(task12)); 

// Задание 13

function negativeNums(arr) {
    return arr.filter(i => i < 0);
}
const task13 = [1, -2, 3, -4, 5];
console.log(negativeNums(task13));

// Задание 14

const task14 = []
for (let i = 0; i < 10; i++) {
    task14.push(Math.floor(Math.random() * 11)); 
}
console.log(task14);
const even = task14.filter(num => num % 2 === 0);
console.log(even);

// Задание 15

const task15 = []
for (let i = 0; i < 10; i++) {
    task15.push(Math.floor(Math.random() * 11)); 
}
const sum = task15.reduce((acc, num) => acc + num, 0);

console.log(sum / task15.length);
