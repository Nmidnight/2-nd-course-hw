// Задание 1

for (let hi = 0; hi < 2; hi++) {
    console.log('Привет');
}

// Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3

for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// Задание 4

let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

// Задание 5

let n = 1000;
let num = 0;    

while (n >= 50) {
    n /= 2;
    num++;
}
console.log(`${n}`);
console.log(`${num}`);

// Задание 6

for (let friday = 7; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}

// Задание 7 (необязательное)
let k = 100;
let iteration = 0;

while ( k >= 0) {
    k = k - 7;
    iteration++;
}
console.log(k);
console.log(iteration);

// Задание 8 (необязательное)

let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let monthNumber = 11;

if ( months[monthNumber - 1] ) {
    console.log(`Месяц: ${months[monthNumber - 1]}` + `номер месяца: ${monthNumber}`);
}

