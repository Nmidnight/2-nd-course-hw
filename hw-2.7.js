// Игра "Переверни слово"

document.getElementById('reverse_text').addEventListener('click', function () {
    let userWord = prompt('Введите свое слово');
    if (userWord === null) {
        alert('Вы отменили игру.');
    } else if (userWord.length <= 2) {
        alert('Ваше слово слишком короткое, введите слово длиной более 2 символов.');
    } else {
        let reverse_textc = userWord.split('').reverse().join('').toLowerCase();
        alert('Ваше слово в обратном порядке: ' + reverse_textc);
    }
});

// Игра "Простая викторина"

document.getElementById('simple_quiz').addEventListener('click', function () {
    const quiz = [
        {
            question: "Какой цвет небо?", // Кажется "Какого цвета небо?" или "Какой цвет у неба?" будет лучше:)
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ]
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        let answer = prompt(`Вопрос викторины: ${quiz[i].question}\n${quiz[i].options.join('\n')}`);
        if (answer === null) {
            alert('Вы отменили игру.');
            break;
        } else if (parseInt(answer) === quiz[i].correctAnswer) {
            score++;
            alert('Правильно! Вы заработали 1 балл. Текущий счет: ' + score);
        } else {
            alert('Неправильно! Правильный ответ: ' + quiz[i].correctAnswer + '.');
        }
    }
    alert('Игра окончена! Ваш итоговый счет: ' + score);
});

// Задание 1

let task1 = 'js'

console.log(task1.toUpperCase());

// Задание 2

function task2(arr, str) {
    return arr.filter(word => word.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(task2(['Apple', 'banana', 'apricot', 'Cherry'], 'ap'));


// Задание 3

let task3 = 32.58884;

console.log(Math.floor(task3));
console.log(Math.ceil(task3));
console.log(Math.round(task3));


// Задание 4

const task4 = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...task4));
console.log(Math.max(...task4));

// Задание 5

function task5() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    return console.log(randomNum);;
}

// Задание 6

function task6(num) {
    const array = [];
    while (array.length < num / 2) {
        let randomNum = Math.floor(Math.random() * (num + 1));
        array.push(randomNum);
    }
    return array;
}
console.log(task6(10));

// Задание 7

function task7(num, num2) {
    return Math.floor(Math.random() * (num2 - num + 1)) + num;
}
console.log(task7(5, 15));

// Задание 8

console.log(new Date().toLocaleDateString('ru-RU', ));

// Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate.toLocaleDateString('ru-RU'));

// Задание 10

function task10(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const days = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekDay = days[date.getDay()];
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.
Время: ${hours}:${minutes}:${seconds}`;
}

console.log(task10(new Date()));