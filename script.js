// Иигра "случайное число"

document.querySelector('.guess_num').addEventListener('click', function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomNum = getRandomInt(1, 100);
    let guessed = false;
    while (!guessed) {
        let input = prompt('Введите число от 1 до 100');
        if (input === null) {
            alert('Игра прервана.');
            break;
        }
        let userNum = Number(input);
        if (isNaN(userNum)) {
            alert('Вы ввели не число!');
            continue;
        }
        if (userNum < randomNum) {
            alert('Ваше число меньше загаданного');
        } else if (userNum > randomNum) {
            alert('Ваше число больше загаданного');
        } else {
            alert('Поздравляю, вы угадали число!');
            guessed = true;
        }
    }
})

// Игра "Простая арифметика"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('#simple_arithmetic .main__game-button').addEventListener('click', function () {

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

document.querySelector('#simple_quiz .main__game-button').addEventListener('click', function () {
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

// Камень ножницы бумага
document.querySelector('#rock_paper_scissors .main__game-button').addEventListener('click', function () {
    const choices = ['камень', 'ножницы', 'бумага'];
    let userChoice = prompt('Выберите: камень, ножницы или бумага?');
    if (userChoice === null) {
        alert('Игра отменена.');
        return;
    }
    userChoice = userChoice.toLowerCase();
    if (!choices.includes(userChoice)) {
        alert('Неверный выбор. Пожалуйста, выберите камень, ножницы или бумагу.');
        return;
    }
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];    
    if (userChoice === computerChoice) {
        alert(`        Ваш выбор:  ${userChoice} 
        Компьютер выбрал: ${computerChoice}.
        Ничья!`);
    } else if (
        (userChoice === 'камень' && computerChoice === 'ножницы') ||
        (userChoice === 'ножницы' && computerChoice === 'бумага') ||
        (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
        alert(`       Ваш выбор: ${userChoice}
        Компьютер выбрал: ${computerChoice}.
        Вы выиграли!`);
    } else {
        alert(`       Ваш выбор: ${userChoice}
        Компьютер выбрал: ${computerChoice}.
        Вы проиграли!`);
    }
});
      
// Генератор случайных цветов

document.querySelector('#random_color_generator button').addEventListener('click', function() {
    const backgroundColor = document.querySelector('.main');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    backgroundColor.style.backgroundColor = randomColor;
});


