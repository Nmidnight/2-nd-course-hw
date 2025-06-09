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

// Задание 1

const lessNum = (a, b) => a <= b ? a : b;

// Задание 2

const isEven = (num) => num % 2 == 0 ? 'Число четное' : 'Число нечетное';

// Задание 3

const square = (num) => console.log(num * num);

const returnSquare = (num) => {
    return num * num;
}

// Задание 4


function askage() {
    let age = prompt('Сколько вам лет?');
    if (age <= 0) {
        alert(`Вы ввели неправильное значение`);
    } else if (age > 0 && age < 13) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}

// Задание 5

const returnNum = (a, b) => {
    let numA = Number(a);
    let numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return numA * numB;
    }
}

// Задание 6

function askNum() {
    let num = Number(prompt('Введите число'));
    if (isNaN(num)) {
        alert('Переданный параметр не является числом');
        return;
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
}

// Задание 7

const circle1 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter

}

const circle2 = {
    radius: 10,
    area: getArea,
    perimeter: getPerimeter
}

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}