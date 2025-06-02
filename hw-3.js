// Задание 1
let password = "lalala";
let password2 = prompt('Введите пароль:');

password === password2 ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

// Задание 2

let c = 161;

c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');
// проверку в консоли провела

// Задание 3

let d = 23;
let e = 12;

d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');

// Задание 4

a = '2';
b = '3';

alert(+a + +b);

// Задание 5

let monthNumber = 12;

if (monthNumber < 1 || monthNumber > 12) {
  console.log("Неверный номер месяца");
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log("Зима");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Весна");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Лето");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Осень");
      break;
  }
}