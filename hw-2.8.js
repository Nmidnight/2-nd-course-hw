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
        
// Задание 1

const people = [
   { name: 'Глеб', age: 29, gender: 'male'},
   { name: 'Анна', age: 17, gender: 'female'},
   { name: 'Олег', age: 7, gender: 'male'},
   { name: 'Оксана', age: 47, gender: 'female'}
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2

function isPositive(n) {
    return n > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, ruleFunction) {
    const result = [];
    arr.map(item => ruleFunction(item) && result.push(item));
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people, isMale));

// Задание 3

let count = 0;
const intervalId = setInterval(() => {
    console.log(`Текущая дата: ${new Date().toLocaleDateString()}`);
    count += 3;
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);