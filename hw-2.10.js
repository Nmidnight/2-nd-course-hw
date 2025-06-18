// Генератор случайных цветов

document.querySelector('#random_color_generator button').addEventListener('click', function() {
    const backgroundColor = document.querySelector('.main');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    backgroundColor.style.backgroundColor = randomColor;
});