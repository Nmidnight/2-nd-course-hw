const title = document.querySelector('.title');

// Задание 1

document.querySelector('.btn').addEventListener('click', function () {
    title.classList.toggle('hidden');
});

// Задание 2

document.querySelector('.btn_for_p').addEventListener('click', function () {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'magenta'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector('.text').style.color = randomColor
});

// Задание 3

document.querySelector('.change-title').addEventListener('click', function () {
    title.textContent = 'Новый заголовок';
});

// Задание 4

document.querySelectorAll('.description').forEach(function (item) {
    item.textContent = 'Измененный текст';
});

// Задание 5

document.querySelectorAll('p.description').forEach(function (item) {
    item.textContent = 'Измененный текст в параграфе';
});
// Задание почти такое же, как и предыдущее, немного путает так что я изменила текст немного

// Задание 6

const newParagraph = document.createElement('p');
newParagraph.textContent = 'конец документа';

document.querySelector('.add-p').addEventListener('click', function () {
    document.body.appendChild(newParagraph);
});

// Задание 7

document.querySelector('.delete-p').addEventListener('click', function () {
    const firstDescription = document.querySelector('p.description');
    if (firstDescription) {
        firstDescription.remove();
    }
});